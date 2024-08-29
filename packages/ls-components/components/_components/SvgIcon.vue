<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    color?: string;
    size?: string | number;
  }>(),
  {
    color: 'currentColor'
  }
);

const symbolId = computed(() => `#${props.name}`);

const isSvgIcon = computed(() => props.name?.startsWith('icon'));
</script>

<template>
  <el-icon v-if="isSvgIcon" :size="size" :color="color">
    <svg aria-hidden="true">
      <use :xlink:href="symbolId" />
    </svg>
  </el-icon>
  <el-icon v-else :class="[name]" :color="color" :size="size" />
</template>

<style scoped lang="scss"></style>
