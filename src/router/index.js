import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/index/index.vue'),
      children: [
        {
          path: '/:type',
          component: () => import('../views/index/index.vue'),
        },
      ]
    },
    {
      path: '/boiling_point',
      name: 'boiling_point',
      component: () => import('../views/boiling_point/boiling_point.vue'),
      children: [
        {
          path: '/boiling_point/:type',
          component: () => import('../views/boiling_point/boiling_point.vue'),
        },
        {
          path: '/boiling_point/:type/:id',
          component: () => import('../views/boiling_point/boiling_point.vue'),
        },
      ]
    },
    {
      path: '/course',
      component: () => import('../views/course/course.vue'),
      children: [
        {
          path: '/course/:course',
          component: () => import('../views/course/course.vue'),
        },
        {
          path: '/course/:course/:category',
          component: () => import('../views/course/course.vue'),
        },
      ]
    },
    {
      path: '/article_details/:id',
      component: () => import('../views/article_details/article_details.vue')
    },
  ]
})

export default router
