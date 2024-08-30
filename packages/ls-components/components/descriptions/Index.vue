<script setup lang="ts" name="LSDescriptions">
import { Icon } from '@iconify/vue';
import dayjs from 'dayjs';
import { lsDescProp } from './types';
import { setVariable } from '@cpo/_utils/config';

const props = defineProps(lsDescProp);

watch(
  () => props.labelBgColor,
  val => {
    if (val) {
      setVariable('--label-bg-color', val);
    }
  },
  {
    deep: true,
    immediate: true
  }
);
</script>

<template>
  <div class="ls-descriptions">
    <el-descriptions :title="title" :size="size" v-bind="$attrs" :direction="direction" :column="column" border>
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #extra>
        <slot name="extra"></slot>
      </template>
      <el-descriptions-item v-for="(item, i) in list" :key="i" :label="item?.label">
        <template #label v-if="item.icon">
          <div class="cell-item">
            <Icon
              v-if="item.iconType === 2"
              :icon="item.icon"
              class="ls-icon"
              :color="item.iconColor || item.btnColor"
              :width="item.iconWidth || 16"
              :height="item.iconHeight || 16"
            />
            <el-icon v-else class="ls-icon" size="item.iconSize" :color="item.iconColor || item.btnColor"
              ><component :is="item.icon"
            /></el-icon>
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
  :deep(.el-descriptions__body) {
    th {
      font-weight: bold;
    }
    td {
      width: 33.33%;
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
      &.el-descriptions__cell {
        &.is-bordered-label {
          background-color: var(--label-bg-color) !important;
        }
      }
    }
    .el-descriptions__table.is-bordered .el-descriptions__cell {
      border: 1px solid #dcdfe6 !important;
    }
  }
}
</style>
