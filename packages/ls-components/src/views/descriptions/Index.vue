<script setup lang="ts">
const iconColor = ref('red');

const list1 = ref([
  {
    iconColor,
    iconType: 2,
    icon: 'iconoir:fish',
    label: '养殖品种',
    value: '舟山鲈鱼'
  },
  {
    iconColor,
    iconType: 2,
    icon: 'game-icons:whale-tail',
    label: '尾数范围',
    value: '56024 - 93366 尾'
  },
  {
    icon: 'Edit',
    label: '批次数量',
    value: '5'
  }
]);
</script>

<template>
  <div>
    <LSDescriptions label-bg-color="blue" :list="list1"></LSDescriptions>
  </div>
</template>

<style lang="scss" scoped></style>
