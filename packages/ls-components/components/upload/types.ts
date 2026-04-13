/**
 * @file 上传组件类型定义
 * @description 定义 `LSUpload` 的业务扩展配置、对外 props 类型与上传相关常量。
 */

import { buildProps } from '@cpo/_utils/runtime';
import type { LSUnionTypeSS } from '@cpo/_utils/types';
import type { UploadFile, UploadRawFile } from 'element-plus';
import type { ExtractPropTypes, PropType } from 'vue';

/**
 * 上传配置接口
 * @interface configsType
 * @property {Array<UploadFile>} uploadFileList - 上传文件列表
 * @property {boolean} initUploadStatus - 初始上传状态
 * @property {boolean} showPreview - 是否显示预览
 * @property {any} sourcePreview - 预览源
 * @property {string} iconColor - 图标颜色
 */
export interface configsType {
  uploadFileList: Array<UploadFile>;
  initUploadStatus: boolean;
  showPreview: boolean;
  sourcePreview: any;
  iconColor: string;
}

/**
 * 上传文件变化接口
 * @interface UploadChangeFile
 * @extends UploadFile
 * @property {string} [blob] - Blob数据
 * @property {UploadRawFile} [raw] - 原始文件
 */
export interface UploadChangeFile extends UploadFile {
  blob?: string;
  raw?: UploadRawFile;
}

/**
 * @summary 上传扩展配置项
 *
 * `item` 用于承载 `LSUpload` 在 `el-upload` 之上的业务增强能力；
 * 文件列表、上传地址、数量限制等通用属性仍建议通过 `el-upload` 原生 attrs 传入。
 *
 * @attr {boolean} [isCover] - 是否按覆盖模式上传；未传时默认为 `true`
 * @attr {Array<string>} [limitFile] - 允许上传的文件后缀列表，如 `['png', 'docx']`
 * @attr {string} [limitFileMsg] - 文件类型校验失败时的自定义提示文案
 * @attr {number} [limitSize] - 文件大小限制；当前实现默认 `2`
 * @attr {'GB' | 'MB' | 'KB'} [limitUnit] - 文件大小限制单位；当前实现默认 `'MB'`
 * @attr {string} [limitSizeMsg] - 文件大小校验失败时的自定义提示文案
 * @attr {string} [limitNumMsg] - 超出数量限制时的自定义提示文案
 * @attr {boolean} [limitAllFail] - 超出 `limit` 时是否整批失败；主要在 `multiple=true` 时生效
 * @attr {boolean} [isToast] - 异常场景是否弹出消息提示；未传时默认为 `true`
 * @attr {string} [emptyFileMsg] - 空文件提示文案
 * @attr {Function} [formRuleFunc] - 表单规则获取函数；用于与表单校验联动
 * @attr {Function} [formValidateFunc] - 表单校验触发函数；用于上传结果回写校验状态
 * @attr {Function} [httpRequestFunc] - 业务自定义上传函数；当前实现会传入组装后的 `FormData`
 * @attr {boolean} [profile] - 是否启用头像模式；未传时默认为 `false`
 * @attr {string} [defProfile] - 头像模式下默认展示的头像地址
 * @attr {boolean} [hideCoverBtn] - 覆盖上传后是否隐藏上传按钮；适用于图片模式
 * @attr {string} [tipContent] - 自定义提示文案；会覆盖组件内置提示文本
 * @attr {boolean} [hideBtnReachLimit] - 达到 `limit` 后是否隐藏上传按钮；适用于图片模式
 */
export type UploadItemType = {
  isCover?: boolean;
  limitFile?: Array<string>;
  limitFileMsg?: string;
  limitSize?: number;
  limitUnit?: 'GB' | 'MB' | 'KB';
  limitSizeMsg?: string;
  limitNumMsg?: string;
  isToast?: boolean;
  emptyFileMsg?: string;
  formRuleFunc?: Function;
  formValidateFunc?: Function;
  httpRequestFunc?: Function;
  /** 是否启用头像模式 */
  profile?: boolean;
  /** 头像模式下默认展示的头像地址 */
  defProfile?: string;
  /** 覆盖上传后是否隐藏上传按钮；适用于图片模式 */
  hideCoverBtn?: boolean;
  /** 自定义提示文案；会覆盖组件内置提示文本 */
  tipContent?: string;
  /** 超出 `limit` 时是否整批失败 */
  limitAllFail?: boolean;
  /** 达到 `limit` 后是否隐藏上传按钮；适用于图片模式 */
  hideBtnReachLimit?: boolean;
};

/**
 * @summary 上传组件 props
 *
 * @attr {UploadItemType} item - 业务扩展配置对象，默认 `{}`
 * @attr {Function|null} onExceed - 超出 `limit` 时的钩子；未传时走组件内置数量限制处理，默认 `null`
 * @attr {Function|null} beforeUpload - 上传前钩子；返回 `false` 可阻止上传，默认 `null`
 * @attr {Function|null} onChange - 文件状态变化钩子，默认 `null`
 * @attr {Function|null} onSuccess - 上传成功钩子，默认 `null`
 * @attr {Function|null} onError - 上传失败钩子，默认 `null`
 * @attr {Function|null} onRemove - 文件移除钩子，对应 `el-upload` 的 `on-remove`，默认 `null`
 * @attr {Function|null} onPreview - 文件预览钩子，默认 `null`
 * @attr {Function|null} onProgress - 上传进度钩子，默认 `null`
 * @attr {Function|null} httpRequest - 自定义上传请求；优先级高于 `item.httpRequestFunc`，默认 `null`
 * @attr {boolean} customFile - 是否启用内置的图片卡片自定义操作区，默认 `false`
 * @attr {boolean} hasCropper - 是否在内置图片卡片操作区显示裁剪入口；通常与 `customFile` 搭配，默认 `false`
 */
export const lsUploadProps = buildProps({
  /** 业务扩展配置对象 */
  item: {
    type: Object as PropType<UploadItemType>,
    default: () => ({}) as UploadItemType
  },
  /** 超出 `limit` 时的钩子；未传时走组件内置数量限制处理 */
  onExceed: {
    type: Function,
    default: null
  },
  /** 上传前钩子；返回 `false` 可阻止上传 */
  beforeUpload: {
    type: Function,
    default: null
  },
  /** 文件状态变化钩子 */
  onChange: {
    type: Function,
    default: null
  },
  /** 上传成功钩子 */
  onSuccess: {
    type: Function,
    default: null
  },
  /** 上传失败钩子 */
  onError: {
    type: Function,
    default: null
  },
  /** 文件移除钩子，对应 `el-upload` 的 `on-remove` */
  onRemove: {
    type: Function,
    default: null
  },
  /** 文件预览钩子 */
  onPreview: {
    type: Function,
    default: null
  },
  /** 上传进度钩子 */
  onProgress: {
    type: Function,
    default: null
  },
  /** 自定义上传请求；优先级高于 `item.httpRequestFunc` */
  httpRequest: {
    type: Function,
    default: null
  },
  /** 是否启用内置的图片卡片自定义操作区 */
  customFile: {
    type: Boolean,
    default: false
  },
  /** 是否在内置图片卡片操作区显示裁剪入口；通常与 `customFile` 搭配 */
  hasCropper: {
    type: Boolean,
    default: false
  }
});

export type lsUploadPropsType = ExtractPropTypes<typeof lsUploadProps>;

export const UPLOAD_TYPE_MAP: LSUnionTypeSS = {
  text: 'text',
  picCard: 'picture-card',
  pic: 'picture'
};

export const IMG_SUFFIX_LIST = ['jpeg', 'jpg', 'dds', 'psd', 'pdt', 'webp', 'xmp', 'gif', 'bmp', 'svg', 'tiff', 'png', 'ico'];

export const UPLOAD_STATUS_MAP = {
  ready: 'ready',
  uploading: 'uploading',
  success: 'success',
  fail: 'fail'
};

export const fileTypeMap: LSUnionTypeSS = {
  '3gpp': 'audio/3gpp, video/3gpp',
  ac3: 'audio/ac3',
  asf: 'allpication/vnd.ms-asf',
  au: 'audio/basic',
  css: 'text/css',
  csv: 'text/csv',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  dot: 'application/msword',
  dotx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
  dtd: 'application/xml-dtd',
  dwg: 'image/vnd.dwg',
  dxf: 'image/vnd.dxf',
  gif: 'image/gif',
  htm: 'text/html',
  html: 'text/html',
  jp2: 'image/jp2',
  jpe: 'image/jpeg',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  js: 'text/javascript, application/javascript',
  json: 'application/json',
  mp2: 'audio/mpeg, video/mpeg',
  mp3: 'audio/mpeg',
  mp4: 'audio/mp4, video/mp4',
  mpeg: 'video/mpeg',
  mpg: 'video/mpeg',
  mpp: 'application/vnd.ms-project',
  ogg: 'application/ogg, audio/ogg',
  pdf: 'application/pdf',
  png: 'image/png',
  pot: 'application/vnd.ms-powerpoint',
  potx: 'application/vnd.openxmlformats-officedocument.presentationml.template',
  pps: 'application/vnd.ms-powerpoint',
  ppsx: 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  sldx: 'application/vnd.openxmlformats-officedocument.presentationml.slide',
  rtf: 'application/rtf, text/rtf',
  svf: 'image/vnd.svf',
  tif: 'image/tiff',
  tiff: 'image/tiff',
  txt: 'text/plain',
  wdb: 'application/vnd.ms-works',
  wps: 'application/vnd.ms-works',
  xhtml: 'application/xhtml+xml',
  xlc: 'application/vnd.ms-excel',
  xlm: 'application/vnd.ms-excel',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  xlsm: 'application/vnd.ms-excel.addin.macroEnabled.12',
  xlsb: 'application/vnd.ms-excel.sheet.binary.macroEnabled.12',
  xlt: 'application/vnd.ms-excel',
  xltx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
  xlw: 'application/vnd.ms-excel',
  xml: 'text/xml, application/xml',
  zip: 'aplication/zip'
};
