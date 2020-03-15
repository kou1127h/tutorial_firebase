module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue/essential',
    "prettier",
    "prettier/vue"
  ],
  plugins: [
    'vue',
    "prettier",
  ],
  'rules': {
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, {'max': 1}],
    'func-call-spacing': [2, 'never'],
    'no-unneeded-ternary': 2,
    "semi": ["error", "never", {"beforeStatementContinuationChars": "never"}],
    'quotes': [2, 'single'],
    'indent': [2, 2],
    'space-in-parens': [2, 'never'],
    'no-console': 0,
    'comma-spacing': 2,
    'computed-property-spacing': 2,
    'key-spacing': 2,
    'keyword-spacing': 2,
    'vue/require-prop-types': 'off', // 削除する方向
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/require-v-for-key': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/name-property-casing': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-v-html': 'off',
    'vue/this-in-template': 'off',
    'vue/valid-v-for': 'off',
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
      }
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
