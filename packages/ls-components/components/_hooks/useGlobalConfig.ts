export function useGlobalConfig(defaultValue = '') {
  return computed(() => {
    return defaultValue;
  });
}
