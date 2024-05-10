import AuthorTemplates from '@/views/templates/authorTemplates.vue'
import UserTemplates from '@/views/templates/userTemplates.vue'
import Home from '@/views/pages/home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/pages/about.vue'
import Dashboard from '@/views/pages/author/dashboard.vue'
import Blog from '@/views/pages/author/blog.vue'
import CreateBlog from '@/views/pages/author/createBlog.vue'
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
    component: AuthorTemplates,
    children: [
      {
        path: '/dashboard',
        name: 'author-dashboard',
        component: Dashboard
      },
      {
        path: '/blog',
        name: 'author-blog',
        component: Blog
      },
      {
        path: '/blog/create',
        name: 'author-create-blog',
        component: CreateBlog
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
