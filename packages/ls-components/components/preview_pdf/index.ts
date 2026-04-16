import type { LSOptions } from '@cpo/_utils/types'
import type { App } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSPreviewPdf from './Index.vue'

const LSPreviewPdf: typeof _LSPreviewPdf & { install: (app: App, options?: LSOptions) => void } = Object.assign(_LSPreviewPdf, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSPreviewPdf.name) {
      app.component(_LSPreviewPdf.name, _LSPreviewPdf)
    }
  },
})

export default LSPreviewPdf
