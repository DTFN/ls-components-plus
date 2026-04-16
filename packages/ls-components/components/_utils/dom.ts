export const isServerRendering: boolean = (() => {
  try {
    return !(typeof window !== 'undefined' && document !== undefined)
  }
  catch {
    return true
  }
})()

export function getRootAttr(ele: HTMLElement, key: string): string {
  if (!isServerRendering) {
    if (!ele) {
      ele = document.documentElement
    }

    if (ele) {
      return getComputedStyle(ele).getPropertyValue(key)
    }

    return ''
  }

  return ''
}
