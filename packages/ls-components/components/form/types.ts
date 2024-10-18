import { buildProps } from '@cpo/_utils/runtime';

export const lsFormProps = buildProps({
  formData: {
    type: Object,
    default: () => ({}),
    required: true
  },
  formItems: {
    type: Array<any>,
    default: () => [],
    required: true
  },
  column: {
    type: Number,
    default: 1
  },
  loading: {
    type: Boolean,
    default: false
  },
  showBtnLoading: {
    type: Boolean,
    default: true
  },
  read: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  showButtons: {
    type: Boolean,
    default: true
  },
  buttonsClass: {
    type: String,
    default: ''
  },
  showReset: {
    type: Boolean,
    default: true
  },
  confirmText: {
    type: String,
    default: '确认'
  },
  confirmClassName: {
    type: String,
    default: ''
  },
  colon: {
    type: Boolean,
    default: true
  },
  labelWidth: {
    type: [String, Number],
    default: 'auto'
  }
} as const);

export const lsFormItemProps = buildProps({
  isValue: {
    type: Boolean,
    default: false
  },
  value: {
    type: [String, Number, Boolean, Object, Array]
  },
  type: {
    type: String,
    values: [
      'label',
      'input',
      'textarea',
      'number',
      'radio',
      'checkbox',
      'select',
      'date',
      'cascader',
      'multipleCascader',
      'switch',
      'slot',
      'itemSlot'
    ]
  },
  label: {
    type: String,
    default: ''
  },
  prop: {
    type: [String, Array<string>],
    default: ''
  },
  rules: {
    type: Object,
    default: () => {}
  },
  className: {
    type: String,
    default: ''
  },
  labelClass: {
    type: String,
    default: ''
  },
  tooltip: {
    type: String,
    default: ''
  },
  options: {
    type: Array<any>,
    default: () => []
  },
  attrs: {
    type: Object,
    default: () => {}
  },
  listeners: {
    type: Object,
    default: () => {}
  },
  colon: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  read: {
    type: Boolean,
    default: false
  },
  labelNumber: {
    type: Boolean,
    default: false
  },
  dateFormat: {
    type: String,
    default: 'YYYY-MM-DD HH:mm:ss'
  }
} as const);
