import { buildProps } from '@cpo/_utils/runtime';
import { IToolbarConfig } from '@wangeditor/editor';

type modeType = 'default' | 'simple';

export const lsEditorProps = buildProps({
  valueHtml: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: '300px'
  },
  // 编辑器模式
  mode: {
    type: String as PropType<modeType>,
    default: 'default'
  },
  toolbarConfig: {
    type: Object as Partial<IToolbarConfig>,
    default: () => ({})
  },
  editorConfig: {
    type: Object,
    default: () => ({})
  },
  uploadServer: {
    type: String,
    default: ''
  },
  uploadFieldName: {
    type: String,
    default: 'file'
  },
  uploadToken: {
    type: String,
    default: ''
  },
  // 自定义上传请求头
  uploadHeaders: {
    type: Object,
    default: () => null
  },
  // 上传图片大小限制, 默认5
  uploadImgSize: {
    type: Number,
    default: 2
  },
  // 上传图片大小单位（GB,MB,KB），默认M
  uploadImgSizeUnit: {
    type: String,
    default: 'MB'
  },
  // 可视区域dom
  containerDom: {
    type: Object,
    default: null
  }
});

export const lsEditorEmits = [
  'handleCreated',
  'handleChange',
  'handleDestroyed',
  'handleFocus',
  'handleBlur',
  'customAlert',
  'customPaste'
];
