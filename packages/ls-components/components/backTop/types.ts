/**
 * @file 回到顶部组件类型定义
 * @description 定义回到顶部组件的props类型
 */

import { buildProps } from '@cpo/_utils/runtime';

/**
 * 回到顶部组件props
 * @typedef {Object} lsBackTopProps
 * @property {boolean} aniSwitch - 是否开启动画，默认为true
 */
export const lsBackTopProps = buildProps({
  /** 是否开启动画 */
  aniSwitch: {
    type: Boolean,
    default: true
  }
});
