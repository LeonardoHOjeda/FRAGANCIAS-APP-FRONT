import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Public Pages
  {
    path: '/',
    component: () => import('../views/home/HomePage.vue'),
    meta: {
      title: 'Fragancia Floral y Frutal'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router