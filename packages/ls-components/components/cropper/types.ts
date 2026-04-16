/**
 * @file 图片裁剪组件类型定义
 * @description 定义图片裁剪组件的props类型和事件
 */

import { buildProps } from '@cpo/_utils/runtime'

/**
 * 图片裁剪组件 props
 * @typedef {object} lsProps
 * @property {string} imgUrl - 待裁剪图片地址，默认为 ''
 * @property {string} fileName - 裁剪结果文件名，默认为时间戳加 `.png`
 * @property {number} limitMinSize - 最小裁剪尺寸，默认为 37
 * @property {'square'|'circular'} graphicsType - 裁剪形状：`square` 为方形，`circular` 为圆形，默认为 `square`
 * @property {'jpeg'|'png'|'webp'} outputType - 输出图片格式，默认为 `png`
 * @property {boolean} showPreview - 是否显示裁剪结果预览，默认为 true
 */
export const lsProps = buildProps({
  /** 图片URL */
  imgUrl: {
    type: String,
    default: '',
  },
  /** 文件名 */
  fileName: {
    type: String,
    default: `${new Date().getTime()}.png`,
  },
  /** 最小限制尺寸 */
  limitMinSize: {
    type: Number,
    default: 37,
  },
  /** 裁剪图形形状，square:方形、circular:圆形 */
  graphicsType: {
    type: String,
    default: 'square',
  },
  /** 输出图片格式，jpeg, png, webp */
  outputType: {
    type: String,
    default: 'png',
  },
  /** 是否显示预览 */
  showPreview: {
    type: Boolean,
    default: true,
  },
})

/**
 * 组件事件名：`onCropData` 为裁剪结果事件，`onCropError` 为裁剪异常事件。
 */
export const lsEmits = ['onCropData', 'onCropError']
