<script setup lang="ts">
const formData = ref({
  name: undefined,
  type: undefined
});

const formItems = [
  {
    type: 'input',
    label: '名称',
    prop: 'name'
  },
  {
    type: 'input',
    label: '名称',
    prop: 'name'
  },
  {
    type: 'input',
    label: '名称',
    prop: 'name'
  },
  {
    type: 'input',
    label: '名称',
    prop: 'name'
  },
  {
    type: 'input',
    label: '名称',
    prop: 'name'
  },
  {
    type: 'input',
    label: '名称',
    prop: 'name'
  },
  {
    type: 'input',
    label: '名称',
    prop: 'name'
  }
];

const tableColumn = [
  {
    label: '名称',
    prop: 'name'
  },
  {
    label: '类型',
    prop: 'type'
  },
  {
    label: '创建时间',
    prop: 'createTime'
  }
];

function listApi() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        records: [
          {
            id: 1,
            name: '测试1',
            type: '1',
            createTime: '2022-01-01',
            status: 1
          },
          {
            id: 2,
            name: '测试2',
            type: '1',
            createTime: '2022-01-01',
            status: 0
          }
        ],
        total: 2
      });
    }, 1000);
  });
}
</script>

<template>
  <LSList
    :list-api="listApi"
    :form-data="formData"
    :form-items="formItems"
    :table-column="tableColumn"
    :show-operate="false"
    :show-table-switch="true"
    :form-attrs="{
      'label-position': 'left'
    }"
  ></LSList>
</template>

<style scoped lang="scss"></style>
