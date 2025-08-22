<!--
  当前位置：权益海报
-->
<script setup lang="ts">
import { claimPrivilegePosterListApi } from './interface';
import { COM_FORM_ATTRS, COM_TABLE_ATTRS } from './attrs';
import { getStatusList, getStatusMap } from './types';
// import { permissionStore } from '@/stores';

// 权限
// const store = permissionStore();
// const permission = computed(() => store.allPermission('qy_poster'));

// 列表组件ref
const lsListRef = ref();

// 添加按钮是否禁用
let disabledAdd = ref(false);

// 表单数据
const formData = ref({
  type: '',
  version: '',
  createdBy: '',
  createdTime: '',
  updatedBy: '',
  updatedTime: ''
});

// 表单配置
const formItems = ref([
  {
    type: 'select',
    label: '权益类型',
    prop: 'type',
    attrs: {
      clearable: false
    },
    options: getStatusList('EquityTypeOptions') // 权益类型 0-尊享包 1-增值包
  },
  {
    type: 'input',
    label: '版本号',
    prop: 'version'
  },
  {
    type: 'input',
    label: '创建人',
    prop: 'createdBy'
  },
  {
    type: 'date',
    label: '创建时间',
    prop: 'createdTime',
    attrs: {
      valueFormat: 'YYYY/MM/DD',
      disabledDate: (time: any) => {
        return time.getTime() > Date.now();
      }
    }
  },
  {
    type: 'input',
    label: '更新人',
    prop: 'updatedBy'
  },
  {
    type: 'date',
    label: '更新日期',
    prop: 'updatedTime',
    attrs: {
      valueFormat: 'YYYY/MM/DD',
      disabledDate: (time: any) => {
        return time.getTime() > Date.now();
      }
    }
  }
]);

// 表格列配置
const tableColumn = [
  {
    minWidth: 100,
    label: '权益类型',
    prop: 'type',
    type: 'status',
    value: getStatusMap('EquityTypeOptions')
  },
  {
    minWidth: 100,
    label: '版本号',
    prop: 'version'
  },
  {
    minWidth: 100,
    label: '版本说明',
    prop: 'versionExplain',
    type: 'slot'
  },
  {
    minWidth: 100,
    label: '权益图片',
    prop: 'posterImage',
    type: 'slot'
  },
  {
    minWidth: 100,
    label: '创建人',
    prop: 'createdBy'
  },
  {
    minWidth: 160,
    label: '创建时间',
    prop: 'createdTime'
  },
  {
    minWidth: 100,
    label: '更新人',
    prop: 'updatedBy'
  },
  {
    minWidth: 160,
    label: '更新时间',
    prop: 'updatedTime'
  }
];

/**
 * 处理请求参数
 * @param params 原始参数
 * @returns 处理后的参数
 */
function dealParams(params: any) {
  return {
    ...params
  };
}

/**
 * 处理响应数据
 * @param res 原始响应数据
 * @returns 处理后的响应数据
 */
function dealData(res: any) {
  // 判断是否禁用添加按钮
  if (!disabledAdd.value) {
    disabledAdd.value = res.total > 1;
  }

  return {
    data: res.records,
    total: res.total
  };
}
</script>

<template>
  <div>
    <LSList
      ref="lsListRef"
      :list-api="claimPrivilegePosterListApi"
      :form-data="formData"
      :form-items="formItems"
      :table-column="tableColumn"
      :deal-params="dealParams"
      :deal-data="dealData"
      :form-attrs="{
        ...COM_FORM_ATTRS,
        labelWidth: 70
      }"
      :table-attrs="{
        ...COM_TABLE_ATTRS
      }"
      :show-table-detail="false"
      :show-table-del="false"
      :show-skeleton="true"
      class="com-tab-list"
    >
    </LSList>
  </div>
</template>

<style lang="scss" scoped></style>
