<template>
  <div class="m-header container">
    <div class="m-header__top">
      <div class="m-header__top__lf">
        <i></i>
      </div>
    </div>
  </div>
  <div class="layout-ceiling">
    <div class="layout-ceiling-main">
      <a href="#">注册登录</a> |
        <a href="#">帮助中心</a> |
        <a href="#">安全中心</a> |
        <a href="#">服务大厅</a>
    </div>
  </div>
  <div class="layout-header">
    <div class="layout-logo"></div>
  </div>
  <div style="height: 200px"></div>
  <div class="layout-copy">
    2011-2016 &copy; TalkingData
  </div>
  <header class="m-header">
    <div class="m-header__top">
      <div class="m-header__phone"><i class="iconfont icon-dianhua"></i></div>
      <v-input v-model="headerSearch" icon="ios-clock-outline" placeholder="请输入..." style="width: 200px"></v-input>
    </div>
    <div class="m-header__cnt">

    </div>
  </header>
</template>

<script type="text/javascript">
  import Input from 'iview/src/components/input'
  import VInput from '../../../node_modules/.2.0.0-rc.16@iview/src/components/input/input'

  export default{
    data () {
      return {
        headerSearch: ''
      }
    },
    components: {
      VInput, 'v-input': Input
    }
  }
</script>

<style lang="scss">

</style>
