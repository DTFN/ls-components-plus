import type { LSOptions } from '@cpo/_utils/types'
import type { App, ComponentPublicInstance } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSUpload from './Index.vue'

const LSUpload: ComponentPublicInstance<any> = Object.assign(_LSUpload, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSUpload.name) {
      app.component(_LSUpload.name, _LSUpload)
    }
  },
})

export default LSUpload
