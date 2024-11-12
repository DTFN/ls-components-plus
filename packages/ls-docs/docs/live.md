---
outline: deep
---

# Live 直播 / 视频

::: warning 基于[flv.js](https://www.npmjs.com/package/flv.js)二次封装。
:::

## 使用方式

### 1. 直播类型

<br />

<LSLive ref="liveRef" class="live-wrap" />

```js
import { ref, onMounted } from 'vue';
const liveRef = ref();
const liveUrl = ref('http://192.168.2.144:10086/flv/live/9G3D6xLIg.flv');
onMounted(() => {
  liveRef.value && liveRef.value.createPlayer(liveUrl);
});
```

```html
<LSLive ref="liveRef" class="live-wrap" />
```

```scss
.live-wrap {
  width: 320px;
  height: 180px;
}
```

### 2. 视频类型

<br />
<LSLive ref="liveRef2" class="live-wrap" type="mp4" :is-live="false" :loop="false" />

```js
import { ref, onMounted } from 'vue';
const liveRef2 = ref();
const liveUrl2 = ref('https://video.shipin520.com/video_listen/588ku_video/21/03/15/12/06/22/video604edd3ee67a6.mp4');
onMounted(() => {
  liveRef2.value && liveRef2.value.createPlayer(liveUrl2);
});
```

```html
<LSLive ref="liveRef2" class="live-wrap" type="mp4" :is-live="false" :loop="false" />
```

```scss
.live-wrap {
  width: 320px;
  height: 180px;
}
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Exposes

<ApiIntro :tableColumn="tableExposesColumn" :tableData="tableData2" />

<script setup>
import { tableColumn, tableExposesColumn } from '../constant'
import { ref, onMounted } from 'vue';
const liveRef = ref();
const liveUrl = ref('http://192.168.2.144:10086/flv/live/9G3D6xLIg.flv');

const liveRef2 = ref();
const liveUrl2 = ref('https://video.shipin520.com/video_listen/588ku_video/21/03/15/12/06/22/video604edd3ee67a6.mp4');
onMounted(() => {
  liveRef.value && liveRef.value.createPlayer(liveUrl);
  liveRef2.value && liveRef2.value.createPlayer(liveUrl2);
});

const tableData = ref([
  {
    name: 'type',
    desc: '类型：flv / mp4',
    type: 'string',
    value: 'flv'
  },
  {
    name: 'isLive',
    desc: '是否是直播',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'hasAudio',
    desc: '是否有音频',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'hasVideo',
    desc: '是否是视频',
    type: 'boolean',
    value: 'false'
  }
]);

const tableData2 = ref([
  {
    name: 'createPlayer',
    desc: '创建播放器方法，参数为播放地址',
    type: 'function',
    value: 'string'
  }
])
</script>

<style lang="scss" scoped>
.live-wrap {
  width: 320px;
  height: 180px;
}
</style>
