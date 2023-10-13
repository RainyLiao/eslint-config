/**
 * Combine array and non-array configs into a single array.
 */
export function combine(...configs: any[]) {
  return configs.flatMap(config => Array.isArray(config) ? config : [config])
}
