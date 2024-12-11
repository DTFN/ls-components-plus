<script setup lang="ts">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { merge } from 'lodash-es';
import { lsDialogProp, lsEmitNames } from './types';

defineOptions({
  name: 'LSDialog',
  inheritAttrs: false
});

const props = defineProps(lsDialogProp);

const emits = defineEmits(lsEmitNames);

const slots = useSlots();

const visible = defineModel({
  type: Boolean
});

const ns = useNamespace('dialog');
const comClass: string = ns.b();

const lsDialogRef = ref();

const defAttrs = ref({
  width: '50%',
  closeOnClickModal: false,
  closeOnPressEscape: false,
  zIndex: 2000,
  alignCenter: true
});

const sHeight = ref(0);

watch(
  () => visible?.value,
  val => {
    if (val) {
      props.openScroll && updateHeight();
    }
  },
  {
    immediate: true,
    deep: true
  }
);

const curBtnCancelConfig = computed(() => {
  return merge(
    {
      txt: '取消'
    },
    props.btnCancelConfig
  );
});

const curBtnConfirmConfig = computed(() => {
  return merge(
    {
      type: 'primary',
      txt: '确认'
    },
    props.btnConfirmConfig
  );
});

function handleClose() {
  visible.value = false;
  emits('onCancel');
}

function handleConfirm() {
  emits('onConfirm');
}

async function updateHeight() {
  await nextTick();
  const h = props.hasFooter ? 108 : 60;
  sHeight.value = parseInt(getComputedStyle(lsDialogRef.value.querySelector('.el-dialog')).height) - h;
}

defineExpose({
  updateHeight
});
</script>

<template>
  <el-dialog
    ref="lsDialogRef"
    :class="comClass"
    v-model="visible"
    v-bind="merge(defAttrs, $attrs)"
    :show-close="!loading"
    @close="handleClose"
  >
    <el-scrollbar v-if="openScroll" v-bind="merge(defAttrs, $attrs)" :max-height="sHeight" v-loading="contentLoading">
      <slot></slot>
    </el-scrollbar>
    <div v-else class="content-wrap">
      <slot></slot>
    </div>
    <template #header>
      <slot name="header"></slot>
    </template>
    <template v-if="hasFooter" #footer>
      <div class="dialog-footer">
        <slot v-if="slots.footer" name="footer"></slot>
        <LSButton v-if="hasCancelBtn" v-bind="curBtnCancelConfig" :disabled="loading" @click="handleClose">
          {{ curBtnCancelConfig.txt }}
        </LSButton>
        <LSButton v-bind="curBtnConfirmConfig" :loading="loading" :disabled="loading" @click="handleConfirm">
          {{ curBtnConfirmConfig.txt }}
        </LSButton>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss">
.ls-dialog {
  &.el-dialog {
    overflow: hidden;
    .el-dialog__body {
      max-height: 78vh !important;
      overflow: auto;
      .content-wrap {
        padding-bottom: 1px;
      }
      &::-webkit-scrollbar {
        width: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 4px;
      }
      &:hover::-webkit-scrollbar-thumb {
        background-color: rgba(#909399, 0.3);
        border-radius: 4px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(#909399, 0.5);
      }
      &::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 4px;
      }
    }
  }
}
</style>
