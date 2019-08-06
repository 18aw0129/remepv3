<template>
  <div class="signup">
    <div class="signup_form">
      <form action="">
        <input type="text" placeholder="Name" v-model="username">
        <input type="text" placeholder="E-mail" v-model="usermail">
        <input type="password" placeholder="Password" v-model="password">
        <button type="button" @click="signup">続行</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data(){
    return{
      usermail: '',
      password: '',
    }
  },
  methods:{
    signup(){
      firebase.auth().createUserWithEmailAndPassword(this.usermail, this.password)
      .then(user => {
        alert("create account ", user.email)
        firebase.auth().signInWithEmailAndPassword(this.usermail, this.password)
        .then(user => {
          alert("ok")
          this.$router.push('/')
        }),
        err => {
          alert(err.message)
        }
      })
      .catch(error => {
        alert(error.message)
      })
    }
  }
}
</script>


<style lang="scss">
.signup{
  text-align: center;
}
</style>
