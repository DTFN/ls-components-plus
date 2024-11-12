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
