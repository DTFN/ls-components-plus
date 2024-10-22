<script setup lang="ts">
import { ElDivider } from 'element-plus';
import { h } from 'vue';

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

const b = ref(false);
const spacer = h(ElDivider, { direction: 'vertical' });
</script>

<template>
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
    <template #form-append>
      <div>dasdsad</div>
    </template>

    <template #table-operate-prepend>
      <el-space :size="0" :spacer="spacer">
        <el-button link type="primary"> 配置 </el-button>

        <el-button v-if="b" link type="primary"> 查看配置 </el-button>

        <el-button link type="primary"> 测试 </el-button>
      </el-space>
    </template>

    <template #table-operate-append>
      <el-space :size="0" :spacer="spacer">
        <el-button link type="primary"> 配置 </el-button>

        <el-button v-if="b" link type="primary"> 查看配置 </el-button>

        <el-button link type="primary"> 测试 </el-button>
      </el-space>
    </template>

    <el-table-column label="333">33333333333</el-table-column>
  </LSList>
</template>

<style scoped lang="scss"></style>
