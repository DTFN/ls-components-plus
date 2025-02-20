import { buildProps } from '@cpo/_utils/runtime';

export const lsTooltipProps = buildProps({
  width: {
    type: [Number, String],
    default: '100%'
  },
  fontSize: {
    type: Number,
    default: null
  },
  lineClamp: {
    type: Number,
    default: 1
  },
  lineHeight: {
    type: Number,
    default: null
  }
});
