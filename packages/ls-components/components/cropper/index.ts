import type { LSOptions } from '@cpo/_utils/types'
import type { App } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSCropper from './Index.vue'

const LSCropper = Object.assign(_LSCropper, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSCropper.name) {
      app.component(_LSCropper.name, _LSCropper)
    }
  },
})

export default LSCropper
