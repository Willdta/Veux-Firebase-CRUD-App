<template>
  <div id="mainview">
    <Logout />
    <AppTitle :title="title" />
    <InputFields />
    <ListItems :items="items" />
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import AppTitle from './AppTitle'
  import InputFields from './InputFields'
  import ListItems from './ListItems'
  import Logout from './Logout'
  import { auth } from '../firebase'

  export default {
    name: 'mainview',

    components: {
      AppTitle,
      InputFields,
      ListItems,
      Logout
    },

    mounted() {
      this.RENDER_ITEMS(auth.currentUser.uid)
      console.log(auth.currentUser.uid)
      
    },

    computed: {
      ...mapState([
        'title',
        'items'
      ])
    },

    methods: {
      ...mapMutations([
        'RENDER_ITEMS'
      ])
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