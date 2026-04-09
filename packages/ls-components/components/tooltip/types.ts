/**
 * @file 工具提示组件类型定义
 * @description 定义工具提示组件的props类型和接口
 */

import { buildProps } from '@cpo/_utils/runtime';

/**
 * 工具提示组件props
 * @typedef {Object} lsTooltipProps
 * @property {number|string} width - 提示框宽度，默认为'100%'
 * @property {number} fontSize - 字体大小
 * @property {number} lineClamp - 行数限制，默认为1
 * @property {number} lineHeight - 行高
 */
export const lsTooltipProps = buildProps({
  /** 提示框宽度 */
  width: {
    type: [Number, String],
    default: '100%'
  },
  /** 字体大小 */
  fontSize: {
    type: Number,
    default: null
  },
  /** 行数限制 */
  lineClamp: {
    type: Number,
    default: 1
  },
  /** 行高 */
  lineHeight: {
    type: Number,
    default: null
  }
});
