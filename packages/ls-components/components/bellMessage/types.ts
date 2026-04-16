/**
 * @file 消息铃铛组件类型定义
 * @description 定义消息铃铛组件的props类型和事件
 */

import type { PropType } from 'vue'
import { buildProps } from '@cpo/_utils/runtime'

/**
 * 消息列表项类型
 * @typedef {object} BellMessageItemType
 * @property {number|string} id - 消息ID
 * @property {string} [title] - 消息标题
 * @property {string} msgType - 消息类型
 * @property {string} [content] - 消息内容
 * @property {string} [createdTime] - 创建时间
 * @property {number|boolean} readStatus - 是否已读
 */

/**
 * 消息列表类型
 * @typedef {Array<BellMessageItemType>} BellMessageListType
 */
export type BellMessageListType = {
  id: number | string
  title?: string
  msgType: string
  content?: string
  createdTime?: string
  readStatus: number | boolean
}[]

/**
 * 消息铃铛组件props
 * @typedef {object} lsBellMessageProps
 * @property {number} noticeNum - 通知数量，默认为0
 * @property {number} badgeMax - 最大值，默认为99
 * @property {object} iconConfig - 图标配置，默认为{}
 * @property {boolean} loading - 加载状态，默认为true
 * @property {boolean} noMore - 是否没有更多数据，默认为false
 * @property {BellMessageListType} list - 消息列表数据
 */
export const lsBellMessageProps = buildProps({
  /** 通知数量 */
  noticeNum: {
    type: Number,
    default: 0,
  },
  /** 最大值 */
  badgeMax: {
    type: Number,
    default: 99,
  },
  /** 图标配置 */
  iconConfig: {
    type: Object,
    default: () => ({}),
  },
  /** 加载状态 */
  loading: {
    type: Boolean,
    default: true,
  },
  /** 是否没有更多数据 */
  noMore: {
    type: Boolean,
    default: false,
  },
  /**
   * 消息列表数据
   * @example
   * [{
   *   id: 1,
   *   title: '系统通知',
   *   msgType: 'system',
   *   content: '您有新的消息',
   *   createdTime: '2024-01-01',
   *   readStatus: false
   * }]
   */
  list: {
    type: Array as PropType<BellMessageListType>,
    default: () => [],
  },
})

/**
 * 事件名
 * @constant {Array<string>}
 * @property {string} readAll - 全部读取事件
 * @property {string} readMsg - 单条读取事件
 * @property {string} loadMore - 加载更多事件
 */
export const emitNames = ['readAll', 'readMsg', 'loadMore']
