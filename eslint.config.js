import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import sonarjs from 'eslint-plugin-sonarjs';

import sonarjsRules from './sonarjs.rules.js';

export default {
  ignores: ['dist'],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parser: tseslint.parser,
    parserOptions: {
      project: './tsconfig.eslint.json', // Use a dedicated tsconfig for ESLint
      tsconfigRootDir: process.cwd(),
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    prettier,
    sonarjs
  },
  rules: {
    ...js.configs.recommended.rules,
    ...tseslint.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    ...sonarjsRules,
    'prettier/prettier': 'error', // Ensure Prettier formatting issues are reported
    'react-refresh/only-export-components': 'off',
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
    // Disable no-unused-vars in general but allow props and state
    'no-unused-vars': 'off', // 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': [
    //   'warn', 
    //   { 
    //     argsIgnorePattern: '^_', // ignore arguments starting with '_'
    //     varsIgnorePattern: '^_', // ignore variables starting with '_'
    //     ignoreRestSiblings: true, // allow unused rest elements
    //   }
    // ],
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
