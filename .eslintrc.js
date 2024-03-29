module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    `plugin:@typescript-eslint/recommended`,
    `plugin:prettier/recommended`,
    `prettier`,
    `plugin:react-hooks/recommended`,
  ],
  plugins: [`@typescript-eslint`, `prettier`, `react-hooks`],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: `module`, // Allows for the use of imports
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    quotes: `off`,
    "@typescript-eslint/quotes": [
      2,
      `backtick`,
      {
        avoidEscape: true,
      },
    ],
    indent: [`error`, 2, { SwitchCase: 1 }],
    "prettier/prettier": [
      `error`,
      {
        trailingComma: `es5`,
        semi: false,
        singleQuote: false,
        printWidth: 120,
      },
    ],
    "react-hooks/rules-of-hooks": `error`,
    "react-hooks/exhaustive-deps": `warn`,
  },
};
