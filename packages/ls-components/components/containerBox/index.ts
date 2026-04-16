import type { LSOptions } from '@cpo/_utils/types'
import type { App } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSContainerBox from './Index.vue'

const LSContainerBox = Object.assign(_LSContainerBox, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSContainerBox.name) {
      app.component(_LSContainerBox.name, _LSContainerBox)
    }
  },
})

export default LSContainerBox
