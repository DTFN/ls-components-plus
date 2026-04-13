<script setup lang="ts" name="LSLive">
/**
 * @summary 直播 / 视频组件 - 基于 `flv.js` 的 FLV / MP4 播放封装
 *
 * `LSLive` 用于承载直播流或普通视频播放，内部基于 `flv.js` 创建播放器实例，
 * 支持 `flv` 直播流与 `mp4` 视频两种类型，并在 FLV 场景下处理页面切换后的重建与卡顿重连。
 * 组件本身不接收声明式播放地址，需通过 `ref` 暴露的 `createPlayer(url)` 方法主动创建播放器。
 *
 * @attr {'flv'|'mp4'} type 播放类型，支持 `flv` / `mp4`，默认 `flv`
 * @attr {boolean} isLive 是否按直播流模式创建播放器；直播场景通常为 `true`，点播 MP4 通常为 `false`，默认 `true`
 * @attr {boolean} hasAudio 当前媒体是否包含音频轨道，默认 `true`
 * @attr {boolean} hasVideo 当前媒体是否包含视频轨道，默认 `true`
 *
 * @slot 无
 *
 * @expose createPlayer(url) 创建并加载播放器，参数为播放地址
 *
 * @example
 * <LSLive ref="liveRef" class="live-wrap" type="flv" :is-live="true" />
 *
 * @example
 * <LSLive ref="liveRef2" class="live-wrap" type="mp4" :is-live="false" />
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
