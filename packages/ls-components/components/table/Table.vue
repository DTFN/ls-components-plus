<script setup lang="ts">
import dayjs from 'dayjs';
import { get } from 'lodash-es';

withDefaults(
  defineProps<{
    tableColumn: any[];
    tableData: any[];
    // 总条数
    total?: number;
    // 是否展示Loading状态
    loading?: boolean;
    // 是否展示分页
    showPagination?: boolean;
    // 是否展示多选框
    showSelect?: boolean;
    // 是否展示序号
    showTableIndex?: boolean;
    tableIndexfixed?: boolean;
    tableIndexLabel?: string;
    // 每页页数
    pageSizes?: number[];
    // 是否用默认Empty组件
    showEmpty?: boolean;
    // 多选框属性
    tableSelectProps?: ObjType;
    // 是否设置单选 (radio radiolabel 配合使用)
    showRadio: boolean;
    radioLabel: string;
    selectedRow: ObjType;
  }>(),
  {
    loading: false,
    showPagination: true,
    showSelect: false,
    total: 0,
    showTableIndex: true,
    tableIndexfixed: false,
    tableIndexLabel: '序号',
    pageSizes: () => [10, 20, 30, 50],
    showEmpty: true,
    showRadio: false,
    radioLabel: 'id',
    selectedRow: () => {
      return {};
    }
  }
);

const TableRef = ref();
const currentPage = defineModel('currentPage', { type: Number, default: 0 });
const pageSize = defineModel('pageSize', { type: Number, default: 10 });
const background = ref(false);

const emitAll = defineEmits(['handleRowChange']);

const handleRowChange = (currentRow: any, oldCurrentRow: any) => {
  emitAll('handleRowChange', currentRow, oldCurrentRow);
};

// 序号
function indexMethod(index: number) {
  return (currentPage.value - 1) * pageSize.value + index + 1;
}

// 日期转换
function formatDate(val: string, template?: string) {
  if (!val) return '--';

  return dayjs(val).format(template || 'YYYY-MM-DD HH:mm:ss');
}

defineExpose({
  TableRef
});
</script>

<template>
  <el-table
    ref="TableRef"
    v-loading="loading"
    class="ls-table bg-transparent"
    style="width: 100%"
    v-bind="$attrs"
    :data="tableData"
    @current-change="handleRowChange"
  >
    <slot name="expand"></slot>

    <el-table-column v-if="showRadio" width="60">
      <template #default="{ row }">
        <el-radio :model-value="selectedRow ? selectedRow[radioLabel] : void 0" :label="row[radioLabel]"></el-radio>
      </template>
    </el-table-column>

    <!-- 多选 -->
    <el-table-column v-if="showSelect" type="selection" width="55" v-bind="tableSelectProps" />

    <!-- 序号 -->
    <el-table-column
      v-if="showTableIndex"
      :fixed="tableIndexfixed"
      :label="tableIndexLabel"
      type="index"
      min-width="60"
      :index="indexMethod"
    />

    <template v-for="item in tableColumn" :key="item.prop">
      <el-table-column v-bind="item">
        <template #default="{ row }">
          <!-- 日期 -->
          <template v-if="item.type === 'date'">
            {{ formatDate(get(row, item.prop), item.dateTemplate) }}
          </template>

          <!-- 状态 -->
          <template v-else-if="item.type === 'status'">
            <el-text :type="item.value[get(row, item.prop)]?.type">
              {{ item.value[get(row, item.prop)]?.label || item.value.default?.label || row[item.prop] }}
            </el-text>
          </template>

          <!-- 数字 -->
          <template v-else-if="item.type === 'number'">
            <el-text :type="Number(get(row, item.prop)) < 0 ? 'danger' : `${item.isSuc ? 'success' : ''}`">
              {{ get(row, item.prop) }}
            </el-text>
          </template>

          <!-- 自定义 -->
          <template v-else-if="item.type === 'slot'">
            <slot :name="item.prop" :row="row" />
          </template>
        </template>
      </el-table-column>
    </template>

    <slot></slot>

    <template v-if="showEmpty" #empty>
      <el-empty description="暂无数据" />
    </template>
  </el-table>

  <el-pagination
    class="flex justify-end pt-20px"
    v-if="showPagination"
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="pageSizes"
    :background="background"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
  />
</template>

<style scoped lang="scss">
:deep() .el-empty {
  --el-empty-padding: 24px 0 10px 0;
  --el-empty-description-margin-top: 10px;
}
</style>
