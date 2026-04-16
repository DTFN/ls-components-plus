import type { LSOptions } from '@cpo/_utils/types'
import type { App } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSBreadcrumb from './Index.vue'

const LSBreadcrumb = Object.assign(_LSBreadcrumb, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSBreadcrumb.name) {
      app.component(_LSBreadcrumb.name, _LSBreadcrumb)
    }
  },
})

export default LSBreadcrumb
