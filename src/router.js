import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main'
import Register from './components/Register'
import Login from './components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      component: Register
    },

    {
      path: '/login',
      component: Login
    },

    {
      path: '/home',
      component: Main
    }
  ]
})