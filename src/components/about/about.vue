<template>
  <section class="c-about__wrap">
    <div class="c-about">
      <div class="c-about__banner tf-0">
        <img v-if="initdata.banner" :src="initdata.banner" width="100%" height="330">
      </div>
      <!--公司简介-->
      <section v-if="initdata.company" class="c-about__company l-about">
        <div class="l-wrap">
          <h2 class="l-about__tit">{{initdata.company.title}}</h2>
          <p class="l-about__txt">{{initdata.company.subTitle}}</p>
          <p class="l-about__row">{{initdata.company.context}}</p>
        </div>
      </section>
      <section v-if="initdata.product" class="c-about__product l-about">
        <div class="l-wrap">
          <h2 class="l-about__tit">{{initdata.product.title}}</h2>
          <p class="l-about__txt">{{initdata.product.subTitle}}</p>
          <p class="l-about__row">{{initdata.product.context}}</p>
        </div>
      </section>
      <!--就诊疗程-->
      <section v-if="initdata.process" class="c-about__process l-about">
        <div class="l-wrap">
          <h2 class="l-about__tit">{{initdata.process.title}}</h2>
          <p class="l-about__txt">{{initdata.process.subTitle}}</p>
          <div class="c-about__line">
            <el-row v-for="(item, $index) in initdata.process.context" :key="$index" type="flex" justify="space-between" align="middle">
              <el-col :span="12">
                <img :src="item.images">
              </el-col>
              <el-col :span="12">
                <h3 class="c-about__line__tit">{{$index}}、{{item.title}}</h3>
                <p class="c-about__line__txt">{{item.text}}</p>
              </el-col>
            </el-row>
          </div>
        </div>
      </section>

      <!--品质保障-->
      <section v-if="initdata.product" class="c-about__product l-about">
        <div class="l-wrap">
          <h2 class="l-about__tit">品质保障</h2>
          <p class="l-about__txt">Brand protection</p>
          <p class="l-about__row">
            NuBrace为双层设计，外硬层使牙齿能有更大的空间进行移位；柔软的内层设计让佩戴者更加的舒适，卫生，对牙龈无刺激。内部软衬对人最宝贵的东西是生命，生命属于人只有一次，一个人的生命是应该人最宝贵的东西是生命，生命属于人只有一次，一个人的生命是应该这样度过的：  当他回首往事的时候，他不会因虚度年华而悔恨，也不会人最宝贵的东西是生命，生命属于人只有一次，一个人的生命是应该这样度过的：  当他回首往事的时候，他不会因虚度年华而悔恨，也不会人最宝贵的东西是生命，生命属于人只有一次，一个人的生命是应该这样度过的：  当他回首往事的时候，他不会因虚度年华而悔恨，也不会这样度过的：  当他回首往事的时候，他不会因虚度年华而悔恨，也不会
            人最宝贵的东西是生命，生命属于人只有一次，一个人的生命是应该这样度过的：  当他回首往事的时候，他不会因虚度年华而悔恨，也不会
          </p>
        </div>
      </section>
    </div>
  </section>
</template>

<script type="text/javascript">
  //  获取数据
  import api from '../../service/getData'
  import { mapState } from 'vuex'
  export default{
    data() {
      return {
        initdata: {}
      }
    },
    computed: {
      ...mapState([
        'STATUS'
      ])
    },
    created() {
      api.apiAboutUs().then(({data}) => {
        let res = data
        if (res.status === this.STATUS) {
          console.log(res.data.content)
          this.initdata = res.data.content
        }
      })
    }
  }
</script>

<style lang="scss">
  $bc: #259cef;
  .l-about {
    padding-top: 80px;
    min-height: 600px;
    &:nth-child(odd) {
      background-image: -moz-linear-gradient(135deg, rgb(68, 190, 254) 0%, rgb(37, 156, 239) 100%);
      background-image: -webkit-linear-gradient(135deg, rgb(68, 190, 254) 0%, rgb(37, 156, 239) 100%);
      background-image: -ms-linear-gradient(135deg, rgb(68, 190, 254) 0%, rgb(37, 156, 239) 100%);
      width: 100%;
      height: 100%;
      .l-about__tit, .l-about__txt, .l-about__row {
        color: #fff;
      }
    }
    &__tit {
      font-size: 24px;
      padding: 20px 0;
      text-align: center;
      font-weight: normal;
    }
    &__txt {
      font-size: 14px;
      text-align: center;
      padding-bottom: 76px;
    }
    &__row {
      line-height: 28px;
      font-size: 14px;
      text-align: center;
      color: #666;
    }

  }

  .c-about {
    &__line {
      padding: 0 60px;
      .el-row {
        min-height: 300px;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 12px;
          height: 12px;
          display: block;
          z-index: 200;
          border-radius: 50%;
          background-color: #259cef;
          box-shadow: 0 0 12px 3px #259cef;
        }
        &:after {
          content: '';
          position: absolute;
          display: block;
          right: 0;
          left: 0;
          margin: 0 auto;
          top: 0;
          z-index: 100;
          height: 100%;
          width: 2px;
          background-color: $bc;
        }
        &:first-child:after {
          content: '';
          position: absolute;
          display: block;
          right: 0;
          left: 0;
          margin: 0 auto;
          top: 0;
          z-index: 100;
          height: 100%;
          width: 2px;
          background-image: linear-gradient(to bottom,
            rgba(249, 252, 255, 1) 0%,
            rgba(172, 217, 249, 1) 20%,
            rgba(37, 156, 239, 1) 50%);
        }
        &:last-child:after {
          content: '';
          position: absolute;
          display: block;
          right: 0;
          left: 0;
          margin: 0 auto;
          top: 0;
          z-index: 100;
          height: 100%;
          width: 2px;
          background-image: linear-gradient(to bottom,
            rgba(37, 156, 239, 1) 0%,
            rgba(172, 217, 249, 1) 50%,
            rgba(249, 252, 255, 1) 100%);
        }
        img {
          max-width: 450px;
          height: auto;
          display: inline-block;
        }
        .el-col:first-child {
          padding-right: 90px;
        }
        .el-col:last-child {
          padding-left: 90px;
        }
      }
      &__tit {
        font-size: 16px;
        padding-top: 66px;
        line-height: 60px;
      }
      &__txt {
        font-size: 12px;
        color: #666;
        line-height: 28px;
      }
    }
  }


</style>
