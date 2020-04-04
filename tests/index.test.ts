import postcssThemeFold from '../src/index'
import { configureRunner } from './__internal/runner'
import { resolveFixture } from './__internal/fixture-resolver'

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
  })
})
