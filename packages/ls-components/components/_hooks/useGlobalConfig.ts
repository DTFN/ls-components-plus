/**
 * @file 全局配置Hook
 * @description 提供全局配置的计算属性
 */

/**
 * 全局配置Hook
 * @param defaultValue - 默认值
 * @returns 计算属性
 */
export function useGlobalConfig(defaultValue = '') {
  return computed(() => {
    return defaultValue
  })
}
