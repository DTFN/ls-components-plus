import { buildProps } from '@cpo/_utils/runtime';

export const lsPrintProps = buildProps({
  // 标题
  title: {
    type: String,
    default: ''
  },
  // 提示语
  content: {
    type: String,
    default: ''
  },
  // 按钮文案
  btnTxt: {
    type: String,
    default: '打印'
  },
  // 能否打印
  canPrint: {
    type: Boolean,
    default: true
  }
});
