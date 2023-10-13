import type { FlatESLintConfigItem } from "eslint-define-config";
import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore'

export type ConfigItem = FlatESLintConfigItem & {
  /**
   * Custom name of each config item
   */
  name?: string
};

export interface StylisticConfig {
  indent?: number | 'tab'
  quotes?: 'single' | 'double'
  jsx?: boolean
}

export interface OptionsStylistic {
  stylistic?: boolean | StylisticConfig
}

export interface OptionsOverrides {
  overrides?: ConfigItem['rules']
}

export interface OptionsComponentExts {
  /**
   * Additional extensions for components.
   *
   * @example ['vue']
   * @default []
   */
  componentExts?: string[]
}

export interface OptionsConfig extends OptionsComponentExts {
  /**
   * Enable gitignore support.
   *
   * Passing an object to configure the options.
   *
   * @see https://github.com/antfu/eslint-config-flat-gitignore
   * @default true
   */
  gitignore?: boolean | FlatGitignoreOptions

  /**
   * Enable JSX related rules.
   *
   * Currently only stylistic rules are included.
   *
   * @default true
   */
  jsx?: boolean

  /**
   * Enable JSONC support.
   *
   * @default true
   */
  jsonc?: boolean

  /**
   * Enable stylistic rules.
   *
   * @default true
   */
  stylistic?: boolean | StylisticConfig

  /**
   * Provide overrides for rules for each integration.
   */
  overrides?: {
    javascript?: ConfigItem['rules']
    typescript?: ConfigItem['rules']
    jsonc?: ConfigItem['rules']
    markdown?: ConfigItem['rules']
    yaml?: ConfigItem['rules']
  }
}
