/**
 * @file 按钮组件类型定义
 * @description 定义按钮组件和按钮组组件的props类型
 */

import type { IconConfigType } from '@cpo/_types'
import type { PropType } from 'vue'
import { buildProps } from '@cpo/_utils/runtime'

/**
 * 按钮组件props
 * @typedef {object} lsBtnProp
 * @property {IconConfigType} iconConfig - 图标配置，参考LSIcon配置
 */
export const lsBtnProp = buildProps({
  /** 图标配置，参考LSIcon配置 */
  iconConfig: {
    type: Object as PropType<IconConfigType>,
    default: () => ({}),
  },
})

/**
 * 按钮组组件 props
 * @typedef {object} lsBtnGroupProp
 * @property {string} separator - 按钮之间的分隔符文本，默认为 ''
 * @property {string} separatorColor - 分隔符颜色，默认为 '#333'
 * @property {string|number} separatorSize - 分隔符字号，默认为 '12'
 */
export const lsBtnGroupProp = buildProps({
  /** 分隔符 */
  separator: {
    type: String,
    default: '',
  },
  /** 分隔符颜色 */
  separatorColor: {
    type: String,
    default: '#333',
  },
  /** 分隔符大小 */
  separatorSize: {
    type: [String, Number],
    default: '12',
  },
})
