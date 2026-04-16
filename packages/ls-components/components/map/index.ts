import type { LSOptions } from '@cpo/_utils/types'
import type { App } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSMap from './Index.vue'

const LSMap: typeof _LSMap & { install: (app: App, options?: LSOptions) => void } = Object.assign(_LSMap, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSMap.name) {
      app.component(_LSMap.name, _LSMap)
    }
  },
})

export default LSMap
