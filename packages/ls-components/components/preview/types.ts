import { buildProps, definePropType, mutable } from '@cpo/_utils/runtime';
import type { ExtractPropTypes } from 'vue';
import type LSImage from './components/Image.vue';

const emitNames = ['update:source', 'loadComplete', 'loadError'];

export { emitNames };

// image
export type ImageViewerAction = 'zoomIn' | 'zoomOut' | 'clockwise' | 'anticlockwise';

export const imageViewerProps = buildProps({
  source: {
    type: [definePropType<string[]>(Array), String],
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

export type ImageViewerInstance = InstanceType<typeof LSImage>;

// docx
export const docxProps = buildProps({
  source: {
    type: [ArrayBuffer, String],
    default: null
  },
  onClose: Function
});

export const lsPreviewProp = {
  type: {
    type: String
  },
  source: {},
  zoomSize: {
    type: [Number, String],
    default: 1.5
  },
  needLoading: {
    type: Boolean,
    default: true
  },
  loadingOption: {
    type: Object,
    default: () => {
      return {
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.3)'
      };
    }
  }
};
