export const lsDescProp = {
  title: {
    type: String,
    default: ''
  },
  // 大小
  size: {
    type: String,
    default: 'default'
  },
  // 方向
  direction: {
    type: String,
    default: 'horizontal'
  },
  // label字体颜色
  labelColor: {
    type: String,
    default: ''
  },
  // label展示区域背景色
  labelBgColor: {
    type: String,
    default: '#e2edff'
  },
  // 列表头
  column: {
    type: Number,
    default: 1
  },
  /**
   * 数据
   *  type: 默认文本， date：时间， select：单复选， slot：自定义例如table
   *        icon：label前面展示icon图标
   *            iconType：默认el-icon，iconSize:大小，iconColor:颜色 ； 2：iconify， iconColor:颜色 iconWidth：宽，iconHeight：高
   */
  list: {
    type: Array<any>,
    default: () => []
  }
};
