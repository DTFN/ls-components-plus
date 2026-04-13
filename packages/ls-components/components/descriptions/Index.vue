<script setup lang="ts" name="LSDescriptions">
/**
 * @summary 描述列表组件 - 基于 Element Plus `el-descriptions` 的二次封装
 *
 * `LSDescriptions` 用于按标签/内容的形式展示字段信息，内置 label 颜色、背景色、
 * 图标和空值处理逻辑，并保留 `el-descriptions` 的常用属性透传能力。
 * 组件当前始终以带边框形式渲染，常见透传属性可通过 `$attrs` 传入，如
 * `column`、`title`、`extra`、`size`、`align`、`label-width` 等。
 *
 * 组件自有属性：
 * @attr {DescriptionsListType} list 描述项数据列表
 * @attr {string} labelColor label 文本颜色
 * @attr {string} labelBgColor label 区域背景色，默认 `#e2edff`
 * @attr {boolean} showZero 值为 `0` 时是否显示 `0`，默认 `false`
 *
 * 插槽：
 * @slot title 标题区域插槽
 * @slot extra 右侧额外区域插槽
 * @slot icon 全局图标插槽，会渲染在配置了 `iconConfig` 的描述项前
 * @slot [slotName] 当描述项 `type='slot'` 时使用的动态内容插槽
 *
 * @event 无
 *
 * @example
 * <LSDescriptions :list="list" label-bg-color="#f0f9ff" label-color="#1890ff" :column="2" />
 *
 * @example
 * <LSDescriptions :list="list">
 *   <template #status>
 *     <el-tag type="success">已完成</el-tag>
 *   </template>
 * </LSDescriptions>
 */
import { useNamespace } from '@cpo/_hooks/useNamespace';
import LSIcon from '@cpo/icon/Index.vue';
import dayjs from 'dayjs';
import { merge } from 'lodash-es';
import { lsDescProp } from './types';

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
