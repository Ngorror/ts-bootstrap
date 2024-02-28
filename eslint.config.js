import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import json from 'eslint-plugin-json';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import promise from 'eslint-plugin-promise';
import security from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';

// TODO: fixing temporary old eslint plugins without flat config file
json.configs.recommended.plugins = { json: json };
promise.configs.recommended.plugins = { promise: promise };
sonarjs.configs.recommended.plugins = { sonarjs: sonarjs };

export default [
  js.configs.recommended,
  jsdoc.configs['flat/recommended-typescript-flavor'],
  json.configs.recommended,
  promise.configs.recommended,
  security.configs.recommended,
  sonarjs.configs.recommended,
  unicorn.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'json/*': 'error',
      'prettier/prettier': ['error'],
      strict: ['error', 'never'],
      'unused-imports/no-unused-imports': 'error',
    },
  },
];
