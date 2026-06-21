# 零数科技 Web Plus 组件库

基于 Vue3 + TypeScript + Element Plus 封装的企业级前端组件库，提供丰富的组件、工具函数和自定义 Hooks，帮助开发者快速搭建中后台应用。

## 项目结构

```
├── packages/
│   ├── ls-components/    # 组件库源码
│   └── ls-docs/          # 官方文档站点
├── package.json
└── pnpm-workspace.yaml
```

## 运行环境

```
Node.js >= 18.x
pnpm >= 9.0
```

## 安装依赖

```bash
pnpm install
```

## 本地开发

### 运行组件库演示项目

```bash
pnpm run dev:ls-components
```

访问 http://localhost:5173 查看所有组件的使用案例。

### 运行官方文档站点

```bash
pnpm run dev:ls-docs
```

访问 http://localhost:5174 查看官方文档。

## 安装使用

### npm 安装

```bash
npm install @lingshugroup/web-plus
```

### yarn 安装

```bash
yarn add @lingshugroup/web-plus
```

### pnpm 安装

```bash
pnpm add @lingshugroup/web-plus
```

### 按需引入（推荐）

```ts
import {
  LSButton,
  LSForm,
  LSTable,
  LSUpload,
  // 其他需要的组件
} from '@lingshugroup/web-plus'
import '@lingshugroup/web-plus/index.css'

app.use(LSButton)
app.use(LSForm)
// 注册其他组件
```

### 全局引入（不推荐）

```ts
import LSWebPlus from '@lingshugroup/web-plus'
import '@lingshugroup/web-plus/index.css'

app.use(LSWebPlus)
```

### 使用工具函数和 Hooks

```ts
// 工具函数
import { lsCheck, lsUtil, lsValidate } from '@lingshugroup/web-plus/utils'

// 自定义 Hooks
import { useOptionsHook, useTableListHook, useWSHook } from '@lingshugroup/web-plus/hooks'
```

## 核心特性

### 丰富的组件库
- 基础组件：按钮、图标、布局、主题系统
- 表单组件：表单、上传、分片上传、验证码
- 数据展示：表格、描述列表、预览系列（图片/文档/PDF/Excel）、树形控件、地图、直播视频、富文本编辑器、JSON编辑器、列表、图表
- 导航组件：回到顶部、面包屑、菜单
- 反馈组件：确认框、消息通知、对话框、提示框
- 其他组件：打印、容器盒、下载、图片裁剪

### 工具函数
- `lsCheck`：类型检查工具
- `lsUtil`：通用工具函数
- `lsValidate`：表单验证工具

### 自定义 Hooks
- `useOptionsHook`：下拉选项数据获取 Hook
- `useTableListHook`：表格分页数据加载 Hook
- `useWSHook`：WebSocket 连接管理 Hook

## 技术栈

- Vue 3.x
- TypeScript
- Element Plus
- Vite
- VitePress（文档）

## 浏览器支持

- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90

## License

MIT
