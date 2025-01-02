import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import type { App, Plugin } from 'vue';
import { LSButton, LSButtonGroup } from './button/index';
import LSDescriptions from './descriptions/index';
import { LSForm, LSFormItem } from './form/index';
import LSTable from './table/index';
import LSUpload from './upload/index';
import LSPreview from './preview/index';
import LSMenu from './menu/index';
import LSIcon from './icon/index';
import LSConfirm from './confirm/index';
import LSChart from './chart/index';
import LSBreadcrumb from './breadcrumb/index';
import LSBellMessage from './bellMessage/index';
import LSLive from './live/index';
import LSTree from './tree/index';
import LSPrint from './print/index';
import LSContainerBox from './containerBox/index';
import LSBackTop from './backTop/index';
import LSMap from './map/index';
import LSEditor from './editor/index';
import LSDialog from './dialog/index';
import LSLayout from './layout/index';
import LSList from './list/index';
import LSPreviewImage from './preview_image/index';
import LSPreviewDocx from './preview_docx/index';
import LSPreviewPdf from './preview_pdf/index';
import LSPreviewXlsx from './preview_xlsx/index';

const components: Record<string, Plugin> = {
  LSButtonGroup,
  LSButton,
  LSDescriptions,
  LSUpload,
  LSPreview,
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
  LSPreviewXlsx
};

const install = (app: App) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component as Component);
  }

  for (const key of Object.keys(components)) {
    const cpo: any = components[key];
    app.component(cpo?.name, cpo);
  }
};

const LSWebPlus: Plugin = {
  ...components,
  install
};

export default LSWebPlus;

export type {
  BellMessageListType,
  BreadCrumpListType,
  IconConfigType,
  ChartDataType,
  ChartTemplatePatchType,
  ChartTemplateType,
  DescriptionsListType,
  DialogBtnType,
  MarkerAnchorType,
  MenuBaseType,
  UploadItemType
} from '@cpo/_types';
