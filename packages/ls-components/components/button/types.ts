import { buildProps } from '@cpo/_utils/runtime';
import { IconConfigType } from '@cpo/main';

export const lsBtnProp = buildProps({
  // 参考LSIcon配置
  iconConfig: {
    type: Object as PropType<IconConfigType>,
    default: () => ({})
  }
});

export const lsBtnGroupProp = buildProps({
  separator: {
    type: String,
    default: ''
  },
  separatorColor: {
    type: String,
    default: '#333'
  },
  separatorSize: {
    type: [String, Number],
    default: '12'
  }
});
