import type { ConfigItem, OptionsConfig } from '@antfu/eslint-config'

export interface RifendOptionsConfig extends OptionsConfig {
  /**
   * Enable React support.
   * @default false
   */
  react?: boolean

  overrides?: OptionsConfig['overrides'] & {
    react?: ConfigItem['rules']
  }
}
