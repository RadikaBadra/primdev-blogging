import AuthorTemplates from '@/views/templates/authorTemplates.vue'
import UserTemplates from '@/views/templates/userTemplates.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: UserTemplates
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: AuthorTemplates
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
