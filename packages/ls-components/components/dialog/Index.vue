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
  zIndex: 2000
});

const sHeight = ref(0);

watch(
  () => visible?.value,
  val => {
    if (val) {
      updateHeight();
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
  <div ref="lsDialogRef" :class="comClass">
    <el-dialog v-model="visible" v-bind="merge(defAttrs, $attrs)" :show-close="!loading" @close="handleClose">
      <el-scrollbar v-bind="merge(defAttrs, $attrs)" :max-height="sHeight" v-loading="contentLoading">
        <slot></slot>
      </el-scrollbar>
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
  </div>
</template>

<style lang="scss" scoped>
.ls-dialog {
  position: relative;
  :deep(.el-dialog) {
    max-height: 78%;
  }
}
</style>
