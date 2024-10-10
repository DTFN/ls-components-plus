<script setup lang="ts" name="LSDescriptions">
import LSIcon from '@cpo/icon/Index.vue';
import dayjs from 'dayjs';
import { lsDescProp } from './types';
import { useNamespace } from '@cpo/_hooks/useNamespace';

const slots = useSlots();

const props = defineProps(lsDescProp);

const defAttrs = ref({
  column: 1
});

const lsDescRef = ref();
const ns = useNamespace('descriptions');
const comClass: string = ns.b();

watch(
  () => props.labelColor,
  async val => {
    if (val) {
      await nextTick();
      updateLabelStyle(val, 1);
    }
  },
  {
    deep: true,
    immediate: true
  }
);

watch(
  () => props.labelBgColor,
  async val => {
    if (val) {
      await nextTick();
      updateLabelStyle(val, 2);
    }
  },
  {
    deep: true,
    immediate: true
  }
);

function updateLabelStyle(color: string, type: number) {
  const doms = lsDescRef.value?.querySelectorAll('.el-descriptions__label') || [];
  doms.forEach((element: any) => {
    if (type === 1) {
      element.style.color = color;
    } else if (type === 2) {
      element.style.backgroundColor = color;
    }
  });
}
</script>

<template>
  <div ref="lsDescRef" :class="[comClass, `column-${$attrs.column || 1}`]">
    <el-descriptions v-bind="Object.assign(defAttrs, $attrs)" border>
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #extra>
        <slot name="extra"></slot>
      </template>
      <el-descriptions-item v-for="(item, i) in list" :key="i" :label="item?.label">
        <template #label>
          <div class="cell-item">
            <LSIcon v-if="item.iconConfig?.name || slots.icon" v-bind="item.iconConfig">
              <slot name="icon"></slot>
            </LSIcon>
            {{ item?.label }}
          </div>
        </template>
        <template v-if="item.type === 'date'">
          {{ item.value ? dayjs(item.value).format(item.format || 'YYYY-MM-DD HH:mm:ss') : '--' }}
        </template>
        <template v-else-if="item.type === 'select'">
          {{ item.propMap[item.value]?.label || '--' }}
        </template>
        <template v-else-if="item.type == 'slot'">
          <slot :name="item.slotName" :data="item?.value"></slot>
        </template>
        <template v-else>
          {{ item?.value || '--' }}
        </template>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style lang="scss" scoped>
.ls-descriptions {
  &.column-2 {
    :deep(.el-descriptions__body) {
      td {
        width: 25%;
      }
    }
  }
  :deep .el-descriptions__header {
    margin-bottom: 0;
  }
  :deep(.el-descriptions__body) {
    th {
      font-weight: bold;
    }
    td {
      width: 50%;
      word-break: break-all;
      vertical-align: middle;
    }
  }
  :deep(.cell-item) {
    display: flex;
    align-items: center;
    .ls-icon {
      margin-right: 8px;
    }
  }
  :deep() .el-descriptions__body {
    .el-descriptions__label {
      padding: 2vh 11px !important;
    }
    .el-descriptions__table.is-bordered .el-descriptions__cell {
      border: 1px solid #dcdfe6 !important;
    }
  }
}
</style>
