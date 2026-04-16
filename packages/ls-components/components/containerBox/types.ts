/**
 * @file 容器盒子组件类型定义
 * @description 定义容器盒子组件的props类型
 */

import { buildProps } from '@cpo/_utils/runtime'

/**
 * 容器盒子组件props
 * @typedef {object} lsContainerBoxProps
 * @property {number} width - 宽度，默认为1920
 * @property {number} height - 高度，默认为1080
 */
export const lsContainerBoxProps = buildProps({
  /** 宽度 */
  width: {
    type: Number,
    default: 1920,
  },
  /** 高度 */
  height: {
    type: Number,
    default: 1080,
  },
})
