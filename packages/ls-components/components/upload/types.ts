/**
 * @file 上传组件类型定义
 * @description 定义上传组件的props类型、接口和常量
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
 * 上传项类型
 * @typedef {Object} UploadItemType
 * @property {boolean} [isCover] - 是否覆盖上传
 * @property {Array<string>} [limitFile] - 限制文件类型
 * @property {string} [limitFileMsg] - 文件类型限制提示消息
 * @property {number} [limitSize] - 限制文件大小
 * @property {'GB' | 'MB' | 'KB'} [limitUnit] - 文件大小单位
 * @property {string} [limitSizeMsg] - 文件大小限制提示消息
 * @property {string} [limitNumMsg] - 文件数量限制提示消息
 * @property {boolean} [isToast] - 是否显示提示
 * @property {string} [emptyFileMsg] - 空文件提示消息
 * @property {Function} [formRuleFunc] - 表单规则函数
 * @property {Function} [formValidateFunc] - 表单验证函数
 * @property {Function} [httpRequestFunc] - HTTP请求函数
 * @property {boolean} [profile] - 是否是头像模式
 * @property {string} [defProfile] - 默认展示的头像图片
 * @property {boolean} [hideCoverBtn] - 覆盖上传后是否隐藏上传按钮（适用图片模式）
 * @property {string} [tipContent] - 提示内容
 * @property {boolean} [limitAllFail] - 超出limit限制时，是否全部阻止
 * @property {boolean} [hideBtnReachLimit] - 达到limit限制时，是否隐藏上传按钮（适用图片模式）
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
  /** 是否是头像模式 */
  profile?: boolean;
  /** 默认展示的头像图片 */
  defProfile?: string;
  /** 覆盖上传后是否隐藏上传按钮，适用图片模式 */
  hideCoverBtn?: boolean;
  /** 提示内容 */
  tipContent?: string;
  /** 超出limit限制时，是否全部阻止 */
  limitAllFail?: boolean;
  /** 达到limit限制时，是否隐藏上传按钮，适用图片模式 */
  hideBtnReachLimit?: boolean;
};

export const lsUploadProps = buildProps({
  item: {
    type: Object as PropType<UploadItemType>,
    default: () => ({}) as UploadItemType
  },
  onExceed: {
    type: Function,
    default: null
  },
  beforeUpload: {
    type: Function,
    default: null
  },
  onChange: {
    type: Function,
    default: null
  },
  onSuccess: {
    type: Function,
    default: null
  },
  onError: {
    type: Function,
    default: null
  },
  onRemove: {
    type: Function,
    default: null
  },
  onPreview: {
    type: Function,
    default: null
  },
  onProgress: {
    type: Function,
    default: null
  },
  httpRequest: {
    type: Function,
    default: null
  },
  customFile: {
    type: Boolean,
    default: false
  },
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
