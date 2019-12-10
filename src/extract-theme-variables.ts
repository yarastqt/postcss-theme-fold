import postcss from 'postcss'

import { THEME_SELECTOR_RE, VARIABLE_DECL_RE } from './shared'

type StringMap = Map<string, string>

/**
 * Extract variables from theme selectors and return map with selectors and values.
 */
export async function extractThemeVariables(css: string): Promise<Map<string, StringMap>> {
  const variablesMap = new Map<string, StringMap>()
  const postcssExtractThemeVariable = postcss.plugin(
    'postcss-extract-theme-variable',
    () => (root) => {
      root.walkRules(({ selector, nodes }) => {
        if (!THEME_SELECTOR_RE.test(selector) || !nodes) {
          return
        }
        for (const node of nodes) {
          if (node.type === 'decl') {
            if (!VARIABLE_DECL_RE.test(node.prop)) {
              throw new TypeError('Theme should contains only variable declarations.')
            }
            const prevValuesMap: StringMap = variablesMap.get(selector) || new Map()
            prevValuesMap.set(node.prop, node.value)
            variablesMap.set(selector, prevValuesMap)
          }
        }
      })
    },
  )

  return postcss([postcssExtractThemeVariable()])
    .process(css, { from: '' })
    .then(() => variablesMap)
}
