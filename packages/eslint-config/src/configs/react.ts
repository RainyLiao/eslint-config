import { GLOB_JSX, GLOB_TSX } from '@antfu/eslint-config'
import type { ConfigItem } from '@antfu/eslint-config'
import { pluginReact, pluginReactHooks } from '../plugins'

export function react(): ConfigItem[] {
  return [
    {
      name: 'antfu:react:setup',
      plugins: {
        'react': pluginReact,
        'react-hooks': pluginReactHooks,
      },
    },
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      name: 'antfu:react:rules',
      rules: {
        ...pluginReact.configs.recommended.rules,
        ...pluginReactHooks.configs.recommended.rules,

        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ]
}
