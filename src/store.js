import Vue from 'vue'
import Vuex from 'vuex'
import { database } from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Vuex with Firebase',
    items: [],
    user: null
  },

  mutations: {
    RENDER_ITEMS(state, user) {
      database.ref(`users/${user}/items`).on('value', snapshot => {
        state.items = snapshot.val()
      })
    },

    ADD_ITEM(state, payload) {
      database.ref(`users/${payload.user}/items`).push(payload.payload)
    },

    REMOVE_ITEM(state, payload) {
      database.ref(`users/${payload.user}/items/${payload.index}`).remove()
    },

    REMOVE_ALL(state, payload) {
      database.ref(`users/${payload}/items`).remove()
    },

    EDIT_ITEM(state, payload) {
      database.ref(`users/${payload.user}/items/${payload.index}`).set(payload.payload)
    }
  }
})