module.exports = {
  extends: ['airbnb', 'prettier'],

  parser: 'babel-eslint',

  plugins: ['prettier'],

  env: {
    browser: true,
  },

  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'class-methods-use-this': [0],
    'no-param-reassign': [0],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'prettier/prettier': [
      'error',
      { singleQuote: true, trailingComma: 'es5', printWidth: 100, endOfLine: 'auto' },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-filename-extension': [0], // https://github.com/airbnb/javascript/pull/985#issuecomment-239145468
    'react/destructuring-assignment': [0],
    'react/prop-types': [0],
    'react/require-default-props': [0],
  },
};
