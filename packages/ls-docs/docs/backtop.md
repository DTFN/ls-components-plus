---
outline: deep
---

# Backtop 描述

::: warning 基于el-backtop二次封装，保留原属性和方法。
:::

## 使用方式

### 往下滚动查看效果

<div id="backtopContainer" class="backtop-container">
  <div class="backtop-scroll">
    往下滚动展示置顶按钮
  </div>
  <LSBackTop :target="'#backtopContainer'" :right="600" :bottom="300"> </LSBackTop>
</div>

```html
<div id="backtopContainer" class="backtop-container">
  <div class="backtop-scroll">往下滚动展示置顶按钮</div>
  <LSBackTop :target="'#backtopContainer'" :right="600" :bottom="300"> </LSBackTop>
</div>
```

```scss
.backtop-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: auto;
  .backtop-scroll {
    position: relative;
    width: 100%;
    height: 2000px;
    text-align: center;
  }
}
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

<script setup>
import { tableColumn } from './constant';
import { ref } from 'vue';

const tableData = ref([
  {
    name: 'aniSwitch',
    desc: '是否开启动画',
    type: 'boolean',
    value: 'true'
  },
]);
</script>

<style lang="scss" scoped>
  .backtop-container {
    position: relative;
    width: 100%;
    height: 300px;
    overflow:auto;
    .backtop-scroll {
      position: relative;
      width: 100%;
      height: 2000px;
      text-align: center;
    }
  }
</style>
