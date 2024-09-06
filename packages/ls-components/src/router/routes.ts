export default [
  {
    name: 'Layout',
    path: '/',
    component: () => import('@/views/Layout.vue'),
    meta: {
      title: 'Layout'
    },
    children: [
      {
        name: 'Form',
        path: '/form',
        component: () => import('@/views/form/Index.vue'),
        meta: {
          title: 'Form'
        }
      },
      {
        name: 'Button',
        path: '/button',
        component: () => import('@/views/button/Index.vue'),
        meta: {
          title: 'Button'
        }
      },
      // {
      //   name: 'Table',
      //   path: '/table',
      //   component: () => import('@/views/table/Index.vue'),
      //   meta: {
      //     title: 'Table'
      //   }
      // },
      {
        name: 'Descriptions',
        path: '/descriptions',
        component: () => import('@/views/descriptions/Index.vue'),
        meta: {
          title: 'Descriptions'
        }
      },
      {
        name: 'Upload',
        path: '/upload',
        component: () => import('@/views/upload/Index.vue'),
        meta: {
          title: 'Upload'
        }
      }
    ]
  }
];
