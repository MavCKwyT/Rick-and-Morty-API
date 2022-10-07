module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': [1, 110, 2],
  },
};
