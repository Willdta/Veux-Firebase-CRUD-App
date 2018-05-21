import Vue from 'vue'
import Vuex from 'vuex'
import database from './firebase'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Vuex with Firebase',
    items: []
  },

  mutations: {
    RENDER_ITEMS(state) {
      database.ref('items').on('value', snapshot => {
        state.items = snapshot.val()
      })
    },

    ADD_ITEM(state, payload) {
      database.ref('items').push(payload)
    },
    
    REMOVE_ITEM(state, index) {
      database.ref(`items/${index}`).remove()
    },

    EDIT_ITEM(state, payload) {
      database.ref(`items/${payload.key}`).set(payload.value)
    }
  },

  // actions: {

  // }
})