/**
 * @file 延迟加载Hook
 * @description 控制加载状态的最小展示时间，避免闪烁
 */

/**
 * 延迟加载Hook
 * @param minDisplayTime - 最小展示时间（毫秒），默认500
 * @param callback - 数据加载完成后的回调函数
 * @returns 加载状态和加载函数
 */
export default function useDelayLoader<T = any>(minDisplayTime = 500, callback: (data: T | undefined) => void) {
  const loading = ref(true);
  let timer: any = null;

  /**
   * 加载数据函数
   * @param asyncFunction - 异步数据请求函数
   */
  async function loadData(asyncFunction: () => Promise<any>) {
    loading.value = true;
    const start = Date.now();

    let resData: T | undefined = void 0;
    try {
      resData = await asyncFunction();
    } finally {
      const elapsed = Date.now() - start;

      // 使用 setTimeout 控制最小展示时间
      if (elapsed < minDisplayTime) {
        timer = setTimeout(() => {
          loading.value = false;
          callback(resData);
          clearTimeout(timer);
          timer = null;
        }, minDisplayTime - elapsed);
      } else {
        loading.value = false;
        callback(resData);
      }
    }
  }

  return { loading, loadData };
}
