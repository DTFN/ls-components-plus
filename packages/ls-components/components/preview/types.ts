/**
 * @file 通用预览组件类型定义
 * @description 定义通用预览组件的props类型，支持图片、Word、Excel、PDF等多种格式
 */

import type { PageViewport } from 'pdfjs-dist'
import type {
  DocumentInitParameters,
  OnProgressParameters,
  PDFDataRangeTransport,
  TextContent,
  TypedArray,
} from 'pdfjs-dist/types/src/display/api'
import type { Metadata } from 'pdfjs-dist/types/src/display/metadata'
import type { ExtractPropTypes, PropType } from 'vue'
import type LSImage from './components/Image.vue'
import { buildProps, definePropType, mutable } from '@cpo/_utils/runtime'

/**
 * 预览组件事件名
 * @constant {Array<string>}
 * @property {string} update:source - 更新源事件
 * @property {string} loadComplete - 加载完成事件
 * @property {string} loadError - 加载错误事件
 */
const emitNames = ['update:source', 'loadComplete', 'loadError']

export { emitNames }

/**
 * 图片查看器操作类型
 * @typedef {'zoomIn' | 'zoomOut' | 'clockwise' | 'anticlockwise'} ImageViewerAction
 */
export type ImageViewerAction = 'zoomIn' | 'zoomOut' | 'clockwise' | 'anticlockwise'

/**
 * 图片查看器props
 * @typedef {object} imageViewerProps
 * @property {string[]|string} source - 图片源
 * @property {number} zIndex - z-index层级
 * @property {number} initialIndex - 初始索引，默认为0
 * @property {boolean} infinite - 是否无限循环，默认为true
 * @property {boolean} hideOnClickModal - 点击模态框是否隐藏，默认为false
 * @property {boolean} teleported - 是否使用teleport，默认为false
 * @property {boolean} closeOnPressEscape - 按ESC键是否关闭，默认为true
 * @property {Function} onClose - 关闭回调
 * @property {number|string} zoomSize - 缩放大小，默认为1.5
 */
export const imageViewerProps = buildProps({
  source: {
    type: [definePropType<string[]>(Array), String],
    default: () => mutable([] as const),
  },
  zIndex: {
    type: Number,
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
  infinite: {
    type: Boolean,
    default: true,
  },
  hideOnClickModal: {
    type: Boolean,
    default: false,
  },
  teleported: {
    type: Boolean,
    default: false,
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
  onClose: Function,
  zoomSize: {
    type: [Number, String],
    default: 1.5,
  },
} as const)

export type ImageViewerProps = ExtractPropTypes<typeof imageViewerProps>

/**
 * 预览组件事件
 * @constant {Array<string>}
 * @property {string} close - 关闭事件
 * @property {string} switch - 切换事件
 */
export const previewEmits = ['close', 'switch'].concat(emitNames)

export type PreviewEmits = typeof previewEmits

/**
 * 图片查看器模式接口
 * @interface ImageViewerMode
 * @property {string} name - 模式名称
 */
export interface ImageViewerMode {
  name: string
}

/**
 * 图片查看器实例类型
 * @typedef {InstanceType<typeof LSImage>} ImageViewerInstance
 */
export type ImageViewerInstance = InstanceType<typeof LSImage>

/**
 * Word文档预览props
 * @typedef {object} docxProps
 * @property {ArrayBuffer|string} source - 文档源
 * @property {Function} onClose - 关闭回调
 */
// docx
export const docxProps = buildProps({
  source: {
    type: [ArrayBuffer, String],
    default: null,
  },
  onClose: Function,
})

/**
 * Excel文档预览props
 * @typedef {object} xlsxProps
 * @property {File|string} source - Excel源
 * @property {Function} onClose - 关闭回调
 */
// xlsx
export const xlsxProps = buildProps({
  source: {
    type: [File, String],
    default: null,
  },
  onClose: Function,
})

/**
 * 匹配接口
 * @interface Match
 * @property {object} start - 开始位置
 * @property {number} start.idx - 索引
 * @property {number} start.offset - 偏移量
 * @property {object} end - 结束位置
 * @property {number} end.idx - 索引
 * @property {number} end.offset - 偏移量
 * @property {string} str - 匹配字符串
 * @property {number} oindex - 原始索引
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

/**
 * 加载事件负载
 * @typedef {PageViewport} LoadedEventPayload
 */
export type LoadedEventPayload = PageViewport

/**
 * 注释事件负载接口
 * @interface AnnotationEventPayload
 * @property {string} type - 类型
 * @property {any} data - 数据
 */
export interface AnnotationEventPayload {
  type: string
  data: any
}

/**
 * 高亮事件负载接口
 * @interface HighlightEventPayload
 * @property {Match[]} matches - 匹配数组
 * @property {number} page - 页码
 * @property {TextContent} textContent - 文本内容
 * @property {HTMLElement[]} textDivs - 文本div元素
 */
export interface HighlightEventPayload {
  matches: Match[]
  page: number
  textContent: TextContent
  textDivs: HTMLElement[]
}

/**
 * 文本层加载事件负载接口
 * @interface TextLayerLoadedEventPayload
 * @property {HTMLElement[]} textDivs - 文本div元素
 * @property {TextContent|undefined} textContent - 文本内容
 */
export interface TextLayerLoadedEventPayload {
  textDivs: HTMLElement[]
  textContent: TextContent | undefined
}

/**
 * 水印选项接口
 * @interface WatermarkOptions
 * @property {number} [columns] - 列数
 * @property {number} [rows] - 行数
 * @property {number} [rotation] - 旋转角度
 * @property {number} [fontSize] - 字体大小
 * @property {string} [color] - 颜色
 */
export interface WatermarkOptions {
  columns?: number
  rows?: number
  rotation?: number
  fontSize?: number
  color?: string
}

/**
 * 高亮选项接口
 * @interface HighlightOptions
 * @property {boolean} [ignoreCase] - 忽略大小写
 * @property {boolean} [completeWords] - 完整单词
 */
export interface HighlightOptions {
  ignoreCase?: boolean
  completeWords?: boolean
}

/**
 * 基础接口
 * @interface Base
 * @property {T} type - 类型
 * @property {S} spec - 规格
 */
export interface Base<T, S> {
  type: T
  spec: S
}

/**
 * PDF位置类型定义（来自PDF 1.7参考手册）
 * 坐标原点为页面左下角
 */

/**
 * XYZ位置类型
 * @typedef {Base<'XYZ', [left: number, top: number, zoom: number]>} XYZ
 */
export type XYZ = Base<'XYZ', [left: number, top: number, zoom: number]>

/**
 * Fit位置类型
 * @typedef {Base<'Fit', []>} Fit
 */
export type Fit = Base<'Fit', []>

/**
 * FitH位置类型
 * @typedef {Base<'FitH', [top: number]>} FitH
 */
export type FitH = Base<'FitH', [top: number]>

/**
 * FitV位置类型
 * @typedef {Base<'FitV', [left: number]>} FitV
 */
export type FitV = Base<'FitV', [left: number]>

/**
 * FitR位置类型
 * @typedef {Base<'FitR', [left: number, bottom: number, right: number, top: number]>} FitR
 */
export type FitR = Base<'FitR', [left: number, bottom: number, right: number, top: number]>

/**
 * FitB位置类型
 * @typedef {Base<'FitB', []>} FitB
 */
export type FitB = Base<'FitB', []>

/**
 * FitBH位置类型
 * @typedef {Base<'FitBH', [top: number]>} FitBH
 */
export type FitBH = Base<'FitBH', [top: number]>

/**
 * FitBV位置类型
 * @typedef {Base<'FitBV', [left: number]>} FitBV
 */
export type FitBV = Base<'FitBV', [left: number]>

/**
 * PDF位置类型
 * @typedef {XYZ | Fit | FitH | FitV | FitR | FitB | FitBH | FitBV} PDFLocation
 */
export type PDFLocation = XYZ | Fit | FitH | FitV | FitR | FitB | FitBH | FitBV

/**
 * PDF目标接口
 * @interface PDFDestination
 * @property {number} pageIndex - 页面索引
 * @property {PDFLocation} location - 位置
 */
export interface PDFDestination {
  pageIndex: number
  location: PDFLocation
}

/**
 * 进度回调函数类型
 * @typedef {Function} OnProgressCallback
 * @param {OnProgressParameters} progressData - 进度数据
 */
export type OnProgressCallback = (progressData: OnProgressParameters) => void

/**
 * 更新密码函数类型
 * @typedef {Function} UpdatePasswordFn
 * @param {string} newPassword - 新密码
 */
export type UpdatePasswordFn = (newPassword: string) => void

/**
 * 密码回调函数类型
 * @typedef {Function} OnPasswordCallback
 * @param {UpdatePasswordFn} updatePassword - 更新密码函数
 * @param {any} reason - 原因
 */
export type OnPasswordCallback = (updatePassword: UpdatePasswordFn, reason: any) => void

/**
 * 错误回调函数类型
 * @typedef {Function} OnErrorCallback
 * @param {any} error - 错误
 */
export type OnErrorCallback = (error: any) => void

/**
 * PDF源类型
 * @typedef {string | URL | TypedArray | PDFDataRangeTransport | DocumentInitParameters | undefined | null} PDFSrc
 */
export type PDFSrc = string | URL | TypedArray | PDFDataRangeTransport | DocumentInitParameters | undefined | null

/**
 * PDF选项接口
 * @interface PDFOptions
 * @property {OnProgressCallback} [onProgress] - 进度回调
 * @property {OnPasswordCallback} [onPassword] - 密码回调
 * @property {OnErrorCallback} [onError] - 错误回调
 * @property {string} [password] - 密码
 */
export interface PDFOptions {
  onProgress?: OnProgressCallback
  onPassword?: OnPasswordCallback
  onError?: OnErrorCallback
  password?: string
}

/**
 * PDF元数据接口
 * @interface PDFInfoMetadata
 * @property {object} info - 信息
 * @property {Metadata} metadata - 元数据
 */
export interface PDFInfoMetadata {
  info: object
  metadata: Metadata
}

/**
 * PDF信息接口
 * @interface PDFInfo
 * @property {PDFInfoMetadata} metadata - PDF元数据
 * @property {Record<string, unknown>} attachments - 附件
 * @property {string[]|null} javascript - JavaScript
 * @property {any} outline - 大纲
 */
export interface PDFInfo {
  metadata: PDFInfoMetadata
  attachments: Record<string, unknown>
  javascript: string[] | null
  outline: any
}

/**
 * 预览类型
 * @typedef {'image' | 'docx' | 'xlsx' | 'pdf'} PreviewType
 */
type PreviewType = 'image' | 'docx' | 'xlsx' | 'pdf'

/**
 * 通用预览组件props
 * @typedef {object} lsPreviewProp
 * @property {PreviewType} type - 预览类型，必填
 * @property {any} source - 预览源数据
 * @property {number|string} zoomSize - 缩放大小，默认为1.5
 * @property {boolean} needLoading - 是否需要加载动画，默认为true
 * @property {object} loadingOption - 加载配置
 */
export const lsPreviewProp = {
  /** 预览类型 */
  type: {
    type: String as PropType<PreviewType>,
    require: true,
    default: '',
  },
  /** 预览源数据 */
  source: {},
  /** 缩放大小 */
  zoomSize: {
    type: [Number, String],
    default: 1.5,
  },
  /** 是否需要加载动画 */
  needLoading: {
    type: Boolean,
    default: true,
  },
  /** 加载配置 */
  loadingOption: {
    type: Object,
    default: () => {
      return {
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.3)',
      }
    },
  },
}
