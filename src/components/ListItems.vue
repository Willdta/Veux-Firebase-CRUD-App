<template>
  <div id="listitems">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <input type="text" v-model="item.name">
        <input type="text" v-model="item.age">
        <input type="text" v-model="item.status">
        <button @click="editItem(index, item)">Edit</button>
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>  
  </div>  
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  
  export default {
    name: 'listitems',

    props: ['items'],

    methods: {
      ...mapMutations([
        'EDIT_ITEM',
        'REMOVE_ITEM'
      ]),

      editItem(index, item) {
        const payload = {
          name: item.name,
          age: item.age,
          status: item.status
        }

        this.EDIT_ITEM({ key: index, value: payload })
      },

      removeItem(index) {
        this.REMOVE_ITEM(index)
      }
    }
  }
</script>