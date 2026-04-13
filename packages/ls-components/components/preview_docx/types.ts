/**
 * @file Word文档预览组件类型定义
 * @description 定义Word文档预览组件的props类型和接口
 */

import { buildProps } from '@cpo/_utils/runtime';

/**
 * Word 文档渲染组件 props
 * @typedef {Object} docxProps
 * @property {ArrayBuffer|string} source - 文档数据源；类型层面兼容 `ArrayBuffer` / `string`，但当前 `Docx.vue` 实际仅在 `ArrayBuffer` 场景执行渲染
 * @property {Function} onClose - 关闭预览时的回调函数
 */
export const docxProps = buildProps({
  /** 文档数据源；类型层面兼容 `ArrayBuffer` / `string`，当前渲染实现实际依赖 `ArrayBuffer` */
  source: {
    type: [ArrayBuffer, String],
    default: null
  },
  /** 关闭预览时的回调函数 */
  onClose: Function
});
