import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main'
import Register from './components/Register'
import Login from './components/Login'
import { auth } from './firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    
    {
      path: '/login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },

    {
      path: '/home',
      component: Main,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (auth.currentUser) {
      next({
        path: '/home',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router