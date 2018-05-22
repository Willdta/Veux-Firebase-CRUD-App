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

      editItem(index, item) {
        const payload = {
          name: item.name,
          age: item.age,
          status: item.status
        }

        this.EDIT_ITEM({ key: index, value: payload })
      },

      toggleEdit(item) {
        item.toggleEdit = true
      },

      cancelEdit(item) {
        item.toggleEdit = false
      },

      removeItem(item, index) {
        if (item.toggleCheck) {
          this.REMOVE_ITEM(index)
        }
      },

      removeAll() {
        const completeCheck = _.map(this.items, item => item.toggleCheck)

        if (completeCheck.every(item => item === true)) {
          this.REMOVE_ALL()
        } 
      },

      checkAll() {
        _.each(this.items, item => item.toggleCheck = true)
      }
    }
  }
</script>