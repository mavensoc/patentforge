const js = require("@eslint/js");
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const importPlugin = require("eslint-plugin-import");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "import": importPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      "quotes": ["error", "double"],
      "import/no-unresolved": "off",
      "indent": ["error", 2],
      "max-len": ["error", { "code": 80 }],
      "object-curly-spacing": ["error", "never"],
    },
  },
  {
    ignores: ["/lib/**/*"],
  },
];

