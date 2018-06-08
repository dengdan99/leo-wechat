export default [
  {
    path: '/',
    redirect: '/chat-list'
  },
  {
    path: '/login',
    component: resolve => require(['../pages/login'], resolve),
  },
  {
    path: '/register',
    component: resolve => require(['../pages/register'], resolve),
  },
  {
    path: '/',
    component: resolve => require(['../top-layout'], resolve),
    children: [
      {
        path: 'chat-list',
        component: resolve => require(['../pages/chat-list'], resolve),
      },
      {
        path: 'contact-add',
        component: resolve => require(['../pages/contact-add'], resolve),
      },
      {
        path: 'contacts',
        component: resolve => require(['../pages/contacts'], resolve),
      }
    ]
  },
  {
    path: '/chat/:nickname',
    component: resolve => require(['../pages/chat'], resolve),
  },
]
