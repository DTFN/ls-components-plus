/**
 * @file 布局组件类型定义
 * @description 定义布局组件和头部组件的props类型和事件
 */

import { buildProps } from '@cpo/_utils/runtime';

/**
 * 布局组件props
 * @typedef {Object} lsLayoutProp
 * @property {string|number} mode - 布局模式：1=header+aside+main, 2=header+main, 3=aside+header+main，默认为1
 * @property {string} headerHeight - 头部高度，默认为'60px'
 * @property {boolean} showFooter - 是否显示底部，默认为false
 * @property {string} footerHeight - 底部高度，默认为'60px'
 * @property {string} asideWidth - 侧边栏宽度，默认为'200px'
 * @property {boolean} showLogo - 是否显示Logo，默认为true
 * @property {string} logo - Logo图片地址，默认为''
 * @property {string} customCss - 自定义CSS类名，默认为''
 * @property {string} theme - 主题样式：'glass'|'cyber'|'minimal'，默认为''
 */
export const lsLayoutProp = buildProps({
  /** 布局模式：1=header+aside+main, 2=header+main, 3=aside+header+main */
  mode: {
    type: [String, Number],
    default: 1
  },
  /** 头部高度 */
  headerHeight: {
    type: String,
    default: '60px'
  },
  /** 是否显示底部 */
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
  /** 是否显示Logo */
  showLogo: {
    type: Boolean,
    default: true
  },
  /** Logo图片地址 */
  logo: {
    type: String,
    default: ''
  },
  /** 自定义CSS类名 */
  customCss: {
    type: String,
    default: ''
  },
  /** 主题样式：'glass'|'cyber'|'minimal' */
  theme: {
    type: String,
    default: ''
  }
});

/**
 * 头部组件props
 * @typedef {Object} lsHeaderProp
 * @property {string|number} mode - 布局模式，默认为1
 * @property {string} title - 标题，默认为''
 * @property {boolean} showLogo - 是否显示Logo，默认为true
 * @property {string} logo - Logo图片地址，默认为''
 * @property {string} height - 头部高度，默认为'60px'
 * @property {boolean} showCommand - 是否显示命令区域，默认为true
 * @property {string} userName - 用户名，默认为'Admin'
 * @property {string} userIcon - 用户头像，默认为''
 * @property {Array<{key: string, name: string}>} commandList - 命令列表，默认为[]
 */
export const lsHeaderProp = buildProps({
  /** 布局模式 */
  mode: {
    type: [String, Number],
    default: 1
  },
  /** 标题 */
  title: {
    type: String,
    default: ''
  },
  /** 是否显示Logo */
  showLogo: {
    type: Boolean,
    default: true
  },
  /** Logo图片地址 */
  logo: {
    type: String,
    default: ''
  },
  /** 头部高度 */
  height: {
    type: String,
    default: '60px'
  },
  /** 是否显示命令区域 */
  showCommand: {
    type: Boolean,
    default: true
  },
  /** 用户名 */
  userName: {
    type: String,
    default: 'Admin'
  },
  /** 用户头像 */
  userIcon: {
    type: String,
    default: ''
  },
  /** 命令列表 */
  commandList: {
    type: Array<{
      key: string;
      name: string;
    }>,
    default: () => []
  }
});

/**
 * 布局组件事件名
 * @constant {Array<string>}
 * @property {string} onCommand - 命令点击事件
 * @property {string} onDropdownCommand - 下拉命令事件
 * @property {string} onDropdownCommand2 - 下拉命令事件2
 */
export const lsEmitNames = ['onCommand', 'onDropdownCommand', 'onDropdownCommand2'];
