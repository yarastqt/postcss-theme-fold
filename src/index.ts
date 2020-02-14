import { ChildNode, plugin } from 'postcss'

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
        let themeScopeSelector = ''
        const nextRule = rule.clone()

        // Cast to `ChildNode` cuz before we already check nodes for undefined.
        for (const node of (nextRule.nodes as ChildNode[])) {
          if (node.type === 'decl') {
            let executed = null

            while ((executed = VARIABLE_USE_RE.exec(node.value)) !== null) {
              // Hack for capture overlapping values.
              VARIABLE_USE_RE.lastIndex--;

              const { value, themeSelector } = getVariableMeta(theme, executed[1])
              // When variable not found then skip this rule for processing.
              if (value !== '') {
                node.value = node.value.replace(VARIABLE_FULL_RE, value)
                // Prevent duplicate theme selectors.
                if (!themeScopeSelector.includes(themeSelector)) {
                  themeScopeSelector += themeSelector
                }
              }
            }
          }
        }

        // When `themeScopeSelector` is empty this means selector not have css variables from theme,
        // and we not cache this in `processedSelectorsSet` cuz him may be declared in other place.
        if (themeScopeSelector === '') {
          rules.push(nextRule)
          return
        }

        // Add theme scopes for each selector.
        nextRule.selectors = nextRule.selectors
          .map((selector) => {
            // Only work for single root selector, e.g. `.utilityfocus .Button {...}`.
            const maybeGlobalSelector = (options.globalSelectors || []).find((globalSelector) => {
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
