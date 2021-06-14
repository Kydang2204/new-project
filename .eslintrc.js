require('dotenv').config();

function nodeEnv() {
  if (process.env.NODE_ENV === 'development') return 'off';
  return 'error';
}

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
    'no-console': nodeEnv(),
    'no-multiple-empty-lines': ['error', {
      max: 1,
    }],
    'object-curly-newline': ['error', 'always'],
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
