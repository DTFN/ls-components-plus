var l = Object.defineProperty;
var e = (t, a) => l(t, "name", { value: a, configurable: !0 });
import { buildProps as o } from "../../_utils/runtime/index.js";
const u = o({
  tableColumn: {
    type: Array,
    default: /* @__PURE__ */ e(() => [], "default"),
    required: !0
  },
  tableData: {
    type: Array,
    default: /* @__PURE__ */ e(() => [], "default"),
    required: !0
  },
  loading: {
    type: Boolean,
    default: !1
  },
  // 是否展示分页
  showPagination: {
    type: Boolean,
    default: !0
  },
  // 分页控件Class
  paginationClass: {
    type: String,
    default: ""
  },
  // 总页数
  total: {
    type: Number,
    default: 0
  },
  // 当前页
  currentPage: {
    type: Number,
    default: 1
  },
  // 分页页数
  pageSize: {
    type: Number,
    default: 10
  },
  // 分页页数选项
  pageSizes: {
    type: Array,
    default: /* @__PURE__ */ e(() => [10, 20, 30, 40, 50, 100], "default")
  },
  // 分页其余配置项
  paginationOptions: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({}), "default")
  },
  // 否展示Index
  showTableIndex: {
    type: Boolean,
    default: !0
  },
  // Index 是否固定
  tableIndexfixed: {
    type: Boolean,
    default: !1
  },
  // Index 显示的标题
  tableIndexLabel: {
    type: String,
    default: "序号"
  },
  // Index 序号单页累加
  tableIndexInPage: {
    type: Boolean,
    default: !1
  },
  // Index 是否从0开始
  tableIndexStart: {
    type: Boolean,
    default: !1
  },
  // Index 配置项
  indexColumnOptions: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({}), "default")
  },
  // 是否单选
  showRadio: {
    type: Boolean,
    default: !1
  },
  // 单选配置项
  radioColumnOptions: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({}), "default")
  },
  // 是否展示单选标签
  showRadioLabel: {
    type: Boolean,
    default: !1
  },
  // 单选值字段
  radioProp: {
    type: String,
    default: "id"
  },
  // 选中当前列
  currentRow: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({}), "default")
  },
  // 是否多选
  showSelect: {
    type: Boolean,
    default: !1
  },
  // 多选配置项
  selectColumnOptions: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({}), "default")
  },
  // 选中列数据
  selection: {
    type: Array,
    default: /* @__PURE__ */ e(() => [], "default")
  },
  // 是否展示展开行
  showExpand: {
    type: Boolean,
    default: !1
  },
  // 多选配置项
  expandColumnOptions: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({}), "default")
  },
  // 是否显示空状态
  showEmpty: {
    type: Boolean,
    default: !0
  },
  labelEmpty: {
    type: String,
    default: "--"
  },
  labelEmptyClass: {
    type: String,
    default: ""
  },
  emptyLabel: {
    type: String,
    default: "暂无数据"
  }
});
export {
  u as lsTableProps
};
