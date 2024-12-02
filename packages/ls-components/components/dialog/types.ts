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
    default: () => ({})
  },
  btnConfirmConfig: {
    type: Object,
    default: () => ({})
  },
  contentLoading: {
    type: Boolean,
    default: false
  },
  openScroll: {
    type: Boolean,
    default: false
  }
});

export const lsEmitNames = ['onCancel', 'onConfirm'];
