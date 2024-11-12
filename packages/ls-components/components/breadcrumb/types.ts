import { buildProps } from '@cpo/_utils/runtime';

export const lsBreadcrumbProp = buildProps({
  // 自定义面包屑内容
  defineList: {
    type: Array,
    default: () => []
  }
});
