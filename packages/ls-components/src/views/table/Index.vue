<script setup lang="ts">
// 选中参数列表
const tableColumn = [
  {
    label: '参数名称',
    prop: 'code',
    minWidth: 200
  },
  {
    label: '参数描述',
    prop: 'name',
    minWidth: 200
  },
  {
    label: '默认值',
    prop: 'defaultValue',
    width: 100
  }
];

const tableData = computed(() => {
  const list: any[] = [
    {
      code: 'EquipmentTypeEnum',
      name: '机组类型',
      defaultValue: '0'
    },
    {
      code: 'EquipmentCategoryEnum',
      name: '机组类别',
      defaultValue: '0'
    },
    {
      code: 'capacity',
      name: '装机容量（MW）',
      defaultValue: '0'
    },
    {
      code: 'ratedPower',
      name: '额定功率',
      defaultValue: '0'
    },
    {
      code: 'ProductTypeEnum',
      name: '产品类型',
      defaultValue: '0'
    },
    {
      code: 'BoilerTypeEnum',
      name: '锅炉类型',
      defaultValue: '0'
    },
    {
      code: 'boiler_productionCapacity',
      name: '生产能力',
      defaultValue: '0'
    },
    {
      code: 'TurbineTypeEnum',
      name: '汽轮机类型',
      defaultValue: '0'
    },
    {
      code: 'PressureParamsTypeEnum',
      name: '汽轮机压力参数',
      defaultValue: '0'
    },
    {
      code: 'turbine_ratedPower',
      name: '汽轮机额定功率',
      defaultValue: '0'
    }
  ];

  return list;
});
</script>

<template>
  <Table :border="true" :show-pagination="false" :show-empty="false" :table-column="tableColumn" :table-data="tableData">
    <el-table-column prop="operate" label="操作" width="100px">
      <template #default="{ row }">
        <el-button link type="danger"> 移除 {{ row }} </el-button>
      </template>
    </el-table-column>
  </Table>
</template>

<style scoped></style>
