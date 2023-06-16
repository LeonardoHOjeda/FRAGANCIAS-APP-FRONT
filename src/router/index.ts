/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Public Pages
  {
    path: '/',
    component: async () => await import('@/views/home/HomePage.vue'),
    meta: {
      title: 'Fragancia Floral y Frutal'
    }
  },
  {
    path: '/nosotros',
    component: async () => await import('@/views/home/AboutPage.vue'),
    meta: {
      title: 'Nosotros'
    }
  },
  {
    path: '/productos',
    component: async () => await import('@/views/home/ProductsPage.vue'),
    meta: {
      title: 'Productos'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title} | Fragancia Floral y Frutal`
  next()
})

export default router
