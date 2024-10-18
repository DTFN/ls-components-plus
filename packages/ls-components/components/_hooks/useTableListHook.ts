// 列表页面获取数据的hook
export default function (
  requestFn: Function | undefined,
  requestParams: any,
  config?: { autoFetch?: boolean; dealData?: Function }
) {
  // 初始化
  const isFirst = ref(true);
  // 加载状态
  const loading = ref(false);
  // 当前页
  const currentPage = ref(1);
  // 每页大小
  const pageSize = ref(10);
  // 大小切换范围
  const pageSizes = [10, 20, 30, 50];
  // 列表
  const tableData = ref([]);
  // 总数
  const total = ref(0);

  const { autoFetch = true, dealData } = config || {};

  // 加载数据
  const loadData = (showLoading: boolean = true, firstLoad: boolean = false) => {
    if (!requestFn) return;

    if (showLoading) loading.value = true;

    if (firstLoad) {
      isFirst.value = true;
    }

    requestFn({
      currentPage: currentPage.value,
      pageSize: pageSize.value,
      ...requestParams
    })
      .then((res: any) => {
        if (dealData && typeof dealData === 'function') {
          const { data, total: count = 0 } = dealData(res);
          tableData.value = data || [];
          total.value = Number(count || 0);
        } else {
          const { records = [], total: count } = res || {};
          tableData.value = records || [];
          total.value = Number(count || 0);
        }
      })
      .catch((err: string) => {
        console.log(`useTableHook error: ${err}`);
      })
      .finally(() => {
        loading.value = false;

        if (isFirst.value) {
          setTimeout(() => {
            isFirst.value = false;
          }, 200);
        }
      });
  };

  // 切换页数
  const handleCurrentPageChange = (page: number) => {
    currentPage.value = page;
    loadData();
  };

  // 切换大小
  const handleSizeChange = (size: number) => {
    pageSize.value = size;
    currentPage.value = 1;
    loadData();
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
    loading,
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
