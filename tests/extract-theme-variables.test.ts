import { readFile } from 'fs'
import { promisify } from 'util'

import { extractThemeVariables } from '../src/extract-theme-variables'
import { resolveFixture } from './__internal/fixture-resolver'

const readFileAsync = promisify(readFile)

describe('extract-theme-variables', () => {
  test('should return themes map with expanded variables', async (done) => {
    const content = await readFileAsync(resolveFixture('components/Theme/Theme_color_a.css'), 'utf-8')
    const variablesMap = await extractThemeVariables(content)
    const expected = new Map([
      ['.Theme_color_a', new Map([
        ['--color-0', '#fff'],
        ['--color-1', '#fff'],
        ['--color-2', '#000'],
      ])],
    ])
    expect(variablesMap).toEqual(expected)
    done()
  })

  test('should throw error when theme contains not a variables', async () => {
    const content = await readFileAsync(resolveFixture('components/Theme/Theme_color_broken.css'), 'utf-8')
    try {
      await extractThemeVariables(content)
    } catch (error) {
      expect(error.message).toBe('Theme should contains only variable declarations.');
    }
  })
})
