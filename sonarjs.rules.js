import sonarjs from 'eslint-plugin-sonarjs';

export default {
  ...sonarjs.configs.recommended.rules,
  'sonarjs/no-implicit-dependencies': "off",
  'sonarjs/cognitive-complexity': 'error',
  'sonarjs/no-identical-expressions': 'error',
  'sonarjs/prefer-read-only-props': 'warn',
}