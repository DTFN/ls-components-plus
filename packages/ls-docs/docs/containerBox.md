---
outline: deep
---

# ContainerBox 适配容器

:::: warning 根据分辨率适配，适用于大屏。
::::

## 使用方式

### 1. 基础用法

<LSContainerBox :width="320" :height="750"><div class="content">容器测试</div></LSContainerBox>

:::: details 点我查看代码

```html
<LSContainerBox :width="320" :height="750"><div class="content">容器测试</div></LSContainerBox>
```

```scss
.content {
  position: absolute;
  width: 100%;
  top: 45%;
  transform: translateY(-50%);
  text-align: center;
  color: blue;
  font-size: 32px;
  font-weight: blod;
}
```

::::

### 2. 大屏适配示例

<LSContainerBox :width="1920" :height="1080" style="width: 100%; height: 300px;"><div class="big-content">大屏适配测试</div></LSContainerBox>

:::: details 点我查看代码

```html
<LSContainerBox :width="1920" :height="1080" style="width: 100%; height: 300px;"><div class="big-content">大屏适配测试</div></LSContainerBox>
```

```scss
.big-content {
  position: absolute;
  width: 100%;
  top: 45%;
  transform: translateY(-50%);
  text-align: center;
  color: green;
  font-size: 48px;
  font-weight: bold;
}
```

::::

### 3. 自定义内容示例

<LSContainerBox :width="800" :height="600" style="width: 100%; height: 200px;">
  <div class="custom-content">
    <h3>自定义内容</h3>
    <p>这是一个自定义内容的示例</p>
    <LSButton type="primary">测试按钮</LSButton>
  </div>
</LSContainerBox>

:::: details 点我查看代码

```html
<LSContainerBox :width="800" :height="600" style="width: 100%; height: 200px;">
  <div class="custom-content">
    <h3>自定义内容</h3>
    <p>这是一个自定义内容的示例</p>
    <LSButton type="primary">测试按钮</LSButton>
  </div>
</LSContainerBox>
```

```scss
.custom-content {
  position: absolute;
  width: 100%;
  padding: 20px;
  text-align: center;
  
  h3 {
    color: #333;
    margin-bottom: 10px;
  }
  
  p {
    color: #666;
    margin-bottom: 20px;
  }
}
```

::::

### 4. 移动端适配

适用于 375×812 设计稿的移动端 H5 大屏场景：

<LSContainerBox :width="375" :height="812" style="width: 260px; height: 520px; transform: scale(0.6); transform-origin: top left;">
  <div class="mobile-content">
    <h3>移动端大屏</h3>
    <p>375×812 设计稿</p>
  </div>
</LSContainerBox>

:::: details 点我查看代码

```html
<LSContainerBox :width="375" :height="812" style="width: 260px; height: 520px; transform: scale(0.6); transform-origin: top left;">
  <div class="mobile-content">
    <h3>移动端大屏</h3>
    <p>375×812 设计稿</p>
  </div>
</LSContainerBox>
```

```scss
.mobile-content {
  position: absolute;
  width: 100%;
  top: 45%;
  transform: translateY(-50%);
  text-align: center;
  color: #fff;
  background: linear-gradient(135deg, #4c1d95, #831843);
}
```

::::

### 5. 嵌套交互组件

容器内部可放置按钮、表单等交互组件，缩放后交互事件位置自动适配：

<LSContainerBox :width="1200" :height="400" style="width: 100%; height: 160px; transform: scale(0.4); transform-origin: top left;">
  <div class="interact-content">
    <h3>交互内容示例</h3>
    <div class="interact-btns">
      <el-button type="primary">新增</el-button>
      <el-button type="success">保存</el-button>
      <el-button type="danger">删除</el-button>
    </div>
  </div>
</LSContainerBox>

:::: details 点我查看代码

```html
<LSContainerBox :width="1200" :height="400" style="width: 100%; height: 160px; transform: scale(0.4); transform-origin: top left;">
  <div class="interact-content">
    <h3>交互内容示例</h3>
    <div class="interact-btns">
      <el-button type="primary">新增</el-button>
      <el-button type="success">保存</el-button>
      <el-button type="danger">删除</el-button>
    </div>
  </div>
</LSContainerBox>
```

```scss
.interact-content {
  position: absolute;
  width: 100%;
  text-align: center;

  .interact-btns {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-top: 20px;

    .el-button {
      font-size: 20px;
      height: 48px;
      padding: 0 24px;
    }
  }
}
```

::::

### 6. 响应式缩放

通过监听窗口大小动态计算 scale，实现容器随屏幕等比例缩放：

```vue
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const width = ref(1920)
const height = ref(1080)
const scale = ref(1)

function onResize() {
  const container = document.querySelector('.demo-section')
  if (!container) return
  const w = container.clientWidth - 48
  scale.value = Number((w / width.value).toFixed(3))
}

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <LSContainerBox
    :width="width"
    :height="height"
    :style="{ transform: `scale(${scale})`, transformOrigin: 'top left' }"
  >
    <div>大屏内容</div>
  </LSContainerBox>
</template>
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Slots

<ApiIntro :tableColumn="tableSlotColumn" :tableData="slotTableData" />

<script setup>
import { tableColumn, tableSlotColumn } from '../constant';
import { ref } from 'vue';

const tableData = ref([
  {
    name: 'width',
    desc: '容器初始分辨率宽度',
    type: 'number',
    value: 1920
  },
  {
    name: 'height',
    desc: '容器初始分辨率高度',
    type: 'number',
    value: 1080
  }
])

const slotTableData = ref([
  {
    name: 'default',
    desc: '容器内容插槽'
  }
])
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  width: 100%;
  top: 45%;
  transform: translateY(-50%);
  text-align: center;
  color: blue;
  font-size: 32px;
  font-weight: blod;
}

.big-content {
  position: absolute;
  width: 100%;
  top: 45%;
  transform: translateY(-50%);
  text-align: center;
  color: green;
  font-size: 48px;
  font-weight: bold;
}

.custom-content {
  position: absolute;
  width: 100%;
  padding: 20px;
  text-align: center;
  
  h3 {
    color: #333;
    margin-bottom: 10px;
  }
  
  p {
    color: #666;
    margin-bottom: 20px;
  }
}

.mobile-content {
  position: absolute;
  width: 100%;
  top: 45%;
  transform: translateY(-50%);
  text-align: center;
  color: #fff;
  background: linear-gradient(135deg, #4c1d95, #831843);
}

.interact-content {
  position: absolute;
  width: 100%;
  text-align: center;

  .interact-btns {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-top: 20px;

    .el-button {
      font-size: 20px;
      height: 48px;
      padding: 0 24px;
    }
  }
}
</style>
