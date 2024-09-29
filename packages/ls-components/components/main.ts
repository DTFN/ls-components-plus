import '@cpo/_style/common/root.scss';
import '@cpo/_style/common/base.scss';

import useRouterHook from '@cpo/_hooks/useRouterHook';
import useColorthiefHook from '@cpo/_hooks/useColorthiefHook';
import useWSHook from '@cpo/_hooks/useWSHook';
import useOptionHook from '@cpo/_hooks/useOptionHook';
import lsValidate from '@cpo/_utils/validate';
import vAuth from '@cpo/_directives/auth';

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

export { default } from './index';

export type {} from './components.ts';

export { useRouterHook, useColorthiefHook, useWSHook, useOptionHook, lsValidate, vAuth };
