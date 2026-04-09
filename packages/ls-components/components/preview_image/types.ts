/**
 * @file 图片预览组件类型定义
 * @description 定义图片预览组件的props类型和接口
 */

import { buildProps, definePropType, mutable } from '@cpo/_utils/runtime';
import type { ExtractPropTypes } from 'vue';

import type LSImage from './Image.vue';

/**
 * 图片查看器操作类型
 * @typedef {'zoomIn' | 'zoomOut' | 'clockwise' | 'anticlockwise' | 'download'} ImageViewerAction
 */
export type ImageViewerAction = 'zoomIn' | 'zoomOut' | 'clockwise' | 'anticlockwise' | 'download';

/**
 * 图片查看器组件props
 * @typedef {Object} imageViewerProps
 * @property {string[]|string} source - 图片源，可以是字符串数组或单个字符串
 * @property {number} zIndex - z-index层级
 * @property {number} initialIndex - 初始索引，默认为0
 * @property {boolean} infinite - 是否无限循环，默认为true
 * @property {boolean} hideOnClickModal - 点击模态框是否隐藏，默认为false
 * @property {boolean} teleported - 是否使用teleport，默认为false
 * @property {boolean} closeOnPressEscape - 按ESC键是否关闭，默认为true
 * @property {Function} onClose - 关闭事件回调
 * @property {number|string} zoomSize - 缩放大小，默认为1.5
 */
export const imageViewerProps = buildProps({
  /** 图片源，可以是字符串数组或单个字符串 */
  source: {
    type: [definePropType<string[]>(Array), String],
    default: () => mutable([] as const)
  },
  /** z-index层级 */
  zIndex: {
    type: Number
  },
  /** 初始索引 */
  initialIndex: {
    type: Number,
    default: 0
  },
  /** 是否无限循环 */
  infinite: {
    type: Boolean,
    default: true
  },
  /** 点击模态框是否隐藏 */
  hideOnClickModal: {
    type: Boolean,
    default: false
  },
  /** 是否使用teleport */
  teleported: {
    type: Boolean,
    default: false
  },
  /** 按ESC键是否关闭 */
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  /** 关闭事件回调 */
  onClose: Function,
  /** 缩放大小 */
  zoomSize: {
    type: [Number, String],
    default: 1.5
  }
} as const);
export type ImageViewerProps = ExtractPropTypes<typeof imageViewerProps>;

/**
 * 图片查看器模式接口
 * @interface ImageViewerMode
 * @property {string} name - 模式名称
 */
export interface ImageViewerMode {
  name: string;
}

/**
 * 图片查看器实例类型
 * @typedef {InstanceType<typeof LSImage>} ImageViewerInstance
 */
export type ImageViewerInstance = InstanceType<typeof LSImage>;
