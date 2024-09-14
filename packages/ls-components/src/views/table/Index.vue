<script setup lang="ts">
// 选中参数列表
const tableColumn = [
  {
    label: '参数名称',
    prop: 'code'
    // minWidth: 60
  },
  {
    label: '参数描述',
    prop: 'name'
    // minWidth: 60
  },
  {
    label: '默认值',
    prop: 'defaultValue'
    // width: 70
  }
];
const tableDataRef = ref([
  {
    id: '1',
    code: 'EquipmentTypeEnum',
    name: '机组类型',
    defaultValue: '0'
  },
  {
    id: '2',
    code: 'EquipmentCategoryEnum',
    name: '机组类别',
    defaultValue: '1'
  },
  {
    id: '3',
    code: 'capacity',
    name: '装机容量（MW）',
    defaultValue: '0'
  },
  {
    id: '4',
    code: 'ratedPower',
    name: '额定功率',
    defaultValue: '0'
  },
  {
    id: '5',
    code: 'ProductTypeEnum',
    name: '产品类型',
    defaultValue: '1'
  },
  {
    id: '6',
    code: 'BoilerTypeEnum',
    name: '锅炉类型',
    defaultValue: '1'
  },
  {
    id: '7',
    code: 'boiler_productionCapacity',
    name: '生产能力',
    defaultValue: '1'
  },
  {
    id: '8',
    code: 'TurbineTypeEnum',
    name: '汽轮机类型',
    defaultValue: '0'
  },
  {
    id: '9',
    code: 'PressureParamsTypeEnum',
    name: '汽轮机压力参数',
    defaultValue: '0'
  },
  {
    id: '10',
    code: 'turbine_ratedPower',
    name: '汽轮机额定功率',
    defaultValue: '1'
  },
  {
    id: '11',
    code: 'EquipmentTypeEnum',
    name: '机组类型1',
    defaultValue: '2'
  },
  {
    id: '12',
    code: 'EquipmentCategoryEnum',
    name: '机组类别1',
    defaultValue: '0'
  },
  {
    id: '13',
    code: 'capacity',
    name: '装机容量（MW）1',
    defaultValue: '1'
  }
]);

// const currentPage = ref(1);
// const pageSize = ref(10);
// const total = tableData.value.length;
let total = ref(0);
watch(tableDataRef, () => {
  total.value = tableDataRef.value.length;
  console.log('====total.value:', total.value);
});
const tableData = computed(() => tableDataRef.value);
function onRemoveParam(id: string) {
  try {
    const list = tableDataRef.value.filter((item: any) => item.id !== id);
    tableDataRef.value = list;
  } catch (error) {
    console.error('Error removing parameter:', error);
  }
}

// function handleCurrentChange(val: any) {
//   currentPage.value = val;
// }
</script>

<template>
  <!-- <div class="common_title">示例 1</div> -->
  <LSTable
    border
    :show-table-index="true"
    :show-pagination="false"
    :show-radio="false"
    :table-column="tableColumn"
    :table-data="tableData"
  >
    <el-table-column prop="operate" label="操作" width="100px">
      <template #default="{ row }">
        <el-button link type="danger" @click="onRemoveParam(row.id)"> 移除 </el-button>
      </template>
    </el-table-column>
  </LSTable>

  <!-- <div class="common_title">示例 2</div> -->
  <!-- <LSTable
    :table-data="tableData"
    :table-column="tableColumn"
    :show-pagination="true"
    :show-radio="false"
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :total="total"
    class="table2"
  >
    <el-table-column prop="operate" label="操作" width="100px">
      <template #default="{ row }">
        <el-button link type="danger" @click="onRemoveParam(row.id)"> 移除 </el-button>
      </template>
    </el-table-column>
  </LSTable> -->
</template>

<style scoped>
.common_title {
  margin: 24px 0 8px;
  font-size: 16px;
  font-weight: 500;
  &:first-child {
    margin-top: 0;
  }
}
</style>
