<script setup lang="ts" name="LSButton">
import { lsBtnKey } from '@cpo/_constants';
import { lsBtnProp } from './types';
import { useNamespace } from '@cpo/_hooks/useNamespace';
import LSIcon from '@cpo/icon/Index.vue';

const slots = useSlots();

defineProps(lsBtnProp);

const ns = useNamespace('button');
const comClass: string = ns.b();

const lsBtnGroupProp: any = inject(lsBtnKey, undefined)!;
const { separator, separatorColor, separatorSize } = toRefs(lsBtnGroupProp || {});

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
    <div v-if="separator" class="separator" :style="separatorStyle">{{ separator }}</div>
  </template>
  <template v-else>
    <el-button v-bind="$attrs" :class="comClass">
      <LSIcon
        v-if="!$attrs.icon && (iconName || slots.icon)"
        :class="[!slots.default ? 'only-icon' : '']"
        :type="iconType"
        :name="iconName"
        :color="iconColor"
        :width="iconWidth"
        :height="iconHeight"
        :size="iconSize"
      >
        <slot name="icon"></slot>
      </LSIcon>
      <slot v-if="slots.default"></slot>
      <div v-if="separator" class="separator" :style="separatorStyle">{{ separator }}</div>
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
  .span {
    vertical-align: middle;
  }
}
.separator {
  display: inline-block;
  margin-right: 4px;
  margin-left: 8px;
  vertical-align: middle;
}
</style>
