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

export type { CaptchaSelectPayload, TracePoint } from './Index.vue'

export default LSCaptchaVerify
