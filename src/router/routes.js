import AuthorTemplates from '@/views/templates/authorTemplates.vue'
import UserTemplates from '@/views/templates/userTemplates.vue'
import Home from '@/views/pages/home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/pages/about.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: UserTemplates,
    children: [
      {
        path: '/',
        name: 'user-home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      }
    ]
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
