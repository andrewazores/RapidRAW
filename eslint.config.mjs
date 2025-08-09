import { defineConfig } from "eslint/config";
import typeScript from '@typescript-eslint/eslint-plugin';
import typeScriptParser from '@typescript-eslint/parser';
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import imports from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
  {
    files: [
      "src/**/*.ts",
      "src/**/*.tsx",
    ],

    languageOptions: {
      parser: typeScriptParser,
      parserOptions: {
        "tsx": true,
        "jsx": true,
        "js": true,
        "useJSXTextNode": true,
        "project": "./tsconfig.json",
        "tsconfigRootDir": "."
      },
    },

    extends: compat.extends(
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ),

    plugins: {
        react,
        typeScript,
        imports,
        unusedImports,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
        semi: ["error", "always"],
        quotes: ["error", "single"],

        "no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
        }],

        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "react/react-in-jsx-scope": "off",
    },
  },
  reactHooks.configs['recommended-latest'],
]);
