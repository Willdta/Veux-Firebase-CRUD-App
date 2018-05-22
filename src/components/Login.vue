<template>
  <div id="login">
    <h1>Login Now</h1>
    <form @submit="loginUser">
      <input type="text" v-model="email">
      <input type="text" v-model="password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
  import { auth } from '../firebase'
  
  export default {
    name: 'login',

    data() {
      return {
        email: '',
        password: ''
      }
    },

    methods: {
      loginUser(e) {
        e.preventDefault()

        auth.signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            this.$router.push('/home')            
          })
      }
    }
  }
</script>