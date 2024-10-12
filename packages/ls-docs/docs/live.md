---
outline: deep
---

# Live 直播 / 视频

::: warning 基于[flv.js](https://www.npmjs.com/package/flv.js)二次封装。
:::

## 使用方式

### 1. 直播方式

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
  width: 160px;
  height: 90px;
}
```

### 2. 视频方式

<script setup>
import { ref, onMounted } from 'vue';
const liveRef = ref();
const liveUrl = ref('http://192.168.2.144:10086/flv/live/9G3D6xLIg.flv');
onMounted(() => {
  liveRef.value && liveRef.value.createPlayer(liveUrl);
});
</script>

<style lang="scss" scoped>
.live-wrap {
  width: 160px;
  height: 90px;
}
</style>
