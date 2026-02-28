import { buildProps } from '@cpo/_utils/runtime';
import { buttonProps } from 'element-plus';
import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
import { merge } from 'lodash-es';
import { iconProps } from '@cpo/icon/types';

const btnTypeProp = merge(buttonProps, {
  txt: String,
  iconConfig: iconProps
});
export type DialogBtnType = ExtractPropTypes<typeof btnTypeProp>;

export const lsDialogProp = buildProps({
  hasFooter: {
    type: Boolean,
    default: true
  },
  hasCancelBtn: {
    type: Boolean,
    default: true
  },
  hasConfirmBtn: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  btnCancelConfig: {
    type: Object as PropType<DialogBtnType>,
    default: () => ({})
  },
  btnConfirmConfig: {
    type: Object as PropType<DialogBtnType>,
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
