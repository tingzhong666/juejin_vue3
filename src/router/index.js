import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/index/index.vue'),
      children: [
        {
          path: '/following',
          component: () => import('../views/index/index.vue'),
        },
        {
          path: '/recommended',
          component: () => import('../views/index/index.vue'),
        },
        {
          path: '/backend',
          component: () => import('../views/index/index.vue'),
        },
        {
          path: '/frontend',
          component: () => import('../views/index/index.vue'),
        },
        {
          path: '/android',
          component: () => import('../views/index/index.vue'),
        },
        {
          path: '/ios',
          component: () => import('../views/index/index.vue'),
        },
        {
          path: '/ai',
          component: () => import('../views/index/index.vue'),
        },
        {
          path: '/freebie',
          component: () => import('../views/index/index.vue'),
        },
        {
          path: '/career',
          component: () => import('../views/index/index.vue'),
        },
        {
          path: '/article',
          component: () => import('../views/index/index.vue'),
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
