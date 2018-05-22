<template>
  <div id="inputfields">
    <input type="text" placeholder="name" v-model="name">
    <input type="text" placeholder="age" v-model="age">
    <input type="text" placeholder="status" v-model="status">
    <input type="submit" @click="addItem" />
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'inputfields',
    
    data() {
      return {
        name: '',
        age: '',
        status: '',
        toggleEdit: false,
        toggleCheck: false
      }
    },

    methods: {
      ...mapMutations([
        'ADD_ITEM'
      ]),

      addItem() {
        let payload = {
          name: this.name,
          age: this.age,
          status: this.status,
          toggleEdit: this.toggleEdit,
          toggleCheck: this.toggleCheck
        }

        this.ADD_ITEM(payload)

        this.name = ''
        this.age = ''
        this.status = ''
      }
    }
  }
</script>