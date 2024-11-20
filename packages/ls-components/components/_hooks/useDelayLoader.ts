export default function useDelayLoader<T = any>(minDisplayTime = 500, callback: (data: T | undefined) => void) {
  const loading = ref(true);
  let timer: any = null;

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
