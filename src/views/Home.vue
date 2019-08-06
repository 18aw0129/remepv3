<template>
  <div class="home">
    <div class="header">
      <header>
      </header>
    </div>
    <p>ログインなう</p>
    <p>{{ this.$store.state.user.email }}</p>
    <p>{{ this.$store.state.user.dispalyName }}</p>
    <div>
      <button @click="signout">サインアウト</button>
    </div>
    <memo />
  </div>
</template>

<script>
import firebase from "firebase";
import memo from "@/components/Memo.vue";

export default {
  name: 'home',
  components: {
    memo
  },
  data(){
    return{
      user: []
    }
  },
  methods:{
    signout(){
      firebase.auth().onAuthStateChanged( (user) => {
        firebase.auth().signOut().then(()=>{
          this.$store.state.user = []
          this.$router.push('/login')
          console.log("ログアウトしました");
        })
        .catch( (error)=>{
          console.log(`ログアウト時にエラーが発生しました (${error})`);
        });
      });
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(user => {
      if(!user){
        this.$router.push('/login')
      } else{
        this.$store.state.user = firebase.auth().currentUser
      }
    })
  }
}
</script>

<style lang="scss">
.header{
  position: relative;
  width: 100%;
  height: 5.6rem;
  background: var(--main-color);
  top: 0;
  text-align: center;
}
</style>

