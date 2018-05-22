<template>
  <div id="logout">
    <button @click="logoutUser">Logout</button>
  </div>
</template>

<script>
  import { auth } from '../firebase'

  export default {
    name: 'logout',

    methods: {
      logoutUser() {
        auth.signOut()
          .then(() => this.$router.push('/login'))
      }
    }
  }
</script>