import type { LSOptions } from '@cpo/_utils/types'
import type { App } from 'vue'
import { setGlobalConfig } from '@cpo/_utils/config'
import _LSChart from './Index.vue'

const LSChart = Object.assign(_LSChart, {
  install: (app: App, options?: LSOptions) => {
    setGlobalConfig(app, options)

    if (_LSChart.name) {
      app.component(_LSChart.name, _LSChart)
    }
  },
})

export default LSChart
