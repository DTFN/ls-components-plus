/**
 * @file PDF文档预览组件类型定义
 * @description 定义PDF文档预览组件的props类型和接口，包含PDF渲染、文本处理、事件处理等
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

/**
 * 匹配接口
 * @interface Match
 * @property {object} start - 开始位置
 * @property {number} start.idx - 开始索引
 * @property {number} start.offset - 开始偏移量
 * @property {object} end - 结束位置
 * @property {number} end.idx - 结束索引
 * @property {number} end.offset - 结束偏移量
 * @property {string} str - 匹配的字符串
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
 * 加载事件负载类型
 * @typedef {PageViewport} LoadedEventPayload
 */
export type LoadedEventPayload = PageViewport

/**
 * 注释事件负载接口
 * @interface AnnotationEventPayload
 * @property {string} type - 注释类型
 * @property {any} data - 注释数据
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
 * @property {HTMLElement[]} textDivs - 文本div元素数组
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
 * @property {HTMLElement[]} textDivs - 文本div元素数组
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
 * @property {boolean} [ignoreCase] - 是否忽略大小写
 * @property {boolean} [completeWords] - 是否完整单词匹配
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
 * @property {PDFLocation} location - 位置信息
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
 * @param {any} error - 错误信息
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
 * @property {object} info - 信息对象
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
 * @property {Record<string, unknown>} attachments - 附件记录
 * @property {string[]|null} javascript - JavaScript代码
 * @property {any} outline - 大纲信息
 */
export interface PDFInfo {
  metadata: PDFInfoMetadata
  attachments: Record<string, unknown>
  javascript: string[] | null
  outline: any
}
