import { buildProps } from '@cpo/_utils/runtime';

/**
 * slot default: 需要打印的HTML通过slot传入
 */
export const lsPrintProps = buildProps({
  printObj: {
    type: Object,
    default: () => ({})
  },
  // 禁止使用时提示语
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
