import type { LSUnionTypeSS } from '@cpo/_utils/types';
import type { ExtractPropTypes, PropType } from 'vue';
import type { UploadFile, UploadRawFile } from 'element-plus';
import { buildProps } from '@cpo/_utils/runtime';

export interface configsType {
  uploadFileList: Array<UploadFile>;
  initUploadStatus: boolean;
  showPreview: boolean;
  sourcePreview: any;
  iconColor: string;
}

export interface UploadChangeFile extends File {
  blob?: string;
  raw?: UploadRawFile;
}

interface itemType {
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
  // docx、pdf、xlsx、pdfNative
  textPreview?: Array<string>;
  // 是否是头像模式
  profile?: string;
  // 默认展示的头像图片
  defProfile?: string;
  // 覆盖上传后是否隐藏上传按钮
  hideCoverBtn?: boolean;
  // tip提示
  tipContent?: string;
}

export const lsUploadProps = buildProps({
  item: {
    type: Object as PropType<itemType>,
    default: () => ({}) as itemType
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
