module.exports = {
  root: true,
  env: {
    'node': true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['plugin:@typescript-eslint/recommended'],
    },
    {
      files: ['*.(test|spec).ts'],
      extends: ['plugin:jest/recommended'],
    },
  ],
}
