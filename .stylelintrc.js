module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-order'
  ],

  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-idiomatic-order'
  ],

  rules: {
    'order/properties-alphabetical-order': null,
    'scss/at-function-pattern': null,
    'scss/at-mixin-pattern': null,
  },
};
