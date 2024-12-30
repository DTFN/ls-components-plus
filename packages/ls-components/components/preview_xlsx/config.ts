export const jsList = [
  { id: 'luckysheet1', src: '/luckysheet/plugins/js/plugin.js' },
  { id: 'luckysheet2', src: '/luckysheet/luckysheet.umd.js' }
];

export const cssList = [
  { id: 'luckysheetCss1', src: '/luckysheet/plugins/css/pluginsCss.css' },
  { id: 'luckysheetCss2', src: '/luckysheet/plugins/plugins.css' },
  { id: 'luckysheetCss3', src: '/luckysheet/css/luckysheet.css' },
  { id: 'luckysheetCss4', src: '/luckysheet/assets/iconfont/iconfont.css' }
];

export const luckysheetConfig = {
  container: 'luckysheet',
  lang: 'zh',
  gridKey: new Date().getTime(), // 表格唯一key
  showinfobar: false,
  allowEdit: false,
  allowCopy: false,
  allowUpdate: false,
  showtoolbar: false, // 是否显示工具栏
  enableAddRow: false, // 允许添加行
  enableAddBackTop: false, // 允许回顶部
  sheetFormulaBar: false, // 是否显示公式栏
  showstatisticBar: false, // 是否显示底部计数栏
  showsheetbar: false, // 是否显示sheet工具栏
  forceCalculation: true, // 强制计算公式
  showConfigWindowResize: false,
  showsheetbarConfig: {
    sheet: true // sheet页显示
  },
  sheetRightClickConfig: {
    delete: false, // 删除
    copy: false, // 复制
    rename: false, // 重命名
    color: false, // 更改颜色
    hide: false, // 隐藏，取消隐藏
    move: false // 向左移，向右移
  },
  cellRightClickConfig: {
    copy: false, // 复制
    copyAs: false, // 复制为
    paste: false, // 粘贴
    insertRow: false, // 插入行
    insertColumn: false, // 插入列
    deleteRow: false, // 删除选中行
    deleteColumn: false, // 删除选中列
    deleteCell: false, // 删除单元格
    hideRow: false, // 隐藏选中行和显示选中行
    hideColumn: false, // 隐藏选中列和显示选中列
    rowHeight: false, // 行高
    columnWidth: false, // 列宽
    clear: false, // 清除内容
    matrix: false, // 矩阵操作选区
    sort: false, // 排序选区
    filter: false, // 筛选选区
    chart: false, // 图表生成
    image: false, // 插入图片
    link: false, // 插入链接
    data: false, // 数据验证
    cellFormat: false // 设置单元格格式,
  },
  hook: {
    // 单元格点击前的事件
    // cellMousedownBefore: () => false,
    // 更新这个单元格值之前触发
    cellUpdateBefore: () => false,
    // 图片删除前
    imageDeleteBefore: () => false,
    // 图片更新前
    imageUpdateBefore: () => false
    // workbookCreateAfter: function (json: any) {}
  }
};

export const fileSizeLimit = 20;
export const rowsPerBatch = 1000; // 每批加载的行数
