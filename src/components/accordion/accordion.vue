<template>
  <div class="c-accordion">
    <ul class="c-accordion__ul">
      <li class="c-accordion__li" style="background-color: #0f7dcc">11</li>
      <li class="c-accordion__li" style="background-color: #68cc54">22</li>
      <li class="c-accordion__li" style="background-color: #cc3448">33</li>
      <li class="c-accordion__li" style="background-color: #ccc022">44</li>
      <li class="c-accordion__li" style="background-color: #cc22be">55</li>
      <li class="c-accordion__li" style="background-color: #1cc9cc">66</li>
    </ul>
    <div class="c-accordion__prev"></div>
    <div class="c-accordion__next"></div>
  </div>
</template>

<script type="text/javascript">
  export default{}
</script>

<style lang="scss">
  .c-accordion {
    position: relative;
    height: 360px;
    &__ul {
      overflow: hidden;
      position: absolute;
      width: 100%;
      height:100%;
    }
    &__li {
      float: left;
      width:10%;
      height:100%;
      transition: all 0.5s;
    }
    &__prev, &__next {
      position: absolute;
    }
    &__prev {
      left: 0;
      top: 0;
      height: 100%;
    }
  }
  .c-accordion__li:hover {
    width:400px;
  }


</style>
