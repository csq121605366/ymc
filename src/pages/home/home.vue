<template>
  <section class="c-home">
    <div class="c-banner">
      <img src="./home-banner.png" class="c-banner__img response-img" alt="">
      <div class="c-banner__news__wrap">
        <div class="c-banner__news l-wrap">
          <i class="iconfont icon-laba">新闻&nbsp;:&nbsp;</i>
          <transition-group class="c-banner__news__list" name="news" tag="ul">
            <li v-for="(item,$index) in 10" v-bind:key      ="item" class="li">牙齿行业的最新新闻咨询有这些牙齿行业的最新新闻咨询有这些牙齿行业的最新新闻咨询有这些牙齿行业的最新新闻咨询有这些</li>
          </transition-group>
          <router-link class="tc-main" to="/">查看全部新闻</router-link>
        </div>
      </div>
    </div>
    <!--介绍-->
    <div class="c-introduce">
      <div class="l-wrap">
        <el-row :gutter="20" type="flex">
          <el-col :span="6">
            <div class="c-introduce__cell">
              <img class="c-introduce__cell__img response-img" src="./introduce.png" alt="图片">
              <h3 class="c-introduce__cell__tit">结构板块</h3>
              <p class="c-introduce__cell__txt">一个人的生命是应该这样度过，当他回首往事的时候，他不会应为一个人的生命是应该这样度过，当他回首往事的时候，他不会应为</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="c-introduce__cell">
              <img class="c-introduce__cell__img response-img" src="./introduce.png" alt="图片">
              <h3 class="c-introduce__cell__tit">结构板块</h3>
              <p class="c-introduce__cell__txt">一个人的生命是应该这样度过，当他回首往事的时候，他不会应为一个人的生命是应该这样度过，当他回首往事的时候，他不会应为</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="c-introduce__cell">
              <img class="c-introduce__cell__img response-img" src="./introduce.png" alt="图片">
              <h3 class="c-introduce__cell__tit">结构板块</h3>
              <p class="c-introduce__cell__txt">一个人的生命是应该这样度过，当他回首往事的时候，他不会应为一个人的生命是应该这样度过，当他回首往事的时候，他不会应为</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="c-introduce__cell">
              <img class="c-introduce__cell__img response-img" src="./introduce.png" alt="图片">
              <h3 class="c-introduce__cell__tit">结构板块</h3>
              <p class="c-introduce__cell__txt">一个人的生命是应该这样度过，当他回首往事的时候，他不会应为一个人的生命是应该这样度过，当他回首往事的时候，他不会应为</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--客户案例-->
    <div class="c-cases">
      <div class="c-cases__hd">
        <div class="l-wrap">
          <index-title cnText="客户案例" :white="true" enText="CASES"></index-title>
          <el-row type="flex" tag="ul" class="c-cases__list">
            <el-col v-for="(item,$index) in 3" tag="li" :key="$index" class="c-cases__item"  :class="($index==1)?'sp':''">
              <div class="c-cases__item__img">
                <img src="./cases.png" alt="">
              </div>
              <div class="c-cases__item__cnt">
                <span class="c-cases__item__num">0{{$index + 1}}</span>
                <h3 class="c-cases__item__tit">小明牙齿矫正案例</h3>
                <p class="c-cases__item__txt">
                  <span class="c-cases__item__time">治疗周期：12个月</span>
                  <span class="c-cases__item__money">价格：<i class="iconfont icon-renminbi"></i>60000.00</span>
                </p>
                <div class="c-cases__item__gratitude">
                  <h4 class="c-cases__item__gratitude__tit">客户感言</h4>
                  <p class="c-cases__item__gratitude__txt">
                    客户感言 人最宝贵的东西是生命，生命属于人只 有一次，一个人的生命是应该这样人的生命是应该这人的生的生命是应该这样人的生命是应该这人的生命是应应该这样人的生命是应该这人的生命是应该这应该这样人的生命是应该这人的生命是应该这应该这样人的生命是应该这人的生命是应该这应该这样人的生命是应该这人的生命是应该这应该这样人的生命是应该这人的生命是应该这该这度过 的：当他回首往事的时候他不会因虚度 年华而悔
                  </p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="c-cases__ft"></div>
    </div>
    <!--专家团队-->
    <div class="c-experts">
      <div class="l-wrap">
        <index-title cnText="专家团队" enText="EXPERTS"></index-title>
        <el-carousel class="c-experts__carousel" :interval="4000" :autoplay="false" indicator-position="none" type="card" height="360px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </section>

</template>

<script type="text/javascript">
  import indexTitle from '../../components/indexTitle/indexTitle.vue'
  export default {
    data() {
      const newsInterval = this.$store.state.app.NEWSINTERVAL
      console.log(newsInterval)
      return {
        newsList: []
      }
    },
    components: {
      indexTitle
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/mixin";

  .c-banner {
    position: relative;
    &__news__wrap {
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .4);
      color: #fff;
      height: 40px;
      line-height: 40px;
      width: 100%;

    }
    &__news {
      font-size: 12px;
      display: flex;
      height: 40px;
      flex-flow: row nowrap;
      &__list {
        display: block;
        overflow: hidden;
        height: 100%;
        width: 240px;
        margin-right: 40px;
        .li {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .iconfont {
        font-size: 12px;
        vertical-align: middle;
        &:before {
          color: #259cef;
          padding-right: 10px;
        }
      }
    }
  }

  .c-introduce {
    padding: 50px 0;
    &__cell {
      cursor: pointer;
      padding: 20px 30px;
      width: 280px;
      height: 264px;
      border: 1px solid #f3f3f3;
      overflow: hidden;
      text-align: center;
      &:hover {
        border: 1px solid #259cef;
        box-shadow: 0 0 20px 2px rgba(37, 156, 239, .3);
      }
      &__img {
        padding: 30px 0 10px 0;
        display: inline-block;
      }
      &__tit {
        padding: 20px 0;
      }
      &__txt {
        line-height: 16px;
        color: #999;
        font-size: 12px;
        @include textOverflow(3);
      }
    }

  }

  .c-cases {
    &__hd {
      background-color: #292e31;
      height: 600px;
    }
    &__ft {
      height: 210px;
    }
    &__list {
      background-color: #259cef;
      color: #fff;
    }
    &__item {
      position: relative;
      height: 540px;
      &__img, &__cnt {
        left: 0;
        position: absolute;
        height: 50%;
      }
      &__img {
        top: 0;
      }
      &__cnt {
        padding: 26px 80px;
        bottom: 0;
        overflow: hidden;
        text-align: center;
      }
      .sp>&__img{
        top:auto;
        bottom:0;
      }
      .sp>&__cnt{
        bottom:auto;
        top:0;
      }

      &__num {
        display: inline-block;
        background-color: #44befe;
        height: 32px;
        line-height: 32px;
        border-radius: 16px;
        padding: 0 26px;
        margin-bottom: 24px;
      }
      &__tit {
        padding-bottom: 10px;
      }
      &__txt {
        font-size: 12px;
        padding-bottom:14px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
      }
      &__money {
        .iconfont{
          font-size: 12px;
          color: #ffc208;
        }
      }
      &__gratitude{
        &__tit{
          font-size: 16px;
          line-height:20px;
        }
        &__txt{
          font-size: 14px;
          @include textOverflow(18,4,#259cef);
        }
      }
    }
  }

  .c-experts{
    &__carousel{
        .el-carousel__item{
          background-color: red;
          &.is-active{

          }
        }
    }
  }
</style>
