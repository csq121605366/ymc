<template>
  <section class="c-nubrace-box__wrapper">
    <el-card class="c-nubrace-box">
      <div class="c-register-suc">
        <i class="iconfont icon-chenggong tc-main"></i>
        <h3 class="tit">恭喜您&nbsp;,&nbsp注册成功！</h3>
        <div>
          <router-link class="c-register-suc__link c-register-suc__link--btn" to="/nubrace/general">立即登陆</router-link>
          <router-link class="c-register-suc__link" to="/home">返回首页</router-link>
        </div>
      </div>
    </el-card>
  </section>
</template>

<script type="text/javascript">

</script>

<style lang="scss">

  .c-register-suc {
    text-align: center;
    .iconfont {
      display: block;
      padding: 60px 0 0 0;
      font-size: 64px;
      border-radius: 50%;
    }
    .tit{
      line-height:75px;
    }
    &__link{
      display: inline-block;
      color: #666;
      margin: 0 10px;
      font-size:12px;
      &--btn{
        border-radius: 16px;
        height:32px;
        border:1px solid #259cef;
        padding:0 20px;
        line-height:32px;
        color: #259cef;
      }
    }
  }
</style>
