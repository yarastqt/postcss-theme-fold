# postcss-theme-fold [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url] [![github (ci)][github-ci]][github-ci]

Postcss plugin for folding css-variables with using [whitepaper](whitepaper) design system in legacy browsers.

## Install

```sh
npm i -D postcss postcss-theme-fold
```

## Usage

```js
const { resolve } = require('path')
const postcss = require('postcss')
const themeFold = require('postcss-theme-fold')

postcss([
  themeFold({
    mode: 'multi-themes',
    themes: [
      [
        resolve('src/components/Theme/_size/Theme_color_default.css'),
        resolve('src/components/Theme/_size/Theme_size_default.css'),
      ],
      [
        resolve('src/components/Theme/_size/Theme_color_brand.css'),
        resolve('src/components/Theme/_size/Theme_size_default.css'),
      ],
    ],
    globalSelectors: ['.utilityfocus'],
  }),
])
  .process(css, { from: cssPath })
  .then(result => result.css)
```

### Options

* **themes (string[][])**: List of themes with path to css files.
* **globalSelectors (string[])**: Global helper-selectors.
* **mode ('single-theme' | 'multi-themes')**: Method of theme folding, by default choice mode in relation from themes size. `single-theme` — don't accumulate cascade with theme selectors. `multi-themes` — accumulate cascade with theme selectors.
* **shouldProcessVariable (declaration: Declaration) => boolean**: Predicate for processing each nodes.
* **disableWarnings**: Disable warnings about missing values
* **debug**: Show original variables as comment
* **preserve:** Preserve original declaration

### Example content

#### input:

```css
/* Theme/_color/Theme_color_default.css */
.Theme_color_default {
  --color: #fff;
}

/* Theme/_size/Theme_size_default.css */
.Theme_size_default {
  --size: 10px;
}

/* Button/Button.css */
.Button {
  color: var(--color);
  font-size: var(--size);
  box-sizing: border-box;
}
```

#### output:

Split rules from other chunks of theme to extra selectors for order to reduce the specificity.

```css
.Button {
  box-sizing: border-box;
}

.Theme_color_default .Button {
  color: #fff;
}

.Theme_size_default .Button {
  font-size: 10px;
}
```

## Know issues

[npm-img]: https://img.shields.io/npm/v/postcss-theme-fold.svg
[npm-url]: https://www.npmjs.com/package/postcss-theme-fold
[github-ci]: https://github.com/yarastqt/postcss-theme-fold/workflows/ci/badge.svg?branch=master

[whitepaper]: http://whitepaper.tools
[PostCSS]: https://github.com/postcss/postcss
