---
outline: deep
---

# Live 直播 / 视频

::: warning 基于[flv.js](https://www.npmjs.com/package/flv.js)二次封装。
:::

## 目录

- [功能介绍](#功能介绍)
- [使用方式](#使用方式)
  - [直播类型](#直播类型)
  - [视频类型](#视频类型)
  - [自定义控件](#自定义控件)
- [API](#api)
  - [Attributes](#attributes)
  - [Exposes](#exposes)

## 功能介绍

LSLive 组件是对 flv.js 的二次封装，提供了以下功能：

- 支持 FLV 格式的直播流播放
- 支持 MP4 格式的视频播放
- 支持音频/视频控制
- 支持循环播放
- 支持直播/点播模式切换
- 提供简洁的 API 接口

## 使用方式

### 直播类型

<br />
<ClientOnly>
<LSLive ref="liveRef" class="live-wrap" type="mp4" :is-live="false" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref, onMounted } from 'vue';
const m1 = 'http://192.168.1.33:8008/images/m1.mp4';
const liveRef = ref();
const liveUrl = ref(m1);
onMounted(() => {
  liveRef.value && liveRef.value.createPlayer(liveUrl);
});
```

```html
<LSLive ref="liveRef" class="live-wrap" type="mp4" :is-live="false" />
```

```scss
.live-wrap {
  width: 640px;
  height: 360px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}
```

:::

### 视频类型

<br />
<ClientOnly>
<LSLive ref="liveRef2" class="live-wrap" type="mp4" :is-live="false" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref, onMounted } from 'vue';
import m2 from '/src/assets/files/m2.mp4';
const liveRef2 = ref();
const liveUrl2 = ref(m2);
onMounted(() => {
  liveRef2.value && liveRef2.value.createPlayer(liveUrl2);
});
```

```html
<LSLive ref="liveRef2" class="live-wrap" type="mp4" :is-live="false" />
```

```scss
.live-wrap {
  width: 640px;
  height: 360px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}
```

:::

### 自定义控件

<br />
<ClientOnly>
<div class="custom-live-container">
  <LSLive ref="liveRef3" class="live-wrap" type="mp4" :is-live="false" />
  <div class="custom-controls">
    <button @click="playVideo" class="control-btn">播放</button>
    <button @click="pauseVideo" class="control-btn">暂停</button>
    <button @click="changeVideo" class="control-btn">切换视频</button>
  </div>
</div>
</ClientOnly>

::: details 点我查看代码

```js
import { ref, onMounted } from 'vue';
const m1 = 'http://192.168.1.33:8008/images/m1.mp4';
const m2 = 'http://192.168.1.33:8008/images/m2.mp4';
const liveRef3 = ref();
const liveUrl3 = ref(m1);
const anotherUrl = ref(m2);
onMounted(() => {
  liveRef3.value && liveRef3.value.createPlayer(liveUrl3);
});

function playVideo() {
  // 播放逻辑
  console.log('播放视频');
}

function pauseVideo() {
  // 暂停逻辑
  console.log('暂停视频');
}

function changeVideo() {
  // 切换视频逻辑
  liveRef3.value && liveRef3.value.createPlayer(anotherUrl);
  console.log('切换视频');
}
```

```html
<div class="custom-live-container">
  <LSLive ref="liveRef3" class="live-wrap" type="mp4" :is-live="false" />
  <div class="custom-controls">
    <button @click="playVideo" class="control-btn">播放</button>
    <button @click="pauseVideo" class="control-btn">暂停</button>
    <button @click="changeVideo" class="control-btn">切换视频</button>
  </div>
</div>
```

```scss
.custom-live-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.live-wrap {
  width: 640px;
  height: 360px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.custom-controls {
  display: flex;
  gap: 12px;
}

.control-btn {
  padding: 8px 16px;
  border: 1px solid #409eff;
  border-radius: 4px;
  background-color: #fff;
  color: #409eff;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #ecf5ff;
  }

  &:active {
    background-color: #409eff;
    color: #fff;
  }
}
```

:::

## API

### Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### Exposes

<ApiIntro :tableColumn="tableExposesColumn" :tableData="tableData2" />

<script setup>
import { tableColumn, tableExposesColumn } from '../constant'
import { ref, onMounted, nextTick } from 'vue';
const m1 = 'http://192.168.1.33:8008/images/m1.mp4'
const m2 = 'http://192.168.1.33:8008/images/m2.mp4'
const liveRef = ref();
const liveUrl = ref(m1);

const liveRef2 = ref();
const liveUrl2 = ref(m2);

const liveRef3 = ref();
const liveUrl3 = ref(m1);
const anotherUrl = ref(m2);
onMounted(() => {
  nextTick(() => {
    liveRef.value && liveRef.value.createPlayer(liveUrl);
    liveRef2.value && liveRef2.value.createPlayer(liveUrl2);
    liveRef3.value && liveRef3.value.createPlayer(liveUrl3);
  })
});

function playVideo() {
  // 播放逻辑
  console.log('播放视频');
}

function pauseVideo() {
  // 暂停逻辑
  console.log('暂停视频');
}

function changeVideo() {
  // 切换视频逻辑
  liveRef3.value && liveRef3.value.createPlayer(anotherUrl);
  console.log('切换视频');
}

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
    desc: '是否有视频',
    type: 'boolean',
    value: 'true'
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
  width: 640px;
  height: 360px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}

.custom-live-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 640px;
}

.custom-controls {
  display: flex;
  gap: 12px;
}

.control-btn {
  padding: 8px 16px;
  border: 1px solid #409eff;
  border-radius: 4px;
  background-color: #fff;
  color: #409eff;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: #ecf5ff;
  }
  
  &:active {
    background-color: #409eff;
    color: #fff;
  }
}
</style>
