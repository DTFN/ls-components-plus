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
  }
});

export const emitNames = ['onDownloadSuccess', 'onDownloadError'];
