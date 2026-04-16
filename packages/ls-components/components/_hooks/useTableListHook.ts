/**
 * @file 表格列表Hook
 * @description 列表页面获取数据的通用Hook，集成表单查询、分页、数据加载等功能
 */

import useDelayLoader from './useDelayLoader'

/**
 * 请求函数类型
 */
export type RequestFn<T = any> = (params?: any) => Promise<T>

/**
 * 数据处理函数类型
 */
export type DealDataFn<T = any> = (res: any) => { data: T[], total?: number }

/**
 * 参数处理函数类型
 */
export type DealParamsFn = (params: any) => any

/**
 * 请求完成回调类型
 */
export type CallbackAfterFn<T = any> = (res: any, context: { tableData: T[], total: number }) => void

/**
 * 请求配置项
 */
export interface UseTableListOptions {
  currentPageProp?: number
  pageSizeProp?: number
  pageSizes?: number[]
  isDelayLoader?: boolean
  delayLoaderTime?: number
  isFullDose?: boolean
  hasPagination?: boolean
  autoFetch?: boolean
  dealData?: DealDataFn
  dealParams?: DealParamsFn
  callbackAfter?: CallbackAfterFn
  defaultSearchParams?: Record<string, any>
}

/**
 * 表格列表Hook返回类型
 */
export interface UseTableListReturn<T = any> {
  isFirst: ReturnType<typeof ref<boolean>>
  loading: ReturnType<typeof ref<boolean>>
  pageSize: ReturnType<typeof ref<number>>
  pageSizes: number[]
  currentPage: ReturnType<typeof ref<number>>
  tableData: ReturnType<typeof ref<T[]>>
  total: ReturnType<typeof ref<number>>
  errorMsg: ReturnType<typeof ref<string>>
  searchParams: ReturnType<typeof ref<Record<string, any>>>
  selectedRows: ReturnType<typeof ref<T[]>>
  handleCurrentPageChange: (page: number, isFetch?: boolean) => void
  handleSizeChange: (size: number) => void
  handleReset: () => void
  loadData: (showLoading?: boolean, firstLoad?: boolean) => Promise<void>
  refresh: () => Promise<void>
  clearData: () => void
  clearSelectedRows: () => void
  search: (params?: Record<string, any>, resetPage?: boolean) => void
  resetSearch: () => void
  setSearchParams: (params: Record<string, any>) => void
  abort: () => void
}

export default function useTableListHook<T = any>(
  requestFn?: RequestFn,
  requestParams?: any,
  config?: UseTableListOptions,
): UseTableListReturn<T> {
  const {
    currentPageProp = 1,
    pageSizeProp = 10,
    pageSizes: pageSizesProp = [10, 20, 50, 100],
    isDelayLoader = false,
    delayLoaderTime = 300,
    isFullDose = false,
    autoFetch = true,
    hasPagination = true,
    dealParams,
    dealData,
    callbackAfter,
    defaultSearchParams = {},
  } = config || {}

  const isFirst = ref(true)
  const loading = ref(false)
  const currentPage = ref(currentPageProp)
  const pageSize = ref(pageSizeProp)
  const pageSizes = ref(pageSizesProp)
  const tableData = ref<T[]>([]) as ReturnType<typeof ref<T[]>>
  const tableDataSource = ref<T[]>([]) as ReturnType<typeof ref<T[]>>
  const total = ref(0)
  const errorMsg = ref('')
  const searchParams = ref<Record<string, any>>({ ...defaultSearchParams })
  const selectedRows = ref<T[]>([]) as ReturnType<typeof ref<T[]>>

  let abortController: AbortController | null = null

  const sliceTableData = () => {
    tableData.value = (tableDataSource.value || []).slice(
      (currentPage.value - 1) * pageSize.value,
      currentPage.value * pageSize.value,
    )
  }

  const disposeResponseData = (resData: any) => {
    if (hasPagination) {
      if (isFullDose) {
        let newResData = resData || []
        let newTotal = newResData.length

        if (dealData && typeof dealData === 'function') {
          const result = dealData(resData)
          newResData = result.data || []
          newTotal = Number(result.total || 0)
        }

        tableDataSource.value = newResData as T[]
        total.value = newTotal
        sliceTableData()
      }
      else if (dealData && typeof dealData === 'function') {
        const result = dealData(resData)
        tableData.value = result.data as T[]
        total.value = Number(result.total || 0)
      }
      else {
        const { records = [], total: count } = resData || {}
        tableData.value = records as T[]
        total.value = Number(count)
      }

      if (callbackAfter) {
        callbackAfter(resData, { tableData: tableData.value as T[], total: total.value })
      }
    }
    else {
      if (dealData && typeof dealData === 'function') {
        const result = dealData(resData)
        tableData.value = result.data as T[]
      }
      else {
        tableData.value = resData as T[]
      }

      if (callbackAfter) {
        callbackAfter(resData, { tableData: tableData.value, total: total.value })
      }
    }
  }

  const requestData = async (): Promise<any> => {
    if (!requestFn) {
      errorMsg.value = 'requestFn is required'
      throw new Error('requestFn is required')
    }

    abortController = new AbortController()
    errorMsg.value = ''

    const requestParamsData = typeof requestParams === 'function' ? requestParams() : requestParams || {}

    let params: Record<string, any> = {}

    if (hasPagination) {
      params = {
        currentPage: currentPage.value,
        pageSize: pageSize.value,
        ...requestParamsData,
        ...searchParams.value,
      }
    }
    else {
      params = {
        ...requestParamsData,
        ...searchParams.value,
      }
    }

    if (dealParams) {
      params = dealParams(params)
    }

    try {
      const res = await requestFn(params)
      disposeResponseData(res)

      return res
    }
    catch (err: any) {
      errorMsg.value = err?.message || '请求失败'
      throw err
    }
  }

  const delayLoaderData = useDelayLoader(delayLoaderTime || 300, (data) => {
    disposeResponseData(data)
  })

  const loadData = async (showLoading: boolean = true, firstLoad: boolean = false): Promise<void> => {
    if (!requestFn) {
      return
    }

    if (showLoading && loading.value) {
      return
    }

    if (showLoading) {
      loading.value = true
    }

    if (firstLoad) {
      isFirst.value = true
    }

    if (isDelayLoader) {
      delayLoaderData.loadData(requestData)

      return
    }

    try {
      await requestData()
    }
    finally {
      loading.value = false
      setTimeout(() => {
        isFirst.value = false
      }, 400)
    }
  }

  const refresh = async (): Promise<void> => {
    await loadData(true, false)
  }

  const handleCurrentPageChange = (page: number, isFetch: boolean = true) => {
    currentPage.value = page

    if (isFetch) {
      if (isFullDose) {
        sliceTableData()
      }
      else {
        loadData()
      }
    }
  }

  const handleSizeChange = (size: number) => {
    pageSize.value = size
    currentPage.value = 1

    if (isFullDose) {
      sliceTableData()
    }
    else {
      loadData()
    }
  }

  const handleReset = () => {
    currentPage.value = 1
    nextTick(() => {
      loadData()
    })
  }

  const clearData = () => {
    tableData.value = []
    tableDataSource.value = []
    total.value = 0
    errorMsg.value = ''
  }

  const clearSelectedRows = () => {
    selectedRows.value = []
  }

  const setSearchParams = (params: Record<string, any>) => {
    searchParams.value = { ...defaultSearchParams, ...params }
  }

  const search = (params?: Record<string, any>, resetPage: boolean = true) => {
    if (params) {
      searchParams.value = { ...defaultSearchParams, ...params }
    }

    if (resetPage) {
      currentPage.value = 1
    }

    loadData()
  }

  const resetSearch = () => {
    searchParams.value = { ...defaultSearchParams }
    currentPage.value = 1
    loadData()
  }

  const abort = () => {
    if (abortController) {
      abortController.abort()
      abortController = null
      loading.value = false
      errorMsg.value = '请求已取消'
    }
  }

  watch(currentPage, (newVal) => {
    handleCurrentPageChange(newVal)
  })

  watch(pageSize, (newVal) => {
    handleSizeChange(newVal)
  })

  onMounted(() => {
    if (autoFetch) {
      isFirst.value = true
      loadData()
    }
  })

  onUnmounted(() => {
    abort()
  })

  return {
    isFirst,
    loading: isDelayLoader ? delayLoaderData.loading : loading,
    pageSize,
    pageSizes: pageSizes.value,
    currentPage,
    tableData,
    total,
    errorMsg,
    searchParams,
    selectedRows,
    handleCurrentPageChange,
    handleSizeChange,
    handleReset,
    loadData,
    refresh,
    clearData,
    clearSelectedRows,
    search,
    resetSearch,
    setSearchParams,
    abort,
  }
}
