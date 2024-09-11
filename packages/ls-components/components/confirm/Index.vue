<script setup lang="ts">
import { useNamespace } from '@cpo/_hooks/useNamespace';

const ns = useNamespace('confirm');
const comClass: string = ns.b();
</script>

<template>
  <div :class="comClass"></div>
</template>

<style lang="scss" scoped></style>
