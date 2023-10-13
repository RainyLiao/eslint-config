import fs from 'node:fs'
import { jsonc, sortPackageJson, sortTsconfig } from './configs'
import { ConfigItem, OptionsConfig } from './types'
import { combine } from './utils'
import gitignore from 'eslint-config-flat-gitignore'

export function getEslintConfig(options: OptionsConfig & ConfigItem = {}, ...userConfigs: (ConfigItem | ConfigItem[])[]) {
  const {
    gitignore: enableGitignore = true,
    overrides = {},
    componentExts = [],
  } = options

  const stylisticOptions = options.stylistic === false
    ? false
    : typeof options.stylistic === 'object'
      ? options.stylistic
      : {}
  if (stylisticOptions && !('jsx' in stylisticOptions))
    stylisticOptions.jsx = options.jsx ?? true

  const configs: ConfigItem[][] = []
  if (enableGitignore) {
    if (typeof enableGitignore !== 'boolean') {
      configs.push([gitignore(enableGitignore)])
    }
    else {
      if (fs.existsSync('.gitignore'))
        configs.push([gitignore()])
    }
  }

  // Base configs
  configs.push()

  if (options.jsonc ?? true) {
    configs.push(
      jsonc({
        overrides: overrides.jsonc,
        stylistic: stylisticOptions,
      }),
      sortPackageJson(),
      sortTsconfig(),
    )
  }

  const merged = combine(
    ...configs,
    ...userConfigs,
  )
  return merged
}
