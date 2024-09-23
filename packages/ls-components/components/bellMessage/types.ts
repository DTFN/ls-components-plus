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
  badgeIconType: {
    type: Number,
    default: 1
  },
  badgeIconName: {
    type: String,
    default: ''
  },
  badgeIconColor: {
    type: String,
    default: ''
  },
  badgeIconWidth: {
    type: [String, Number],
    default: '16'
  },
  badgeIconHeight: {
    type: [String, Number],
    default: '16'
  },
  badgeIconSize: {
    type: [String, Number],
    default: '16'
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
   * msgType: 消息类型
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

export const emitNames = ['updateNotice', 'readAll', 'readMsg', 'loadMore'];
