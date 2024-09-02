import type { LSUnionTypeSS } from '@cpo/_utils/types';
import type { ExtractPropTypes, PropType } from 'vue';
import type { UploadFile, UploadRawFile } from 'element-plus';

export interface configsType {
  uploadFileList: Array<UploadFile>;
  initUploadStatus: boolean;
  showPreview: boolean;
  typePreview: string;
  sourcePreview: string | Array<string>;
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
  limitSizeMsg?: string;
  limitNumMsg?: string;
  isToast?: boolean;
  emptyFileMsg?: string;
  formRuleFunc?: Function;
  formValidateFunc?: Function;
  httpRequestFunc?: Function;
}

export const lsUploadProps = {
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
  httpRequest: {
    type: Function,
    default: null
  }
};

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
