import eslintJs from "@eslint/js";
import typescriptEslintParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import jsoncEslintParser from "jsonc-eslint-parser";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import globals from "globals";

export const base = [
  eslintJs.configs.recommended,
  {
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
    },
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: typescriptEslintPlugin.configs.recommended.rules,
  },
  {
    plugins: {
      jsonc: eslintPluginJsonc,
    },
    files: ["**/*.json", "**/*.json5", "**/*.jsonc"],
    languageOptions: {
      parser: jsoncEslintParser,
    },
    rules: {
      ...eslintPluginJsonc.configs.base.overrides[0].rules,
      ...eslintPluginJsonc.configs.prettier.rules,
    },
  },
  eslintConfigPrettier,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];

export const node = [
  ...base,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
