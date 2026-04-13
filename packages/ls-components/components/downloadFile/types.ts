/**
 * @file 文件下载组件类型定义
 * @description 定义文件下载组件的props类型和事件
 */

import { buildProps } from '@cpo/_utils/runtime';

/**
 * 文件下载组件props
 * @typedef {Object} lsDownloadProp
 * @property {string|number} recordId - 数据记录id，默认为''
 * @property {number} chunkTotal - 下载分片总数量，默认为0
 * @property {Function} chunkDataRequest - 分片下载请求函数，默认为null
 * @property {Object} chunkDataRequestParams - 分片下载请求参数，默认为null
 * @property {Object} chunkDataRequestConfig - 分片下载请求配置，默认为null
 * @property {number} initRequstNum - 初始请求数量，默认为10
 * @property {number} maxErrorNum - 最大异常请求数，默认为6
 * @property {boolean} cancelUploadInLimit - 达到最大异常请求数后是否中止剩余下载请求，默认为true
 */
export const lsDownloadProp = buildProps({
  /** 数据记录id */
  recordId: {
    type: [String, Number],
    default: ''
  },
  /** 下载分片总数量 */
  chunkTotal: {
    type: Number,
    default: 0
  },
  /** 分片下载请求函数 */
  chunkDataRequest: {
    type: Function,
    default: null
  },
  /** 分片下载请求参数 */
  chunkDataRequestParams: {
    type: Object,
    default: null
  },
  /** 分片下载请求配置 */
  chunkDataRequestConfig: {
    type: Object,
    default: null
  },
  /** 初始请求数量 */
  initRequstNum: {
    type: Number,
    default: 10
  },
  /** 最大异常请求数 */
  maxErrorNum: {
    type: Number,
    default: 6
  },
  /** 达到最大异常请求数后是否中止剩余下载请求 */
  cancelUploadInLimit: {
    type: Boolean,
    default: true
  }
});

/**
 * 组件事件名：`onDownloadSuccess` 为成功事件，`onDownloadError` 为失败事件。
 */
export const emitNames = ['onDownloadSuccess', 'onDownloadError'];
