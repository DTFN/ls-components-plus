---
outline: deep
---

# 快速开始

::: warning 讲述如何安装依赖、按需引入依赖以及一些注意点。
:::

## 一、注意点：

::: tip 环境要求
1、node 18+，pnpm 9.0+
2、需安装以下基础依赖：vue3.x、vue-router、element-plus、axios、lodash，并引入使用
:::

:::tip 项目中如使用 unplugin-auto-import/vite 插件，请添加 ignore: ['h'] 参数

```js
AutoImport({
  // 需添加该参数，否则无法使用
  ignore: ['h']
})
```

:::

::: tip 版本提示
1、@lingshugroup/web-plus v2.1.2+，element-plus更新至2.10.7。
:::

## 二、安装 [@lingshugroup/web-plus](https://www.npmjs.com/package/@lingshugroup/web-plus)

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

## 三、快速上手

### 1. 按需引入组件（推荐）

```js
import LSBackTop from '@lingshugroup/web-plus/backTop'
import LSBellMessage from '@lingshugroup/web-plus/bellMessage'
import LSBreadcrumb from '@lingshugroup/web-plus/breadcrumb'
import { LSButton, LSButtonGroup } from '@lingshugroup/web-plus/button'
import LSChart from '@lingshugroup/web-plus/chart'
import LSConfirm from '@lingshugroup/web-plus/confirm'
import LSContainerBox from '@lingshugroup/web-plus/containerBox'
import LSCaptchaVerify from '@lingshugroup/web-plus/captchaVerify'
import LSSliceUpload from '@lingshugroup/web-plus/sliceUpload'
import LSCropper from '@lingshugroup/web-plus/cropper'
import LSDownloadFile from '@lingshugroup/web-plus/downloadFile'
import { LSForm, LSFormItem } from '@lingshugroup/web-plus/form'
// 根据业务需求按需引入以下组件
import LSIcon from '@lingshugroup/web-plus/icon'
import LSJsonEditor from '@lingshugroup/web-plus/jsonEditor'
/** *** v1.0.34+ */
import LSLayout from '@lingshugroup/web-plus/layout'
import LSList from '@lingshugroup/web-plus/list'
import LSLive from '@lingshugroup/web-plus/live'
import LSMap from '@lingshugroup/web-plus/map'
import LSMenu from '@lingshugroup/web-plus/menu'
// v1.0.34+之后不建议使用
import LSPreview from '@lingshugroup/web-plus/preview'
import LSPreviewDocx from '@lingshugroup/web-plus/previewDocx'
/** *** v1.0.34+ */
import LSPreviewImage from '@lingshugroup/web-plus/previewImage'
import LSPreviewPdf from '@lingshugroup/web-plus/previewPdf'
import LSPreviewXlsx from '@lingshugroup/web-plus/previewXlsx'
import LSPrint from '@lingshugroup/web-plus/print'
import LSTable from '@lingshugroup/web-plus/table'
// 1.7.5+
import LSTooltip from '@lingshugroup/web-plus/tooltip'
import LSTree from '@lingshugroup/web-plus/tree'
import LSUpload from '@lingshugroup/web-plus/upload'
// element-plus基础样式，根据业务需求定制
import 'element-plus/dist/index.css'
// 组件库样式，文件较大，发布时压缩大小
import '@lingshugroup/web-plus/index.css';

[
  LSIcon,
  LSButton,
  LSButtonGroup,
  LSLayout,
  LSForm,
  LSFormItem,
  LSUpload,
  LSSliceUpload,
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
  LSCaptchaVerify,
  LSCropper,
  LSDownloadFile,
  LSContainerBox,
  LSTooltip
]
.map((item) => {
  app.component(item.name, item)
})
```

### 2. 全局引入组件（不推荐）

::: tip 全局引入时需要安装所有第三方依赖，否则无法使用，具体依赖如下：
echarts、pdfjs-dist(4.8.69)、@wangeditor/editor、@wangeditor/editor-for-vue(5.1.12)、@element-plus/icons-vue、@iconify/vue、luckyexcel、vue3-ts-jsoneditor
:::

```js
// 全局引入
import LSWebPlus from '@lingshugroup/web-plus'
// element-plus基础样式，根据业务需求定制
import 'element-plus/dist/index.css'
// 组件库样式，文件教大，发布时压缩大小
import '@lingshugroup/web-plus/index.css'

app.use(LSWebPlus)
```

### 3. 引入常用方法

```js
// 常用hooks
import { useOptionsHook, useTableListHook, useWSHook } from '@lingshugroup/web-plus/hooks'
// 常用公共方法
import { lsCheck, lsUtil, lsValidate } from '@lingshugroup/web-plus/utils'
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
  ChartMapDataType,
  DescriptionsListType,
  DialogBtnType,
  MarkerAnchorType,
  MenuBaseType,
  UploadItemType } from '@lingshugroup/web-plus';
```
