# postcss-theme-fold

## Install

```sh
npm i -D postcss-theme-fold
```

## Usage

```js
const { resolve } = require('path')
const postcss = require('postcss')
const themeFold = require('postcss-theme-fold')

postcss([
  themeFold({
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
  }),
])
  .process(css, { from: cssPath })
  .then(result => result.css)
```

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
}
```

#### output:

```css
.Theme_color_default.Theme_size_default .Button {
  color: #fff;
  font-size: 10px;
}
```

## Know issues
