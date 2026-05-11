/**
 * @file 分片上传组件类型定义
 * @description 定义分片上传组件的 props 类型和事件
 */

import { buildProps } from '@cpo/_utils/runtime'

/**
 * 分片上传组件 props
 * @typedef {object} lsSliceUploadProps
 * @property {number} chunkSize - 单个分片大小（字节），默认为 2 * 1024 * 1024
 * @property {Function} chunkUploadRequest - 分片上传请求函数，默认为 null
 * @property {object} chunkUploadRequestParams - 分片上传请求参数，默认为 null
 * @property {object} chunkUploadRequestConfig - 分片上传请求配置，默认为 null
 * @property {Function} mergeRequest - 合并请求函数，默认为 null
 * @property {object} mergeRequestParams - 合并请求参数，默认为 null
 * @property {number} initRequestNum - 初始并发请求数量，默认为 3
 * @property {number} maxErrorNum - 最大异常请求数，默认为 3
 * @property {boolean} cancelUploadInLimit - 达到最大异常请求数后是否中止剩余上传请求，默认为 true
 */
export const lsSliceUploadProps = buildProps({
  /** 上传地址（透传给 LSUpload，分片上传中不实际使用） */
  action: {
    type: String,
    default: '',
  },
  /** 单个分片大小（字节） */
  chunkSize: {
    type: Number,
    default: 2 * 1024 * 1024,
  },
  /** 分片上传请求函数 */
  chunkUploadRequest: {
    type: Function,
    default: null,
  },
  /** 分片上传请求参数 */
  chunkUploadRequestParams: {
    type: Object,
    default: null,
  },
  /** 分片上传请求配置 */
  chunkUploadRequestConfig: {
    type: Object,
    default: null,
  },
  /** 合并请求函数 */
  mergeRequest: {
    type: Function,
    default: null,
  },
  /** 合并请求参数 */
  mergeRequestParams: {
    type: Object,
    default: null,
  },
  /** 初始并发请求数量 */
  initRequestNum: {
    type: Number,
    default: 3,
  },
  /** 最大异常请求数 */
  maxErrorNum: {
    type: Number,
    default: 3,
  },
  /** 达到最大异常请求数后是否中止剩余上传请求 */
  cancelUploadInLimit: {
    type: Boolean,
    default: true,
  },
})

/**
 * 组件事件名：`onUploadSuccess` 为成功事件，`onUploadError` 为失败事件。
 */
export const emitNames = ['onUploadSuccess', 'onUploadError']
