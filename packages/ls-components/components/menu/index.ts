import type { LSOptions } from '@cpo/_utils/types'
import type { App } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSMenu from './Index.vue'

const LSMenu: typeof _LSMenu & { install: (app: App, options?: LSOptions) => void } = Object.assign(_LSMenu, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSMenu.name) {
      app.component(_LSMenu.name, _LSMenu)
    }
  },
})

export default LSMenu
