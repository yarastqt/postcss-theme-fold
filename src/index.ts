import postcss from 'postcss'

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
  themes: any
}

const defaultOptions = {
  themes: undefined,
}

const plugin = postcss.plugin<ThemeFoldOptions>('postcss-theme-fold', (options = defaultOptions) => {
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

        if (nextRule.nodes === undefined) {
          continue
        }

        for (const node of nextRule.nodes) {
          if (node.type === 'decl') {
            const variableMatched = node.value.match(VARIABLE_USE_RE)
            if (variableMatched === null) {
              continue
            }
            const { value, themeSelector } = getVariableMeta(theme, variableMatched[1])
            node.value = node.value.replace(VARIABLE_FULL_RE, value)
            themeScopeSelector += themeSelector
          }
        }

        // Add theme scopes for each selector.
        nextRule.selectors = nextRule.selectors
          .map((selector) => `${themeScopeSelector} ${selector}`)

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
// Add fallback for usage in cjs modules.
module.exports = plugin
