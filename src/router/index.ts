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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
