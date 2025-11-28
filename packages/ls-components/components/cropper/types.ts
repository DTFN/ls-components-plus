import { buildProps } from '@cpo/_utils/runtime';

export const lsProps = buildProps({
  imgUrl: {
    type: String,
    default: ''
  },
  imgType: {
    type: String,
    default: 'image/png'
  },
  quality: {
    type: Number,
    default: 1
  }
});

export const lsEmits = ['onChange', 'onReady', 'onError'];
