import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // you can add other pages here later
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router