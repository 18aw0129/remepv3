<template>
  <div class="login">
    <h1 class="login_title">Re:mep</h1>
    <div v-if="signin">
      <signin />
      <div>
        <p class="sub_text">どちらのアカウントもお持ちでない方は<span class="toLink" @click="toChange">こちら</span></p>
      </div>
    </div>
    <div v-else>
      <signup />
      <div>
        <p class="sub_text">アカウントをお持ちの方は<span class="toLink" @click="toChange">こちら</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import signin from "@/components/Signin.vue";
import signup from "@/components/Signup.vue";


export default {
  name: 'login',
  components: {
    signin,
    signup
  },
  data(){
    return{
      signin: true
    }
  },
  methods:{
    toChange(){
      this.signin = !this.signin
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(user => {
      if(!user){
        this.$store.state.user = []
      } else{
        this.$router.push('/')
      }
    })
  }
}
</script>

<style lang="scss">
.login{
  &_title{
    font-size: 6.4rem;
    text-align: center;
  }
}
.toLink{
  font-weight: bold;
  color: blue;
}
.sub_text{
  font-size: 1.4rem;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 3.2rem;
}
form input{
  width: calc(85% - 34px);
  height: 4rem;
  display: block;
  margin: 0 auto;
  border: 1px solid #000;
  margin-top: 10px;
  padding: 0 17px;
}
form button{
  width: 85%;
  height: 4rem;
  background: none;
  border: 1px solid #000;
  font-weight: bold;
  margin-top: 3rem;
}
</style>