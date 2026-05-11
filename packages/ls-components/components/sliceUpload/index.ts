import type { LSOptions } from '@cpo/_utils/types'
import type { App } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSSliceUpload from './Index.vue'

const LSSliceUpload = Object.assign(_LSSliceUpload, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSSliceUpload.name) {
      app.component(_LSSliceUpload.name, _LSSliceUpload)
    }
  },
})

export default LSSliceUpload
