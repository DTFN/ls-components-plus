import { buildProps } from '@cpo/_utils/runtime';
import type { FormRules } from 'element-plus';

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
  disabled: {
    type: Boolean,
    default: false
  },
  showButtons: {
    type: Boolean,
    default: true
  },
  showReset: {
    type: Boolean,
    default: true
  },
  confirmText: {
    type: String,
    default: '查询'
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

export type FormItemType =
  | 'title'
  | 'label'
  | 'input'
  | 'textarea'
  | 'number'
  | 'select'
  | 'date'
  | 'cascader'
  | 'multipleCascader'
  | 'switch'
  | 'slot'
  | 'itemSlot';

export interface FormItemPropsType {
  isValue?: boolean; // 是否初始化modelValue值为value的值默认false
  value?: any;
  type: FormItemType;
  label: string;
  prop: string | string[];
  rules?: FormRules;
  className?: string;
  labelClass?: string;
  tooltip?: string;
  options?: OptionType[];
  attrs?: {
    [key: string]: any;
  };
  listeners?: {
    [key: string]: any;
  };
  colon?: boolean;
  read?: boolean;
  readLabel?: boolean;
  labelNumber?: boolean;
}
