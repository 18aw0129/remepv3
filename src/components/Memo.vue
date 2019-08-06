<template>
  <div class="memo">
    <div class="memo_header">
      <h2>MEMO</h2>
    </div>
    <div class="memo_btn">
      <router-link class="memo_btn_toMap" to="/map"><span>m</span></router-link>
      <div class="memo_btn_addMemo"><span>A</span></div>
    </div>
    

  </div>
</template>

<style lang="scss">
.memo{
  &_header{
      position: fixed;
      top: 0;
      width: 100%;
      text-align: center;
      h2{
        line-height: 5.6rem;
        color: #fff;
        margin: 0;
      }
  }
  &_btn{
    &_toMap,&_addMemo{
      position: fixed;
      bottom: 3rem;
      display: inline-block;
      height: 5.2rem;
      width: 5.2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        color: aliceblue;
      }
    }
    &_toMap{
      left: 2rem;
      background: var(--main-color);
    }
    &_addMemo{
      right: 2rem;
      background: var(--sub-color);
    }
  }
}
.app_btn{

}
</style>
