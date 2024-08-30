export const lsBtnProp = {
  // 支持iconify
  iconName: {
    type: String,
    default: ''
  },
  // iconType: 1: eleplus自带 2: iconify
  iconType: {
    type: Number,
    default: 1
  },
  iconWidth: {
    type: Number,
    default: 16
  },
  iconHeight: {
    type: Number,
    default: 16
  },
  iconColor: {
    type: String
  }
};

export const lsBtnGroupProp = {
  // 按钮之间分割符号 1: |
  separator: {
    type: Number,
    default: 1
  },
  // 间隔符号颜色
  separatorColor: {
    type: String,
    default: ''
  },
  // 间隔符号大小
  separatorSize: {
    type: Number,
    default: 12
  }
};
