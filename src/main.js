import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import store from './store'
import router from './router'
import { auth } from './firebase'

Vue.config.productionTip = false

let app

auth.onAuthStateChanged(user => {
  if (!app) {
  app = new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')
  }
})