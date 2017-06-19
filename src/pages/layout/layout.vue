<template>
  <div class="app">
    <div class="l-header">
      <v-header></v-header>
    </div>
    <div class="l-content">
      <router-view></router-view>
    </div>
    <div class="l-footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
  import vHeader from '../../components/header/header.vue'
  import vFooter from '../../components/footer/footer.vue'
  export default{
    components: {
      vHeader,
      vFooter
    }
  }
</script>

<style>
  @import "../../assets/scss/mixin.scss";
  .app{
    display: flex;
    flex-flow:column;
    height:100%;
  }
  .l-header{
    flex:0 0 auto;
  }
  .l-content{
    flex:1 0 auto;
  }
  .l-footer {
    flex:0 0 auto;
  }
</style>
