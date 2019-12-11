import postcss, { ChildNode } from 'postcss'

import { getFromCache } from './cache'
import { THEME_SELECTOR_RE, VARIABLE_USE_RE, VARIABLE_FULL_RE } from './shared'
import { StringStringMap } from './extract-theme-variables'
import { extractVariablesFromThemes } from './extract-variables-from-themes'

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

type ThemeFoldOptions = {
  /**
   * List of themes with path to css files.
   */
  themes: string[][]

  /**
   * Global helper-selectors.
   */
  globalSelectors: string[]
}

const defaultOptions = {
  themes: [],
  globalSelectors: [],
}

const plugin = postcss.plugin<ThemeFoldOptions>('postcss-theme-fold', (options = defaultOptions) => {
  if (options.themes.length === 0) {
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
        let themeScopeSelector = ''
        const nextRule = rule.clone()

        // Cast to `ChildNode` cuz before we already check nodes for undefined.
        for (const node of (nextRule.nodes as ChildNode[])) {
          if (node.type === 'decl') {
            const variableMatched = node.value.match(VARIABLE_USE_RE)
            if (variableMatched === null) {
              continue
            }
            const { value, themeSelector } = getVariableMeta(theme, variableMatched[1])
            // When variable not found then skip this rule for processing.
            if (value !== '') {
              node.value = node.value.replace(VARIABLE_FULL_RE, value)
              themeScopeSelector += themeSelector
            }
          }
        }

        // Add theme scopes for each selector.
        nextRule.selectors = nextRule.selectors
          .map((selector) => {
            // Only work for single root selector, e.g. `.utilityfocus .Button {...}`.
            const maybeGlobalSelector = options.globalSelectors.find((globalSelector) => {
              if (selector.startsWith(globalSelector)) {
                return globalSelector
              }
            })
            if (maybeGlobalSelector === undefined) {
              return `${themeScopeSelector} ${selector}`
            }
            const nextSelector = selector.replace(maybeGlobalSelector, '')
            return `${maybeGlobalSelector} ${themeScopeSelector} ${nextSelector}`
          })

        // Prevent duplicate already processed selectors.
        if (!processedSelectorsSet.has(nextRule.selector)) {
          processedSelectorsSet.add(nextRule.selector)
          rules.push(nextRule)
        }
      }

      rule.replaceWith(...rules)
    })
  }
})

export default plugin
