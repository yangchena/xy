module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  plugins: ['vue'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
  rules: {},
}
