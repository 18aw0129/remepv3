<template>
  <div class="signin">
    <div class="signin_form">
      <form>
        <input type="text" placeholder="E-mail" v-model="usermail">
        <input type="password" placeholder="Password" v-model="password">
        <button type="button" @click="authmail">ログイン</button>
      </form>
      <p class="signin_form_text">パスワードを忘れた方は<span  class="toLink">こちら</span></p>
    </div>
    <div class="signin_line">
      <p><span>or</span></p>
    </div>
    <div class="signin_gbtn">
      <button type="button" @click="authgoogle">googleでログイン</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "signin",
  data(){
    return{
      usermail: '',
      password: ''
    }
  },
  methods:{
    authmail(){
      firebase.auth().signInWithEmailAndPassword(this.usermail, this.password)
      .then(user =>{
          alert("ok")
          this.$router.push('/')
        },
        err => {
          alert(err.message)
        }
      )
    },
    authgoogle(){
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(result => {
        this.$router.push('/')
      })
    }
  },
}
</script>

<style lang="scss">
.signin{
  text-align: center;
  &_form{
    &_text{
      font-size: 1.4rem;
      text-align: center;
    }
  }
  &_line{
    margin-top: 2rem;
    p{
      width: 85%;
      margin: 0 auto;
      span{
        display: flex;
        align-items: center;
        &::before,&::after{
          content: "";
          display: inline-block;
          background: #000;
          width: 100%;
          height: 2px;
        }
        &::before{
          margin-right: 1.7rem;
        }
        &::after{
          margin-left: 1.7rem;
        }
      }
    }
  }
  &_gbtn{
    button{
      width: 85%;
      height: 4rem;
      background: none;
      border: 1px solid #000;
      margin-top: 2rem;
    }
  }
}
</style>
