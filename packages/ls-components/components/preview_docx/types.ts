/**
 * @file Word文档预览组件类型定义
 * @description 定义Word文档预览组件的props类型和接口
 */

import { buildProps } from '@cpo/_utils/runtime';

/**
 * Word文档预览组件props
 * @typedef {Object} docxProps
 * @property {ArrayBuffer|string} source - 文档数据源，可以是ArrayBuffer或字符串
 * @property {Function} onClose - 关闭事件回调函数
 */
export const docxProps = buildProps({
  /** 文档数据源，可以是ArrayBuffer或字符串 */
  source: {
    type: [ArrayBuffer, String],
    default: null
  },
  /** 关闭事件回调函数 */
  onClose: Function
});
