module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    semi: 0,
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        singleQuote: true,
        printWidth: 125,
        tabWidth: 2,
        trailingComma: 'es5',
        bracketSpacing: true,
        endOfLine: 'auto',
      },
    ],
  },
}
