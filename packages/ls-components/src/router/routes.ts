export default [
  {
    name: 'Layout',
    path: '/',
    component: () => import('@/views/Layout.vue'),
    meta: {
      title: 'Layout'
    }
  },
  {
    name: 'Form',
    path: '/form',
    component: () => import('@/views/form/Index.vue'),
    meta: {
      title: 'Form'
    }
  },
  // {
  //   name: 'Table',
  //   path: '/table',
  //   component: () => import('@/views/table/Index.vue'),
  //   meta: {
  //     title: 'Table'
  //   }
  // }
];
