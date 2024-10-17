import { buildProps } from '@cpo/_utils/runtime';

export const lsDialogProp = buildProps({
  hasFooter: {
    type: Boolean,
    default: true
  },
  hasCancelBtn: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  btnCancelConfig: {
    type: Object,
    default: () => ({
      text: '取消'
    })
  },
  btnConfirmConfig: {
    type: Object,
    default: () => ({
      text: '确认'
    })
  }
});

export const lsEmitNames = ['onCancel', 'onConfirm'];
