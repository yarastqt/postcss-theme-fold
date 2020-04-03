import { ChildNode, plugin } from 'postcss'

import { getFromCache } from './cache'
import { THEME_SELECTOR_RE, VARIABLE_USE_RE, VARIABLE_FULL_RE } from './shared'
import { StringStringMap } from './extract-theme-variables'
import { extractVariablesFromThemes } from './extract-variables-from-themes'
import { uniq } from './uniq'

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
type EnhancedChildNode = ChildNode & { processed: boolean }

type ThemeFoldOptions = {
  /**
   * List of themes with path to css files.
   */
  themes: string[][]

  /**
   * Global helper-selectors.
   */
  globalSelectors?: string[]
}

export default plugin<ThemeFoldOptions>('postcss-theme-fold', (options = {} as any) => {
  if (options.themes === undefined) {
    throw new Error('Theme options not provided.')
  }

  return async (root) => {
    const themesSet = await getFromCache(() => extractVariablesFromThemes(options.themes))
    const processedSelectorsSet = new Set()

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

        // Cast to `EnhancedChildNode` cuz before we already check nodes for undefined.
        for (const node of (nextRule.nodes as EnhancedChildNode[])) {
          if (node.type === 'decl') {
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
              const { value, themeSelector } = getVariableMeta(theme, variable)
              // When variable not found then skip this rule for processing.
              if (value !== '') {
                // Mark node as processed and remove them later.
                node.processed = true
                node.value = node.value.replace(VARIABLE_FULL_RE, value)
                const nextProp = processedProps[node.prop] || { selectors: [], nodes: [] }
                nextProp.selectors.push(themeSelector)
                nextProp.nodes.push(node)
                processedProps[node.prop] = nextProp
              }
            }
          }
        }

        // When `processedProps` is empty this means rule not have css variables from theme,
        // and we not cache this in `processedSelectorsSet` cuz him may be declared in other place.
        if (Object.keys(processedProps).length === 0) {
          rules.push(nextRule)
          return
        }

        // Prevent duplicate already processed selectors.
        if (!processedSelectorsSet.has(nextRule.selector)) {
          processedSelectorsSet.add(nextRule.selector)
          // Remove already processed nodes from base rule.
          nextRule.nodes = (nextRule.nodes as EnhancedChildNode[]).filter((node) => !node.processed)
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
                if (selector.startsWith(globalSelector)) {
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
          if (!processedSelectorsSet.has(forkedRule.selector)) {
            processedSelectorsSet.add(forkedRule.selector)
            rules.push(forkedRule)
          }
        }
      }

      rule.replaceWith(...rules)
    })
  }
})
