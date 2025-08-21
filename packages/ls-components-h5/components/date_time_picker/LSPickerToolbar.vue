<script setup lang="ts">
defineProps({
  cancelText: {
    type: String,
    default: '取消'
  },
  confirmText: {
    type: String,
    default: '确认'
  },
  title: {
    type: String,
    default: '选择时间'
  }
});

const emits = defineEmits(['confirm', 'cancel']);

function onConfirm() {
  emits('confirm');
}

function onCancel() {
  emits('cancel');
}
</script>

<template>
  <div class="van-picker__toolbar">
    <button type="button" class="van-picker__cancel van-haptics-feedback" @click="onCancel">
      {{ cancelText }}
    </button>
    <div class="van-picker__title van-ellipsis">
      {{ title }}
    </div>
    <button type="button" class="van-picker__confirm van-haptics-feedback" @click="onConfirm">
      {{ confirmText }}
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
