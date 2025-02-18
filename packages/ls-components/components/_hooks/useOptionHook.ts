import { merge } from 'lodash';

/**
 * 获取select、radio标签使用的option
 * apiFunc 请求接口
 * params: {
 *  分页参数， 注意分页接口返回之需用records作为数组字段
 * }
 * labelKey: 标签字段
 * valueKey: 值字段
 * @returns
 */
export default function () {
  const selData: any = {
    allOption: [],
    options: [],
    maps: {}
  };

  const getValueByKeys = (keys: Array<string>, data: any): string => {
    let value = '';
    if (keys) {
      keys.forEach((key: string) => {
        const temp = data[key] || '';
        if (value) value += '-';
        value += temp;
      });
    }
    return value;
  };

  const getSelOption = async (
    apiFunc: any,
    labelKey?: Array<string>,
    valueKey?: Array<string>,
    params?: any,
    all?: Array<OptionType>
  ) => {
    if (apiFunc instanceof Function) {
      let data: any = [];
      if (params) {
        const tempParams = merge({}, params);
        data = (await apiFunc(tempParams)).records;
      } else {
        data = await apiFunc();
      }
      selData.options = (data || []).map((item: any) => {
        const value = getValueByKeys(valueKey || ['id'], item);
        const label = getValueByKeys(labelKey || ['name'], item);
        selData.maps[value] = {
          label
        };
        return {
          value,
          label
        };
      });
      selData.allOption = (all || [{ label: '全部', value: '' }]).concat(selData.options);
    }
    return selData;
  };

  /**
   * 远程搜索更新select内的option
   * @param apiFunc 接口api 必传
   * @param params 接口调用参数 必传
   * @param selId 选中id
   * @param selVal 选中值
   * @param keyword 搜索关键字
   * @returns
   */
  const remoteSearchSelOption = async (
    apiFunc: Promise<any>,
    params: any,
    selId: string,
    selVal: string,
    keyword: string | undefined
  ) => {
    const optionsAll: any = ref([]);
    if (!keyword && selVal) {
      params[selId] = selVal;
      const { options } = await getSelOption(apiFunc, params);
      optionsAll.value = options;
      delete params[selId];
    }
    const { options } = await getSelOption(apiFunc, params);
    optionsAll.value = merge(optionsAll.value, options);
    return optionsAll.value;
  };

  return {
    getSelOption,
    remoteSearchSelOption
  };
}
