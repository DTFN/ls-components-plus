/**
 * @file 对话框组件类型定义
 * @description 定义对话框组件的props类型和事件
 */

import { buildProps } from '@cpo/_utils/runtime';
import { iconProps } from '@cpo/icon/types';
import { buttonProps } from 'element-plus';
import { merge } from 'lodash-es';
import type { ExtractPropTypes } from 'vue';
import type { PropType } from 'vue';

/**
 * 对话框按钮类型
 * @typedef {Object} DialogBtnType
 */
const btnTypeProp = merge(buttonProps, {
  txt: String,
  iconConfig: iconProps
});
export type DialogBtnType = ExtractPropTypes<typeof btnTypeProp>;

/**
 * 对话框组件props
 * @typedef {Object} lsDialogProp
 * @property {boolean} hasFooter - 是否显示底部，默认为true
 * @property {boolean} hasCancelBtn - 是否显示取消按钮，默认为true
 * @property {boolean} hasConfirmBtn - 是否显示确认按钮，默认为true
 * @property {boolean} loading - 加载状态，默认为false
 * @property {DialogBtnType} btnCancelConfig - 取消按钮配置，默认为{}
 * @property {DialogBtnType} btnConfirmConfig - 确认按钮配置，默认为{}
 * @property {boolean} contentLoading - 内容加载状态，默认为false
 * @property {boolean} openScroll - 是否开启滚动，默认为false
 */
export const lsDialogProp = buildProps({
  /** 是否显示底部 */
  hasFooter: {
    type: Boolean,
    default: true
  },
  /** 是否显示取消按钮 */
  hasCancelBtn: {
    type: Boolean,
    default: true
  },
  /** 是否显示确认按钮 */
  hasConfirmBtn: {
    type: Boolean,
    default: true
  },
  /** 加载状态 */
  loading: {
    type: Boolean,
    default: false
  },
  /** 取消按钮配置 */
  btnCancelConfig: {
    type: Object as PropType<DialogBtnType>,
    default: () => ({})
  },
  /** 确认按钮配置 */
  btnConfirmConfig: {
    type: Object as PropType<DialogBtnType>,
    default: () => ({})
  },
  /** 内容加载状态 */
  contentLoading: {
    type: Boolean,
    default: false
  },
  /** 是否开启滚动 */
  openScroll: {
    type: Boolean,
    default: false
  }
});

/**
 * 对话框事件名
 * @constant {Array<string>}
 * @property {string} onCancel - 取消事件
 * @property {string} onConfirm - 确认事件
 */
export const lsEmitNames = ['onCancel', 'onConfirm'];
