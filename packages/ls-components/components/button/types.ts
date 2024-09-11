import { buildProps } from '@cpo/_utils/runtime';

export const lsBtnProp = buildProps({
  // 支持iconify
  iconName: {
    type: String,
    default: ''
  },
  // 1: iconify 2: svg default: el-icon
  iconType: {
    type: [Number, String],
    default: ''
  },
  iconWidth: {
    type: [String, Number],
    default: '16'
  },
  iconHeight: {
    type: [String, Number],
    default: '16'
  },
  iconSize: {
    type: [String, Number],
    default: '16'
  },
  iconColor: {
    type: String
  }
});

export const lsBtnGroupProp = buildProps({
  // 按钮之间分割符号 1: | 2: #
  separator: {
    type: Number,
    default: 1
  }
});
