<script setup lang="ts" name="LSDescriptions">
/**
 * @summary 描述列表组件 - 基于 Element Plus Descriptions 的二次封装
 *
 * 这是自研库的标准描述列表组件，用于展示多个字段的信息。
 * 支持自定义标签颜色、背景色、图标、空值处理等功能。
 *
 * @attr {any[]} list - 描述项列表
 * @attr {string} labelColor - 标签文本颜色
 * @attr {string} labelBgColor - 标签背景颜色
 * @attr {string} labelEmpty - 空值占位符
 *
 * @slot default - 默认插槽
 * @slot extra - 额外内容插槽
 * @slot title - 标题插槽
 *
 * @event 无
 *
 * @csspart descriptions - 描述列表容器
 *
 * @example
 * <!-- 基础用法 -->
 * <LSDescriptions :list="descList" />
 *
 * @example
 * <!-- 自定义样式 -->
 * <LSDescriptions
 *   :list="descList"
 *   labelColor="#606266"
 *   labelBgColor="#f5f7fa"
 * />
 */
import LSIcon from '@cpo/icon/Index.vue';
import dayjs from 'dayjs';
import { lsDescProp } from './types';
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { merge } from 'lodash-es';

const slots: any = useSlots();

const props = defineProps(lsDescProp);

const defAttrs = ref({
  column: 1
});
const attrs = useAttrs();

const lsDescRef = ref();
const ns = useNamespace('descriptions');
const comClass: string = ns.b();

watch(
  () => props.labelColor,
  async val => {
    if (val) {
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
      updateLabelStyle(val, 2);
    }
  },
  {
    deep: true,
    immediate: true
  }
);

watch(
  () => props.list,
  (val: Array<any>) => {
    updateLabelStyle(props.labelColor, 2);
    updateLabelStyle(props.labelBgColor, 2);
    updateLabelWidth(val.find((item: any) => item.labelWidth));
  },
  {
    immediate: true,
    deep: true
  }
);

watch(
  () => attrs['label-width'],
  (val: any) => {
    updateLabelWidth(val || props.list.find((item: any) => item.labelWidth));
  },
  {
    immediate: true,
    deep: true
  }
);

// watch(
//   () => props.labelWidth,
//   val => {
//     updateLabelWidth(val);
//   },
//   {
//     immediate: true,
//     deep: true
//   }
// );

function updateLabelWidth(val: string) {
  nextTick(() => {
    if (val) {
      const contentDoms = lsDescRef.value?.querySelectorAll('.el-descriptions__content') || [];
      contentDoms.forEach((element: any) => {
        element.style.width = 'auto';
      });
    }
  });
}

async function updateLabelStyle(color: string, type: number) {
  await nextTick();
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
  <div
    ref="lsDescRef"
    :class="[
      comClass,
      `column-${$attrs.column || 1}`,
      $attrs.title || $attrs.extra || slots.title || slots.extra ? '' : 'no-header'
    ]"
  >
    <el-descriptions v-bind="merge(defAttrs, $attrs)" border>
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #extra>
        <slot name="extra"></slot>
      </template>
      <template v-for="(item, i) in list" :key="i">
        <el-descriptions-item v-if="!item.hide" v-bind="item">
          <template #label>
            <div class="cell-item">
              <LSIcon v-if="(item.iconConfig || {})?.name || slots.icon" v-bind="item.iconConfig">
                <slot name="icon"></slot>
              </LSIcon>
              {{ item?.label }}
            </div>
          </template>
          <template v-if="item.type === 'date'">
            {{ item.value ? dayjs(item.value).format(item.format || 'YYYY-MM-DD HH:mm:ss') : '--' }}
          </template>
          <template v-else-if="item.type === 'select'">
            {{ (item.propMap || {})[item.value]?.label || '--' }}
          </template>
          <template v-else-if="item.type == 'slot'">
            <slot :name="item.slotName" :data="item?.value"></slot>
          </template>
          <template v-else>
            {{ item?.value || (props.showZero ? '0' : '--') }}
          </template>
        </el-descriptions-item>
      </template>
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
  &.column-3 {
    :deep(.el-descriptions__body) {
      td {
        width: 16.666%;
      }
    }
  }
  &.column-4 {
    :deep(.el-descriptions__body) {
      td {
        width: 12.5%;
      }
    }
  }
  &.column-5 {
    :deep(.el-descriptions__body) {
      td {
        width: 10%;
      }
    }
  }
  &.column-6 {
    :deep(.el-descriptions__body) {
      td {
        width: 8.333%;
      }
    }
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
    .el-descriptions__table.is-bordered .el-descriptions__cell {
      vertical-align: top;
      border: 1px solid #dcdfe6 !important;
    }
  }
  :deep(.cell-item) {
    display: flex;
    align-items: center;
    .ls-icon {
      margin-right: 8px;
    }
  }
  &.no-header {
    :deep(.el-descriptions__header) {
      margin-bottom: 0;
    }
  }
}
</style>
