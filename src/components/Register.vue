<template>
  <div id="register">
    <h1>Register Now</h1>
    <form @submit="registerUser">
      <input type="text" v-model="email">
      <input type="text" v-model="password">
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
  import { auth } from '../firebase'
  
  export default {
    name: 'register',

    data() {
      return {
        email: '',
        password: ''
      }
    },

    methods: {
      registerUser(e) {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            this.$router.push('/home')            
          })
      }
    }
  }
</script>