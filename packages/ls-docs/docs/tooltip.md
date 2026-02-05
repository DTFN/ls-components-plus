---
outline: deep
---

# Tooltip 弹出提示

::: warning 基于el-tooltip二次封装，只有当内容超出容器时才显示提示。
:::

## 使用方式

### 1. 单行文本提示

<br />
<ClientOnly>
<LSTooltip width="200" :fontSize="14" content="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试" placement="right">
  <div class="tooltip-test">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
</LSTooltip>
</ClientOnly>

::: details 点我查看代码

```html
<LSTooltip width="200" :fontSize="14" content="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试" placement="right">
  <div class="tooltip-test">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
</LSTooltip>
```

```scss
.tooltip-test {
  width: 100%;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

:::

### 2. 多行文本提示

<br />
<ClientOnly>
<LSTooltip width="100" :fontSize="14" :lineClamp="2" :lineHeight="20" content="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试" placement="right">
  <div class="tooltip-test2">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
</LSTooltip>
</ClientOnly>

::: details 点我查看代码

```html
<LSTooltip width="100" :fontSize="14" :lineClamp="2" :lineHeight="20" content="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试" placement="right">
  <div class="tooltip-test2">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
</LSTooltip>
```

```scss
.tooltip-test2 {
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

:::

### 3. 不同位置的提示

<br />
<ClientOnly>
<div class="tooltip-position-demo">
  <div class="item">
    <LSTooltip width="60" :fontSize="14" content="这是一个顶部提示信息" placement="top">
      <div class="tooltip-item">顶部提示</div>
    </LSTooltip>
  </div>
  <div class="item">
    <LSTooltip width="60" :fontSize="14" content="这是一个左侧提示信息" placement="left">
      <div class="tooltip-item">左侧提示</div>
    </LSTooltip>
  </div>
  <div class="item">
    <LSTooltip width="60" :fontSize="14" content="这是一个右侧提示信息" placement="right">
      <div class="tooltip-item">右侧提示</div>
    </LSTooltip>
  </div>
  <div class="item">
    <LSTooltip width="60" :fontSize="14" content="这是一个底部提示信息" placement="bottom">
      <div class="tooltip-item">底部提示</div>
    </LSTooltip>
  </div>
</div>
</ClientOnly>

::: details 点我查看代码

```html
<div class="tooltip-position-demo">
  <div class="item">
    <LSTooltip width="60" :fontSize="14" content="这是一个顶部提示信息" placement="top">
      <div class="tooltip-item">顶部提示</div>
    </LSTooltip>
  </div>
  <div class="item">
    <LSTooltip width="60" :fontSize="14" content="这是一个左侧提示信息" placement="left">
      <div class="tooltip-item">左侧提示</div>
    </LSTooltip>
  </div>
  <div class="item">
    <LSTooltip width="60" :fontSize="14" content="这是一个右侧提示信息" placement="right">
      <div class="tooltip-item">右侧提示</div>
    </LSTooltip>
  </div>
  <div class="item">
    <LSTooltip width="60" :fontSize="14" content="这是一个底部提示信息" placement="bottom">
      <div class="tooltip-item">底部提示</div>
    </LSTooltip>
  </div>
</div>
```

```scss
.tooltip-position-demo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  
  .item {
    margin: 10px;
  }
  
  .tooltip-item {
    width: 60px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid #dcdfe6;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
  }
}
```

:::

### 4. 不同触发方式

<br />
<ClientOnly>
<div class="tooltip-trigger-demo">
  <div class="item">
    <LSTooltip width="80" :fontSize="14" content="点击触发提示信息" placement="top" trigger="click">
      <div class="tooltip-item">点击触发</div>
    </LSTooltip>
  </div>
  <div class="item">
    <LSTooltip width="80" :fontSize="14" content="悬浮触发提示信息" placement="top" trigger="hover">
      <div class="tooltip-item">悬浮触发</div>
    </LSTooltip>
  </div>
  <div class="item">
    <LSTooltip width="80" :fontSize="14" content="聚焦触发提示信息" placement="top" trigger="focus">
      <div class="tooltip-item" tabindex="0">聚焦触发</div>
    </LSTooltip>
  </div>
</div>
</ClientOnly>

::: details 点我查看代码

```html
<div class="tooltip-trigger-demo">
  <div class="item">
    <LSTooltip width="80" :fontSize="14" content="点击触发提示信息" placement="top" trigger="click">
      <div class="tooltip-item">点击触发</div>
    </LSTooltip>
  </div>
  <div class="item">
    <LSTooltip width="80" :fontSize="14" content="悬浮触发提示信息" placement="top" trigger="hover">
      <div class="tooltip-item">悬浮触发</div>
    </LSTooltip>
  </div>
  <div class="item">
    <LSTooltip width="80" :fontSize="14" content="聚焦触发提示信息" placement="top" trigger="focus">
      <div class="tooltip-item" tabindex="0">聚焦触发</div>
    </LSTooltip>
  </div>
</div>
```

```scss
.tooltip-trigger-demo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  
  .item {
    margin: 10px;
  }
  
  .tooltip-item {
    width: 80px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid #dcdfe6;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .tooltip-item[tabindex] {
    outline: none;
  }
  
  .tooltip-item[tabindex]:focus {
    border-color: #409eff;
    box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
  }
}
```

:::

## API

### 1. LSTooltip 特有属性

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. 继承自 el-tooltip 的属性

LSTooltip 组件会将所有未明确定义的属性传递给内部的 el-tooltip 组件，以下是常用的 el-tooltip 属性：

<ApiIntro :tableColumn="tableColumn" :tableData="elTooltipData" />

<script setup>
import { tableColumn } from '../constant';
import { ref } from 'vue';

const tableData = ref([
  {
    name: 'width',
    desc: '文案内容展示宽度',
    type: 'number / string',
    value: '100%'
  },
  {
    name: 'fontSize',
    desc: '文案内容字体大小',
    type: 'number',
    value: '14'
  },
  {
    name: 'lineClamp',
    desc: '大于1为多行隐藏展示，必须与样式中的多行隐藏一致',
    type: 'number',
    value: 1
  },
  {
    name: 'lineHeight',
    desc: '文本内容的行高，多行隐藏时必传',
    type: 'number',
    value: 'null'
  }
]);

const elTooltipData = ref([
  {
    name: 'content',
    desc: '提示内容',
    type: 'string',
    value: ''
  },
  {
    name: 'placement',
    desc: '提示位置',
    type: 'string',
    value: 'top / left / right / bottom'
  },
  {
    name: 'trigger',
    desc: '触发方式',
    type: 'string',
    value: 'hover / click / focus'
  },
  {
    name: 'show-after',
    desc: '延迟显示，单位毫秒',
    type: 'number',
    value: 0
  },
  {
    name: 'hide-after',
    desc: '延迟隐藏，单位毫秒',
    type: 'number',
    value: 200
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: false
  },
  {
    name: 'effect',
    desc: '主题',
    type: 'string',
    value: 'dark / light'
  },
  {
    name: 'popper-class',
    desc: '自定义浮层类名',
    type: 'string',
    value: ''
  },
  {
    name: 'raw-content',
    desc: '是否解析HTML内容',
    type: 'boolean',
    value: false
  }
]);
</script>

<style>
.tooltip-test {
  width: 100%;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tooltip-test2 {
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.tooltip-position-demo,
.tooltip-trigger-demo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
  
  .item {
    margin: 10px;
  }
  
  .tooltip-item {
    width: 60px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid #dcdfe6;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .tooltip-item[tabindex] {
    outline: none;
  }
  
  .tooltip-item[tabindex]:focus {
    border-color: #409eff;
    box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
  }
}
</style>

