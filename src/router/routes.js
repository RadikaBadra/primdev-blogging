import AuthorTemplates from '@/views/templates/authorTemplates.vue'
import UserTemplates from '@/views/templates/userTemplates.vue'
import AuthTemplates from '@/views/templates/authTemplates.vue'

import Home from '@/views/pages/home.vue'
import Detail from '@/views/pages/detail.vue'
import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/pages/about.vue'
import Dashboard from '@/views/pages/author/dashboard.vue'
import Blog from '@/views/pages/author/blog.vue'
import CreateBlog from '@/views/pages/author/createBlog.vue'
import UpdateBlog from '@/views/pages/author/updateBlog.vue'
import Login from '@/views/pages/auth/login.vue'
import Register from '@/views/pages/auth/register.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: UserTemplates,
    meta: {
      isAuth: false
    },
    children: [
      {
        path: '/',
        name: 'user-home',
        component: Home
      },
      {
        path: '/blog/:slug',
        name: 'read-blog',
        component: Detail,
        props: true
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
    meta: {
      isAuth: true
    },
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
      },
      {
        path: '/blog/update/:slug',
        name: 'author-update-blog',
        component: UpdateBlog
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: AuthTemplates,
    meta: {
      isAuth: false
    },
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.isAuth)) {
    let user = localStorage.getItem('token')
    if (!user) {
      next('/login')
    }
  }
  next()
})

export default router
