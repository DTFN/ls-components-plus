import { buildProps, definePropType, mutable } from '@pkg/_utils/runtime';
import type { ExtractPropTypes } from 'vue';
import type Pic from './components/Pic.vue';

const emitNames = ['update:source', 'loadComplete', 'loadError'];

export { emitNames };

export type ImageViewerAction = 'zoomIn' | 'zoomOut' | 'clockwise' | 'anticlockwise';

export const imageViewerProps = buildProps({
  source: {
    type: definePropType<string[]>(Array),
    default: () => mutable([] as const)
  },
  zIndex: {
    type: Number
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: true
  },
  hideOnClickModal: {
    type: Boolean,
    default: false
  },
  teleported: {
    type: Boolean,
    default: false
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  onClose: Function,
  zoomSize: {
    type: [Number, String],
    default: 1.5
  }
} as const);
export type ImageViewerProps = ExtractPropTypes<typeof imageViewerProps>;

export const imageViewerEmits = ['close', 'switch'].concat(emitNames);

export type ImageViewerEmits = typeof imageViewerEmits;

export interface ImageViewerMode {
  name: string;
}

export type ImageViewerInstance = InstanceType<typeof Pic>;
