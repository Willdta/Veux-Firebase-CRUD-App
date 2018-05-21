<template>
  <div id="mainview">
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

  export default {
    name: 'mainview',

    components: {
      AppTitle,
      InputFields,
      ListItems
    },

    mounted() {
      this.RENDER_ITEMS(this.items)
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