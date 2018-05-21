<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <input type="text" placeholder="name" v-model="name">
    <input type="text" placeholder="age" v-model="age">
    <input type="text" placeholder="status" v-model="status">
    <input type="submit" @click="addItem" />
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <input type="text" v-model="item.name" />
        <input type="text" v-model="item.age" /> 
        <input type="text" v-model="item.status" />
        <button @click="removeItem(index)">Remove</button>
        <button @click="editItem(index, item)">Edit</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import database from '../firebase'

export default {
  name: 'HelloWorld',

  created() {
    this.RENDER_ITEMS(this.items)
  },

  data() {
    return {
      name: '',
      age: '',
      status: ''
    }
  },

  computed: {
    ...mapState([
      'title',
      'items'
    ])
  },

  methods: {
    ...mapMutations([
      'RENDER_ITEMS',
      'ADD_ITEM',
      'REMOVE_ITEM',
      'EDIT_ITEM'
    ]),

    addItem() {
      const item = {
        name: this.name,
        age: this.age,
        status: this.status
      }

      this.ADD_ITEM(item)

      this.name = ''
      this.age = ''
      this.status = ''
    },

    removeItem(index) {
      this.REMOVE_ITEM(index)
    },

    editItem(index, item) {
      const payload = {
        name: item.name,
        age: item.age,
        status: item.status
      }
      
      this.EDIT_ITEM({ key: index, value: payload })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>