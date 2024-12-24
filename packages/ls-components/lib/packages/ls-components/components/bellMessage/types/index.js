var a = Object.defineProperty;
var e = (t, o) => a(t, "name", { value: o, configurable: !0 });
import { buildProps as l } from "../../_utils/runtime/index.js";
const s = l({
  // 通知数量
  noticeNum: {
    type: Number,
    default: 0
  },
  // 最大值
  badgeMax: {
    type: Number,
    default: 99
  },
  iconConfig: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({}), "default")
  },
  loading: {
    type: Boolean,
    default: !0
  },
  noMore: {
    type: Boolean,
    default: !1
  },
  /**
   * 列表数据
   * msgType: 消息类型内容
   * content: 消息内容
   * createdTime: 创建时间
   * readStatus: 是否已读
   *
   */
  list: {
    type: Array,
    default: /* @__PURE__ */ e(() => [], "default")
  }
}), u = ["readAll", "readMsg", "loadMore"];
export {
  u as emitNames,
  s as lsBellMessageProps
};
