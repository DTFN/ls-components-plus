import { buildProps } from '@cpo/_utils/runtime';

export const lsBellMessageProps = buildProps({
  // 通知数量
  noticeNum: {
    type: Number,
    default: 0
  },
  // 最大值
  badgeMax: {
    type: Number,
    default: 99
  },
  iconConfig: {
    type: Object,
    default: () => ({})
  },
  loading: {
    type: Boolean,
    default: false
  },
  noMore: {
    type: Boolean,
    default: false
  },
  /**
   * 列表数据
   * msgType: 消息类型内容
   * content: 消息内容
   * createdTime: 创建时间
   * readStatus: 是否已读
   *
   */
  list: {
    type: Array<any>,
    default: () => []
  }
});

/**
 * 事件名
 *  readAll: 全部读取
 *  readMsg: 单条读取
 *  loadMore: 加载更多
 */
export const emitNames = ['readAll', 'readMsg', 'loadMore'];
