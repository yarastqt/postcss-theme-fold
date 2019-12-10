import postcss from 'postcss'
import postcssImport from 'postcss-import'
import postcssSimpleVars from 'postcss-simple-vars'
import postcssColorFunction from 'postcss-color-function'

type ProcessCssContentOptions = {
  /**
   * Raw css.
   */
  css: string

  /**
   * Css file path.
   */
  from: string
}

/**
 * Process css — resolve imports, extract sass-like variables and calculate colors.
 */
export function processCssContent({ css, from }: ProcessCssContentOptions): Promise<string> {
  const processedCss = postcss([
    postcssImport({}),
    postcssSimpleVars({ silent: true, variables: {} }),
    postcssColorFunction({}),
  ])
    .process(css, { from })
    .then((result) => result.css)

  return processedCss
}
