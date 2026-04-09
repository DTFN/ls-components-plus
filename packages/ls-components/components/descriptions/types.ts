/**
 * @file 描述列表组件类型定义
 * @description 定义描述列表组件的props类型和数据结构
 */

import { buildProps } from '@cpo/_utils/runtime';
import { IconConfigType } from '@cpo/_types';
import type { PropType } from 'vue';

/**
 * 描述列表项类型
 * @typedef {Object} DescriptionsListItemType
 * @property {string} label - 标签文字
 * @property {string|number} value - 值
 * @property {IconConfigType} [iconConfig] - 图标配置
 * @property {boolean} [hide] - 是否隐藏
 * @property {string} [type] - 类型，默认文本，date：时间，select：单复选，slot：自定义，icon：图标
 * @property {string} [format] - 格式化字符串
 * @property {string} [slotName] - 插槽名称
 * @property {Object} [propMap] - 属性映射
 * @property {string|number} [labelWidth] - 标签宽度
 */

/**
 * 描述列表类型
 * @typedef {Array<DescriptionsListItemType>} DescriptionsListType
 */
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
  labelWidth?: string | number;
}[];

/**
 * 描述列表组件props
 * @typedef {Object} lsDescProp
 * @property {string} labelColor - label字体颜色，默认为''
 * @property {string} labelBgColor - label展示区域背景色，默认为'#e2edff'
 * @property {DescriptionsListType} list - 数据列表
 * @property {boolean} showZero - 数值为0是否展示，默认为false
 */
export const lsDescProp = buildProps({
  /** label字体颜色 */
  labelColor: {
    type: String,
    default: ''
  },
  /** label展示区域背景色 */
  labelBgColor: {
    type: String,
    default: '#e2edff'
  },
  /**
   * 数据列表
   * @example
   * [{
   *   label: '用户名',
   *   value: 'admin',
   *   type: 'text'
   * }, {
   *   label: '创建时间',
   *   value: '2024-01-01',
   *   type: 'date',
   *   format: 'YYYY-MM-DD'
   * }]
   */
  list: {
    type: Array as PropType<DescriptionsListType>,
    default: () => []
  },
  /** 数值为0是否展示 */
  showZero: {
    type: Boolean,
    default: false
  }
});
