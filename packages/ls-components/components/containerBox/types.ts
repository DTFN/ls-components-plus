import { buildProps } from '@cpo/_utils/runtime';

export const lsContainerBoxProps = buildProps({
  // 宽度
  width: {
    type: Number,
    default: 1920
  },
  // 高度
  height: {
    type: Number,
    default: 1080
  }
});
