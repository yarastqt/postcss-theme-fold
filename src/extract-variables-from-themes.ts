import { readFile } from 'fs'
import { promisify } from 'util'

import { processCssContent } from './process-css-content'
import { StringStringMap, extractThemeVariables } from './extract-theme-variables'

const readFileAsync = promisify(readFile)

/**
 * Extract variables from array with themes.
 */
export async function extractVariablesFromThemes(
  themes: string[][],
): Promise<Set<StringStringMap>> {
  const themesSet = new Set<StringStringMap>()

  for (const files of themes) {
    let css = ''
    for (const filePath of files) {
      const content = await readFileAsync(filePath, 'utf-8')
      css += await processCssContent({ css: content, from: filePath })
    }
    const variablesMap = await extractThemeVariables(css)
    themesSet.add(variablesMap)
  }

  return themesSet
}
