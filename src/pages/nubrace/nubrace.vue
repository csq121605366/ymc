<template>
  <div class="c-login">
    <div class="c-login__bg"></div>
    <div class="c-login__logo">
      <router-link to="/home"><img src="./login__logo.png" width="488" height="80"></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
  import vTit from '../../components/tit/tit.vue'
  export default{}
</script>

<style lang="scss">
  @import "../../assets/scss/mixin";
  .c-login {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: transparent;
    padding: 100px 0;
    &__bg {
      position: absolute;
      left: 0;
      top: 0;
      min-height: 100%;
      min-width: 100%;
      background-size: cover;
      background-origin: border-box;
      background-repeat: no-repeat;
      background-image: url("./login__bg.png");
      z-index: -1;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
        opacity: 0.7;
        /*background-image: linear-gradient(to right bottom, rgba(37, 156, 239, 0.7) 0%, rgba(37, 156, 239, 0.5) 50%,rgba(60, 225, 199, 0.7) 70%, rgba(34, 225, 199, 0.6) 100%);*/
        background-image: -webkit-linear-gradient(135deg, rgb(115, 254, 220) 0%, rgb(68, 190, 254) 48%, rgb(37, 156, 239) 100%);
      }
    }
    &__logo {
      max-width: 500px;
      height: auto;
      margin: 0 auto 50px;
    }
  }

  .c-nubrace-box {
    width: 400px;
    min-height: 400px;
    margin: 0 auto;
    .c-nubrace-tit {
      text-align: center;
      padding-bottom: 26px;
    }
    .el-card__body {
      padding: 50px;
    }
    .el-tabs__header {
      border-bottom: 0;
      margin-bottom: 0;
    }
    .el-tabs__nav {
      width: 100%;
    }
    .el-tabs__item {
      width: 50%;
      text-align: center;
    }
    .el-tabs__active-bar {
      width: 50% !important;
    }
  }

  /*materile风格input*/
  .mater-from {
    @include materInput
  }

  /*忘记密码*/
  .c-nubrace__forget {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    color: #fc6c1e;
    font-size: 12px;
  }

  .c-nubrace__btn {
    width: 100%;
    border-radius: 36px;
  }

</style>
