import type { LSOptions } from '@cpo/_utils/types'
import type { App } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSIcon from './Index.vue'

const LSIcon = Object.assign(_LSIcon, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSIcon.name) {
      app.component(_LSIcon.name, _LSIcon)
    }
  },
})

export default LSIcon
