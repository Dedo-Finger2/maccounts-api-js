import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.node },
    rules: {
      semi: "error",
      "no-extra-semi": "error",
      "no-unsafe-finally": "error",
      eqeqeq: "error",
      curly: "error",
      "no-unused-vars": "error",
      "no-useless-return": "error",
      "consistent-return": "error",
      "dot-notation": "error",
      "no-var": "error",
      "prefer-const": "warn",
      "no-shadow": "warn",
      quotes: ["error", "double"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "no-duplicate-imports": "error",
      complexity: ["warn", { max: 10 }],
      "max-depth": ["warn", 2],
      "eol-last": "error",
    },
  },
  pluginJs.configs.recommended,
];
