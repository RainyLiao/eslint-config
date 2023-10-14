import antfuConfig, * as antfuExports from '@antfu/eslint-config'
import { type ConfigItem, combine } from '@antfu/eslint-config'
import type { RifendOptionsConfig } from './types'
import { react } from './configs'

function getEslintConfig(options: RifendOptionsConfig & ConfigItem = {}, ...userConfigs: (ConfigItem | ConfigItem[])[]): ConfigItem[] {
  // 取出react选项，剩下的选项放到restOptions中
  const {
    react: enableReact = false,
    ...restOptions
  } = options
  const configs: ConfigItem[][] = []

  if (enableReact)
    configs.push(react())

  const merged = combine(
    ...configs,
    ...userConfigs,
  )

  return antfuConfig(restOptions, ...merged)
}

export default getEslintConfig
export { antfuExports }
