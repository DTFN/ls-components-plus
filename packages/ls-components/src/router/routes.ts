export default [
  {
    name: 'Layout',
    path: '/',
    component: () => import('@/views/Layout.vue'),
    redirect: '/button',
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
      {
        name: 'Table',
        path: '/table',
        component: () => import('@/views/table/Index.vue'),
        meta: {
          title: 'Table'
        }
      },
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
      },
      {
        name: 'Preview',
        path: '/preview',
        component: () => import('@/views/preview/Index.vue'),
        meta: {
          title: 'Preview'
        }
      },
      {
        name: 'Menu',
        path: '/menu',
        component: () => import('@/views/menu/Index.vue'),
        meta: {
          title: 'Menu'
        }
      },
      {
        name: 'Confirm',
        path: '/confirm',
        component: () => import('@/views/confirm/Index.vue'),
        meta: {
          title: 'Confirm'
        }
      },
      {
        name: 'Chart',
        path: '/chart',
        component: () => import('@/views/chart/Index.vue'),
        meta: {
          title: 'Chart'
        }
      }
    ]
  }
];
