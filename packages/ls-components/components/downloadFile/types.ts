import { buildProps } from '@cpo/_utils/runtime';

export const lsDownloadProp = buildProps({
  // 数据记录id
  recordId: {
    type: [String, Number],
    default: ''
  },
  // 下载分片总数量
  chunkTotal: {
    type: Number,
    default: 0
  },
  // 分片下载请求
  chunkDataRequest: {
    type: Function,
    default: null
  },
  // 分片下载请求参数
  chunkDataRequestParams: {
    type: Object,
    default: null
  },
  // 初始请求数量
  initRequstNum: {
    type: Number,
    default: 10
  },
  // 最大异常请求数
  maxErrorNum: {
    type: Number,
    default: 6
  },
  // 超出上限是否取消上传
  cancelUploadInLimit: {
    type: Boolean,
    default: true
  }
});

export const emitNames = ['onDownloadSuccess', 'onDownloadError'];
