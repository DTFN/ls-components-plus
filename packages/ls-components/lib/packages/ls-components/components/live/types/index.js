import { buildProps as e } from "../../_utils/runtime/index.js";
const o = e({
  // 媒体类型 flv or mp4
  type: {
    type: String,
    default: "flv"
  },
  // 是否是直播流
  isLive: {
    type: Boolean,
    default: !0
  },
  // 是否音频
  hasAudio: {
    type: Boolean,
    default: !0
  },
  // 是否视频
  hasVideo: {
    type: Boolean,
    default: !0
  }
});
export {
  o as lsLiveProps
};
