/**
 * @file 滑块拼图验证码组件入口
 * @description 导出验证码组件及类型定义，支持全局注册和按需导入
 */

import type { LSOptions } from '@cpo/_utils/types'
import type { App } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSCaptchaVerify from './Index.vue'

const LSCaptchaVerify = Object.assign(_LSCaptchaVerify, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSCaptchaVerify.name) {
      app.component(_LSCaptchaVerify.name, _LSCaptchaVerify)
    }
  },
})

export type { CaptchaSelectPayload, TracePoint } from './types'

export default LSCaptchaVerify
