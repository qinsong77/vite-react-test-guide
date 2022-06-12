module.exports = {
  globals: {
    setupFetchStub: true,
  },
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended', //
    'standard',
    // 'prettier',
    'plugin:prettier/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react', //
    '@typescript-eslint',
    'prettier',
    'jest',
    'testing-library',
  ],
  rules: {
    'prettier/prettier': 'error',
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // 'react/jsx-first-prop-new-line': [1, 'multiline'],
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': [1, { when: 'multiline' }],
    // quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: false }]
  },
  overrides: [
    {
      // https://github.com/testing-library/eslint-plugin-testing-library#run-the-plugin-only-against-test-files
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
}
