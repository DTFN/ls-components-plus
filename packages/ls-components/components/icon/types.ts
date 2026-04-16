/**
 * @file 图标组件类型定义
 * @description 定义图标组件的props类型和图标配置接口
 */

import { buildProps } from '@cpo/_utils/runtime'

/**
 * 图标配置类型
 * @typedef {object} IconConfigType
 * @property {string|number} [type] - 图标类型；空值表示 `element-plus` 图标，`1` 表示 `iconify`，`2` 表示 `img/svg`
 * @property {string|object} name - 图标名称或对象；可传 `element-plus` 图标名、iconify 图标名、`img` 或 SVG 资源对象
 * @property {string} [color] - 图标颜色
 * @property {string|number} [width] - 图标宽度，主要用于 `iconify` 与 `type=2`
 * @property {string|number} [height] - 图标高度，主要用于 `iconify` 与 `type=2`
 * @property {string|number} [size] - 图标大小，仅默认 `element-plus` 图标模式使用
 * @property {string} [src] - 图片地址；当 `type=2` 且使用 `img` 渲染时生效
 * @property {string|number} [symbolId] - 预留的 SVG symbol 标识字段；当前 `Index.vue` 未消费
 */
export interface IconConfigType {
  type?: string | number
  name: string | object
  color?: string
  width?: string | number
  height?: string | number
  size?: string | number
  src?: string
}

/**
 * 图标组件props
 * @typedef {object} lsIconProps
 * @property {string|number} type - 图标类型：1=iconify, 2=svg, 默认=el-icon，默认为''
 * @property {string|object} name - 图标名称或对象，默认为''
 * @property {string} color - 图标颜色，默认为''
 * @property {string|number} width - 图标宽度，默认为'16'
 * @property {string|number} height - 图标高度，默认为'16'
 * @property {string|number} size - 图标大小（适用于el-icon），默认为'16'
 * @property {string} src - 图标源地址，默认为''
 * @property {string|number} symbolId - 图标symbolId，默认为''
 */
export const iconProps = {
  /** 图标类型：1=iconify, 2=svg, 默认=el-icon */
  type: {
    type: [Number, String],
    default: '',
  },
  /** 图标名称或对象 */
  name: {
    type: [String, Object],
    default: '',
  },
  /** 图标颜色 */
  color: {
    type: String,
    default: '',
  },
  /** 图标宽度 */
  width: {
    type: [String, Number],
    default: '16',
  },
  /** 图标高度 */
  height: {
    type: [String, Number],
    default: '16',
  },
  /** 图标大小（适用于el-icon） */
  size: {
    type: [String, Number],
    default: '16',
  },
  /** 图标源地址 */
  src: {
    type: String,
    default: '',
  },
  /** 预留的 SVG symbol 标识字段；当前 `Index.vue` 未消费 */
  symbolId: {
    type: [String, Number],
    default: '',
  },
}

export const lsIconProps = buildProps(iconProps)
