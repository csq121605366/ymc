<template>
  <div class="c-indexTitle">
    <h2 class="text" :class="cnStyle">{{cnText}}<b class="dot"></b><span class="text-en">{{enText}}</span></h2>
    <p class="text-line">nubrace</p>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['cnText', 'enText', 'white'],
    computed: {
      cnStyle() {
        if (this.white === true) {
          return 'white'
        }
      }
    }
  }
</script>

<style lang="scss">
  .c-indexTitle {
    width: 100%;
    padding-top: 90px;
    padding-bottom: 60px;
    text-align: center;
    .dot {
      height: 4px;
      width: 4px;
      margin: 0 8px;
      transform: rotate(45deg);
      display: inline-block;
      vertical-align: middle;
      background-color: #259cef;
    }
    .text {
      font-size: 30px;
      color: #333;
      padding-bottom: 30px;
      &.white {
        color: #fff;
      }
    }
    .text-en {
      color: #259cef;
    }
    .text-line {
      color: #f0f0f0;
      font-size: 12px;
      position: relative;
      display: inline-block;
      width: 108px;
      letter-spacing: 10px;
      &:before {
        content: '';
        position: absolute;
        right: 140px;
        width: 100px;
        top: 8px;
        height: 1px;
        background-color: #f0f0f0;
      }
      &:after {
        content: '';
        position: absolute;
        left: 140px;
        width: 100px;
        top: 8px;
        height: 1px;
        background-color: #f0f0f0;
      }
    }
  }
</style>
