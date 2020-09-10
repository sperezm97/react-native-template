module.exports = {
  env: {
    jest: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'import', 'jest'],
  rules: {
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: { multiline: true },
        ImportDeclaration: { multiline: true },
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': 0,
  },
};
