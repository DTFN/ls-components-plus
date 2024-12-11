import useDelayLoader from './useDelayLoader';

// 列表页面获取数据的hook
export default function (
  requestFn: Function | undefined,
  requestParams: any,
  config?: {
    currentPageProp?: number; // 当前页码
    pageSizeProp?: number; // 每页条数
    pageSizesProp?: number[]; // 每页条数范围
    isDelayLoader?: boolean; // 是否使用延迟加载器
    delayLoaderTime?: number; // 延迟加载时间
    isFullDose?: boolean; // 是否全量数据
    hasPanigation?: boolean; // 是否有分页
    autoFetch?: boolean; // 是否自动获取数据
    dealData?: Function; // 处理返回数据的方法
    dealParams?: Function; // 处理请求参数的方法
    callbackAfter?: (res: any, data: any) => void | undefined; // 请求完成后的回调
  }
) {
  const {
    currentPageProp = 1,
    pageSizeProp = 10,
    pageSizesProp = [10, 20, 30, 40, 50, 100],
    isDelayLoader = false,
    delayLoaderTime = 300,
    isFullDose = false,
    autoFetch = true,
    hasPanigation = true,
    dealParams,
    dealData,
    callbackAfter
  } = config || {};

  // 初始化
  const isFirst = ref(true);
  // 加载状态
  const loading = ref(false);
  // 当前页
  const currentPage = ref(currentPageProp);
  // 每页大小
  const pageSize = ref(pageSizeProp);
  // 大小切换范围
  const pageSizes = ref(pageSizesProp);
  // 列表
  const tableData = ref([]);
  // 全量数据的存储
  const tableDataSource = ref([]);
  // 总数
  const total = ref(0);

  // 处理返回结果
  const disposeResponseData = (resData: any) => {
    if (hasPanigation) {
      // 有分页
      if (isFullDose) {
        let newResData = resData || [];
        let newTotal = newResData.length;
        if (dealData && typeof dealData === 'function') {
          const { data, total: count = 0 } = dealData(resData);
          newResData = data || [];
          newTotal = Number(count || 0);
        }
        tableDataSource.value = newResData;
        total.value = newTotal;
        sliceTableData();
      } else if (dealData && typeof dealData === 'function') {
        const { data, total: count = 0 } = dealData(resData);
        tableData.value = data || [];
        total.value = Number(count || 0);
      } else {
        const { records = [], total: count } = resData || {};
        tableData.value = records || [];
        total.value = Number(count);
      }

      if (callbackAfter) {
        callbackAfter(resData, { tableData, total });
      }
    } else {
      // 无分页
      tableData.value = resData;

      if (callbackAfter) {
        callbackAfter(resData, {});
      }
    }
  };

  // 加载数据
  const requestData = (): Promise<any> =>
    new Promise((resolve, reject) => {
      if (!requestFn) {
        reject(new Error('requestFn is required'));

        return;
      }

      const requestParamsData = (typeof requestParams === 'function' ? requestParams() : requestParams) || {};

      let params = {
        currentPage: hasPanigation ? currentPage.value : null,
        pageSize: hasPanigation ? pageSize.value : null,
        ...requestParamsData
      };

      if (dealParams) {
        params = dealParams(params);
      }

      requestFn(params)
        .then((res: any) => {
          if (!isDelayLoader) {
            disposeResponseData(res);
          }

          resolve(res);
        })
        .catch((err: string) => {
          console.log(`useTableHook error: ${err}`);
          reject(err);
        })
        .finally(() => {
          loading.value = false;
          setTimeout(() => {
            isFirst.value = false;
          }, 400);
        });
    });

  // 延迟加载数据配置
  const delayLoaderData = useDelayLoader(delayLoaderTime || 300, data => {
    disposeResponseData(data);
  });

  // 完整数据分页设置展示的数据
  function sliceTableData() {
    tableData.value = tableDataSource.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value);
  }

  // 加载数据
  const loadData = (showLoading: boolean = true, firstLoad: boolean = false) => {
    if (!requestFn) {
      return;
    }

    if (showLoading && loading.value) {
      return;
    }

    if (showLoading) {
      loading.value = true;
    }

    if (firstLoad) {
      isFirst.value = true;
    }

    if (isDelayLoader) {
      delayLoaderData.loadData(requestData);

      return;
    }

    requestData().finally(() => {
      loading.value = false;
    });
  };

  // 监听当前页
  watch(currentPage, newVal => {
    handleCurrentPageChange(newVal);
  });

  // 监听每页条数
  watch(pageSize, newVal => {
    handleSizeChange(newVal);
  });

  // 切换页数
  const handleCurrentPageChange = (page: number) => {
    currentPage.value = page;
    if (isFullDose) {
      sliceTableData();
    } else {
      loadData();
    }
  };

  // 切换大小
  const handleSizeChange = (size: number) => {
    pageSize.value = size;
    currentPage.value = 1;

    if (isFullDose) {
      sliceTableData();
    } else {
      loadData();
    }
  };

  // 重置列表
  const handleReset = () => {
    // 分页数据重置
    currentPage.value = 1;

    // 重新加载列表
    nextTick(() => {
      loadData();
    });
  };

  // 渲染后自动获取列表
  onMounted(() => {
    if (autoFetch) {
      isFirst.value = true;
      loadData();
    }
  });

  return {
    isFirst,
    loading: isDelayLoader ? delayLoaderData.loading : loading,
    pageSize,
    pageSizes,
    currentPage,
    tableData,
    total,
    handleCurrentPageChange,
    handleSizeChange,
    handleReset,
    loadData
  };
}
