import { extractVariablesFromThemes } from '../src/extract-variables-from-themes'
import { resolveFixture } from './__internal/fixture-resolver'

describe('extract-variables-from-themes', () => {
  test('should return set of map with themes variables', async (done) => {
    const themes = await extractVariablesFromThemes([
      [resolveFixture('components/Theme/presets/b.css')],
    ])
    const expected = new Set([
      new Map([
        [
          '.Theme_color_b',
          new Map([
            ['--color-1', '#000'],
            ['--color-2', 'rgb(38, 38, 38)'],
            ['--color-3', '#fff'],
            ['--color-4', '#ccc'],
            ['--color-5', '#eee'],
          ]),
        ],
        [
          '.Theme_cosmetic_a',
          new Map([
            ['--cosmetic-1', '2px'],
            ['--cosmetic-2', '4px'],
          ]),
        ],
      ]),
    ])
    expect(themes).toEqual(expected)
    done()
  })
})
