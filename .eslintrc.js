module.exports = {
  extends: ['airbnb-base', 'plugin:flowtype/recommended'],
  env: {
    browser: true,
    jest: true
  },
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': ['error', 'never'],
    'class-methods-use-this': ['error', { exceptMethods: ['connectedCallback'] }]
  },
  plugins: ['flowtype']
};
