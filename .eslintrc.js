module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    "plugin:vue/essential",
    "@vue/standard",
    "@vue/typescript/recommended"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/no-use-before-define': ["error", {
        "variables": false,
        "classes": false
      }]
  },
  parserOptions: {
    parser: 'babel-eslint',
    "ecmaVersion": 2020
  }
}
