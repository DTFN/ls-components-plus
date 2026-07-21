---
outline: deep
---

# JsonEditor JSON编辑器

::: warning 基于 vue3-ts-jsoneditor 进行二次封装，提供JSON数据的查看和编辑功能，支持只读模式、导航栏等配置。
:::

## 使用方式

### 1. 基础用法
<ClientOnly>
<LSJsonEditor
  :json-value="{
    name: '零数科技',
    version: '2.6.8',
    description: '前端UI组件库（Vue3）',
    features: ['Vue3', 'TypeScript', 'Element Plus']
  }"
  height="300px"
/>
</ClientOnly>

:::details 点我查看代码
```html
<LSJsonEditor
  :json-value="{
    name: '零数科技',
    version: '2.6.8',
    description: '前端UI组件库（Vue3）',
    features: ['Vue3', 'TypeScript', 'Element Plus']
  }"
  height="300px"
/>
```
:::

### 2. 只读模式
<ClientOnly>
<LSJsonEditor
  :json-value="{
    name: '零数科技',
    version: '2.6.8',
    isOpenSource: true,
    downloadCount: 10000
  }"
  read-only
  height="300px"
/>
</ClientOnly>

:::details 点我查看代码
```html
<LSJsonEditor
  :json-value="{
    name: '零数科技',
    version: '2.6.8',
    isOpenSource: true,
    downloadCount: 10000
  }"
  read-only
  height="300px"
/>
```
:::

### 3. 显示导航栏
<ClientOnly>
<LSJsonEditor
  :json-value="{
    name: '零数科技',
    author: {
      name: '前端团队',
      email: 'frontend@lingshu.com'
    },
    createTime: '2024-01-01'
  }"
  :navigation-bar="true"
  height="300px"
/>
</ClientOnly>

:::details 点我查看代码
```html
<LSJsonEditor
  :json-value="{
    name: '零数科技',
    author: {
      name: '前端团队',
      email: 'frontend@lingshu.com'
    },
    createTime: '2024-01-01'
  }"
  :navigation-bar="true"
  height="300px"
/>
```
:::

## API

### Props
| 参数名 | 说明 | 类型 | 默认值 |
| ------ | ---- | ---- | ------ |
| jsonValue | 要显示/编辑的JSON数据 | `object \| string` | `{}` |
| readOnly | 是否只读模式 | `boolean` | `true` |
| height | 编辑器高度 | `string` | `600px` |
| navigationBar | 是否显示导航栏 | `boolean` | `false` |
| mode | 编辑器模式，可选值：`text`、`tree`、`form`、`view`、`code` | `string` | 只读模式下默认为 `text`，编辑模式下默认为 `tree` |

### Events
| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| change | JSON内容发生变化时触发 | `(value: any) => void` |
