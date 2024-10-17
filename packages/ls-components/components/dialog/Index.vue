<script setup lang="ts">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { merge } from 'lodash-es';
import { lsDialogProp, lsEmitNames } from './types';

defineOptions({
  name: 'LSDialog',
  inheritAttrs: false
});

defineProps(lsDialogProp);

const emits = defineEmits(lsEmitNames);

const ns = useNamespace('dialog');
const comClass: string = ns.b();

const defAttrs = ref({
  width: '50%',
  closeOnClickModal: false,
  closeOnPressEscape: false
});

function handleClose() {
  emits('onCancel');
}

function handleConfirm() {
  emits('onConfirm');
}
</script>

<template>
  <div :class="comClass">
    <el-dialog v-bind="merge(defAttrs, $attrs)">
      <slot></slot>
      <template #header>
        <slot name="header"></slot>
      </template>
      <template v-if="hasFooter" #footer>
        <div class="dialog-footer">
          <LSButton v-if="hasCancelBtn" v-bind="btnCancelConfig" :disabled="loading" @click="handleClose">
            {{ btnCancelConfig.text }}
          </LSButton>
          <LSButton v-bind="btnConfirmConfig" type="primary" :loading="loading" :disabled="loading" @click="handleConfirm">
            {{ btnConfirmConfig.text }}
          </LSButton>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.ls-dialog {
  position: relative;
}
</style>
