/**
 * @file 工具提示组件类型定义
 * @description 定义 `LSTooltip` 自有 props 类型；`content`、`placement`、`trigger` 等 `el-tooltip` 属性通过 `$attrs` 透传。
 */

import { buildProps } from '@cpo/_utils/runtime';

/**
 * @summary 工具提示组件 props
 *
 * @attr {number|string} width - 文案内容展示宽度；纯数字会转成 `px`，默认 `100%`
 * @attr {number|null} fontSize - 文案内容字体大小；不传时不额外设置字体大小，默认 `null`
 * @attr {number} lineClamp - 文案展示行数；大于 `1` 时按多行溢出逻辑判断，默认 `1`
 * @attr {number|null} lineHeight - 文案行高；多行省略场景通常需要传入，默认 `null`
 */
export const lsTooltipProps = buildProps({
  /** 文案内容展示宽度；纯数字会转成 `px` */
  width: {
    type: [Number, String],
    default: '100%'
  },
  /** 文案内容字体大小；不传时不额外设置字体大小 */
  fontSize: {
    type: Number,
    default: null
  },
  /** 文案展示行数；大于 `1` 时按多行溢出逻辑判断 */
  lineClamp: {
    type: Number,
    default: 1
  },
  /** 文案行高；多行省略场景通常需要传入 */
  lineHeight: {
    type: Number,
    default: null
  }
});
