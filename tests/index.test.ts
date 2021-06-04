import postcssThemeFold from '../src/index'

jest.mock('../src/cache', () => ({
  getFromCache: (a: Function) => (a())
}))

import { configureRunner } from './__internal/runner'
import { resolveFixture } from './__internal/fixture-resolver'

const rootTheme = [
  resolveFixture('components/Theme/Theme_root_color_a.css'),
  resolveFixture('components/Theme/Theme_root_size_a.css'),
  resolveFixture('components/Theme/Theme_root_cosmetic_a.css'),
]

const themeA = [
  resolveFixture('components/Theme/Theme_color_a.css'),
  resolveFixture('components/Theme/Theme_size_a.css'),
  resolveFixture('components/Theme/Theme_cosmetic_a.css'),
]

const themeB = [
  resolveFixture('components/Theme/Theme_color_b.css'),
  resolveFixture('components/Theme/Theme_size_a.css'),
  resolveFixture('components/Theme/Theme_cosmetic_a.css'),
]

describe('postcss-theme-fold', () => {
  let errorLog:() => void;

  beforeAll(() => {
    errorLog =  console.error;
    console.error = jest.fn().mockImplementation(() => {});
  })

  afterAll(() => {
    console.error = errorLog;
  })

  test('should throw error when themes are empty', async () => {
    try {
      configureRunner([
        postcssThemeFold({
          themes: [],
        })
      ])('', '')
    } catch(error) {
      expect(error).toHaveProperty('message', 'Theme options not provided.')
    }
  })

  test('should throw error with multiple themes for single mode', async () => {
    try {
      configureRunner([
        postcssThemeFold({
          themes: [themeA, themeB],
          mode: 'single-theme',
        })
      ])('', '')
    } catch(error) {
      expect(error).toHaveProperty('message', 'For single mode themes should contains one theme.')
    }
  })

  describe('multi-themes', () => {
    const run = configureRunner([
      postcssThemeFold({
        themes: [themeA, themeB],
        globalSelectors: ['.utilityfocus'],
      })
    ])

    test('should expand variables for two colors', async () => {
      await run(
        '.Button { color: var(--color-1); }',
        `
          .Theme_color_a .Button { color: #fff; }
          .Theme_color_b .Button { color: #000; }
        `,
      )
    })

    test('should mix theme selectors for a few variables', async () => {
      await run(
        '.Button { font-size: var(--size-1); border-radius: var(--cosmetic-1) }',
        `
          .Theme_size_a .Button { font-size: 10px }
          .Theme_cosmetic_a .Button { border-radius: 2px }
        `,
      )
    })

    test('should replace variables from complex value', async () => {
      await run(
        '.Button { margin: 0 0 var(--size-1); }',
        '.Theme_size_a .Button { margin: 0 0 10px; }',
      )
    })

    test('should replace multiply variables', async () => {
      await run(
        '.Button { border: var(--size-1) solid var(--color-1); }',
        `
          .Theme_size_a.Theme_color_a .Button { border: 10px solid #fff; }
          .Theme_size_a.Theme_color_b .Button { border: 10px solid #000; }
        `,
      )
    })

    test('should replace variable from calc function', async () => {
      await run(
        '.Button { width: calc(var(--size-1) / 2); }',
        '.Theme_size_a .Button { width: calc(10px / 2); }',
      )
    })

    test('should expand variables without duplicates for size', async () => {
      await run(
        '.Button { color: var(--size-1); }',
        '.Theme_size_a .Button { color: 10px; }',
      )
    })

    test('should remove theme selectors from output', async () => {
      await run(
        '.Theme_color_a { --color-1: #fff; }',
        '',
      )
    })

    test('should skip variable if then not found in theme', async () => {
      await run(
        '.Button { color: var(--color-100500); }',
        '.Button { color: var(--color-100500); }',
      )
    })

    test('should skip variable if then not found in theme', async () => {
      await run(
        '.Button { color: var(--size-1); }',
        '.Theme_size_a .Button { color: 10px; }',
      )
    })

    test('should skip selector without variables', async () => {
      await run(
        '.Button { color: #fff; }',
        '.Button { color: #fff; }',
      )
    })

    test('should skip selector without variables and duplicate declaration', async () => {
      await run(
        '.Button { color: #fff; } .Button { font-size: 10px }',
        '.Button { color: #fff; } .Button { font-size: 10px }',
      )
    })

    test('should prevent duplicate theme selectors', async () => {
      await run(
        '.Button { height: var(--size-1); width: var(--size-2); }',
        '.Theme_size_a .Button { height: 10px; width: 20px; }',
      )
    })

    test('should move expanded rules to extra selector', async () => {
      await run(
        '.Button { color: var(--color-1); box-sizing: border-box; }',
        `
          .Button { box-sizing: border-box; }
          .Theme_color_a .Button { color: #fff; }
          .Theme_color_b .Button { color: #000; }
        `,
      )
    })

    test('should not generate css-rules if all variables are missing in theme', async () => {
      await run(
        `.Textinput-Box {
          border-color: var(--color-3);
          background-color: var(--color-4);
        }`,
        `
          .Theme_color_b .Textinput-Box {
            border-color: #fff;
            background-color: #ccc;
          }
        `,
      )
    })

    test('should delete expanded rule even if it is not present in some themes', async () => {
      await run(
        '.Button { color: var(--color-1); background: var(--color-3); }',
        `
          .Theme_color_a .Button { color: #fff; }
          .Theme_color_b .Button { color: #000; background: #fff; }
        `,
      )
    })

    test('should leave uknown (for any theme) variables as is', async () => {
      await run(
        '.Button { color: var(--color-1); color: var(--color-8); box-sizing: border-box; }',
        `
          .Button { color: var(--color-8); box-sizing: border-box; }
          .Theme_color_a .Button { color: #fff; }
          .Theme_color_b .Button { color: #000; }
        `,
      )
    })

    test('should process global selector', async () => {
      await run(
        '.utilityfocus .Button { color: var(--size-1); }',
        '.utilityfocus .Theme_size_a .Button { color: 10px; }',
      )
      await run(
        '.utilityfocus-fake .Button { color: var(--size-1); }',
        '.Theme_size_a .utilityfocus-fake .Button { color: 10px; }',
      )
    })

    test('should expand override selectors', async () => {
      await run(
        `.Button { color: var(--color-1);}
          @media and screen (mix-width: 500px) {
            .Button { color: var(--color-2);}
          }
        `,
        `
          .Theme_color_a .Button { color: #fff;}
          .Theme_color_b .Button { color: #000;}
          @media and screen (mix-width: 500px) {
            .Theme_color_a .Button { color: #000;}
            .Theme_color_b .Button { color: rgb(38, 38, 38);}
          }
        `
    )
    })
  })

  describe('single-theme', () => {
    const run = configureRunner([
      postcssThemeFold({
        themes: [themeA],
        globalSelectors: ['.utilityfocus'],
      })
    ])

    test('should expand variables without theme selector', async () => {
      await run(
        '.Button { color: var(--color-1); }',
        '.Button { color: #fff; }',
      )
    })

    test('should expand override selectors', async () => {
      await run(
        '.Button { color: var(--color-0);} @media and screen (mix-width: 500px) { .Button { padding: var(--cosmetic-1);}}',
        '.Button { color: #fff;} @media and screen (mix-width: 500px) { .Button { padding: 2px;}}'
    )
    })
  })

  describe('single-theme with :root selector', () => {
    const run = configureRunner([
      postcssThemeFold({
        themes: [rootTheme],
        globalSelectors: ['.utilityfocus'],
      })
    ])

    test('should expand variables without theme selector', async () => {
      await run(
        '.Button { color: var(--color-1); }',
        '.Button { color: #fff; }',
      )
    })

    test('should expand override selectors', async () => {
      await run(
        '.Button { color: var(--color-0);} @media and screen (mix-width: 500px) { .Button { padding: var(--cosmetic-1);}}',
        '.Button { color: #fff;} @media and screen (mix-width: 500px) { .Button { padding: 2px;}}'
    )
    })
  })

  describe('shouldProcessVariable', () => {
    test('should skip process for all variables', async () => {
      const run = configureRunner([
        postcssThemeFold({
          themes: [themeA],
          shouldProcessVariable: (node) => {
            if (
              node.source &&
              node.source.input.file &&
              node.source.input.file.endsWith('source.css')
            ) {
              return false
            }
            return true
          }
        })
      ])

      await run(
        '.Button { color: var(--color-1); width: var(--size-1); }',
        '.Button { color: var(--color-1); width: var(--size-1); }',
      )
    })

    test('should skip process for color variable', async () => {
      const run = configureRunner([
        postcssThemeFold({
          themes: [themeA],
          shouldProcessVariable: (node) => {
            if (
              node.source &&
              node.source.input.file &&
              node.source.input.file.endsWith('source.css') &&
              node.value === 'var(--color-1)'
            ) {
              return false
            }
            return true
          }
        })
      ])

      await run(
        '.Button { color: var(--color-1); width: var(--size-1); }',
        '.Button { color: var(--color-1); } .Button { width: 10px; }',
      )
    })
  })

  describe('debug', () => {
    const run = configureRunner([
      postcssThemeFold({
        themes: [themeA],
        debug: true,
      })
    ])

    test('should print original variables for comment', async () => {
      await run(
        '.Button { border: var(--size-1) solid var(--color-1); }',
        '.Button {/* --size-1, --color-1 */ border: 10px solid #fff; }',
      )
    })
  })
})
