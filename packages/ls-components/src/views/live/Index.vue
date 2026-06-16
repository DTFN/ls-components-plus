<script setup lang="ts">
import m1 from '@/assets/m1.mp4?url'
import m2 from '@/assets/m2.mp4?url'

const liveRef = ref()
const liveRef2 = ref()
const liveRef3 = ref()
const liveUrl = ref('https://video.shipin520.com/video_listen/588ku_video/21/03/15/12/06/22/video604edd3ee67a6.mp4')

onMounted(() => {
  liveRef.value && liveRef.value.createPlayer(liveUrl.value)
  liveRef2.value && liveRef2.value.createPlayer(m1)
  liveRef3.value && liveRef3.value.createPlayer(m2)
})
</script>

<template>
  <div class="live-demo">
    <h2>视频直播 LSLive</h2>

    <div class="demo-section">
      <h3>FLV 直播流</h3>
      <p class="desc">
        默认模式，支持 flv 直播流，通过 ref 调用 createPlayer 创建播放器。
      </p>
      <LSLive ref="liveRef" class="live-wrap" :autoplay="true" :muted="false" />
    </div>

    <div class="demo-section">
      <h3>MP4 点播（手动播放）</h3>
      <p class="desc">
        type="mp4" 且 is-live="false" 时，用于点播视频，不自动播放。
      </p>
      <LSLive ref="liveRef2" class="live-wrap" type="mp4" :is-live="false" :autoplay="false" :loop="false" />
    </div>

    <div class="demo-section">
      <h3>MP4 点播（自动播放）</h3>
      <p class="desc">
        autoplay="true" 时进入页面自动播放，muted="false" 取消静音。
      </p>
      <LSLive ref="liveRef3" class="live-wrap" type="mp4" :is-live="false" :autoplay="true" :loop="false" :muted="false" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.live-demo {
  padding: 24px;
}
h2 {
  margin-bottom: 24px;
  font-size: 22px;
}
.demo-section {
  padding: 20px;
  margin-bottom: 24px;
  background: #ffffff;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  h3 {
    margin-bottom: 12px;
    font-size: 16px;
    color: #303133;
  }
  .desc {
    margin-bottom: 16px;
    font-size: 14px;
    color: #606266;
  }
}
.live-wrap {
  width: 385px;
  height: 300px;
}
</style>
