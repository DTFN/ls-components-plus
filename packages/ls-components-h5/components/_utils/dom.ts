export const isServerRendering: Boolean = (() => {
  try {
    return !(typeof window !== 'undefined' && document !== undefined);
  } catch (e) {
    return true;
  }
})();

export const getRootAttr = (ele: HTMLElement, key: string): string => {
  if (!isServerRendering) {
    if (!ele) {
      ele = document.documentElement;
    }
    if (ele) {
      return getComputedStyle(ele).getPropertyValue(key);
    }
    return '';
  }
  return '';
};
