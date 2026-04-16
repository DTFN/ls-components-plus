---
outline: deep
---

# BackTop 回到顶部

::: warning 基于el-backtop二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 基础使用

<br />
<ClientOnly>
<div id="backtopContainer1" class="backtop-container">
  <div class="backtop-scroll">
    往下滚动展示置顶按钮
  </div>
  <LSBackTop :target="'#backtopContainer1'"> </LSBackTop>
</div>
</ClientOnly>

::: details 点我查看代码

```html
<div id="backtopContainer1" class="backtop-container">
  <div class="backtop-scroll">往下滚动展示置顶按钮</div>
  <LSBackTop :target="'#backtopContainer1'"> </LSBackTop>
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

:::

### 2. 自定义位置

<br />
<ClientOnly>
<div id="backtopContainer2" class="backtop-container">
  <div class="backtop-scroll">
    往下滚动展示置顶按钮（自定义位置）
  </div>
  <LSBackTop :target="'#backtopContainer2'" :right="100" :bottom="200"> </LSBackTop>
</div>
</ClientOnly>

::: details 点我查看代码

```html
<div id="backtopContainer2" class="backtop-container">
  <div class="backtop-scroll">往下滚动展示置顶按钮（自定义位置）</div>
  <LSBackTop :target="'#backtopContainer2'" :right="100" :bottom="200"> </LSBackTop>
</div>
```

:::

### 3. 自定义内容

<br />
<ClientOnly>
<div id="backtopContainer3" class="backtop-container">
  <div class="backtop-scroll">
    往下滚动展示置顶按钮（自定义内容）
  </div>
  <LSBackTop :target="'#backtopContainer3'" :right="200" :bottom="100">
    <div class="custom-backtop">
      <el-icon><ArrowUp /></el-icon>
      <span>回到顶部</span>
    </div>
  </LSBackTop>
</div>
</ClientOnly>

::: details 点我查看代码

```html
<div id="backtopContainer3" class="backtop-container">
  <div class="backtop-scroll">往下滚动展示置顶按钮（自定义内容）</div>
  <LSBackTop :target="'#backtopContainer3'" :right="200" :bottom="100">
    <div class="custom-backtop">
      <el-icon><ArrowUp /></el-icon>
      <span>回到顶部</span>
    </div>
  </LSBackTop>
</div>
```

```scss
.custom-backtop {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #409eff;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #66b1ff;
    transform: translateY(-2px);
  }

  span {
    font-size: 12px;
    margin-top: 4px;
  }
}
```

:::

### 4. 禁用动画

<br />
<ClientOnly>
<div id="backtopContainer4" class="backtop-container">
  <div class="backtop-scroll">
    往下滚动展示置顶按钮（禁用动画）
  </div>
  <LSBackTop :target="'#backtopContainer4'" :right="300" :bottom="150" :ani-switch="false"> </LSBackTop>
</div>
</ClientOnly>

::: details 点我查看代码

```html
<div id="backtopContainer4" class="backtop-container">
  <div class="backtop-scroll">往下滚动展示置顶按钮（禁用动画）</div>
  <LSBackTop :target="'#backtopContainer4'" :right="300" :bottom="150" :ani-switch="false"> </LSBackTop>
</div>
```

:::

### 5. 监听滚动事件

<br />
<ClientOnly>
<div id="backtopContainer5" class="backtop-container">
  <div class="backtop-scroll">
    往下滚动展示置顶按钮（监听滚动）
  </div>
  <LSBackTop
    :target="'#backtopContainer5'"
    :right="400"
    :bottom="200"
    @click="handleBackTopClick"
  > </LSBackTop>
</div>
</ClientOnly>

::: details 点我查看代码

```html
<div id="backtopContainer5" class="backtop-container">
  <div class="backtop-scroll">往下滚动展示置顶按钮（监听滚动）</div>
  <LSBackTop :target="'#backtopContainer5'" :right="400" :bottom="200" @click="handleBackTopClick"> </LSBackTop>
</div>
```

```js
function handleBackTopClick() {
  console.log('点击了回到顶部按钮')
}
```

:::

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Events

<ApiIntro :tableColumn="eventTableColumn" :tableData="eventTableData" />

### 3. Slots

<ApiIntro :tableColumn="slotTableColumn" :tableData="slotTableData" />

<script setup>
import { tableColumn } from '../constant';
import { ref } from 'vue';
import { ArrowUp } from '@element-plus/icons-vue';

const tableData = ref([
  {
    name: 'target',
    desc: '触发滚动的对象',
    type: 'string',
    value: '-'
  },
  {
    name: 'right',
    desc: '控制其显示位置，距离页面右边距',
    type: 'number',
    value: '40'
  },
  {
    name: 'bottom',
    desc: '控制其显示位置，距离页面底部距离',
    type: 'number',
    value: '40'
  },
  {
    name: 'visibility-height',
    desc: '控制其显示时机，当滚动高度达到此值时才显示',
    type: 'number',
    value: '200'
  },
  {
    name: 'ani-switch',
    desc: '是否开启动画',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'transition-name',
    desc: '动画名称',
    type: 'string',
    value: 'el-fade-in'
  }
]);

const eventTableColumn = ref([
  {
    prop: 'name',
    label: '事件名'
  },
  {
    prop: 'desc',
    label: '说明'
  },
  {
    prop: 'params',
    label: '参数'
  }
]);

const eventTableData = ref([
  {
    name: 'click',
    desc: '点击回到顶部按钮时触发',
    params: '-'
  },
  {
    name: 'scroll',
    desc: '滚动时触发',
    params: 'event'
  }
]);

const slotTableColumn = ref([
  {
    prop: 'name',
    label: '插槽名'
  },
  {
    prop: 'desc',
    label: '说明'
  }
]);

const slotTableData = ref([
  {
    name: 'default',
    desc: '自定义回到顶部按钮的内容'
  }
]);

const handleBackTopClick = () => {
  console.log('点击了回到顶部按钮');
};
</script>

<style lang="scss" scoped>
.backtop-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: auto;
  margin-bottom: 20px;

  .backtop-scroll {
    position: relative;
    width: 100%;
    height: 2000px;
    text-align: center;
    padding-top: 50px;
  }
}

.custom-backtop {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #409EFF;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #66B1FF;
    transform: translateY(-2px);
  }

  span {
    font-size: 12px;
    margin-top: 4px;
  }
}
</style>
