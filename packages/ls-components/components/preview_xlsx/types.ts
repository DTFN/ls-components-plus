/**
 * @file Excel文档预览组件类型定义
 * @description 定义Excel文档预览组件的props类型和接口
 */

import { buildProps } from '@cpo/_utils/runtime';

/**
 * Excel文档预览组件props
 * @typedef {Object} xlsxProps
 * @property {File|string} source - Excel文件源，可以是File对象或字符串
 * @property {boolean} hasPagination - 是否显示分页，默认为false
 * @property {Function} onClose - 关闭事件回调函数
 */
export const xlsxProps = buildProps({
  /** Excel文件源，可以是File对象或字符串 */
  source: {
    type: [File, String],
    default: null
  },
  /** 大文件预览时是否启用分页渲染 */
  hasPagination: {
    type: Boolean,
    default: false
  },
  /** 关闭事件回调函数 */
  onClose: Function
});

/**
 * 匹配接口
 * @interface Match
 * @property {object} start - 开始位置
 * @property {number} start.idx - 开始索引
 * @property {number} start.offset - 开始偏移量
 * @property {object} end - 结束位置
 * @property {number} end.idx - 结束索引
 * @property {number} end.offset - 结束偏移量
 * @property {string} str - 匹配的字符串
 * @property {number} oindex - 原始索引
 */
export interface Match {
  start: {
    idx: number;
    offset: number;
  };
  end: {
    idx: number;
    offset: number;
  };
  str: string;
  oindex: number;
}
