<script setup lang="ts" name="LSButton">
import { lsBtnKey } from '@cpo/_constants';
import { lsBtnProp } from './types';
import { useNamespace } from '@cpo/_hooks/useNamespace';
import LSIcon from '@cpo/icon/Index.vue';

const slots = useSlots();

defineProps(lsBtnProp);

interface separatorType {
  separator: string;
  separatorColor: string;
  separatorSize: string;
}

const ns = useNamespace('button');
const comClass: string = ns.b();

const lsBtnGroupProp: separatorType = inject(lsBtnKey, undefined)!;

const separator = ref('');
const separatorColor = ref('');
const separatorSize = ref('');

if (lsBtnGroupProp) {
  separator.value = lsBtnGroupProp.separator;
  separatorColor.value = lsBtnGroupProp.separatorColor;
  separatorSize.value = lsBtnGroupProp.separatorSize;
}

const separatorStyle = computed(() => {
  return {
    color: separatorColor.value,
    fontSize: `${separatorSize.value}px`
  };
});
</script>

<template>
  <template v-if="$attrs.icon && !slots.default">
    <el-button v-bind="$attrs" :class="comClass" />
    <div v-if="separator" class="ls-separator" :style="separatorStyle">{{ separator }}</div>
  </template>
  <template v-else>
    <el-button v-bind="$attrs" :class="comClass">
      <LSIcon
        v-if="!$attrs.icon && (iconConfig?.name || slots.icon)"
        :class="[!slots.default ? 'only-icon' : '']"
        v-bind="iconConfig"
      >
        <slot name="icon"></slot>
      </LSIcon>
      <slot v-if="slots.default"></slot>
      <span v-if="separator" class="ls-separator" :style="separatorStyle">{{ separator }}</span>
    </el-button>
  </template>
</template>

<style lang="scss" scoped>
.ls-button {
  .ls-icon {
    margin-right: 6px;
    &.only-icon {
      margin-right: 0;
    }
  }
  .ls-iconify {
    margin-right: 6px;
  }
  .ls-iconify,
  :deep(span) {
    line-height: normal;
    vertical-align: middle;
  }
}
.ls-separator {
  position: relative;
  top: -1px;
  display: inline-block;
  margin-right: 4px;
  margin-left: 8px;
  overflow: hidden;
  vertical-align: middle;
}
</style>
