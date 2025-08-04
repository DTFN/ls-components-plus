import { buildProps } from '@cpo/_utils/runtime';
import { IconConfigType } from '@cpo/_types';

export type DescriptionsListType = {
  label: string;
  value: string | number;
  iconConfig?: IconConfigType;
  hide?: boolean;
  type?: string;
  format?: string;
  slotName?: string;
  propMap?: {
    [key: string]: {
      label: string;
      value?: string | number;
    };
  };
}[];

export const lsDescProp = buildProps({
  // label字体颜色
  labelColor: {
    type: String,
    default: ''
  },
  // label展示区域背景色
  labelBgColor: {
    type: String,
    default: '#e2edff'
  },
  // label展示区域宽度
  labelWidth: {
    type: String,
    default: ''
  },
  /**
   * 数据
   *  type: 默认文本， date：时间， select：单复选， slot：自定义例如table
   *        icon：label前面展示icon图标
   *            iconType：默认el-icon，iconSize:大小，iconColor:颜色 ； 2：iconify， iconColor:颜色 iconWidth：宽，iconHeight：高
   */
  list: {
    type: Array as PropType<DescriptionsListType>,
    default: () => []
  },
  // 数值为0，是否展示
  showZero: {
    type: Boolean,
    default: false
  }
});
