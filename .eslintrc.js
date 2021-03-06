require('dotenv').config();

const isDevelopment = () => process.env.NODE_ENV === 'development';

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': isDevelopment() ? 'off' : 'error',
    'consistent-return': 'off',
    'brace-style': ['error', '1tbs', {
      allowSingleLine: false,
    }],
    'nonblock-statement-body-position': ['error', 'beside'],

    'no-multiple-empty-lines': ['error', {
      max: 1,
    }],
    'object-curly-newline': ['error', {
      minProperties: 1,
    }],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'function',
          'multiline-expression',
          'multiline-block-like',
          'class',
          'export',
          'import',
          'block',
          'block-like',
          'expression',
          'const',
          'let',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'function',
          'multiline-expression',
          'multiline-block-like',
          'class',
          'export',
          'import',
          'block',
          'block-like',
          'expression',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
  },
};
