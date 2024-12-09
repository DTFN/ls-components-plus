import { buildProps } from '@cpo/_utils/runtime';

export const lsBreadcrumbProp = buildProps({
  // 自定义面包屑内容
  defineList: {
    type: Array,
    default: () => []
  },
  showPos: {
    type: Boolean,
    default: true
  },
  posTitle: {
    type: String,
    default: '当前位置'
  }
});
