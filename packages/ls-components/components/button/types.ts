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
  separator: {
    type: String,
    default: ''
  },
  separatorColor: {
    type: String,
    default: '#333'
  },
  separatorSize: {
    type: [String, Number],
    default: '12'
  }
});
