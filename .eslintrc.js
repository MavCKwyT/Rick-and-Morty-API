module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
