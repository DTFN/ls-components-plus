/**
 * @file 表单组件类型定义
 * @description 定义表单组件和表单项组件的props类型
 */

import { buildProps } from '@cpo/_utils/runtime'

/**
 * 表单组件props
 * @typedef {object} lsFormProps
 * @property {object} formData - 表单数据对象，必填
 * @property {Array<any>} formItems - 表单项配置数组，必填
 * @property {number} column - 表单列数，默认为1
 * @property {boolean} loading - 加载状态，默认为false
 * @property {boolean} showBtnLoading - 是否显示按钮加载状态，默认为true
 * @property {boolean} read - 是否只读模式，默认为false
 * @property {boolean} disabled - 是否禁用，默认为false
 * @property {boolean} showButtons - 是否显示按钮，默认为true
 * @property {string} buttonsClass - 按钮区域样式类名
 * @property {boolean} buttonsLeft - 按钮是否靠左对齐，默认为false
 * @property {boolean} showReset - 是否显示重置按钮，默认为true
 * @property {boolean} showSubmit - 是否显示提交按钮，默认为true
 * @property {string} confirmText - 确认按钮文字，默认为'确认'
 * @property {string} resetText - 重置按钮文字，默认为'重置'
 * @property {string} confirmClassName - 确认按钮样式类名
 * @property {boolean} colon - 是否显示冒号，默认为false
 * @property {string} labelEmpty - 空值占位符，默认为'--'
 * @property {boolean} hasDefReadStyle - 是否启用只读态默认展示样式，默认为false
 * @property {boolean} hideColumn - 是否隐藏当前表单项，默认为false
 */
export const lsFormProps = buildProps({
  /** 表单数据对象 */
  formData: {
    type: Object,
    default: () => ({}),
    required: true,
  },
  /** 表单项配置数组 */
  formItems: {
    type: Array<any>,
    default: () => [],
    required: true,
  },
  /** 表单列数 */
  column: {
    type: Number,
    default: 1,
  },
  /** 加载状态 */
  loading: {
    type: Boolean,
    default: false,
  },
  /** 是否显示按钮加载状态 */
  showBtnLoading: {
    type: Boolean,
    default: true,
  },
  /** 是否只读模式 */
  read: {
    type: Boolean,
    default: false,
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** 是否显示按钮 */
  showButtons: {
    type: Boolean,
    default: true,
  },
  /** 按钮区域样式类名 */
  buttonsClass: {
    type: String,
    default: '',
  },
  /** 按钮是否靠左对齐 */
  buttonsLeft: {
    type: Boolean,
    default: false,
  },
  /** 是否显示重置按钮 */
  showReset: {
    type: Boolean,
    default: true,
  },
  /** 是否显示提交按钮 */
  showSubmit: {
    type: Boolean,
    default: true,
  },
  /** 确认按钮文字 */
  confirmText: {
    type: String,
    default: '确认',
  },
  /** 重置按钮文字 */
  resetText: {
    type: String,
    default: '重置',
  },
  /** 确认按钮样式类名 */
  confirmClassName: {
    type: String,
    default: '',
  },
  /** 是否显示冒号 */
  colon: {
    type: Boolean,
    default: false,
  },
  /** 空值占位符 */
  labelEmpty: {
    type: String,
    default: '--',
  },
  /** 是否启用只读态默认展示样式 */
  hasDefReadStyle: {
    type: Boolean,
    default: false,
  },
  /** 根级隐藏列开关；当前 `Form.vue` 未消费，隐藏项请在 `formItems` 单项上配置 */
  hideColumn: {
    type: Boolean,
    default: false,
  },
} as const)

/**
 * 表单项组件props
 * @typedef {object} lsFormItemProps
 * @property {boolean} isValue - 是否为值类型，默认为false
 * @property {string | number | boolean | object | Array} value - 值
 * @property {string} type - 表单项类型
 * @property {string} label - 标签文字
 * @property {string|Array<string>} prop - 字段名
 * @property {object} rules - 验证规则
 * @property {string} className - 样式类名
 * @property {string} labelClass - 标签样式类名
 * @property {string} labelIconClass - 标签图标样式类名
 * @property {string} tooltip - 提示信息
 * @property {Array<any>} options - 选项数据
 * @property {boolean} trim - 是否去除首尾空格，默认为true
 * @property {object} attrs - 额外属性
 * @property {object} listeners - 事件监听器
 * @property {boolean} colon - 是否显示冒号，默认为false
 * @property {boolean} disabled - 是否禁用，默认为false
 * @property {boolean} read - 是否只读，默认为false
 * @property {string} labelEmpty - 空值占位符，默认为'--'
 * @property {boolean} labelNumber - 标签是否为数字，默认为false
 * @property {string} dateFormat - 日期格式，默认为'YYYY-MM-DD HH:mm:ss'
 * @property {Function} formatReadValue - 只读值格式化函数
 * @property {string} rangeSeparator - 范围分隔符，默认为'~'
 * @property {Array<string>} rangeProps - 范围属性，默认为['start', 'end']
 * @property {string} radioType - 单选类型
 * @property {boolean} isRow - 是否为行布局，默认为false
 * @property {boolean} selectAll - 是否显示全选，默认为true
 * @property {number} index - 索引，默认为0
 * @property {string} slotKey - 插槽key
 * @property {boolean} levelMatch - 是否级联匹配，默认为false
 * @property {boolean} manualValidate - 是否手动验证，默认为false
 */
export const lsFormItemProps = buildProps({
  /** 是否为值类型 */
  isValue: {
    type: Boolean,
    default: false,
  },
  /** 值 */
  value: {
    type: [String, Number, Boolean, Object, Array],
  },
  /** 表单项类型 */
  type: {
    type: String,
    values: [
      'label',
      'input',
      'textarea',
      'number',
      'radio',
      'checkbox',
      'select',
      'date',
      'datetimerange',
      'timePicker',
      'timeSelect',
      'cascader',
      'multipleCascader',
      'switch',
      'inputRange',
      'inputNumberRange',
      'slot',
      'itemSlot',
    ],
  },
  /** 标签文字 */
  label: {
    type: String,
    default: '',
  },
  /** 字段名 */
  prop: {
    type: [String, Array<string>],
    default: '',
  },
  /** 验证规则 */
  rules: {
    type: Object,
    default: () => {},
  },
  /** 样式类名 */
  className: {
    type: String,
    default: '',
  },
  /** 标签样式类名 */
  labelClass: {
    type: String,
    default: '',
  },
  /** 标签图标样式类名 */
  labelIconClass: {
    type: String,
    default: '',
  },
  /** 提示信息 */
  tooltip: {
    type: String,
    default: '',
  },
  /** 选项数据 */
  options: {
    type: Array<any>,
    default: () => [],
  },
  /** 是否去除首尾空格 */
  trim: {
    type: Boolean,
    default: true,
  },
  /** 额外属性 */
  attrs: {
    type: Object,
    default: () => {},
  },
  /** 事件监听器 */
  listeners: {
    type: Object,
    default: () => {},
  },
  /** 是否显示冒号 */
  colon: {
    type: Boolean,
    default: false,
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 是否只读 */
  read: {
    type: Boolean,
    default: false,
  },
  /** 空值占位符 */
  labelEmpty: {
    type: String,
    default: '--',
  },
  /** 标签是否为数字 */
  labelNumber: {
    type: Boolean,
    default: false,
  },
  /** 日期格式 */
  dateFormat: {
    type: String,
    default: 'YYYY-MM-DD HH:mm:ss',
  },
  /** 只读值格式化函数 */
  formatReadValue: {
    type: Function,
  },
  /** 范围分隔符 */
  rangeSeparator: {
    type: String,
    default: '~',
  },
  /** 范围属性 */
  rangeProps: {
    type: Array<string>,
    default: () => ['start', 'end'],
  },
  /** 单选类型 */
  radioType: {
    type: String,
    default: '',
  },
  /** 是否为行布局 */
  isRow: {
    type: Boolean,
    default: false,
  },
  /** 是否显示全选 */
  selectAll: {
    type: Boolean,
    default: true,
  },
  /** 索引 */
  index: {
    type: Number,
    default: 0,
  },
  /** 插槽key */
  slotKey: {
    type: String,
    default: '',
  },
  /** 是否级联匹配 */
  levelMatch: {
    type: Boolean,
    default: false,
  },
  /** 是否手动验证 */
  manualValidate: {
    type: Boolean,
    default: false,
  },
} as const)
