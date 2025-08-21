export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 设计稿宽度/10（如750px设计稿设为75）
      propList: ['*'], // 转换所有CSS属性的px单位
      minPixelValue: 2, // 最小转换单位（2px以下不转换）
      exclude: /node_modules/i // 排除node_modules
    }
  }
};
