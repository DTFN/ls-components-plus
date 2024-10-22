import '@cpo/_style/common/root.scss';
import '@cpo/_style/common/base.scss';
import '@cpo/_style/container.scss';

import _useRouterHook from '@cpo/_hooks/useRouterHook';
import _useColorthiefHook from '@cpo/_hooks/useColorthiefHook';
import _useWSHook from '@cpo/_hooks/useWSHook';
import _useOptionHook from '@cpo/_hooks/useOptionHook';
import _useTableListHook from '@cpo/_hooks/useTableListHook';

import _lsValidate from '@cpo/_utils/validate';
import _lsCheck from '@cpo/_utils/check';

import _vAuth from '@cpo/_directives/auth';

export { default as LSButtonGroup } from '@cpo/button/ButtonGroup.vue';
export { default as LSButton } from '@cpo/button/Button.vue';
export { default as LSDescriptions } from '@cpo/descriptions/Index.vue';
export { default as LSUpload } from '@cpo/upload/Index.vue';
export { default as LSPreview } from '@cpo/preview/Index.vue';
export { default as LSMenu } from '@cpo/menu/Index.vue';
export { default as LSIcon } from '@cpo/icon/Index.vue';
export { default as LSConfirm } from '@cpo/confirm/Index.vue';
export { default as LSChart } from '@cpo/chart/Index.vue';
export { default as LSBreadcrumb } from '@cpo/breadcrumb/Index.vue';
export { default as LSBellMessage } from '@cpo/bellMessage/Index.vue';
export { default as LSLive } from '@cpo/live/Index.vue';
export { default as LSTree } from '@cpo/tree/Index.vue';
export { default as LSPrint } from '@cpo/print/Index.vue';
export { default as LSContainerBox } from '@cpo/containerBox/Index.vue';
export { default as LSFlowBox } from '@cpo/flowBox/Index.vue';
export { default as LSBackTop } from '@cpo/backTop/Index.vue';
export { default as LSMap } from '@cpo/map/Index.vue';
export { default as LSEditor } from '@cpo/editor/Index.vue';
export { default as LSDialog } from '@cpo/dialog/Index.vue';
export { default as LSLayout } from '@cpo/layout/Index.vue';
export { default as LSTable } from '@cpo/table/Table.vue';
export { default as LSItem } from '@cpo/form/FormItem.vue';
export { default as LSForm } from '@cpo/form/Form.vue';
export { default as LSList } from '@cpo/list/List.vue';

export { default } from './index';

export const useRouterHook = _useRouterHook;
export const useColorthiefHook = _useColorthiefHook;
export const useWSHook = _useWSHook;
export const useOptionHook = _useOptionHook;
export const useTableListHook = _useTableListHook;

export const lsValidate = _lsValidate;
export const lsCheck = _lsCheck;
export const vAuth = _vAuth;
