import { buildProps } from '@cpo/_utils/runtime';

export const lsLiveProps = buildProps({
  // 媒体类型 flv or mp4
  type: {
    type: String,
    default: 'flv'
  },
  // 是否是直播流
  isLive: {
    type: Boolean,
    default: true
  },
  // 是否音频
  hasAudio: {
    type: Boolean,
    default: true
  },
  // 是否视频
  hasVideo: {
    type: Boolean,
    default: true
  }
});
