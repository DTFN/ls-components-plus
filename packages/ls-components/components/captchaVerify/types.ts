/**
 * @file 滑块拼图验证码组件类型定义
 * @description 定义验证码组件的 props 类型、事件名和轨迹数据结构
 */

import { buildProps } from '@cpo/_utils/runtime'

/** 验证状态 */
export type CaptchaStatus = 'idle' | 'error' | 'success'

/**
 * 拖动轨迹点
 * @property {number} x - 位置百分比(0-1)
 * @property {number} t - 相对时间戳(ms)
 */
export interface TracePoint {
  x: number
  t: number
}

/**
 * 验证完成回调数据
 * @property {number} dragPercent - 最终拖动百分比(0-1)
 * @property {number} durationMs - 拖动总耗时(ms)
 * @property {TracePoint[]} trace - 完整拖动轨迹
 */
export interface CaptchaSelectPayload {
  dragPercent: number
  durationMs: number
  trace: TracePoint[]
}

/**
 * 验证码组件 props
 * @typedef {object} lsCaptchaVerifyProps
 * @property {boolean} loading - 验证中 loading 状态，默认 false
 * @property {string} prompt - 提示文案
 * @property {number} targetPercent - 缺口目标位置百分比(0-1)，默认 0.5
 * @property {CaptchaStatus} status - 验证状态，默认 'idle'
 * @property {number} sceneSeed - 场景种子，默认 0
 * @property {string} serialNo - 验证码序列号，默认 ''
 */
export const lsCaptchaVerifyProps = buildProps({
  /** 验证中 loading 状态 */
  loading: {
    type: Boolean,
    default: false,
  },
  /** 提示文案 */
  prompt: {
    type: String,
    default: '按住滑块拖动拼图到缺口处',
  },
  /** 缺口目标位置百分比(0-1) */
  targetPercent: {
    type: Number,
    default: 0.5,
  },
  /** 验证状态 */
  status: {
    type: String,
    values: ['idle', 'error', 'success'] as const,
    default: 'idle',
  },
  /** 场景种子，用于生成不同主题和形状 */
  sceneSeed: {
    type: Number,
    default: 0,
  },
  /** 验证码序列号 */
  serialNo: {
    type: String,
    default: '',
  },
})

/** 组件事件名 */
export const lsCaptchaVerifyEmits = ['refresh', 'select'] as const
