---
outline: deep
---

# 快速开始

::: warning 讲述如何安装依赖、按需引入依赖以及一些注意点。
:::

## 安装 [@lingshugroup/web-plus](https://www.npmjs.com/package/@lingshugroup/web-plus)

::: code-group

```[npm]
npm install @lingshugroup/web-plus
```

```[yarn]
yarn add @lingshugroup/web-plus
```

```[pnpm]
pnpm add @lingshugroup/web-plus
```

:::

::: tip 提示
1、node 18+，pnpm 9.0+  
2、需安装以下基础依赖：vue3.x、vue-router、element-plus、axios、lodash，并引入使用
:::

## 快速上手

:::tip 项目中如使用 unplugin-auto-import/vite 插件，请添加 ignore: ['h'] 参数

```js
AutoImport({
  // 需添加该参数，否则无法使用
  ignore: ['h']
});
```

:::

### 1. 按需引入组件（推荐）

::: details 点我查看代码

```js
// element-plus基础样式，根据业务需求定制
import 'element-plus/dist/index.css';

// 组件库样式，文件教大，发布时压缩大小
import '@lingshugroup/web-plus/index.css';

// 根据业务需求按需引入以下组件
import LSIcon from '@lingshugroup/web-plus/icon';
import { LSButton, LSButtonGroup } from '@lingshugroup/web-plus/button';
import LSLayout from '@lingshugroup/web-plus/layout';

import { LSForm, LSFormItem } from '@lingshugroup/web-plus/form';
import LSUpload from '@lingshugroup/web-plus/upload';

import LSTable from '@lingshugroup/web-plus/table';
import LSDescriptions from '@lingshugroup/web-plus/descriptions';

// v1.0.34+之后不建议使用
import LSPreview from '@lingshugroup/web-plus/preview';

/***** v1.0.34+ ****/
import LSPreviewImage from '@lingshugroup/web-plus/previewImage';
import LSPreviewDocx from '@lingshugroup/web-plus/previewDocx';
import LSPreviewPdf from '@lingshugroup/web-plus/previewPdf';
import LSPreviewXlsx from '@lingshugroup/web-plus/previewXlsx';
/***** v1.0.34+ ****/

import LSTree from '@lingshugroup/web-plus/tree';
import LSMap from '@lingshugroup/web-plus/map';
import LSLive from '@lingshugroup/web-plus/live';
import LSJsonEditor from '@lingshugroup/web-plus/jsonEditor';
import LSEditor from '@lingshugroup/web-plus/editor';
import LSList from '@lingshugroup/web-plus/list';

import LSChart from '@lingshugroup/web-plus/chart';

import LSBackTop from '@lingshugroup/web-plus/backTop';
import LSBreadcrumb from '@lingshugroup/web-plus/breadcrumb';
import LSMenu from '@lingshugroup/web-plus/menu';

import LSConfirm from '@lingshugroup/web-plus/confirm';
import LSBellMessage from '@lingshugroup/web-plus/bellMessage';
import LSDialog from '@lingshugroup/web-plus/dialog';

import LSPrint from '@lingshugroup/web-plus/print';
import LSFlowBox from '@lingshugroup/web-plus/flowBox';
import LSContainerBox from '@lingshugroup/web-plus/containerBox';

[
  LSIcon,
  LSButton,
  LSButtonGroup,
  LSLayout,
  LSForm,
  LSFormItem,
  LSUpload,
  LSTable,
  LSDescriptions,
  LSPreview,
  LSPreviewImage,
  LSPreviewDocx,
  LSPreviewPdf,
  LSPreviewXlsx,
  LSTree,
  LSMap,
  LSLive,
  LSJsonEditor,
  LSEditor,
  LSList,
  LSChart,
  LSBackTop,
  LSBreadcrumb,
  LSMenu,
  LSConfirm,
  LSBellMessage,
  LSDialog,
  LSPrint,
  LSFlowBox,
  LSContainerBox
].map(item => {
  app.component(item.name, item);
});
```

:::

### 2. 全局引入组件（不推荐）

::: tip 全局引入时需要安装所有第三方依赖，否则无法使用，具体依赖如下：
echarts、pdfjs-dist(4.8.69)、@wangeditor/editor、@wangeditor/editor-for-vue(5.1.12)、@element-plus/icons-vue、@iconify/vue、luckyexcel、vue3-ts-jsoneditor
:::

```js
// element-plus基础样式，根据业务需求定制
import 'element-plus/dist/index.css';

// 组件库样式，文件教大，发布时压缩大小
import '@lingshugroup/web-plus/index.css';

// 全局引入
import LSWebPlus from '@lingshugroup/web-plus';

app.use(LSWebPlus);
```

### 3. 引入常用方法

```js
// 常用指令
import { vAuth } from '@lingshugroup/web-plus/directives';
// 权限code码
vAuth.permissions = ['a', 'b', 'c'];
app.directive('auth', vAuth);

// 常用hooks
import { useRouterHook, useColorthiefHook, useWSHook, useOptionHook, useTableListHook } from '@lingshugroup/web-plus/hooks';

// 常用公共方法
import { lsValidate, lsCheck } from '@lingshugroup/web-plus/utils';
```

### 4. 类型检查 v1.3.1+

```js
// 系统通知
BellMessageListType
// 面包屑
BreadCrumpListType
// 图标配置
IconConfigType
// 图表数据
ChartDataType ChartTemplatePatchType ChartTemplateType
// 描述列表
DescriptionsListType
// 对话框按钮
DialogBtnType
// 地图
MarkerAnchorType
// 菜单
MenuBaseType
// 上传
UploadItemType

import type {  
  BellMessageListType,
  BreadCrumpType
  BreadCrumpListType,
  IconConfigType,
  ChartDataType,
  ChartTemplatePatchType,
  ChartTemplateType,
  DescriptionsListType,
  DialogBtnType,
  MarkerAnchorType,
  MenuBaseType,
  UploadItemType } from '@lingshugroup/web-plus';
```
