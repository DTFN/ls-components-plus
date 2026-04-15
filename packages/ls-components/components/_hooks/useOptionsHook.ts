import { cloneDeep } from 'lodash';
import { ref } from 'vue';

export interface OptionType {
  label: string;
  value: string | number;
  disabled?: boolean;
  [key: string]: any;
}

export interface SelDataType {
  allOption: OptionType[];
  options: OptionType[];
  maps: Record<string, { label: string; [key: string]: any }>;
}

export interface UseOptionsOptions {
  /** 缓存 key，相同 key 会缓存结果 */
  cacheKey?: string;
  /** 缓存有效期(ms)，默认不缓存 */
  cacheTime?: number;
  /** 防抖延迟(ms)，默认 300 */
  debounceTime?: number;
}

interface CacheItem {
  data: SelDataType;
  timestamp: number;
}

// 全局缓存池
const cachePool: Map<string, CacheItem> = new Map();

/**
 * 获取下拉框选项数据
 * @param options 配置选项
 * @returns
 */
export default function (options: UseOptionsOptions = {}) {
  const { cacheTime = 0, debounceTime = 300 } = options;

  const selData: SelDataType = {
    allOption: [],
    options: [],
    maps: {}
  };

  // 加载状态
  const loading = ref(false);

  // 防抖定时器
  let debounceTimer: ReturnType<typeof setTimeout> | null = null;

  /**
   * 根据 key 数组获取值
   */
  const getValueByKeys = (keys: string[], data: any): string => {
    if (!keys || !keys.length) return '';
    return keys.map(key => data[key] ?? '').join('-');
  };

  /**
   * 格式化单个选项
   */
  const formatOption = (item: any, labelKey: string[], valueKey: string[], extraFields: string[] = []): OptionType => {
    const value = getValueByKeys(valueKey, item);
    const label = getValueByKeys(labelKey, item);

    const option: OptionType = { label, value };

    // 复制额外字段
    extraFields.forEach(key => {
      if (key in item) {
        option[key] = item[key];
      }
    });

    // 处理 disabled
    if ('disabled' in item) {
      option.disabled = item.disabled;
    }

    return option;
  };

  /**
   * 清除缓存
   */
  const clearCache = (key?: string) => {
    if (key) {
      cachePool.delete(key);
    } else {
      cachePool.clear();
    }
  };

  /**
   * 获取选项数据
   * @param apiFunc 请求接口函数
   * @param labelKey 标签字段，默认 ['name']
   * @param valueKey 值字段，默认 ['id']
   * @param params 请求参数
   * @param allOption 全部选项，默认为 [{ label: '全部', value: '' }]
   * @param extraFields 额外字段，会复制到 option 中
   */
  const getSelOptions = async (
    apiFunc: (params?: any) => Promise<any>,
    labelKey: string[] = ['name'],
    valueKey: string[] = ['id'],
    params?: any,
    allOption: OptionType[] = [{ label: '全部', value: '' }],
    extraFields: string[] = []
  ): Promise<SelDataType> => {
    if (!(apiFunc instanceof Function)) {
      console.warn('getSelOptions: apiFunc must be a function');
      return selData;
    }

    // 生成缓存 key
    const cacheKey = options.cacheKey;
    if (cacheKey && cacheTime > 0) {
      const cached = cachePool.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < cacheTime) {
        Object.assign(selData, cached.data);
        return selData;
      }
    }

    try {
      loading.value = true;
      let data: any[] = [];

      if (params) {
        const tempParams = cloneDeep(params);
        const result = await apiFunc(tempParams);
        // 兼容分页和非分页格式
        data = result.records ?? result;
      } else {
        data = await apiFunc();
      }

      selData.options = (data || []).map((item: any) => {
        const option = formatOption(item, labelKey, valueKey, extraFields);
        selData.maps[option.value as string] = {
          label: option.label,
          ...item
        };
        return option;
      });

      selData.allOption = [...allOption, ...selData.options];

      // 存入缓存
      if (cacheKey) {
        cachePool.set(cacheKey, {
          data: cloneDeep(selData),
          timestamp: Date.now()
        });
      }

      return selData;
    } catch (error) {
      console.error('getSelOptions error:', error);
      selData.options = [];
      selData.allOption = [...allOption];
      return selData;
    } finally {
      loading.value = false;
    }
  };

  /**
   * 带防抖的远程搜索
   * @param apiFunc 接口函数
   * @param params 请求参数
   * @param keyword 搜索关键字
   * @param labelKey 标签字段
   * @param valueKey 值字段
   * @param extraFields 额外字段
   */
  const remoteSearchSelOptions = (
    apiFunc: (params?: any) => Promise<any>,
    params: any,
    keyword: string,
    labelKey: string[] = ['name'],
    valueKey: string[] = ['id'],
    extraFields: string[] = []
  ): Promise<OptionType[]> => {
    return new Promise(resolve => {
      // 清除之前的定时器
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      debounceTimer = setTimeout(async () => {
        try {
          loading.value = true;
          const result = await getSelOptions(apiFunc, labelKey, valueKey, { ...params, keyword }, [], extraFields);
          resolve(result.options);
        } catch (error) {
          console.error('remoteSearchSelOptions error:', error);
          resolve([]);
        } finally {
          loading.value = false;
        }
      }, debounceTime);
    });
  };

  /**
   * 同步获取选项（不发起请求，从缓存或已有数据获取）
   */
  const getOptionsSync = (): SelDataType => {
    return selData;
  };

  /**
   * 根据 value 获取 label
   */
  const getLabelByValue = (value: string | number): string => {
    return selData.maps[String(value)]?.label ?? String(value);
  };

  /**
   * 根据 value 过滤选项
   */
  const filterOptions = (values: (string | number)[]): OptionType[] => {
    return selData.options.filter(option => values.includes(option.value as string | number));
  };

  return {
    selData,
    loading,
    getSelOptions,
    remoteSearchSelOptions,
    getOptionsSync,
    getLabelByValue,
    filterOptions,
    clearCache
  };
}
