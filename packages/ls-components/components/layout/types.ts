/**
 * @file 布局组件类型定义
 * @description 定义布局组件和头部组件的props类型和事件
 */

import { buildProps } from '@cpo/_utils/runtime';

/**
 * 布局组件 props
 * @typedef {Object} lsLayoutProp
 * @property {string|number} mode - 布局模式：`1` 顶部导航+侧边栏+内容区，`2` 顶部导航+内容区，`3` 侧边栏+顶部导航+内容区，默认为 `1`
 * @property {string} headerHeight - 头部高度，传值需带单位，默认为 `60px`
 * @property {boolean} showFooter - 是否显示底部区域，默认为 `false`
 * @property {string} footerHeight - 底部高度，传值需带单位，默认为 `60px`
 * @property {string} asideWidth - 侧边栏宽度，传值需带单位，默认为 `200px`
 * @property {boolean} showLogo - 是否显示 logo；模式 `1/2` 显示在头部，模式 `3` 显示在侧栏顶部，默认为 `true`
 * @property {string} logo - logo 图片地址，默认为 `''`
 * @property {string} customCss - 追加到根节点的自定义 class，默认为 `''`
 * @property {string} theme - 主题风格类名，可选 `glass` / `cyber` / `minimal`，默认为 `''`
 */
export const lsLayoutProp = buildProps({
  /** 布局模式：`1` 顶部导航+侧边栏+内容区，`2` 顶部导航+内容区，`3` 侧边栏+顶部导航+内容区 */
  mode: {
    type: [String, Number],
    default: 1
  },
  /** 头部高度 */
  headerHeight: {
    type: String,
    default: '60px'
  },
  /** 是否显示底部区域 */
  showFooter: {
    type: Boolean,
    default: false
  },
  /** 底部高度 */
  footerHeight: {
    type: String,
    default: '60px'
  },
  /** 侧边栏宽度 */
  asideWidth: {
    type: String,
    default: '200px'
  },
  /** 是否显示 logo；模式 `1/2` 显示在头部，模式 `3` 显示在侧栏顶部 */
  showLogo: {
    type: Boolean,
    default: true
  },
  /** logo 图片地址 */
  logo: {
    type: String,
    default: ''
  },
  /** 追加到根节点的自定义 class */
  customCss: {
    type: String,
    default: ''
  },
  /** 主题风格类名：`glass` / `cyber` / `minimal` */
  theme: {
    type: String,
    default: ''
  }
});

/**
 * 头部组件 props
 * @typedef {Object} lsHeaderProp
 * @property {string|number} mode - 布局模式，默认为 `1`
 * @property {string} title - 头部标题，默认为 `''`
 * @property {boolean} showLogo - 是否显示 logo，默认为 `true`
 * @property {string} logo - logo 图片地址，默认为 `''`
 * @property {string} height - 头部高度，默认为 `60px`
 * @property {boolean} showCommand - 是否显示右侧交互区；关闭时回退为静态头像+用户名，默认为 `true`
 * @property {string} userName - 用户名，默认为 `Admin`
 * @property {string} userIcon - 用户头像地址，默认为 `''`
 * @property {Array<{key: string, name: string}>} commandList - 顶部交互功能列表，默认为 `[]`
 *
 * 该组属性既供内部 `Header` / `CommandList` 使用，也可作为 `LSLayout` 的透传属性传入。
 */
export const lsHeaderProp = buildProps({
  /** 布局模式 */
  mode: {
    type: [String, Number],
    default: 1
  },
  /** 头部标题 */
  title: {
    type: String,
    default: ''
  },
  /** 是否显示 logo */
  showLogo: {
    type: Boolean,
    default: true
  },
  /** logo 图片地址 */
  logo: {
    type: String,
    default: ''
  },
  /** 头部高度 */
  height: {
    type: String,
    default: '60px'
  },
  /** 是否显示右侧交互区；关闭时回退为静态头像与用户名 */
  showCommand: {
    type: Boolean,
    default: true
  },
  /** 用户名 */
  userName: {
    type: String,
    default: 'Admin'
  },
  /** 用户头像地址 */
  userIcon: {
    type: String,
    default: ''
  },
  /** 顶部交互功能列表，项结构为 `{ key, name }` */
  commandList: {
    type: Array<{
      key: string;
      name: string;
    }>,
    default: () => []
  }
});

/**
 * 组件事件名：`onCommand` 为 `LSLayout` 对外事件；`onDropdownCommand` 与 `onDropdownCommand2` 为 `CommandList`、`Header` 内部桥接事件。
 */
export const lsEmitNames = ['onCommand', 'onDropdownCommand', 'onDropdownCommand2'];
