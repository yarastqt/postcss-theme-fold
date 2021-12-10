import postcss, { plugin, Root } from 'postcss'

import { THEME_SELECTOR_RE, VARIABLE_DECL_RE, VARIABLE_FULL_RE } from './shared'

export type StringMap = Map<string, string>
export type StringStringMap = Map<string, StringMap>

/**
 * Extract variables from theme selectors and return map with selectors and values.
 */
export async function extractThemeVariables(css: string): Promise<StringStringMap> {
  const variablesMap = new Map<string, StringMap>()
  const postcssExtractThemeVariable = plugin(
    'postcss-extract-theme-variable',
    () => (root: Root) => {
      root.walkRules(({ selector, nodes }) => {
        if (!THEME_SELECTOR_RE.test(selector) || !nodes) {
          return
        }
        for (const node of nodes) {
          if (node.type === 'decl') {
            if (!VARIABLE_DECL_RE.test(node.prop)) {
              throw new TypeError('Theme should contains only variable declarations.')
            }
            const prevValuesMap = variablesMap.get(selector) || new Map<string, string>()
            prevValuesMap.set(node.prop, node.value)
            variablesMap.set(selector, prevValuesMap)
          }
        }
      })
    },
  )

  const processLocalVariables = () => {
    for (const [, variables] of variablesMap) {
      for (const [variablleName, variableValue] of variables) {
        const matched = variableValue.match(VARIABLE_FULL_RE)
        if (matched !== null) {
          const processedVariable = variables.get(matched[1])
          if (processedVariable !== undefined) {
            variables.set(variablleName, processedVariable)
          }
        }
      }
    }
  }

  return postcss([postcssExtractThemeVariable()])
    .process(css, { from: '' })
    .then(processLocalVariables)
    .then(() => variablesMap)
}
