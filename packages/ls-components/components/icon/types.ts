import { buildProps } from '@cpo/_utils/runtime';

export const iconProps = buildProps({
  // 1: iconify 2: svg default: el-icon
  type: {
    type: [Number, String],
    default: ''
  },
  name: {
    type: [String, Object],
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: '16'
  },
  height: {
    type: [String, Number],
    default: '16'
  },
  // 适用于el-icon
  size: {
    type: [String, Number],
    default: '16'
  }
});
