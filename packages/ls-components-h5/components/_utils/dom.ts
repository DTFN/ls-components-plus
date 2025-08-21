import { inBrowser } from './useEventListener';

let width: Ref<number>;
let height: Ref<number>;

export function useWindowSize() {
  if (!width) {
    width = ref(0);
    height = ref(0);

    if (inBrowser) {
      const update = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
      };

      update();
      window.addEventListener('resize', update, { passive: true });
      window.addEventListener('orientationchange', update, { passive: true });
    }
  }

  return { width, height };
}

export const { width: windowWidth, height: windowHeight } = useWindowSize();

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
