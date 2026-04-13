/**
 * @file 图片查看器类型定义
 * @description 定义 `LSImage` 内部查看器使用的操作类型、props 与实例类型。
 */

import { buildProps, definePropType, mutable } from '@cpo/_utils/runtime';
import type { ExtractPropTypes } from 'vue';

import type LSImage from './Image.vue';

/**
 * 图片查看器操作类型：缩小、放大、顺时针旋转、逆时针旋转、下载。
 * @typedef {'zoomIn' | 'zoomOut' | 'clockwise' | 'anticlockwise' | 'download'} ImageViewerAction
 */
export type ImageViewerAction = 'zoomIn' | 'zoomOut' | 'clockwise' | 'anticlockwise' | 'download';

/**
 * 图片查看器 props
 * @typedef {Object} imageViewerProps
 * @property {string[]|string} source - 图片源，支持单张图片 URL 或图片 URL 数组，默认 `[]`
 * @property {number} [zIndex] - 预览层级；未传时由内部 `useZIndex` 动态生成
 * @property {number} initialIndex - 初始预览图片索引，默认 `0`
 * @property {boolean} infinite - 是否无限循环预览，默认 `true`
 * @property {boolean} hideOnClickModal - 点击遮罩层是否关闭预览，默认 `false`
 * @property {boolean} teleported - 是否使用 `Teleport` 挂载到 `body`，默认 `false`
 * @property {boolean} closeOnPressEscape - 按下 `ESC` 是否关闭预览，默认 `true`
 * @property {Function} [onClose] - 关闭预览时的回调函数
 * @property {number|string} zoomSize - 对外暴露的缩放尺寸配置，默认 `1.5`；当前 `Image.vue` 的缩放步长仍由内部动作逻辑控制
 */
export const imageViewerProps = buildProps({
  /** 图片源，支持单张图片 URL 或图片 URL 数组 */
  source: {
    type: [definePropType<string[]>(Array), String],
    default: () => mutable([] as const)
  },
  /** 预览层级；未传时由内部 `useZIndex` 动态生成 */
  zIndex: {
    type: Number
  },
  /** 初始预览图片索引 */
  initialIndex: {
    type: Number,
    default: 0
  },
  /** 是否无限循环预览 */
  infinite: {
    type: Boolean,
    default: true
  },
  /** 点击遮罩层是否关闭预览 */
  hideOnClickModal: {
    type: Boolean,
    default: false
  },
  /** 是否使用 `Teleport` 挂载到 `body` */
  teleported: {
    type: Boolean,
    default: false
  },
  /** 按下 `ESC` 是否关闭预览 */
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  /** 关闭预览时的回调函数 */
  onClose: Function,
  /** 对外暴露的缩放尺寸配置；当前缩放步长仍由内部动作逻辑控制 */
  zoomSize: {
    type: [Number, String],
    default: 1.5
  }
} as const);
export type ImageViewerProps = ExtractPropTypes<typeof imageViewerProps>;

/**
 * 图片查看器模式接口
 * @interface ImageViewerMode
 * @property {string} name - 当前显示模式名称，对应操作栏里的模式切换图标
 */
export interface ImageViewerMode {
  name: string;
}

/**
 * 图片查看器实例类型；可通过实例调用 `setActiveItem` 手动切换当前图片。
 * @typedef {InstanceType<typeof LSImage>} ImageViewerInstance
 */
export type ImageViewerInstance = InstanceType<typeof LSImage>;
