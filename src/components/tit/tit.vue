<!--该模块为两边直线中间文字-->
<!--变量：txt（为中间文字）-->
<template>
  <div :style="vStyle" class="m-tit">
    <div class="m-tit__line"></div>
    <slot>
      <div class="m-tit__text">{{txt}}</div>
    </slot>
    <div class="m-tit__line"></div>
  </div>
</template>

<script type="text/javascript">
  export default{
    data() {
      return {
        vStyle: {
          padding: '10px'
        }
      }
    },
    props: ['txt', 'padding'],
    created() {
      this.vStyle.padding = this.padding.toString() + 'px 0'
    }
  }
</script>

<style lang="scss">
  .m-tit {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 12px;
    &__line {
      &:first-child{
        margin-right:20px;
      }
      &:last-child{
        margin-left:20px;
      }
      flex: 0 0 40px;
      position: relative;
      height: 1px;
      background-color: #999;
    }
    &__text {
      font-size: 12px;
    }
  }
</style>
