import sonarjs from 'eslint-plugin-sonarjs';

export default {
  ...sonarjs.configs.recommended.rules,
  'sonarjs/no-implicit-dependencies': "off",
  'sonarjs/cognitive-complexity': 'error',
  'sonarjs/no-identical-expressions': 'error',
  'sonarjs/prefer-read-only-props': 'off',// 'warn',
  'sonarjs/table-header': 'off', // 'warn',
  'sonarjs/pseudo-random': 'warn', // 'error',
  'sonarjs/cognitive-complexity': ['warn', 15], // ✅ Set max complexity (default: 20)
  'complexity': ['warn', { 'max': 15 }], // ✅ Alternative built-in rule for function complexity
}