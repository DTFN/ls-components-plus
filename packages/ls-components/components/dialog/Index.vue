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

const visible = defineModel({
  type: Boolean
});

const ns = useNamespace('dialog');
const comClass: string = ns.b();

const defAttrs = ref({
  width: '50%',
  closeOnClickModal: false,
  closeOnPressEscape: false,
  zIndex: 2000
});

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
      txt: '确定'
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
</script>

<template>
  <div :class="comClass">
    <el-dialog v-model="visible" v-bind="merge(defAttrs, $attrs)">
      <slot></slot>
      <template #header>
        <slot name="header"></slot>
      </template>
      <template v-if="hasFooter" #footer>
        <div class="dialog-footer">
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
}
</style>
