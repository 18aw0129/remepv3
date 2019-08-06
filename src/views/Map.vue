<template>
  <div class="map">
    <header class="map_header">
      <router-link class="map_header_toMemo" to="/"><span>＜</span></router-link>
      <h2>MAP</h2>
      <div>
        <span></span>
      </div>
    </header>
    <p>map</p>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
}
</script>

<style lang="scss">
.map{
  &_header{
    position: relative;
    width: 100%;
    height: 5.6rem;
    background: var(--main-color);
    top: 0;
    text-align: center;
    &_toMemo{
      position: fixed;
      top: 0; left: 0;
      height: 5.6rem;
      width: 5.6rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        font-size: 3.2rem;
        color: #fff;
      }
    }
    h2{
      position: fixed;
      top: 0;
      left: 5.6rem;
      line-height: 5.6rem;
      color: #fff;
      margin: 0;
    }
  }
}
</style>

