<script setup lang="ts">
import { isEmpty } from '@cpo/_utils/utils';

const treeData = ref([
  {
    id: 10100,
    clientId: 1,
    name: '机构管理',
    type: 2,
    permission: 'a1',
    sort: 1,
    parentId: 0,
    status: 1,
    children: [
      {
        id: 10102,
        clientId: 1,
        name: '列表',
        url: '/v1/sys/org/tree',
        type: 2,
        permission: 'a11',
        method: 'GET',
        sort: 1,
        parentId: 10100,
        status: 1,
        children: [
          {
            id: 306084,
            clientId: 1,
            name: '查看详情',
            url: '/v1/sys/org/*',
            type: 2,
            permission: 'a111232',
            method: 'GET',
            sort: 1,
            parentId: 10102,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-07-04 14:14:37',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 10103,
            clientId: 1,
            name: '编辑',
            url: '/v1/sys/org',
            type: 2,
            permission: 'a111',
            method: 'PUT',
            sort: 2,
            parentId: 10102,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-07-04 14:17:48',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 306081,
            clientId: 1,
            name: '启用/停用',
            url: '/v1/sys/org',
            type: 2,
            permission: 'a111231',
            method: 'PUT',
            sort: 3,
            parentId: 10102,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-07-04 14:17:49',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 10104,
            clientId: 1,
            name: '删除',
            url: '/v1/sys/org',
            type: 2,
            permission: 'a112',
            method: 'DELETE',
            sort: 4,
            parentId: 10102,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-07-04 14:17:52',
            createdBy: -1,
            updatedBy: -1
          }
        ],
        createdTime: '2024-04-16 00:00:00',
        updatedTime: '2024-07-04 13:50:18',
        createdBy: -1,
        updatedBy: -1
      },
      {
        id: 306083,
        clientId: 1,
        name: '新增部门',
        url: '/v1/sys/org',
        type: 2,
        permission: 'a11065',
        method: 'POST',
        sort: 1,
        parentId: 10100,
        status: 1,
        createdTime: '2024-04-16 00:00:00',
        updatedTime: '2024-07-04 11:30:37',
        createdBy: -1,
        updatedBy: -1
      }
    ],
    createdTime: '2024-04-16 00:00:00',
    updatedTime: '2024-05-13 18:09:16',
    createdBy: -1,
    updatedBy: -1
  },
  {
    id: 10200,
    clientId: 1,
    name: '角色管理',
    type: 2,
    permission: 'a2',
    sort: 1,
    parentId: 0,
    status: 1,
    children: [
      {
        id: 10202,
        clientId: 1,
        name: '列表',
        url: '/v1/sys/role/page',
        type: 2,
        permission: 'a211',
        method: 'POST',
        sort: 1,
        parentId: 10200,
        status: 1,
        children: [
          {
            id: 10204,
            clientId: 1,
            name: '查看详情',
            url: '/v1/sys/role/*',
            type: 2,
            permission: 'a21111',
            method: 'GET',
            sort: 1,
            parentId: 10202,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-07-04 11:24:17',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 10211,
            clientId: 1,
            name: '编辑',
            url: '/v1/sys/role',
            type: 2,
            permission: 'a21124',
            method: 'PUT',
            sort: 1,
            parentId: 10202,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-07-04 15:04:21',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 10214,
            clientId: 1,
            name: '禁用/启用',
            url: '/v1/sys/role',
            type: 2,
            permission: 'a2114',
            method: 'PUT',
            sort: 2,
            parentId: 10202,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-07-04 15:04:31',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 10213,
            clientId: 1,
            name: '删除',
            url: '/v1/sys/role',
            type: 2,
            permission: 'a2113',
            method: 'DELETE',
            sort: 3,
            parentId: 10202,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-07-04 15:04:34',
            createdBy: -1,
            updatedBy: -1
          }
        ],
        createdTime: '2024-04-16 00:00:00',
        updatedTime: '2024-07-04 10:36:25',
        createdBy: -1,
        updatedBy: -1
      },
      {
        id: 10218,
        clientId: 1,
        name: '新增角色',
        url: '/v1/sys/role',
        type: 2,
        permission: 'a21162',
        method: 'POST',
        sort: 1,
        parentId: 10200,
        status: 1,
        createdTime: '2024-04-16 00:00:00',
        updatedTime: '2024-06-25 16:07:33',
        createdBy: -1,
        updatedBy: -1
      }
    ],
    createdTime: '2024-04-16 00:00:00',
    updatedTime: '2024-05-13 18:09:24',
    createdBy: -1,
    updatedBy: -1
  },
  {
    id: 10300,
    clientId: 1,
    name: '用户管理',
    type: 2,
    permission: 'a3',
    sort: 1,
    parentId: 0,
    status: 1,
    children: [
      {
        id: 10302,
        clientId: 1,
        name: '列表',
        url: '/v1/sys/user/page',
        type: 2,
        permission: 'a311',
        method: 'POST',
        sort: 1,
        parentId: 10300,
        status: 1,
        children: [
          {
            id: 10311,
            clientId: 1,
            name: '查看详情',
            url: '/v1/sys/user/*',
            type: 2,
            permission: 'a31123',
            method: 'GET',
            sort: 1,
            parentId: 10302,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-07-04 11:26:10',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 10319,
            clientId: 1,
            name: '修改用户',
            url: '/v1/sys/user',
            type: 2,
            permission: 'a31136',
            method: 'PUT',
            sort: 2,
            parentId: 10302,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-07-30 11:06:56',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 10321,
            clientId: 1,
            name: '启用/停用',
            url: '/v1/sys/user/status',
            type: 2,
            permission: 'a3114',
            method: 'POST',
            sort: 4,
            parentId: 10302,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-07-30 16:30:28',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 10323,
            clientId: 1,
            name: '删除',
            url: '/v1/sys/user',
            type: 2,
            permission: 'a3116',
            method: 'DELETE',
            sort: 5,
            parentId: 10302,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-07-04 13:53:43',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 10325,
            clientId: 1,
            name: '重置密码',
            url: '/v1/sys/user/resetPwd',
            type: 2,
            permission: 'I_a325',
            method: 'POST',
            sort: 6,
            parentId: 10302,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-08-28 15:10:03',
            createdBy: -1,
            updatedBy: -1
          },
          {
            id: 10327,
            clientId: 1,
            name: '重置默认密码',
            url: '/v1/sys/user/setDefaultPwd',
            type: 2,
            permission: 'I_a327',
            method: 'POST',
            sort: 6,
            parentId: 10302,
            status: 1,
            createdTime: '2024-04-16 00:00:00',
            updatedTime: '2024-07-04 13:53:43',
            createdBy: -1,
            updatedBy: -1
          }
        ],
        createdTime: '2024-04-16 00:00:00',
        updatedTime: '2024-07-04 13:50:33',
        createdBy: -1,
        updatedBy: -1
      },
      {
        id: 10303,
        clientId: 1,
        name: '新增用户',
        url: '/v1/sys/user',
        type: 2,
        permission: 'a3111',
        method: 'POST',
        sort: 1,
        parentId: 10300,
        status: 1,
        createdTime: '2024-04-16 00:00:00',
        updatedTime: '2024-06-25 15:50:36',
        createdBy: -1,
        updatedBy: -1
      }
    ],
    createdTime: '2024-04-16 00:00:00',
    updatedTime: '2024-05-13 18:09:24',
    createdBy: -1,
    updatedBy: -1
  }
]);

const roleData = ref([
  {
    id: 60011,
    roleId: 84,
    permissionId: 10100,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60012,
    roleId: 84,
    permissionId: 10102,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60014,
    roleId: 84,
    permissionId: 10103,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60016,
    roleId: 84,
    permissionId: 10104,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60018,
    roleId: 84,
    permissionId: 10200,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60019,
    roleId: 84,
    permissionId: 10202,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60020,
    roleId: 84,
    permissionId: 10204,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60021,
    roleId: 84,
    permissionId: 10211,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60023,
    roleId: 84,
    permissionId: 10213,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60022,
    roleId: 84,
    permissionId: 10214,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60024,
    roleId: 84,
    permissionId: 10218,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60025,
    roleId: 84,
    permissionId: 10300,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60026,
    roleId: 84,
    permissionId: 10302,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60031,
    roleId: 84,
    permissionId: 10303,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60027,
    roleId: 84,
    permissionId: 10311,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60028,
    roleId: 84,
    permissionId: 10319,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60029,
    roleId: 84,
    permissionId: 10321,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60030,
    roleId: 84,
    permissionId: 10323,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60015,
    roleId: 84,
    permissionId: 306081,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60017,
    roleId: 84,
    permissionId: 306083,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  },
  {
    id: 60013,
    roleId: 84,
    permissionId: 306084,
    createdTime: '2024-08-23 10:03:54',
    updatedTime: '2024-08-23 10:03:54'
  }
]);

const checkedPermissionIds = ref();

checkedPermissionIds.value = getTreeCheckedData((roleData.value || []).map((item: any) => item.permissionId));

// 筛选去掉父级id
function getTreeCheckedData(ids: any) {
  let newIds = ids || [];
  if (!isEmpty(treeData.value) && !isEmpty(ids)) {
    const lunData = (list: any) => {
      if (!isEmpty(list)) {
        list.forEach((item: any) => {
          const { id, children } = item;
          if (!isEmpty(children)) {
            let index = newIds.indexOf(id);
            if (index >= 0) {
              // 有子节点 并且 子节点有勾选 去掉当前父节点id
              newIds.splice(index, 1);
            }
            lunData(children);
          }
        });
      }
    };
    lunData(treeData.value);
  }
  return newIds;
}
</script>

<template>
  <div>
    <LSTree :data="treeData" :is-check-all="true" :show-checkbox="true" :default-checked-keys="checkedPermissionIds" />
  </div>
</template>

<style lang="scss" scoped></style>
