/**
 * @file 打印组件类型定义
 * @description 定义打印组件的props类型
 * @slot default - 需要打印的HTML内容通过slot传入
 */

import { buildProps } from '@cpo/_utils/runtime';

/**
 * 打印组件props
 * @typedef {Object} lsPrintProps
 * @property {Object} printObj - 打印配置对象，默认为{}
 * @property {string} content - 禁止使用时提示语，默认为''
 * @property {string} btnTxt - 按钮文案，默认为'打印'
 * @property {boolean} canPrint - 能否打印，默认为true
 */
export const lsPrintProps = buildProps({
  /** 打印配置对象 */
  printObj: {
    type: Object,
    default: () => ({})
  },
  /** 禁止使用时提示语 */
  content: {
    type: String,
    default: ''
  },
  /** 按钮文案 */
  btnTxt: {
    type: String,
    default: '打印'
  },
  /** 能否打印 */
  canPrint: {
    type: Boolean,
    default: true
  }
});
