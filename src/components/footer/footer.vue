<template>
  <div class="c-footer">
    <div class="c-footer__cnt">
      <div class="l-wrap">
        <ul class="c-footer__info">
          <li><i class="iconfont icon-didian"></i><span>深圳市年山区海德三道卓越后海中心1208室</span></li>
          <li><i class="iconfont icon-dianhua1"></i><span>0755-8672515</span></li>
          <li><i class="iconfont icon-youjian"></i><span>sdfasdgas@qq.com</span></li>
        </ul>
        <ul class="c-footer__web">
          <li class="li"><a class="a" href="javascript:void(0);"><i class="iconfont icon-weixin"></i></a></li>
          <li class="li"><a class="a" href="javascript:void(0);"><i class="iconfont icon-qq"></i></a></li>
          <li class="li"><a class="a" href="javascript:void(0);"><i class="iconfont icon-weibo"></i></a></li>
        </ul>
      </div>
    </div>
    <p class="c-footer__copyright">Copyright © 2017 Adobe Systems Incorporated. All rights reserve</p>
  </div>
</template>

<script type="text/javascript">

</script>

<style lang="scss">
  $bc: #259cef;
  .c-footer {
    color: #d7d7d7;
    &__cnt {
      background-color: #3c3d3e;
      .l-wrap {
        display: flex;
        height: 120px;
        flex-flow: row nowrap;
      }
    }
    &__info {
      flex: 0 1 50%;
      display: flex;
      flex-flow: row nowrap;
      padding-top: 45px;
      font-size: 0;
      li {
        flex: 0 1 33%;
        display: flex;
        font-size: 12px;
        line-height: 18px;
        flex-flow: row nowrap;
        align-items: flex-start;
        padding-right: 40px;
        .iconfont {
          padding-right: 10px;
        }
      }
    }
    &__web {
      display: flex;
      flex: 0 1 50%;
      flex-flow: row nowrap;
      justify-content: flex-end;
      align-items: center;
      .li {
        flex: 0 0 46px;
        height: 46px;
        width: 46px;
        margin-left: 30px;
      }
      .a {
        display: inline-flex;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        color: #e0e0e0;
        height: 46px;
        width: 46px;
        background-color: #666;
      }
      .a:hover {
        background-color: #fefefe;
        color: $bc;
      }
    }
    &__copyright {
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      font-weight: normal;
      text-align: center;
      background-color: #373737;
    }
  }
</style>
