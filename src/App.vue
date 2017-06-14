<template>
  <div class="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
  import vHeader from './components/header/header'

  export default{
    components: {
      'v-header': vHeader
    }
  }
</script>

<style lang="scss">

</style>
