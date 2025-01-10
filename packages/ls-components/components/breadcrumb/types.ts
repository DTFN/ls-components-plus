import { buildProps } from '@cpo/_utils/runtime';

export type BreadCrumpType = {
  title: string;
  name?: string;
  link?: string;
  query?: any;
};

export type BreadCrumpListType = BreadCrumpType[];

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
