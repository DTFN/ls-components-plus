/**
 * @file JSON编辑器组件类型定义
 * @description 定义JSON编辑器组件的props类型
 */

import { buildProps } from '@cpo/_utils/runtime'

/**
 * JSON编辑器props
 * @typedef {object} lsJsonEditorProps
 * @property {object | string} jsonValue - JSON值，默认为{}
 */
export const lsJsonEditorProps = buildProps({
  /** JSON值 */
  jsonValue: {
    type: [Object, String],
    default: () => {
      return {}
    },
  },
})
