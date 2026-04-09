<script setup lang="ts" name="LSLive">
/**
 * @summary 直播/视频播放组件 - 支持 FLV 和 MP4
 *
 * 这是自研库的视频播放组件，支持 FLV 格式的直播流和 MP4 视频文件。
 * 基于 flv.js 实现，支持自动播放、卡顿检测、重连等功能。
 *
 * @attr {string} type - 视频类型，flv 或 mp4
 * @attr {string} url - 视频地址
 * @attr {boolean} isLiving - 是否正在直播
 * @attr {boolean} controls - 是否显示控制条
 * @attr {boolean} autoplay - 是否自动播放
 * @attr {boolean} muted - 是否静音
 * @attr {boolean} fluid - 是否流体布局
 *
 * @slot 无
 *
 * @event update:isLiving - 更新直播状态事件
 * @event onError - 错误事件
 *
 * @csspart live - 视频容器
 *
 * @example
 * <!-- FLV直播 -->
 * <LSLive type="flv" url="live.flv" v-model:isLiving="isLiving" />
 *
 * @example
 * <!-- MP4视频 -->
 * <LSLive type="mp4" url="video.mp4" />
 */
import { useNamespace } from '@cpo/_hooks/useNamespace';
import flvjs from 'flv.js';
import { lsLiveProps } from './types';

const props = defineProps(lsLiveProps);

const attrs = useAttrs();

const ns = useNamespace('live');
const comClass: string = ns.b();

const curUrl = ref('');
const lastDecodedFrames = ref(0);
const player: any = ref(null);
const lsLiveRef = ref();
const defAttrs = ref({
  // 是否自动播放
  autoplay: false,
  // 是否显示控制条
  controls: true,
  // 是否静音
  muted: true
});
const isAutoplay = ref(attrs['autoplay'] == undefined ? true : attrs['autoplay']);

// const isMuted = ref(attrs['muted'] == undefined ? true : attrs['muted']);

const isFlv = computed(() => {
  return props.type === 'flv';
});

// 销毁播放器
function destoryPlayer() {
  lastDecodedFrames.value = 0;
  if (player.value) {
    player.value?.pause();
    player.value?.unload();
    player.value?.detachMediaElement();
    player.value?.destroy();
    player.value = null;
  }
}

// 监听播放器
function listenPlayer() {
  if (!isAutoplay.value) {
    return;
  }
  if (player.value && isFlv.value) {
    player.value.on(flvjs.Events.ERROR, () => {
      // errorType: any, errorDetail: any, errorInfo: any
      // 视频出错后销毁重建
      if (curUrl.value) {
        createPlayer(curUrl.value);
      }
    });
    player.value.on(flvjs.Events.STATISTICS_INFO, function (res: any) {
      const { decodedFrames } = res || {};
      if (lastDecodedFrames.value === 0) {
        lastDecodedFrames.value = decodedFrames;
        return;
      }
      if (lastDecodedFrames.value != decodedFrames) {
        lastDecodedFrames.value = decodedFrames;
      } else {
        if (curUrl.value) {
          createPlayer(curUrl.value);
        }
      }
    });
  }
}

// 创建播放器
async function createPlayer(liveUrl: string) {
  destoryPlayer();
  if (flvjs.isSupported() && liveUrl) {
    curUrl.value = liveUrl;
    // 创建一个播放器实例
    player.value = flvjs.createPlayer(
      {
        type: props.type, // 媒体类型，默认是 flv or mp4,
        isLive: props.isLive, // 是否是直播流
        hasAudio: props.hasAudio, // 是否有音频
        hasVideo: props.hasVideo, // 是否有视频
        url: liveUrl // 流地址
      },
      {
        autoCleanupSourceBuffer: true,
        enableWorker: false,
        enableStashBuffer: true,
        isLive: props.isLive,
        lazyLoad: false
      }
    );
    if (player.value && lsLiveRef.value) {
      player.value.attachMediaElement(lsLiveRef.value);
      player.value.load();
      if (isAutoplay.value) {
        player.value?.play();
      } else {
        player.value?.pause();
      }
      listenPlayer();
    }
  } else {
    ElMessage.error('不支持播放视频');
  }
}

// 更新可见状态
function updateVisibilityStatus() {
  if (document.visibilityState === 'visible') {
    if (curUrl.value && isFlv.value) {
      createPlayer(curUrl.value);
    }
  } else {
    if (isFlv.value) {
      destoryPlayer();
    }
  }
}

onMounted(() => {
  document.addEventListener('visibilitychange', updateVisibilityStatus);
  lsLiveRef.value.addEventListener('play', () => {
    isAutoplay.value = true;
  });
  lsLiveRef.value.addEventListener('pause', () => {
    isAutoplay.value = false;
  });
});

onUnmounted(() => {
  document.removeEventListener('visibilitychange', updateVisibilityStatus);
});

defineExpose({
  createPlayer
});
</script>

<template>
  <div :class="comClass">
    <video
      :autoplay="defAttrs.autoplay"
      :controls="defAttrs.controls"
      :muted="defAttrs.muted"
      width="100%"
      class="ls-video"
      ref="lsLiveRef"
    ></video>
  </div>
</template>

<style lang="scss" scoped>
.ls-live {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
  background-color: transparent;
  video {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .control-wrap {
    display: flex;
    justify-content: space-between;
    text-align: center;
    div {
      margin: 16px auto;
    }
  }
}
video::-webkit-media-controls-timeline {
  display: none;
}
</style>
