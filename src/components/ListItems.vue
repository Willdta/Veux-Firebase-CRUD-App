<template>
  <div id="listitems">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <div v-if="!item.toggleEdit">
          <p>
            {{ item.name }}
            {{ item.age }}
            {{ item.status }}
            <input type="checkbox" v-model="item.toggleCheck">
          </p>
          <button @click="toggleEdit(item)">Toggle Edit</button>
          <button @click="removeItem(item, index)">Remove</button>
        </div>

        <div v-else-if="item.toggleEdit">
          <input type="text" v-model="item.name">
          <input type="text" v-model="item.age">
          <input type="text" v-model="item.status">
          <button @click="cancelEdit(item)">Cancel Edit</button>
          <button @click="editItem(index, item)">Confirm Edit</button>
          <button @click="removeItem(index)">Remove</button>
        </div>
      </li>
    </ul>
    <button @click="checkAll()">Check All</button>  
    <button @click="removeAll()">Remove All</button>  
  </div>  
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  import { auth } from '../firebase'
  import _ from 'lodash'
  
  export default {
    name: 'listitems',

    props: ['items'],

    methods: {
      ...mapMutations([
        'EDIT_ITEM',
        'REMOVE_ITEM',
        'REMOVE_ALL'
      ]),

      editItem(index, { name, age, status }) {
        const payload = {
          name, 
          age, 
          status
        }

        this.EDIT_ITEM({ user: auth.currentUser.uid, index, payload })
      },

      toggleEdit(item) {
        item.toggleEdit = true
      },

      cancelEdit(item) {
        item.toggleEdit = false
      },

      removeItem(item, index) {
        if (item.toggleCheck) {
          this.REMOVE_ITEM({ user: auth.currentUser.uid, index })
        }
      },

      removeAll() {
        const completeCheck = _.map(this.items, item => item.toggleCheck)

        if (completeCheck.every(item => item === true)) {
          this.REMOVE_ALL(auth.currentUser.uid)
        } 
      },

      checkAll() {
        _.each(this.items, item => item.toggleCheck = true)
      }
    }
  }
</script>