import { buildProps } from '@cpo/_utils/runtime';

export const lsProps = buildProps({
  imgUrl: {
    type: String,
    default: ''
  },
  fileName: {
    type: String,
    default: `${new Date().getTime()}.png`
  },
  limitMinSize: {
    type: Number,
    default: 37
  },
  graphicsType: {
    type: String,
    default: 'square' // 设置裁剪图形形状 square:方形、circular:圆形(默认：square(方形))
  },
  outputType: {
    type: String,
    default: 'png' // 设置输出图片格式 jpeg, png, webp(默认：png)
  },
  showPreview: {
    type: Boolean,
    default: true
  }
});

export const lsEmits = ['onCropData', 'onCropError'];
