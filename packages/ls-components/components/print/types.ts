/**
 * @file 打印组件类型定义
 * @description 定义 `LSPrint` 对外公开的 props 类型。
 * @slot default - 需要打印的内嵌 HTML 内容通过默认插槽传入
 */

import { buildProps } from '@cpo/_utils/runtime';

/**
 * @summary 打印组件 props
 *
 * @attr {object} printObj - 打印对象参数配置，常用参数为 `id`，其他参数参考 `vue3-print-nb` 官方 API，默认 `{}`
 * @attr {string} content - 打印按钮禁用时，鼠标移入显示的提示文案，默认 `''`
 * @attr {string} btnTxt - 按钮文案，默认 `'打印'`
 * @attr {boolean} canPrint - 是否允许打印，默认 `true`
 */
export const lsPrintProps = buildProps({
  /** 打印对象参数配置，常用参数为 `id`，其他参数参考 `vue3-print-nb` 官方 API */
  printObj: {
    type: Object,
    default: () => ({})
  },
  /** 打印按钮禁用时，鼠标移入显示的提示文案 */
  content: {
    type: String,
    default: ''
  },
  /** 按钮文案 */
  btnTxt: {
    type: String,
    default: '打印'
  },
  /** 是否允许打印 */
  canPrint: {
    type: Boolean,
    default: true
  }
});
