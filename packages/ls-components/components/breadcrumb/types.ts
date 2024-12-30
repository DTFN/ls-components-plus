import { buildProps } from '@cpo/_utils/runtime';

export type BreadCrumpListType = {
  title: string;
  name?: string;
  link?: string;
  query?: any;
}[];

export const lsBreadcrumbProp = buildProps({
  // 自定义面包屑内容
  defineList: {
    type: Array as PropType<BreadCrumpListType>,
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
