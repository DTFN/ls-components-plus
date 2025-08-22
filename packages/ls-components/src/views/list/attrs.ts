import { ElDivider } from 'element-plus';
import { h } from 'vue';

/**
 * dialog组件公共配置
 */
export const COM_DIALOG_ATTRS = {
  // closeOnClickModal: true,
  btnConfirmConfig: {
    txt: '确定'
  }
};

/**
 * List组件表单布局配置
 */
export const COM_FORM_ATTRS = {
  requireAsteriskPosition: 'left',
  labelPosition: 'left',
  labelEmpty: '-'
};

/**
 * List组件表格组件配置项
 */
export const COM_TABLE_ATTRS = {
  showTableIndex: false,
  border: true,
  labelEmpty: '-',
  paginationOptions: {
    background: true
  },
  selectColumnOptions: {
    fixed: 'left'
  }
};

/**
 * el-space 统一配置
 */
export const SPACE_SIZE = ref(0);

export const SPACE_SPACER = h(ElDivider, { direction: 'vertical' });
