// eslint-disable-next-line no-undef
module.exports = {
  extends: ['fabulator', 'fabulator/react'],
  parserOptions: {
    project: ['./tsconfig.json'],
    // eslint-disable-next-line no-undef
    tsconfigRootDir: __dirname,
  },
  rules: {
    'array-func/from-map': 0,
    'jest/no-mocks-import': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-void': 0,
  },
  settings: {
    // default eslint config uses jest validator
    jest: {
      version: 26,
    },
  },
};
