import type { LSOptions } from '@cpo/_utils/types'
import type { App } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSDialog from './Index.vue'

const LSDialog = Object.assign(_LSDialog, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSDialog.name) {
      app.component(_LSDialog.name, _LSDialog)
    }
  },
})

export default LSDialog
