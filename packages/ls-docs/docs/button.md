---
outline: deep
---

# Button 按钮

::: warning 结合 el-button、el-button-group 组件进行二次封装。
:::

## 使用方式

### 1. 基础按钮

<ClientOnly>
<LSButton>默认按钮</LSButton>
<LSButton type="primary">主要按钮</LSButton>
<LSButton type="success">成功按钮</LSButton>
<LSButton type="warning">警告按钮</LSButton>
<LSButton type="danger">危险按钮</LSButton>
<LSButton type="info">信息按钮</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton>默认按钮</LSButton>
<LSButton type="primary">主要按钮</LSButton>
<LSButton type="success">成功按钮</LSButton>
<LSButton type="warning">警告按钮</LSButton>
<LSButton type="danger">危险按钮</LSButton>
<LSButton type="info">信息按钮</LSButton>
```

:::

### 2. 按钮尺寸

<ClientOnly>
<LSButton size="large">大型按钮</LSButton>
<LSButton>默认按钮</LSButton>
<LSButton size="small">小型按钮</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton size="large">大型按钮</LSButton>
<LSButton>默认按钮</LSButton>
<LSButton size="small">小型按钮</LSButton>
```

:::

### 3. 带图标的按钮

<ClientOnly>
<LSButton type="primary" :icon="Edit">编辑</LSButton>
<LSButton type="success" :icon="Check">成功</LSButton>
<LSButton type="warning" :icon="Warning">警告</LSButton>
<LSButton type="danger" :icon="Delete">删除</LSButton>
<LSButton type="info" :icon="InfoFilled">信息</LSButton>
</ClientOnly>

:::details 点我查看代码

```js
import { Edit, Check, Warning, Delete, InfoFilled } from '@element-plus/icons-vue';
```

```html
<LSButton type="primary" :icon="Edit">编辑</LSButton>
<LSButton type="success" :icon="Check">成功</LSButton>
<LSButton type="warning" :icon="Warning">警告</LSButton>
<LSButton type="danger" :icon="Delete">删除</LSButton>
<LSButton type="info" :icon="InfoFilled">信息</LSButton>
```

:::

### 4. 仅图标按钮

<ClientOnly>
<LSButton type="primary" :icon="Edit"></LSButton>
<LSButton type="success" :icon="Check"></LSButton>
<LSButton type="warning" :icon="Warning"></LSButton>
<LSButton type="danger" :icon="Delete"></LSButton>
<LSButton type="info" :icon="InfoFilled"></LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="primary" :icon="Edit"></LSButton>
<LSButton type="success" :icon="Check"></LSButton>
<LSButton type="warning" :icon="Warning"></LSButton>
<LSButton type="danger" :icon="Delete"></LSButton>
<LSButton type="info" :icon="InfoFilled"></LSButton>
```

:::

### 5. 加载状态按钮

<ClientOnly>
<LSButton type="primary" :loading="true">加载中</LSButton>
<LSButton type="success" :loading="true">加载中</LSButton>
<LSButton type="warning" :loading="true">加载中</LSButton>
<LSButton type="danger" :loading="true">加载中</LSButton>
<LSButton type="info" :loading="true">加载中</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="primary" :loading="true">加载中</LSButton>
<LSButton type="success" :loading="true">加载中</LSButton>
<LSButton type="warning" :loading="true">加载中</LSButton>
<LSButton type="danger" :loading="true">加载中</LSButton>
<LSButton type="info" :loading="true">加载中</LSButton>
```

:::

### 6. 禁用状态按钮

<ClientOnly>
<LSButton disabled>禁用按钮</LSButton>
<LSButton type="primary" disabled>禁用主要按钮</LSButton>
<LSButton type="success" disabled>禁用成功按钮</LSButton>
<LSButton type="warning" disabled>禁用警告按钮</LSButton>
<LSButton type="danger" disabled>禁用危险按钮</LSButton>
<LSButton type="info" disabled>禁用信息按钮</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton disabled>禁用按钮</LSButton>
<LSButton type="primary" disabled>禁用主要按钮</LSButton>
<LSButton type="success" disabled>禁用成功按钮</LSButton>
<LSButton type="warning" disabled>禁用警告按钮</LSButton>
<LSButton type="danger" disabled>禁用危险按钮</LSButton>
<LSButton type="info" disabled>禁用信息按钮</LSButton>
```

:::

### 7. 圆角按钮

<ClientOnly>
<LSButton round>圆角按钮</LSButton>
<LSButton type="primary" round>主要圆角按钮</LSButton>
<LSButton type="success" round>成功圆角按钮</LSButton>
<LSButton type="warning" round>警告圆角按钮</LSButton>
<LSButton type="danger" round>危险圆角按钮</LSButton>
<LSButton type="info" round>信息圆角按钮</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton round>圆角按钮</LSButton>
<LSButton type="primary" round>主要圆角按钮</LSButton>
<LSButton type="success" round>成功圆角按钮</LSButton>
<LSButton type="warning" round>警告圆角按钮</LSButton>
<LSButton type="danger" round>危险圆角按钮</LSButton>
<LSButton type="info" round>信息圆角按钮</LSButton>
```

:::

### 8. 圆形按钮

<ClientOnly>
<LSButton circle :icon="Edit"></LSButton>
<LSButton type="primary" circle :icon="Check"></LSButton>
<LSButton type="success" circle :icon="Warning"></LSButton>
<LSButton type="warning" circle :icon="Delete"></LSButton>
<LSButton type="danger" circle :icon="InfoFilled"></LSButton>
<LSButton type="info" circle :icon="Search"></LSButton>
</ClientOnly>

:::details 点我查看代码

```js
import { Edit, Check, Warning, Delete, InfoFilled, Search } from '@element-plus/icons-vue';
```

```html
<LSButton circle :icon="Edit"></LSButton>
<LSButton type="primary" circle :icon="Check"></LSButton>
<LSButton type="success" circle :icon="Warning"></LSButton>
<LSButton type="warning" circle :icon="Delete"></LSButton>
<LSButton type="danger" circle :icon="InfoFilled"></LSButton>
<LSButton type="info" circle :icon="Search"></LSButton>
```

:::

### 9. 文字按钮

<ClientOnly>
<LSButton link>文字按钮</LSButton>
<LSButton type="primary" link>主要文字按钮</LSButton>
<LSButton type="success" link>成功文字按钮</LSButton>
<LSButton type="warning" link>警告文字按钮</LSButton>
<LSButton type="danger" link>危险文字按钮</LSButton>
<LSButton type="info" link>信息文字按钮</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton link>文字按钮</LSButton>
<LSButton type="primary" link>主要文字按钮</LSButton>
<LSButton type="success" link>成功文字按钮</LSButton>
<LSButton type="warning" link>警告文字按钮</LSButton>
<LSButton type="danger" link>危险文字按钮</LSButton>
<LSButton type="info" link>信息文字按钮</LSButton>
```

:::

### 10. 带自定义图标的按钮

<ClientOnly>
<LSButton :icon-config="{ type: 1, name: 'iconoir:fish', color: 'blue', width: 20, height: 20 }">鱼图标</LSButton>
<LSButton :icon-config="{ type: 1, name: 'iconoir:heart', color: 'red', width: 20, height: 20 }">心形图标</LSButton>
<LSButton :icon-config="{ type: 1, name: 'iconoir:star', color: 'yellow', width: 20, height: 20 }">星形图标</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton :icon-config="{ type: 1, name: 'iconoir:fish', color: 'blue', width: 20, height: 20 }">鱼图标</LSButton>
<LSButton :icon-config="{ type: 1, name: 'iconoir:heart', color: 'red', width: 20, height: 20 }">心形图标</LSButton>
<LSButton :icon-config="{ type: 1, name: 'iconoir:star', color: 'yellow', width: 20, height: 20 }">星形图标</LSButton>
```

:::

### 11. 按钮组

<ClientOnly>
<LSButtonGroup>
  <LSButton type="primary" :icon="ArrowLeft">上一步</LSButton>
  <LSButton type="primary">下一步</LSButton>
</LSButtonGroup>

<LSButtonGroup style="margin-left: 20px;">
  <LSButton type="success">编辑</LSButton>
  <LSButton type="warning">复制</LSButton>
  <LSButton type="danger">删除</LSButton>
</LSButtonGroup>
</ClientOnly>

:::details 点我查看代码

```js
import { ArrowLeft } from '@element-plus/icons-vue';
```

```html
<LSButtonGroup>
  <LSButton type="primary" :icon="ArrowLeft">上一步</LSButton>
  <LSButton type="primary">下一步</LSButton>
</LSButtonGroup>

<LSButtonGroup style="margin-left: 20px;">
  <LSButton type="success">编辑</LSButton>
  <LSButton type="warning">复制</LSButton>
  <LSButton type="danger">删除</LSButton>
</LSButtonGroup>
```

:::

### 12. 带分隔符的按钮组

<ClientOnly>
<LSButtonGroup type="primary" separator="|" separator-color="#fff" :separator-size="14">
  <LSButton>按钮1</LSButton>
  <LSButton>按钮2</LSButton>
  <LSButton>按钮3</LSButton>
</LSButtonGroup>

<LSButtonGroup type="success" separator="/" separator-color="#fff" :separator-size="14" style="margin-left: 20px;">
  <LSButton>按钮A</LSButton>
  <LSButton>按钮B</LSButton>
  <LSButton>按钮C</LSButton>
</LSButtonGroup>
</ClientOnly>

:::details 点我查看代码

```html
<LSButtonGroup type="primary" separator="|" separator-color="#fff" :separator-size="14">
  <LSButton>按钮1</LSButton>
  <LSButton>按钮2</LSButton>
  <LSButton>按钮3</LSButton>
</LSButtonGroup>

<LSButtonGroup type="success" separator="/" separator-color="#fff" :separator-size="14" style="margin-left: 20px;">
  <LSButton>按钮A</LSButton>
  <LSButton>按钮B</LSButton>
  <LSButton>按钮C</LSButton>
</LSButtonGroup>
```

:::

### 13. 带图标的按钮组

<ClientOnly>
<LSButtonGroup type="primary">
  <LSButton :icon="Edit">编辑</LSButton>
  <LSButton :icon="Check">保存</LSButton>
  <LSButton :icon="Delete">删除</LSButton>
</LSButtonGroup>
</ClientOnly>

:::details 点我查看代码

```js
import { Edit, Check, Delete } from '@element-plus/icons-vue';
```

```html
<LSButtonGroup type="primary">
  <LSButton :icon="Edit">编辑</LSButton>
  <LSButton :icon="Check">保存</LSButton>
  <LSButton :icon="Delete">删除</LSButton>
</LSButtonGroup>
```

:::

## API

### 1. Button Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="buttonTableData" />

### 2. ButtonGroup Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="buttonGroupTableData" />

### 3. Button Events

<ApiIntro :tableColumn="eventTableColumn" :tableData="buttonEventTableData" />

<ClientOnly>
<LSButton type="primary" @click="handleClick">点击我</LSButton>
</ClientOnly>

:::details 点我查看代码

```js
const handleClick = () => {
  alert('按钮被点击了');
};
```

```html
<LSButton type="primary" @click="handleClick">点击我</LSButton>
```

:::

<script setup>
import { ref } from 'vue';
import { Edit, Check, Warning, Delete, InfoFilled, Search, ArrowLeft } from '@element-plus/icons-vue';
import { tableColumn } from '../constant';

const buttonTableData = ref([
  {
    name: 'type',
    desc: '按钮类型',
    type: 'string',
    value: 'primary / success / warning / danger / info'
  },
  {
    name: 'size',
    desc: '按钮尺寸',
    type: 'string',
    value: 'large / default / small'
  },
  {
    name: 'icon',
    desc: '图标组件',
    type: 'Component',
    value: '-'
  },
  {
    name: 'iconConfig',
    desc: '图标配置，具体配置参考LSIcon',
    type: 'IconConfigType',
    value: '-'
  },
  {
    name: 'loading',
    desc: '加载状态',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'disabled',
    desc: '禁用状态',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'round',
    desc: '圆角按钮',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'circle',
    desc: '圆形按钮',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'link',
    desc: '文字按钮',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'plain',
    desc: '朴素按钮',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'auto-insert-space',
    desc: '自动在文字和图标之间插入空格',
    type: 'boolean',
    value: 'true'
  }
]);

const buttonGroupTableData = ref([
  {
    name: 'separator',
    desc: '按钮之间分割符号',
    type: 'string',
    value: '-'
  },
  {
    name: 'separatorColor',
    desc: '按钮之间分割符号颜色',
    type: 'string',
    value: '#333'
  },
  {
    name: 'separatorSize',
    desc: '按钮之间分割符号大小',
    type: 'string / number',
    value: '12'
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

const buttonEventTableData = ref([
  {
    name: 'click',
    desc: '点击按钮时触发',
    params: 'event'
  },
  {
    name: 'mouseenter',
    desc: '鼠标进入按钮时触发',
    params: 'event'
  },
  {
    name: 'mouseleave',
    desc: '鼠标离开按钮时触发',
    params: 'event'
  }
]);

const handleClick = () => {
  alert('按钮被点击了');
};
</script>
