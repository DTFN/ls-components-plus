import type { LSOptions } from '@cpo/_utils/types'
import type { App } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSPreview from './Index.vue'

const LSPreview: typeof _LSPreview & { install: (app: App, options?: LSOptions) => void } = Object.assign(_LSPreview, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSPreview.name) {
      app.component(_LSPreview.name, _LSPreview)
    }
  },
})

export default LSPreview
