import { buildProps } from '@cpo/_utils/runtime';

export type IconConfigType = {
  type: string | number;
  name: string | object;
  color?: string;
  width?: string | number;
  height?: string | number;
  size?: string | number;
  src?: string;
};

export const lsIconProps = buildProps({
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
  },
  src: {
    type: String,
    default: ''
  },
  symbolId: {
    type: [String, Number],
    default: ''
  }
});
