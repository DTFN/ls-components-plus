/**
 * @file 确认框组件类型定义
 * @description 定义确认框组件的props类型和事件
 */

import type { PropType } from 'vue'
import { buildProps } from '@cpo/_utils/runtime'

/**
 * 确认框类型
 * @typedef {'' | 'success' | 'info' | 'warning' | 'error'} ConfirmType
 */
export type ConfirmType = '' | 'success' | 'info' | 'warning' | 'error'

/**
 * 确认框组件 props
 * @typedef {object} lsConfirmProps
 * @property {string|object} title - 确认框标题，默认为 ''
 * @property {ConfirmType} type - 确认框状态类型，默认为 ''
 * @property {string|object|HTMLElement} message - 确认框内容，默认为 ''
 * @property {string} confirmBtnTxt - 确认按钮文案，默认为 '确定'
 * @property {string} cancelBtnTxt - 取消按钮文案，默认为 '取消'
 * @property {boolean} showCancelBtn - 是否显示取消按钮，默认为 true
 * @property {boolean} showConfirmBtn - 是否显示确认按钮，默认为 true
 * @property {boolean} center - 是否居中显示，默认为 false
 * @property {boolean} draggable - 是否允许拖拽，默认为 false
 * @property {boolean} useHtml - 是否按 HTML 字符串渲染内容，默认为 false
 * @property {boolean} showClose - 是否显示关闭按钮，默认为 true
 * @property {string} customClass - 自定义弹层类名，默认为 ''
 * @property {boolean} closeOnClickModal - 点击蒙层是否允许关闭，默认为 false
 * @property {boolean} closeOnPressEscape - 按 ESC 是否允许关闭，默认为 false
 * @property {string|HTMLElement} appendTo - 弹层挂载目标，默认为 ''
 * @property {Function|null} requestApi - 点击确认后执行的异步请求函数，默认为 null
 * @property {object} requestParams - 调用 `requestApi` 时携带的参数，默认为 {}
 * @property {object} icon - 自定义状态图标，默认为 {}
 * @property {object | null} closeIcon - 自定义关闭图标，默认为 null
 */
export const lsConfirmProps = buildProps({
  /** 标题 */
  title: {
    type: [String, Object],
    default: '',
  },
  /** 确认框类型 */
  type: {
    type: String as PropType<ConfirmType>,
    default: '',
  },
  /** 消息内容 */
  message: {
    type: [String, Object, HTMLElement],
    default: '',
  },
  /** 确认按钮文字 */
  confirmBtnTxt: {
    type: String,
    default: '确定',
  },
  /** 取消按钮文字 */
  cancelBtnTxt: {
    type: String,
    default: '取消',
  },
  /** 是否显示取消按钮 */
  showCancelBtn: {
    type: Boolean,
    default: true,
  },
  /** 是否显示确认按钮 */
  showConfirmBtn: {
    type: Boolean,
    default: true,
  },
  /** 是否居中显示 */
  center: {
    type: Boolean,
    default: false,
  },
  /** 是否可拖拽 */
  draggable: {
    type: Boolean,
    default: false,
  },
  /** 是否使用HTML内容 */
  useHtml: {
    type: Boolean,
    default: false,
  },
  /** 是否显示关闭按钮 */
  showClose: {
    type: Boolean,
    default: true,
  },
  /** 自定义样式类名 */
  customClass: {
    type: String,
    default: '',
  },
  /** 点击遮罩是否关闭 */
  closeOnClickModal: {
    type: Boolean,
    default: false,
  },
  /** 按ESC键是否关闭 */
  closeOnPressEscape: {
    type: Boolean,
    default: false,
  },
  /** 挂载元素 */
  appendTo: {
    type: [String, HTMLElement],
    default: '',
  },
  /** 请求API */
  requestApi: {
    type: [Function, null],
    default: null,
  },
  /** 请求参数 */
  requestParams: {
    type: Object,
    default: () => ({}),
  },
  /** 图标配置 */
  icon: {
    type: Object,
    default: () => ({}),
  },
  /** 关闭图标配置 */
  closeIcon: {
    type: Object,
    default: null,
  },
})

/**
 * 组件事件名：`onConfirm` 为确认事件，`onCancel` 为取消/关闭事件。
 */
export const emitNames = ['onConfirm', 'onCancel']
