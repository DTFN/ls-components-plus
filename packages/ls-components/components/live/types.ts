/**
 * @file 直播/视频播放组件类型定义
 * @description 定义直播和视频播放组件的props类型
 */

import type { PropType } from 'vue'
import { buildProps } from '@cpo/_utils/runtime'

/**
 * 直播组件props
 * @typedef {object} lsLiveProps
 * @property {'flv' | 'mp4'} type - 媒体类型，默认为'flv'
 * @property {boolean} isLive - 是否是直播流，默认为true
 * @property {boolean} hasAudio - 是否包含音频，默认为true
 * @property {boolean} hasVideo - 是否包含视频，默认为true
 */
export const lsLiveProps = buildProps({
  /** 媒体类型：flv或mp4 */
  type: {
    type: String as PropType<'flv' | 'mp4'>,
    default: 'flv',
  },
  /** 是否按直播流模式创建播放器 */
  isLive: {
    type: Boolean,
    default: true,
  },
  /** 是否包含音频 */
  hasAudio: {
    type: Boolean,
    default: true,
  },
  /** 当前媒体是否包含视频轨道 */
  hasVideo: {
    type: Boolean,
    default: true,
  },
})
