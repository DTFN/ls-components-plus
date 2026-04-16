/**
 * @file 描述列表组件类型定义
 * @description 定义描述列表组件的props类型和数据结构
 */

import type { IconConfigType } from '@cpo/_types'
import type { PropType } from 'vue'
import { buildProps } from '@cpo/_utils/runtime'

/**
 * 描述列表项类型
 * @typedef {object} DescriptionsListItemType
 * @property {string} label - 左侧标签文本
 * @property {string|number} value - 右侧展示值
 * @property {IconConfigType} [iconConfig] - 标签前图标配置，结构参考 `LSIcon`
 * @property {boolean} [hide] - 是否隐藏当前描述项
 * @property {'date'|'select'|'slot'|string} [type] - 展示类型；默认按普通文本渲染，`date` 为日期格式化，`select` 为映射取值，`slot` 为插槽渲染
 * @property {string} [format] - `type='date'` 时的日期格式，默认 `YYYY-MM-DD HH:mm:ss`
 * @property {string} [slotName] - `type='slot'` 时使用的插槽名称
 * @property {object} [propMap] - `type='select'` 时的值映射对象
 * @property {string|number} [labelWidth] - 当前项 label 宽度
 */

/**
 * 描述列表类型
 * @typedef {Array<DescriptionsListItemType>} DescriptionsListType
 */
export type DescriptionsListType = {
  label: string
  value: string | number
  iconConfig?: IconConfigType
  hide?: boolean
  type?: string
  format?: string
  slotName?: string
  propMap?: {
    [key: string]: {
      label: string
      value?: string | number
    }
  }
  labelWidth?: string | number
}[]

/**
 * 描述列表组件 props
 * @typedef {object} lsDescProp
 * @property {string} labelColor - label 文本颜色，默认为 ''
 * @property {string} labelBgColor - label 区域背景色，默认为 '#e2edff'
 * @property {DescriptionsListType} list - 描述项数据列表
 * @property {boolean} showZero - 数值为 0 时是否展示，默认为 false
 */
export const lsDescProp = buildProps({
  /** label字体颜色 */
  labelColor: {
    type: String,
    default: '',
  },
  /** label展示区域背景色 */
  labelBgColor: {
    type: String,
    default: '#e2edff',
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
    default: () => [],
  },
  /** 数值为0是否展示 */
  showZero: {
    type: Boolean,
    default: false,
  },
})
