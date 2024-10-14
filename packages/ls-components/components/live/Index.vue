<script setup lang="ts" name="LSLive">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import flvjs from 'flv.js';
import { lsLiveProps } from './types';
import { merge } from 'lodash-es';

const props = defineProps(lsLiveProps);

const ns = useNamespace('live');
const comClass: string = ns.b();

const curUrl = ref('');
const lastDecodedFrames = ref(0);
const player: any = ref(null);
const lsLiveRef = ref();
const defAttrs = ref({
  // 是否自动播放
  autoplay: true,
  // 是否显示控制条
  controls: true,
  // 是否静音
  muted: true
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
  if (player.value && props.type === 'flv') {
    player.value.on(flvjs.Events.ERROR, () => {
      // errorType: any, errorDetail: any, errorInfo: any
      // 视频出错后销毁重建
      destoryPlayer();
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
        destoryPlayer();
        if (curUrl.value) {
          createPlayer(curUrl.value);
        }
      }
    });
  }
}

// 创建播放器
function createPlayer(liveUrl: string) {
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
      player.value.play();
      listenPlayer();
    }
  } else {
    ElMessage.error('不支持播放视频');
  }
}

// 更新可见状态
function updateVisibilityStatus() {
  if (document.visibilityState === 'visible') {
    if (curUrl.value && props.type === 'flv') {
      createPlayer(curUrl.value);
    }
  } else {
    destoryPlayer();
  }
}

onMounted(() => {
  document.addEventListener('visibilitychange', updateVisibilityStatus);
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
    <video v-bind="merge(defAttrs, $attrs)" width="100%" class="ls-video" ref="lsLiveRef"></video>
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
