import type { LSOptions } from '@cpo/_utils/types'
import type { App } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSConfirm from './Index.vue'

const LSConfirm = Object.assign(_LSConfirm, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSConfirm.name) {
      app.component(_LSConfirm.name, _LSConfirm)
    }
  },
})

export default LSConfirm
