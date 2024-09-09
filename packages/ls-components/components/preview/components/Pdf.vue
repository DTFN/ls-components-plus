<script setup lang="ts" name="LSPdf">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import * as PDFJS from 'pdfjs-dist';
import type { PDFDocumentLoadingTask, PDFPageProxy, PageViewport, RenderTask } from 'pdfjs-dist';
import type { GetViewportParameters, PDFDocumentProxy, RenderParameters } from 'pdfjs-dist/types/src/display/api';
import type {
  AnnotationEventPayload,
  HighlightEventPayload,
  HighlightOptions,
  LoadedEventPayload,
  TextLayerLoadedEventPayload,
  WatermarkOptions
} from '../types';
import Annotation from './pdfs/Annotation.vue';
import Text from './pdfs/Text.vue';
import XFA from './pdfs/XFA.vue';
import { usePDF } from '../composable';

interface InternalProps {
  page: PDFPageProxy | undefined;
  document: PDFDocumentProxy | undefined;
  viewport: PageViewport | undefined;
}

const ns = useNamespace('pdf');
const comClass: string = ns.b();
const pdfObj: Ref<PDFDocumentLoadingTask | undefined> = ref(undefined);
const curPage = ref(1);
const allPages = ref(0);

const props = withDefaults(
  defineProps<{
    source: string;
    scale?: number;
    rotation?: number;
    fitParent?: boolean;
    width?: number;
    height?: number;
    textLayer?: boolean;
    imageResourcesPath?: string;
    hideForms?: boolean;
    intent?: string;
    annotationLayer?: boolean;
    annotationsFilter?: string[];
    annotationsMap?: object;
    watermarkText?: string;
    watermarkOptions?: WatermarkOptions;
    highlightText?: string | string[];
    highlightOptions?: HighlightOptions;
    onClose: Function;
    pagination: boolean;
  }>(),
  {
    scale: 1,
    intent: 'display',
    pagination: true
  }
);

const emits = defineEmits<{
  (event: 'annotation', payload: AnnotationEventPayload): void;
  (event: 'highlight', payload: HighlightEventPayload): void;
  (event: 'loaded', payload: LoadedEventPayload): void;
  (event: 'textLoaded', payload: TextLayerLoadedEventPayload): void;
  (event: 'annotationLoaded', payload: any[]): void;
  (event: 'xfaLoaded'): void;
  (event: 'loadComplete'): void;
  (event: 'loadError'): void;
  (event: 'update:source'): void;
}>();

watch(
  () => props.source,
  () => {
    initPdf();
  },
  {
    immediate: true,
    deep: true
  }
);

// Template Refs
const container = ref<HTMLSpanElement>();
const loadingLayer = ref<HTMLSpanElement>();
const loading = ref(false);
let renderTask: RenderTask;

const internalProps = computed(() => {
  return {
    viewport: undefined,
    document: undefined,
    page: undefined
  } as InternalProps;
});
const alayerProps = computed(() => {
  return {
    annotationsMap: props.annotationsMap,
    annotationsFilter: props.annotationsFilter,
    imageResourcesPath: props.imageResourcesPath,
    hideForms: props.hideForms,
    intent: props.intent
  };
});
const tlayerProps = computed(() => {
  return {
    highlightText: props.highlightText,
    highlightOptions: props.highlightOptions
  };
});

function getWatermarkOptionsWithDefaults(): WatermarkOptions {
  return Object.assign(
    {},
    {
      columns: 4,
      rows: 4,
      rotation: 45,
      fontSize: 18,
      color: 'rgba(211, 210, 211, 0.4)'
    },
    props.watermarkOptions
  );
}

function getRotation(rotation: number): number {
  if (!(typeof rotation === 'number' && rotation % 90 === 0)) return 0;
  const factor = rotation / 90;
  if (factor > 4) return getRotation(rotation - 360);
  else if (factor < 0) return getRotation(rotation + 360);
  return rotation;
}

function getScale(page: PDFPageProxy): number {
  let fscale = props.scale;
  if (props.fitParent) {
    const parentWidth: number = (container.value!.parentNode! as HTMLElement).clientWidth;
    const scale1Width = page.getViewport({ scale: 1 }).width;
    fscale = parentWidth / scale1Width;
  } else if (props.width) {
    const scale1Width = page.getViewport({ scale: 1 }).width;
    fscale = props.width / scale1Width;
  } else if (props.height) {
    const scale1Height = page.getViewport({ scale: 1 }).height;
    fscale = props.height / scale1Height;
  }
  return fscale;
}

function paintWatermark(zoomRatio = 1.0) {
  if (!props.watermarkText) return;

  const canvas = getCurrentCanvas();
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const mergeOptions = getWatermarkOptionsWithDefaults();

  const text = props.watermarkText;
  const columns = mergeOptions.columns!;
  const rows = mergeOptions.rows!;
  const numWatermarks = columns * rows;
  const rotation = mergeOptions.rotation!;
  const pixels = mergeOptions.fontSize! * zoomRatio;
  ctx.font = `${pixels}px Trebuchet MS`;
  ctx.fillStyle = mergeOptions.color!;

  for (let i = 0; i < numWatermarks; i++) {
    const x = (i % columns) * (canvas.width / columns) + canvas.width / (columns * 2);
    const y = Math.floor(i / columns) * (canvas.height / rows) + canvas.height / (rows * 2);

    const textWidth = ctx.measureText(text).width;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(-rotation * (Math.PI / 180));
    ctx.fillText(text, -textWidth / 2, pixels / 2);
    ctx.restore();
  }
}

function getCurrentCanvas(): HTMLCanvasElement | null {
  let oldCanvas = null;
  container.value?.childNodes.forEach(el => {
    if ((el as HTMLElement).tagName === 'CANVAS') oldCanvas = el;
  });
  return oldCanvas;
}

function setupCanvas(viewport: PageViewport): HTMLCanvasElement {
  let canvas;
  const currentCanvas = getCurrentCanvas()!;
  if (currentCanvas && currentCanvas?.getAttribute('role') === 'main') {
    canvas = currentCanvas;
  } else {
    canvas = document.createElement('canvas');
    canvas.style.display = 'block';
    canvas.setAttribute('dir', 'ltr');
  }

  const outputScale = window.devicePixelRatio || 1;
  canvas.width = Math.floor(viewport.width * outputScale);
  canvas.height = Math.floor(viewport.height * outputScale);

  canvas.style.width = `${Math.floor(viewport.width)}px`;
  canvas.style.height = `${Math.floor(viewport.height)}px`;

  canvas.setAttribute('class', 'pdf-canvas');

  // --scale-factor property
  container.value?.style.setProperty('--scale-factor', `${viewport.scale}`);
  // Also setting dimension properties for load layer
  loadingLayer.value!.style.width = `${Math.floor(viewport.width)}px`;
  loadingLayer.value!.style.height = `${Math.floor(viewport.height)}px`;
  loadingLayer.value!.style.top = '0';
  loadingLayer.value!.style.left = '0';
  loading.value = true;
  return canvas;
}

function cancelRender() {
  if (renderTask) renderTask.cancel();
}

function renderPage(pageNum: number) {
  toRaw(internalProps.value.document)
    ?.getPage(pageNum)
    .then(page => {
      cancelRender();

      const defaultViewport = page.getViewport();
      const viewportParams: GetViewportParameters = {
        scale: getScale(page),
        rotation: getRotation((props.rotation || 0) + defaultViewport.rotation)
      };
      const viewport = page.getViewport(viewportParams);

      const oldCanvas = getCurrentCanvas();
      const canvas = setupCanvas(viewport);

      const outputScale = window.devicePixelRatio || 1;
      const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined;

      // Render PDF page into canvas context
      const renderContext: RenderParameters = {
        canvasContext: canvas.getContext('2d')!,
        viewport,
        annotationMode: props.hideForms ? PDFJS.AnnotationMode.ENABLE : PDFJS.AnnotationMode.ENABLE_FORMS,
        transform,
        intent: props.intent
      };

      if (canvas?.getAttribute('role') !== 'main') {
        if (oldCanvas) container.value?.replaceChild(canvas, oldCanvas);
      } else {
        canvas.removeAttribute('role');
      }

      internalProps.value.page = page;
      internalProps.value.viewport = viewport;
      renderTask = page.render(renderContext);
      renderTask.promise
        .then(() => {
          loading.value = false;
          paintWatermark(viewport.scale);
          emits('loaded', internalProps.value.viewport!);
          emits('loadComplete');
        })
        .catch(() => {
          emits('loadError');
          // render task cancelled
        });
    });
}

function initDoc(proxy: PDFDocumentLoadingTask) {
  if (proxy.promise) {
    proxy.promise.then(async (document: any) => {
      internalProps.value.document = document;
      renderPage(curPage.value);
    });
  }
}

watch(
  () => [props.scale, props.width, props.height, props.rotation, props.hideForms, props.intent],
  () => {
    // Props that should dispatch an render task
    renderPage(curPage.value);
  }
);

// Exposed methods
function reload() {
  renderPage(curPage.value);
}

function cancel() {
  cancelRender();
}

onMounted(() => {
  initPdf();
});

onUnmounted(() => {
  pdfObj?.value?.destroy();
});

async function initPdf() {
  if (props.source) {
    const { pdf, processLoadingTask, pages }: any = usePDF(props.source);
    await processLoadingTask(props.source);
    pdfObj.value = pdf.value;
    allPages.value = pages.value;
    if (pdfObj.value) {
      initDoc(pdfObj.value);
    }
  }
}

const closeFunc = () => {
  props.onClose && props.onClose();
  emits('update:source');
};

function prevPdf() {
  if (curPage.value > 1) {
    curPage.value--;
    renderPage(curPage.value);
  }
}

function nextPdf() {
  if (curPage.value < allPages.value) {
    curPage.value++;
    renderPage(curPage.value);
  }
}

defineExpose({
  reload,
  cancel
});
</script>

<template>
  <div :class="comClass">
    <span :class="[ns.e('btn'), ns.e('close')]" @click="closeFunc">
      <el-icon :size="24" color="#FFF"><Close /></el-icon>
    </span>
    <div v-if="pagination" class="page-wrap">
      <LSButton type="primary" size="small" :disabled="curPage == 1" @click="prevPdf">上一页</LSButton
      ><span class="num-wrap">{{ curPage }} / {{ allPages }}</span
      ><LSButton type="primary" size="small" :disabled="curPage == allPages" @click="nextPdf">下一页</LSButton>
    </div>
    <div ref="container" style="position: relative; display: block">
      <canvas dir="ltr" style="display: block" role="main" />
      <Annotation
        v-if="annotationLayer"
        v-bind="{ ...internalProps, ...alayerProps }"
        @annotation="emits('annotation', $event)"
        @annotation-loaded="emits('annotationLoaded', $event)"
      />
      <Text
        v-if="textLayer"
        v-bind="{ ...internalProps, ...tlayerProps }"
        @highlight="emits('highlight', $event)"
        @text-loaded="emits('textLoaded', $event)"
      />
      <XFA v-bind="{ ...internalProps }" @xfa-loaded="emits('xfaLoaded')" />
      <div v-show="loading" ref="loadingLayer" style="position: absolute">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'pdfjs-dist/web/pdf_viewer.css';

@mixin op-icon() {
  width: 44px;
  height: 44px;
  font-size: 24px;
  color: #ffffff;
  background-color: #606266;
  border-color: #ffffff;
}
.ls-pdf {
  :deep() .pdf-canvas {
    position: relative !important;
    top: 12px !important;
    margin: auto !important;
  }
  .ls-pdf__btn {
    position: absolute;
    z-index: 1;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    border-radius: 50%;
    opacity: 0.8;
    .ls-icon {
      font-size: inherit;
      cursor: pointer;
    }
    &.ls-pdf__close {
      top: 40px;
      right: 40px;
      width: 40px;
      height: 40px;
      font-size: 40px;

      @include op-icon;
    }
  }
  .page-wrap {
    position: relative;
    margin-top: 12px;
    text-align: center;
    .el-button,
    .num-wrap {
      display: inline-block;
      vertical-align: middle;
    }
    .num-wrap {
      margin: 0 12px;
      font-size: 14px;
      font-weight: bold;
      color: #ffffff;
    }
  }
}
</style>
