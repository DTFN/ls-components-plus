<script setup lang="ts" name="LSPdf">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import type { PDFDocumentLoadingTask } from 'pdfjs-dist';
import type { AnnotationEventPayload, HighlightEventPayload, LoadedEventPayload, TextLayerLoadedEventPayload } from '../types';
import { usePDF } from '../composable';
import PdfItem from './pdfs/PdfItem.vue';

const ns = useNamespace('pdf');
const comClass: string = ns.b();
const pdfObj: Ref<PDFDocumentLoadingTask | undefined | any> = ref(undefined);
const curPage = ref(1);
const allPages = ref(0);
const scale = ref(1);
const showPagination = ref(true);
const isComplete = ref(false);

const props = withDefaults(
  defineProps<{
    source: string;
    onClose: Function;
    showSize?: boolean;
  }>(),
  {
    showSize: true
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

const paginationTxt = computed(() => {
  return showPagination.value ? '取消分页' : '分页展示';
});

async function initPdf() {
  if (props.source) {
    try {
      const { pdf, processLoadingTask, pages }: any = usePDF(props.source);
      await processLoadingTask(props.source);
      pdfObj.value = pdf.value;
      allPages.value = pages.value;
    } finally {
      isComplete.value = true;
    }
  }
}

const closeFunc = () => {
  isComplete.value = false;
  props.onClose && props.onClose();
  emits('update:source');
};

function prevPdf() {
  if (curPage.value > 1) {
    curPage.value--;
  }
}

function nextPdf() {
  if (curPage.value < allPages.value) {
    curPage.value++;
  }
}

function scalePdf(val: number) {
  if (val === 0) {
    scale.value = scale.value > 0.25 ? scale.value - 0.25 : scale.value;
  } else {
    scale.value = scale.value < 2 ? scale.value + 0.25 : scale.value;
  }
}

const noMore = ref(false);
const count = ref(0);
const load = () => {
  console.log(1231231);
  if (count.value >= allPages.value) {
    noMore.value = true;
    return;
  }
  count.value++;
};

function changePagition() {
  showPagination.value = !showPagination.value;
  if (!showPagination.value) {
    noMore.value = false;
    count.value = allPages.value > 10 ? 10 : allPages.value;
  }
}

function loadComplete() {
  emits('loadComplete');
}

function loadError() {
  emits('loadError');
}
</script>

<template>
  <div v-if="isComplete" :class="comClass">
    <span :class="[ns.e('btn'), ns.e('close')]" @click="closeFunc">
      <LSIcon name="Close" :size="24" color="#FFF" />
    </span>
    <div class="opt-wrap">
      <div v-if="showPagination" class="page-wrap">
        <LSButton type="primary" size="small" :disabled="curPage == 1" @click="prevPdf">上一页</LSButton
        ><span class="num-wrap">{{ curPage }} / {{ allPages }}</span
        ><LSButton type="primary" size="small" :disabled="curPage == allPages" @click="nextPdf">下一页</LSButton>
      </div>
      <div v-if="showSize" class="size-wrap">
        <LSButton type="primary" icon="Minus" size="small" :disabled="scale == 0.25" @click="scalePdf(0)" />
        <span class="num-wrap">{{ scale * 100 }}%</span>
        <LSButton type="primary" icon="Plus" size="small" :disabled="scale == 2" @click="scalePdf(1)" />
      </div>
      <LSButton type="primary" size="small" @click="changePagition">{{ paginationTxt }}</LSButton>
    </div>
    <div class="pdf-content">
      <PdfItem
        v-if="showPagination"
        v-bind="$attrs"
        :pdf="pdfObj"
        :page="curPage"
        :scale="scale"
        @load-complete="loadComplete"
        @load-error="loadError"
      />
      <div v-else class="infinite-list-wrapper" style="overflow: auto">
        <el-scrollbar :height="'calc(100vh - 48px)'">
          <ul v-infinite-scroll="load" :infinite-scroll-disabled="noMore" class="infinite-list">
            <li v-for="page in count" :key="page" class="infinite-list-item">
              <PdfItem
                v-bind="$attrs"
                :pdf="pdfObj"
                :page="page"
                :scale="scale"
                @load-complete="loadComplete"
                @load-error="loadError"
              />
            </li>
          </ul>
        </el-scrollbar>
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
    margin: auto !important;
  }
  .pdf-content {
    margin-top: 12px;
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
  .opt-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    .page-wrap {
      position: relative;
      margin-right: 12px;
      text-align: center;
    }
    .size-wrap {
      margin-right: 12px;
    }
    .el-button,
    .num-wrap {
      display: inline-block;
      vertical-align: middle;
    }
    .num-wrap {
      margin: 0 12px;
      font-size: 12px;
      font-weight: bold;
      color: #ffffff;
    }
  }
  .infinite-list-wrapper {
    height: calc(100vh - 48px);
  }
}
</style>
