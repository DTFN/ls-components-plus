/**
 * @file 富文本编辑器组件类型定义
 * @description 定义富文本编辑器组件的props类型和事件
 */

import { buildProps } from '@cpo/_utils/runtime';
import { IToolbarConfig } from '@wangeditor/editor';
import type { PropType } from 'vue';

/**
 * 编辑器模式类型
 * @typedef {'default' | 'simple'} modeType
 */
type modeType = 'default' | 'simple';

/**
 * 富文本编辑器props
 * @typedef {Object} lsEditorProps
 * @property {string} valueHtml - HTML内容，默认为''
 * @property {string} height - 编辑器高度，默认为'300px'
 * @property {modeType} mode - 编辑器模式，默认为'detault'
 * @property {Partial<IToolbarConfig>} toolbarConfig - 工具栏配置，默认为{}
 * @property {Object} editorConfig - 编辑器配置，默认为{}
 * @property {string} uploadServer - 上传服务器地址，默认为''
 * @property {string} uploadFieldName - 上传字段名，默认为'file'
 * @property {string} uploadToken - 上传token，默认为''
 * @property {Object} uploadHeaders - 自定义上传请求头，默认为null
 * @property {number} uploadImgSize - 上传图片大小限制，默认为2
 * @property {string} uploadImgSizeUnit - 上传图片大小单位，默认为'MB'
 * @property {Object} containerDom - 可视区域dom，默认为null
 */
export const lsEditorProps = buildProps({
  /** HTML内容 */
  valueHtml: {
    type: String,
    default: ''
  },
  /** 编辑器高度 */
  height: {
    type: String,
    default: '300px'
  },
  /** 编辑器模式 */
  mode: {
    type: String as PropType<modeType>,
    default: 'default'
  },
  /** 工具栏配置 */
  toolbarConfig: {
    type: Object as Partial<IToolbarConfig>,
    default: () => ({})
  },
  /** 编辑器配置 */
  editorConfig: {
    type: Object,
    default: () => ({})
  },
  /** 上传服务器地址 */
  uploadServer: {
    type: String,
    default: ''
  },
  /** 上传字段名 */
  uploadFieldName: {
    type: String,
    default: 'file'
  },
  /** 上传token */
  uploadToken: {
    type: String,
    default: ''
  },
  /** 自定义上传请求头 */
  uploadHeaders: {
    type: Object,
    default: () => null
  },
  /** 上传图片大小限制 */
  uploadImgSize: {
    type: Number,
    default: 2
  },
  /** 上传图片大小单位 */
  uploadImgSizeUnit: {
    type: String,
    default: 'MB'
  },
  /** 可视区域dom */
  containerDom: {
    type: Object,
    default: null
  }
});

/**
 * 编辑器事件名
 * @constant {Array<string>}
 * @property {string} handleCreated - 创建完成事件
 * @property {string} handleChange - 内容变化事件
 * @property {string} handleDestroyed - 销毁事件
 * @property {string} handleFocus - 聚焦事件
 * @property {string} handleBlur - 失焦事件
 * @property {string} customAlert - 自定义警告事件
 * @property {string} customPaste - 自定义粘贴事件
 */
export const lsEditorEmits = [
  'handleCreated',
  'handleChange',
  'handleDestroyed',
  'handleFocus',
  'handleBlur',
  'customAlert',
  'customPaste'
];
