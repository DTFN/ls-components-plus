import type { LSOptions } from '@cpo/_utils/types'
import type { App } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSLive from './Index.vue'

const LSLive: typeof _LSLive & { install: (app: App, options?: LSOptions) => void } = Object.assign(_LSLive, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSLive.name) {
      app.component(_LSLive.name, _LSLive)
    }
  },
})

export default LSLive
