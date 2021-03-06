// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended', 'standard'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // check if imports actually resolve
  settings: {
    "import/resolver": {
      webpack: {
        config: "build/webpack.base.conf.js"
      }
    }
  },
  // add your custom rules here
  rules: {
    'camelcase': ['error',
      {
        properties: 'always'
      }
    ],
    // don"t require comma in the last line of an object/dictionary declaration
    'comma-dangle': ['error', 'never'],
    // ignore max-len for comments
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true
      }
    ],
    // force space after and before curly braces in object/dict declarations
    'object-curly-spacing': ['error', 'always'],
    // force "===" in comparisons when ambiguous
    eqeqeq: ['error', 'smart'],
    'no-tabs': 0,
    'require-jsdoc': 0,
    'new-cap': ['error', { capIsNew: false }],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/attributes-order': 'off'
  }
}
