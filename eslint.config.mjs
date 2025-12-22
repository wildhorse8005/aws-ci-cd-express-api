import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**'],

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',

      // ✅ FIX LỖI process is not defined
      globals: {
        ...globals.node,
      },
    },

    plugins: {},

    rules: {
      ...js.configs.recommended.rules,

      // Custom backend rules
      'no-console': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      eqeqeq: 'error',
    },
  },
];
