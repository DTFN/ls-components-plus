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
      resolve([
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
      ]);
    }, 1000);
  });
}

function dealData(res: any) {
  const list = res || [];
  return {
    data: list,
    total: list.length
  };
}

const a = ref(true);
const b = ref(false);
const spacer = h(ElDivider, { direction: 'vertical' });
</script>

<template>
  <el-space :size="20" :spacer="spacer">
    <div v-if="a">dasdsad</div>

    <template v-if="b">
      <el-button type="text">第二个</el-button>
    </template>

    <el-button type="text">第3个</el-button>
  </el-space>

  <LSList
    :list-api="listApi"
    :form-data="formData"
    :form-items="formItems"
    :table-column="tableColumn"
    :show-table-switch="true"
    :show-table-edit="true"
    :disabled-table-del="(row: any) => row.name === '测试1'"
    :disabled-table-switch="(row: any) => row.name === '测试1'"
    :deal-data="dealData"
  >
    <template #table-operate-prepend>
      <div v-if="a">dasdsad</div>

      <template v-if="b">
        <el-button type="text">第二个</el-button>
      </template>

      <el-button type="text">第3个</el-button>
    </template>
  </LSList>
</template>

<style scoped lang="scss"></style>
