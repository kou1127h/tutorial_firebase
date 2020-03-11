module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    // 追加ルール
    'prettier/prettier': [
      'error',
      {
        "printWidth": 120, // 1行の最大文字数を120文字とする。
        "semi": false, // セミコロンは不要
        "singleQuote": true, // シングルクォーテーションはOK
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
