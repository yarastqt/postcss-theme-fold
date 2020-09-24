import { ChildNode, Declaration, plugin } from 'postcss'

import { getFromCache } from './cache'
import { THEME_SELECTOR_RE, VARIABLE_USE_RE, VARIABLE_FULL_RE } from './shared'
import { StringStringMap } from './extract-theme-variables'
import { extractVariablesFromThemes } from './extract-variables-from-themes'
import { uniq } from './uniq'
import { addValueToMap, checkNodesProcessed, hasUnprocessedNodes } from './processed-map'

function getVariableMeta(
  themeMap: StringStringMap,
  variableName: string,
): { themeSelector: string, value: string } {
  const variableMeta = { themeSelector: '', value: '' }

  for (const [themeSelector, variablesMap] of themeMap) {
    if (variablesMap.has(variableName)) {
      variableMeta.themeSelector = themeSelector
      variableMeta.value = variablesMap.get(variableName) as string
    }
  }

  return variableMeta
}

type RuleProps = { [key in string]: { selectors: string[], nodes: ChildNode[] } }
type AnyDict = { [key in string]: any }
type EnhancedChildNode = ChildNode & { processed: boolean, broken: boolean }

type ThemeFoldOptions = {
  /**
   * List of themes with path to css files.
   */
  themes: string[][]

  /**
   * Global helper-selectors.
   */
  globalSelectors?: string[]

  /**
   * Method of theme folding, by default choice mode in relation from themes size.
   *
   * single-theme — don't accumulate cascade with theme selectors.
   * multi-themes — accumulate cascade with theme selectors.
   */
  mode?: 'single-theme' | 'multi-themes'

  /**
   * Predicate for processing each nodes.
   */
  shouldProcessVariable?: (declaration: Declaration) => boolean

  /**
   * Disable warnings
   */
  disableWarnings?: boolean;
}

export default plugin<ThemeFoldOptions>('postcss-theme-fold', (options = { themes: [], globalSelectors: [] }) => {
  if (options.themes.length === 0) {
    throw new Error('Theme options not provided.')
  }

  if (options.mode === undefined) {
    if (options.themes.length === 1) {
      options.mode = 'single-theme'
    } else {
      options.mode = 'multi-themes'
    }
  }

  if (options.mode === 'single-theme') {
    if (options.themes.length > 2) {
      throw new Error('For single mode themes should contains one theme.')
    }
  }

  return async (root) => {
    const themesSet = await getFromCache(() => extractVariablesFromThemes(options.themes))
    const uniqVariables = new Set([...themesSet].reduce<string[]>((res, themeMap) => {
      for (const [, variablesMap] of themeMap) {
        res = res.concat([...variablesMap.keys()])
      }

      return res;
    }, []));

    const processedSelectorsSet = new Set()
    const processedPropsMap = new Map()

    root.walkRules((rule) => {
      // Remove theme selectors cuz css variables not needed in runtime.
      if (THEME_SELECTOR_RE.test(rule.selector)) {
        rule.remove()
        return
      }

      if (rule.nodes === undefined) {
        return
      }

      const rules = []

      for (const theme of themesSet) {
        const nextRule = rule.clone()
        const processedProps: RuleProps = {}
        const themeSelectors: AnyDict = {}
        const brokenNodes = []

        // Cast to `EnhancedChildNode` cuz before we already check nodes for undefined.
        for (const node of (nextRule.nodes as EnhancedChildNode[])) {
          if (node.type === 'decl') {
            if (
              options.shouldProcessVariable !== undefined &&
              options.shouldProcessVariable(node) === false
            ) {
              continue;
            }

            let executed = null
            const variables = []

            while ((executed = VARIABLE_USE_RE.exec(node.value)) !== null) {
              // Avoid infinite loops with zero-width matches.
              if (executed.index === VARIABLE_USE_RE.lastIndex) {
                VARIABLE_USE_RE.lastIndex++
              }
              variables.push(executed[1])
            }

            for (const variable of variables) {
              // Variable absence in uniqVariables means that
              // it's not present in any theme.
              node.processed = uniqVariables.has(variable)

              if (!node.processed) {
                continue
              }
              const { value, themeSelector } = getVariableMeta(theme, variable)
              // When variable not found then skip this rule for processing.
              if (node.value && value !== '') {
                // Mark node as processed and remove them later.
                node.value = node.value.replace(VARIABLE_FULL_RE, value)
                const nextProp = processedProps[node.prop] || { selectors: [], nodes: [] }
                // Accumulate theme selectors only for multi themes.
                if (options.mode === 'multi-themes') {
                  nextProp.selectors.push(themeSelector)
                }
                nextProp.nodes.push(node)
                processedProps[node.prop] = nextProp
                if (node.parent.type === 'rule') {
                  const rootSelector = options.mode === 'multi-themes' ? themeSelector : node.parent.selector.trim();
                  addValueToMap(processedPropsMap, rootSelector, { selector: node.parent.selector.trim(), value: node.value, prop: node.prop });
                }
              } else {
                  // If variable is absent in current theme,
                  // it can pe present in another, however,  but we have to warn about  it.
                  node.broken = true;
                  brokenNodes.push(node);
                  if (!options.disableWarnings) {
                    console.error(`❗️❗️❗️ Missing value for ${variable} for ${[...theme.keys()].join(', ')}. Deleting css rule...`)
                  }
              }
            }
          }
        }

        // When `processedProps` is empty this means rule not have css variables from theme,
        // and we not cache this in `processedSelectorsSet` cuz him may be declared in other place.
        // `processedProps` absence can possibly mean that variable value is missing only in
        // one particular theme, not it every theme.
        if (Object.keys(processedProps).length === 0) {
          // Also that can mean that we met some rule without variables -
          // rules like this do not have broken or processed nodes, so we can
          // break to prevert double adding.
          if (!brokenNodes.length) {
            rules.push(nextRule);
            break;
          } else {
            // ...and continue for rules, which have some chance to be
            // processed in another themes (with broken nodes).
            continue;
          }
        }

        // Prevent duplicate already processed selectors.
        if (!processedSelectorsSet.has(nextRule.selector)) {
          processedSelectorsSet.add(nextRule.selector)
          // Remove already processed and broken (without value) nodes from base rule.
          nextRule.nodes = (nextRule.nodes as EnhancedChildNode[]).filter((node) => !node.processed && !node.broken)
          if (nextRule.nodes.length > 0) {
            // Push nextRule before forkedRule,
            // cuz them maybe contains not processed selectors.
            rules.push(nextRule)
          }
        }

        // Create shape with unique theme selectors and nodes.
        for (const key in processedProps) {
          const selector = uniq(processedProps[key].selectors).join('')
          const nodes = uniq(processedProps[key].nodes)
          if (themeSelectors[selector] === undefined) {
            themeSelectors[selector] = []
          }
          themeSelectors[selector].push(...nodes)
        }

        for (const themeSelector in themeSelectors) {
          const forkedRule = rule.clone()
          // Add extra theme selectors for forked rule.
          forkedRule.selectors = forkedRule.selectors
            .map((selector) => {
              // Only work for single root selector, e.g. `.utilityfocus .Button {...}`.
              const maybeGlobalSelector = (options.globalSelectors || []).find((globalSelector) => {
                const [firstSelector] = selector.split(' ')
                if (firstSelector === globalSelector) {
                  return globalSelector
                }
              })
              if (maybeGlobalSelector === undefined) {
                return `${themeSelector} ${selector}`
              }
              const nextSelector = selector.replace(maybeGlobalSelector, '')
              return `${maybeGlobalSelector} ${themeSelector} ${nextSelector}`
            })
          forkedRule.nodes = themeSelectors[themeSelector]
          // Prevent duplicate already processed selectors.
          const rootSelector = options.mode === 'multi-themes' ? themeSelector : forkedRule.selector.trim();
          if (!processedSelectorsSet.has(forkedRule.selector) || hasUnprocessedNodes(processedPropsMap, rootSelector)) {
            checkNodesProcessed(processedPropsMap, forkedRule.nodes || [], themeSelector);
            processedSelectorsSet.add(forkedRule.selector)
            rules.push(forkedRule)
          }
        }
      }

      rule.replaceWith(...rules)
    })
  }
})
