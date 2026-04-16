/**
 * @file Excel 预览组件类型定义
 * @description 定义 `LSXlsx` 内部渲染器使用的 props 与相关类型。
 */

import { buildProps } from '@cpo/_utils/runtime'

/**
 * Excel 渲染组件 props
 * @typedef {object} xlsxProps
 * @property {File|string} source Excel 文件源；类型层面兼容 `File` / `string`，但当前 `Xlsx.vue` 实际仅在 `File` 场景执行渲染
 * @property {boolean} hasPagination 大文件预览时是否启用分页渲染；当文件体积超过阈值时，可切换为分批分页渲染，默认 `false`
 * @property {Function} onClose 关闭预览时的回调函数
 */
export const xlsxProps = buildProps({
  /** Excel 文件源；类型层面兼容 `File` / `string`，当前渲染实现实际依赖 `File` */
  source: {
    type: [File, String],
    default: null,
  },
  /** 大文件预览时是否启用分页渲染；开启后超大文件会改为分批渲染 */
  hasPagination: {
    type: Boolean,
    default: false,
  },
  /** 关闭预览时的回调函数 */
  onClose: Function,
})

/**
 * 匹配结果接口
 * @interface Match
 * @property {object} start 开始位置
 * @property {number} start.idx 开始索引
 * @property {number} start.offset 开始偏移量
 * @property {object} end 结束位置
 * @property {number} end.idx 结束索引
 * @property {number} end.offset 结束偏移量
 * @property {string} str 匹配到的字符串
 * @property {number} oindex 原始索引
 */
export interface Match {
  start: {
    idx: number
    offset: number
  }
  end: {
    idx: number
    offset: number
  }
  str: string
  oindex: number
}
