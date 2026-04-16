import type { EChartsOption } from 'echarts/types/dist/shared'
import type { ChartDataType, ChartTemplatePatchType, ChartTemplateType } from '../types'
import { merge } from 'lodash-es'

export async function templateOption({
  template,
  data = [],
  templatePatch = {},
  customOption = {},
}: {
  template?: ChartTemplateType
  data?: ChartDataType
  templatePatch?: ChartTemplatePatchType
  customOption?: EChartsOption
}) {
  if (template) {
    const modules = import.meta.glob('./template/*.ts')
    let configData: any = await modules[`./template/${template}.ts`]()
    const { dealOption } = configData

    return merge(dealOption(data, templatePatch), customOption)
  }

  return customOption
}

export default {
  templateOption,
}
