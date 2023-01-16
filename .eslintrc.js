module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'jest', 'prettier'],
  rules: {
    'linebreak-style': 'off',
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-uses-react': ['off'],
    'react/jsx-props-no-spreading': ['warn'],
    'react/no-unescaped-entities': ['off'],
    'react/react-in-jsx-scope': 'off',
    camelcase: 'error',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
