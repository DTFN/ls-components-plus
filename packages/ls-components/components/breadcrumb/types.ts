import { buildProps } from '@cpo/_utils/runtime';

export type DefineListType = {
  title: string;
  name: string;
  link?: string;
  path?: string;
  query?: any;
}[];

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
