import { buildProps } from '@cpo/_utils/runtime';

export type ConfirmType = 'success' | 'info' | 'warning' | 'error';

export const lsConfirmProps = buildProps({
  title: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<ConfirmType>,
    default: 'info'
  },
  message: {
    type: String,
    default: ''
  },
  confirmBtnTxt: {
    type: String,
    default: '确定'
  },
  cancelBtnTxt: {
    type: String,
    default: '取消'
  },
  showCancelBtn: {
    type: Boolean,
    default: true
  },
  showConfirmBtn: {
    type: Boolean,
    default: true
  },
  center: {
    type: Boolean,
    default: false
  },
  draggable: {
    type: Boolean,
    default: false
  },
  useHtml: {
    type: Boolean,
    default: false
  },
  showClose: {
    type: Boolean,
    default: true
  },
  customClass: {
    type: String,
    default: ''
  },
  closeOnClickModal: {
    type: Boolean,
    default: false
  },
  closeOnPressEscape: {
    type: Boolean,
    default: false
  },
  requestApi: {
    type: [Function, null],
    default: null
  }
});

export const emitNames = ['onConfirm', 'onCancel'];
