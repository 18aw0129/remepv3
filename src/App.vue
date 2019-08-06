<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'
import './assets/css/style.scss'
export default {
  data(){
    return{
      contents: '',
      user:[]
    }
  }
}
</script>

<style lang="scss">


</style>
