import postcssThemeFold from '../src/index'
import { configureRunner } from './__internal/runner'
import { resolveFixture } from './__internal/fixture-resolver'

const run = configureRunner([
  postcssThemeFold({
    themes: [
      [
        resolveFixture('components/Theme/Theme_color_a.css'),
        resolveFixture('components/Theme/Theme_size_a.css'),
        resolveFixture('components/Theme/Theme_cosmetic_a.css'),
      ],
      [
        resolveFixture('components/Theme/Theme_color_b.css'),
        resolveFixture('components/Theme/Theme_size_a.css'),
        resolveFixture('components/Theme/Theme_cosmetic_a.css'),
      ],
    ],
    globalSelectors: ['.utilityfocus'],
  })
])

describe('postcss-theme-fold', () => {
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
    run(
      '.Button { font-size: var(--size-1); border-radius: var(--cosmetic-1) }',
      '.Theme_size_a.Theme_cosmetic_a .Button { font-size: 10px; border-radius: 2px }',
    )
  })

  test('should replace variables from complex value', async () => {
    await run(
      '.Button { margin: 0 0 var(--size-1); }',
      '.Theme_size_a .Button { margin: 0 0 10px; }',
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
      '.utilityfocus .Button { color: var(--size-1); }',
      '.utilityfocus .Theme_size_a .Button { color: 10px; }',
    )
  })
})
