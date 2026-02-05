---
outline: deep
---

# ContainerBox 适配容器

::: warning 根据分辨率适配，适用于大屏。
:::

## 使用方式

### 1. 基础用法

<LSContainerBox :width="320" :height="750"><div class="content">容器测试</div></LSContainerBox>

::: details 点我查看代码

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

:::

### 2. 大屏适配示例

<LSContainerBox :width="1920" :height="1080" style="width: 100%; height: 300px;"><div class="big-content">大屏适配测试</div></LSContainerBox>

::: details 点我查看代码

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

:::

### 3. 自定义内容示例

<LSContainerBox :width="800" :height="600" style="width: 100%; height: 200px;">
  <div class="custom-content">
    <h3>自定义内容</h3>
    <p>这是一个自定义内容的示例</p>
    <LSButton type="primary">测试按钮</LSButton>
  </div>
</LSContainerBox>

::: details 点我查看代码

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

:::

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
</style>
