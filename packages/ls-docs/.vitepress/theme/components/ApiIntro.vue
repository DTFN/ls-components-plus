<script lang="ts" setup>
import { table } from 'console';
import { ElTable, ElTableColumn } from 'element-plus';

const props = defineProps({
  tableColumn: {
    type: Array<any>,
    required: true,
    default: () => []
  },
  tableData: {
    type: Array<any>,
    required: true,
    default: () => []
  }
});
</script>
<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-for="item in tableColumn"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
      :min-width="item.minWidth"
    />
  </el-table>
</template>
<style lang="scss">
.el-table {
  tr {
    border: 0;
    th {
      border-top: 0;
      border-right: 0;
      border-left: 0;
    }
  }
  table {
    margin: 0;
    td {
      border: 0;
    }
  }
}
</style>
