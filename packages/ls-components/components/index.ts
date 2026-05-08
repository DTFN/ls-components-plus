/**
 * @file 组件库入口文件
 * @description LS Components Plus 组件库主入口，导出所有组件和安装函数
 */

import type { App, Plugin } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import LSBackTop from './backTop/index'
import LSBellMessage from './bellMessage/index'
import LSBreadcrumb from './breadcrumb/index'
import { LSButton, LSButtonGroup } from './button/index'
import LSCaptchaVerify from './captchaVerify/index'
import LSChart from './chart/index'
import LSConfirm from './confirm/index'
import LSContainerBox from './containerBox/index'
import LSCropper from './cropper/index'
import LSDescriptions from './descriptions/index'
import LSDialog from './dialog/index'
import LSDownloadFile from './downloadFile/index'
import LSEditor from './editor/index'
import { LSForm, LSFormItem } from './form/index'
import LSIcon from './icon/index'
import LSLayout from './layout/index'
import LSList from './list/index'
import LSLive from './live/index'
import LSMap from './map/index'
import LSMenu from './menu/index'
import LSPreviewDocx from './preview_docx/index'
import LSPreviewImage from './preview_image/index'
import LSPreviewPdf from './preview_pdf/index'
import LSPreviewXlsx from './preview_xlsx/index'
import LSPrint from './print/index'
import LSTable from './table/index'
import LSTooltip from './tooltip/index'
import LSTree from './tree/index'
import LSUpload from './upload/index'

const components: Record<string, Plugin> = {
  LSButtonGroup,
  LSButton,
  LSDescriptions,
  LSUpload,
  LSForm,
  LSFormItem,
  LSTable,
  LSMenu,
  LSIcon,
  LSConfirm,
  LSChart,
  LSBreadcrumb,
  LSBellMessage,
  LSLive,
  LSTree,
  LSPrint,
  LSContainerBox,
  LSBackTop,
  LSMap,
  LSEditor,
  LSDialog,
  LSLayout,
  LSList,
  LSPreviewImage,
  LSPreviewDocx,
  LSPreviewPdf,
  LSPreviewXlsx,
  LSDownloadFile,
  LSTooltip,
  LSCropper,
  LSCaptchaVerify,
}

function install(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component as Component)
  }

  for (const key of Object.keys(components)) {
    const cpo: any = components[key]
    app.component(cpo?.name, cpo)
  }
}

const LSWebPlus: Plugin = {
  ...components,
  install,
}

export default LSWebPlus

export type {
  BellMessageListType,
  BreadCrumpListType,
  ChartDataType,
  ChartTemplatePatchType,
  ChartTemplateType,
  DescriptionsListType,
  DialogBtnType,
  IconConfigType,
  MarkerAnchorType,
  MenuBaseType,
  UploadItemType,
} from '@cpo/_types'
