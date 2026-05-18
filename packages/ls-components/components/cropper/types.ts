/**
 * @file 图片裁剪组件类型定义
 * @description 定义图片裁剪组件的 props 类型、裁剪结果类型和事件
 */

import { buildProps, definePropType } from '@cpo/_utils/runtime'

export type LSCropperGraphicsType = 'square' | 'circular'

export type LSCropperOutputType = 'jpeg' | 'png' | 'webp'

export type LSCropperPreviewFit = 'contain' | 'cover'

export interface LSCropperCropData {
  file: File
  url: string
  data: unknown
  width: number
  height: number
  type: string
}

/**
 * 图片裁剪组件 props
 * @typedef {object} lsProps
 * @property {string} imgUrl - 待裁剪图片地址，默认为 ''
 * @property {string} fileName - 裁剪结果文件名，默认使用时间戳加输出格式后缀
 * @property {number} limitMinSize - 最小裁剪尺寸，默认为 37
 * @property {'square'|'circular'} graphicsType - 裁剪形状：`square` 为方形，`circular` 为圆形，默认为 `square`
 * @property {'jpeg'|'png'|'webp'} outputType - 输出图片格式，默认为 `png`
 * @property {number} outputQuality - 输出图片质量，传给 `canvas.toBlob`，默认为 0.92
 * @property {boolean} showPreview - 是否显示裁剪结果预览，默认为 true
 * @property {string} previewTitle - 预览区标题，默认为 `裁剪预览`
 * @property {string} previewTip - 预览区空态提示，默认为 `调整裁剪区域后实时生成结果`
 * @property {'contain'|'cover'} previewFit - 预览图填充方式，默认为 `contain`
 * @property {number|string} cropperHeight - 裁剪区域高度；传数字时自动追加 `px`，默认为 300
 * @property {number|string} previewHeight - 预览区域高度；传数字时自动追加 `px`，默认为 160
 * @property {number} previewDelay - 实时预览生成防抖延迟，单位毫秒，默认为 80
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
    default: '',
  },
  /** 最小限制尺寸 */
  limitMinSize: {
    type: Number,
    default: 37,
  },
  /** 裁剪图形形状，square:方形、circular:圆形 */
  graphicsType: {
    type: definePropType<LSCropperGraphicsType>(String),
    values: ['square', 'circular'],
    default: 'square',
  },
  /** 输出图片格式，jpeg, png, webp */
  outputType: {
    type: definePropType<LSCropperOutputType>(String),
    values: ['jpeg', 'png', 'webp'],
    default: 'png',
  },
  /** 输出图片质量 */
  outputQuality: {
    type: Number,
    default: 0.92,
  },
  /** 是否显示预览 */
  showPreview: {
    type: Boolean,
    default: true,
  },
  /** 预览区标题 */
  previewTitle: {
    type: String,
    default: '裁剪预览',
  },
  /** 预览区空态提示 */
  previewTip: {
    type: String,
    default: '调整裁剪区域后实时生成结果',
  },
  /** 预览图填充方式 */
  previewFit: {
    type: definePropType<LSCropperPreviewFit>(String),
    values: ['contain', 'cover'],
    default: 'contain',
  },
  /** 裁剪区域高度 */
  cropperHeight: {
    type: definePropType<number | string>([Number, String]),
    default: 300,
  },
  /** 预览区域高度 */
  previewHeight: {
    type: definePropType<number | string>([Number, String]),
    default: 160,
  },
  /** 实时预览生成防抖延迟 */
  previewDelay: {
    type: Number,
    default: 80,
  },
})

/**
 * 组件事件名：`onCropData` 为裁剪结果事件，`onCropError` 为裁剪异常事件。
 */
export const lsEmits = ['onCropData', 'onCropError'] as const
