module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended'
  ],
  plugins: ['@typescript-eslint', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    // TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': ['error'],

    // General JS/TS
    'no-console': 'warn',
    'multiline-ternary': 'off',
    'prettier/prettier': ['error'],

    // React Hooks
    'react-hooks/exhaustive-deps': 'off'
  },
  env: {
    'jest/globals': true,
    node: true
  },
  ignorePatterns: ['node_modules', 'babel.config.js', 'metro.config.js']
};
