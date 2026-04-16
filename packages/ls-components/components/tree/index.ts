import type { LSOptions } from '@cpo/_utils/types'
import type { App } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSTree from './Index.vue'

const LSTree: typeof _LSTree & { install: (app: App, options?: LSOptions) => void } = Object.assign(_LSTree, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSTree.name) {
      app.component(_LSTree.name, _LSTree)
    }
  },
})

export default LSTree
