---
outline: deep
---

# Theme 主题系统

::: warning LSLayout 内置了多套主题风格，通过简单配置即可切换不同的视觉体验，适用于各种业务场景。
:::

## 主题列表

### 1. default 默认主题
经典的后台管理系统风格，简洁清爽，适合大多数企业级应用场景。

<ClientOnly>
<LSLayout
  header-height="50px"
  aside-width="200px"
  title="默认主题"
  :show-command="false"
  theme="default"
  style="height: 300px; border: 1px solid #e4e7ed; border-radius: 8px; overflow: hidden;"
>
  <template #aside>
    <div class="fake-menu">
      <div class="fake-menu-item">首页</div>
      <div class="fake-menu-item">表格</div>
      <div class="fake-menu-item">表单</div>
    </div>
  </template>
  <template #section>
    <div class="theme-content">
      <h3>默认主题</h3>
      <p>经典清爽的后台管理风格</p>
    </div>
  </template>
</LSLayout>
</ClientOnly>

:::details 点我查看代码
```html
<LSLayout
  header-height="50px"
  aside-width="200px"
  title="默认主题"
  :show-command="false"
  theme="default"
>
  <!-- 内容 -->
</LSLayout>
```
:::

### 2. glass 玻璃态主题
半透明玻璃态效果，搭配毛玻璃背景，视觉效果现代高级，适合数据可视化、大屏展示类应用。

<ClientOnly>
<LSLayout
  header-height="50px"
  aside-width="200px"
  title="玻璃态主题"
  :show-command="false"
  theme="glass"
  style="height: 300px; border: 1px solid #e4e7ed; border-radius: 8px; overflow: hidden; background: url('https://picsum.photos/id/1018/1920/1080') center / cover;"
>
  <template #aside>
    <div class="fake-menu">
      <div class="fake-menu-item">首页</div>
      <div class="fake-menu-item">表格</div>
      <div class="fake-menu-item">表单</div>
    </div>
  </template>
  <template #section>
    <div class="theme-content">
      <h3>玻璃态主题</h3>
      <p>半透明毛玻璃效果，现代高级</p>
    </div>
  </template>
</LSLayout>
</ClientOnly>

:::details 点我查看代码
```html
<LSLayout
  header-height="50px"
  aside-width="200px"
  title="玻璃态主题"
  :show-command="false"
  theme="glass"
>
  <!-- 内容 -->
</LSLayout>
```
:::

### 3. cyber 赛博朋克主题
深色科技风格，高对比度蓝紫色调，适合科技类、游戏类、数据监控类应用。

<ClientOnly>
<LSLayout
  header-height="50px"
  aside-width="200px"
  title="赛博朋克主题"
  :show-command="false"
  theme="cyber"
  style="height: 300px; border: 1px solid #e4e7ed; border-radius: 8px; overflow: hidden;"
>
  <template #aside>
    <div class="fake-menu">
      <div class="fake-menu-item">首页</div>
      <div class="fake-menu-item">表格</div>
      <div class="fake-menu-item">表单</div>
    </div>
  </template>
  <template #section>
    <div class="theme-content">
      <h3>赛博朋克主题</h3>
      <p>深色科技风格，未来感十足</p>
    </div>
  </template>
</LSLayout>
</ClientOnly>

:::details 点我查看代码
```html
<LSLayout
  header-height="50px"
  aside-width="200px"
  title="赛博朋克主题"
  :show-command="false"
  theme="cyber"
>
  <!-- 内容 -->
</LSLayout>
```
:::

### 4. minimal 极简主题
极致简约的浅色风格，大量留白，适合文档类、内容类、工具类应用。

<ClientOnly>
<LSLayout
  header-height="50px"
  aside-width="200px"
  title="极简主题"
  :show-command="false"
  theme="minimal"
  style="height: 300px; border: 1px solid #e4e7ed; border-radius: 8px; overflow: hidden;"
>
  <template #aside>
    <div class="fake-menu">
      <div class="fake-menu-item">首页</div>
      <div class="fake-menu-item">表格</div>
      <div class="fake-menu-item">表单</div>
    </div>
  </template>
  <template #section>
    <div class="theme-content">
      <h3>极简主题</h3>
      <p>极致简约，内容优先</p>
    </div>
  </template>
</LSLayout>
</ClientOnly>

:::details 点我查看代码
```html
<LSLayout
  header-height="50px"
  aside-width="200px"
  title="极简主题"
  :show-command="false"
  theme="minimal"
>
  <!-- 内容 -->
</LSLayout>
```
:::

## 切换主题
通过 `theme` 属性即可切换主题，无需额外配置：

```vue
<template>
  <LSLayout :theme="currentTheme">
    <!-- 内容 -->
  </LSLayout>
</template>

<script setup lang="ts">
const currentTheme = ref('default') // 可选值：default / glass / cyber / minimal
</script>
```

## 主题自定义
如果内置主题不能满足需求，可以通过 CSS 变量进行自定义：

```css
:root {
  /* 主题主色 */
  --ls-theme-primary: #409eff;
  /* 头部背景色 */
  --ls-header-bg: #ffffff;
  /* 侧边栏背景色 */
  --ls-aside-bg: #ffffff;
  /* 内容区域背景色 */
  --ls-section-bg: #f5f7fa;
  /* 菜单选中颜色 */
  --ls-menu-active-color: #409eff;
  /* 菜单选中背景色 */
  --ls-menu-active-bg: #ecf5ff;
}
```

<style>
.fake-menu {
  width: 200px;
  padding: 12px;
}
.fake-menu-item {
  padding: 10px 12px;
  margin-bottom: 4px;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  border-radius: 4px;
}
.fake-menu-item:hover {
  background: #f5f7fa;
}
.theme-content {
  padding: 20px;
}
</style>
