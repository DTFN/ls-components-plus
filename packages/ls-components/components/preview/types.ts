import { buildProps, definePropType, mutable } from '@cpo/_utils/runtime';
import type { ExtractPropTypes, PropType } from 'vue';
import type { PageViewport } from 'pdfjs-dist';
import type {
  DocumentInitParameters,
  OnProgressParameters,
  PDFDataRangeTransport,
  TextContent,
  TypedArray
} from 'pdfjs-dist/types/src/display/api';
import type { Metadata } from 'pdfjs-dist/types/src/display/metadata';

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

export const previewEmits = ['close', 'switch'].concat(emitNames);

export type PreviewEmits = typeof previewEmits;

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

// xlsx
export const xlsxProps = buildProps({
  source: {
    type: [File, String],
    default: null
  },
  onClose: Function
});

export interface Match {
  start: {
    idx: number;
    offset: number;
  };
  end: {
    idx: number;
    offset: number;
  };
  str: string;
  oindex: number;
}

export type LoadedEventPayload = PageViewport;

export interface AnnotationEventPayload {
  type: string;
  data: any;
}

export interface HighlightEventPayload {
  matches: Match[];
  page: number;
  textContent: TextContent;
  textDivs: HTMLElement[];
}

export interface TextLayerLoadedEventPayload {
  textDivs: HTMLElement[];
  textContent: TextContent | undefined;
}

export interface WatermarkOptions {
  columns?: number;
  rows?: number;
  rotation?: number;
  fontSize?: number;
  color?: string;
}

export interface HighlightOptions {
  ignoreCase?: boolean;
  completeWords?: boolean;
}

export interface Base<T, S> {
  type: T;
  spec: S;
}
// These are types from the PDF 1.7 reference manual; Adobe
// Table 151 – Destination syntax
// (Coordinates origin is bottom left of page)
export type XYZ = Base<'XYZ', [left: number, top: number, zoom: number]>;
export type Fit = Base<'Fit', []>;
export type FitH = Base<'FitH', [top: number]>;
export type FitV = Base<'FitV', [left: number]>;
export type FitR = Base<'FitR', [left: number, bottom: number, right: number, top: number]>;
export type FitB = Base<'FitB', []>;
export type FitBH = Base<'FitBH', [top: number]>;
export type FitBV = Base<'FitBV', [left: number]>;

export type PDFLocation = XYZ | Fit | FitH | FitV | FitR | FitB | FitBH | FitBV;

export interface PDFDestination {
  pageIndex: number;
  location: PDFLocation;
}

export type OnProgressCallback = (progressData: OnProgressParameters) => void;
export type UpdatePasswordFn = (newPassword: string) => void;
export type OnPasswordCallback = (updatePassword: UpdatePasswordFn, reason: any) => void;
export type OnErrorCallback = (error: any) => void;

export type PDFSrc = string | URL | TypedArray | PDFDataRangeTransport | DocumentInitParameters | undefined | null;

export interface PDFOptions {
  onProgress?: OnProgressCallback;
  onPassword?: OnPasswordCallback;
  onError?: OnErrorCallback;
  password?: string;
}

export interface PDFInfoMetadata {
  info: Object;
  metadata: Metadata;
}

export interface PDFInfo {
  metadata: PDFInfoMetadata;
  attachments: Record<string, unknown>;
  javascript: string[] | null;
  outline: any;
}

type PreviewType = 'image' | 'docx' | 'xlsx' | 'pdf';

export const lsPreviewProp = {
  type: {
    type: String as PropType<PreviewType>,
    require: true,
    default: ''
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
