/**
 * @file 图片裁剪组件类型定义
 * @description 定义图片裁剪组件的props类型和事件
 */

import { buildProps } from '@cpo/_utils/runtime';

/**
 * 图片裁剪组件props
 * @typedef {Object} lsProps
 * @property {string} imgUrl - 图片URL，默认为''
 * @property {string} fileName - 文件名，默认为时间戳.png
 * @property {number} limitMinSize - 最小限制尺寸，默认为37
 * @property {string} graphicsType - 裁剪图形形状，square:方形、circular:圆形，默认为'square'
 * @property {string} outputType - 输出图片格式，jpeg, png, webp，默认为'png'
 * @property {boolean} showPreview - 是否显示预览，默认为true
 */
export const lsProps = buildProps({
  /** 图片URL */
  imgUrl: {
    type: String,
    default: ''
  },
  /** 文件名 */
  fileName: {
    type: String,
    default: `${new Date().getTime()}.png`
  },
  /** 最小限制尺寸 */
  limitMinSize: {
    type: Number,
    default: 37
  },
  /** 裁剪图形形状，square:方形、circular:圆形 */
  graphicsType: {
    type: String,
    default: 'square'
  },
  /** 输出图片格式，jpeg, png, webp */
  outputType: {
    type: String,
    default: 'png'
  },
  /** 是否显示预览 */
  showPreview: {
    type: Boolean,
    default: true
  }
});

/**
 * 裁剪组件事件
 * @constant {Array<string>}
 * @property {string} onCropData - 裁剪数据事件
 * @property {string} onCropError - 裁剪错误事件
 */
export const lsEmits = ['onCropData', 'onCropError'];
