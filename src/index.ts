import postcss from 'postcss'

type ThemeFoldOptions = {
  themes: any
}

module.exports = postcss.plugin<ThemeFoldOptions>('postcss-theme-fold', (options) => {
  return async (root) => {}
})
