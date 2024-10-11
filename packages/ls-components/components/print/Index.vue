<script setup lang="ts" name="LSPrint">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsPrintProps } from './types';

defineProps(lsPrintProps);

const ns = useNamespace('print');
const comClass: string = ns.b();
const boxClass: string = ns.b('box');
const wrapClass: string = ns.b('wrap');

const printParams = ref({
  id: 'lsPrintDom',
  popTitle: ''
});
const PAGE_HEIGHT = 1124;

/**
 * 打印预览
 */
const printPre = () => {
  const splitDoms: any = document.getElementsByClassName('print-item');
  let startY = 0;
  for (let i = 0; i < splitDoms.length; i++) {
    const splitDom = splitDoms[i];
    const splitValue = splitDom.getBoundingClientRect();
    if (startY === 0) {
      startY = splitValue.top;
    }
    const pageHeight = splitValue.bottom - startY;
    if (pageHeight > PAGE_HEIGHT && splitDoms[i - 1]) {
      startY = 0;
      splitDoms[i - 1].style.pageBreakAfter = 'always';
    }
  }
};
</script>

<template>
  <div :class="comClass">
    <el-tooltip :content="content" placement="top" :disabled="canPrint">
      <LSButton v-bind="$attrs" @click="printPre" v-print="Object.assign(printParams, printObj)" :disabled="!canPrint">
        <span>{{ btnTxt }}</span>
      </LSButton>
    </el-tooltip>
    <div :class="boxClass">
      <div id="lsPrintDom" :class="wrapClass">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ls-print-box {
  display: none;
}
</style>
<style media="print">
@media print {
  .ls-print-wrap {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
<style type="text/css">
@page {
  margin-top: 1mm;
  margin-bottom: 1mm;
}
</style>
