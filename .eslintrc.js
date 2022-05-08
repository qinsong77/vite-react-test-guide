module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'plugin:react/recommended', //
    'standard',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react', //
    '@typescript-eslint',
    'prettier',
    'jest'
  ],
  rules: {
    'prettier/prettier': 'error',
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // 'react/jsx-first-prop-new-line': [1, 'multiline'],
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': [1, { when: 'multiline' }]
    // quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: false }]
  }
}
