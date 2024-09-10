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

// const tableData = computed(() => {
//   const list: any[] = [
//     {
//       code: 'EquipmentTypeEnum',
//       name: '机组类型',
//       defaultValue: '0'
//     },
//     {
//       code: 'EquipmentCategoryEnum',
//       name: '机组类别',
//       defaultValue: '0'
//     },
//     {
//       code: 'capacity',
//       name: '装机容量（MW）',
//       defaultValue: '0'
//     },
//     {
//       code: 'ratedPower',
//       name: '额定功率',
//       defaultValue: '0'
//     },
//     {
//       code: 'ProductTypeEnum',
//       name: '产品类型',
//       defaultValue: '0'
//     },
//     {
//       code: 'BoilerTypeEnum',
//       name: '锅炉类型',
//       defaultValue: '0'
//     },
//     {
//       code: 'boiler_productionCapacity',
//       name: '生产能力',
//       defaultValue: '0'
//     },
//     {
//       code: 'TurbineTypeEnum',
//       name: '汽轮机类型',
//       defaultValue: '0'
//     },
//     {
//       code: 'PressureParamsTypeEnum',
//       name: '汽轮机压力参数',
//       defaultValue: '0'
//     },
//     {
//       code: 'turbine_ratedPower',
//       name: '汽轮机额定功率',
//       defaultValue: '0'
//     }
//   ];

//   return list;
// });

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
    defaultValue: '0'
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
    defaultValue: '0'
  },
  {
    id: '6',
    code: 'BoilerTypeEnum',
    name: '锅炉类型',
    defaultValue: '0'
  },
  {
    id: '7',
    code: 'boiler_productionCapacity',
    name: '生产能力',
    defaultValue: '0'
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
    defaultValue: '0'
  }
]);

const tableData = computed(() => tableDataRef.value);
function onRemoveParam(id: string) {
  try {
    const list = tableDataRef.value.filter((item: any) => item.id !== id);
    tableDataRef.value = list;
  } catch (error) {
    console.error('Error removing parameter:', error);
  }
}
</script>

<template>
  <LSTable
    :border="true"
    :show-table-index="false"
    :show-pagination="false"
    :show-empty="false"
    :show-radio="false"
    :radio-label="'CID'"
    :table-column="tableColumn"
    :table-data="tableData"
  >
    <el-table-column prop="operate" label="操作" width="100px">
      <template #default="{ row }">
        <el-button link type="danger" @click="onRemoveParam(row.id)"> 移除 </el-button>
      </template>
    </el-table-column>
  </LSTable>
</template>

<style scoped></style>
