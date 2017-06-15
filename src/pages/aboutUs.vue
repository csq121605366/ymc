<template>
  <section v-if="initdata" class="c-about__wrap">
    <div class="c-about">
      <div class="c-about__banner tf-0">
        <img v-if="initdata.banner" :src="initdata.banner" width="100%" height="330">
      </div>
      <!--公司简介-->
      <section v-if="initdata.company" class="c-about__company l-about">
        <div class="l-wrap">
          <h2 class="l-about__tit">{{initdata.company.title}}</h2>
          <p class="l-about__txt">{{initdata.company.subTitle}}</p>
          <p class="l-about__row">{{initdata.company.content}}</p>
        </div>
      </section>
      <section v-if="initdata.product" class="c-about__product l-about">
        <div class="l-wrap">
          <h2 class="l-about__tit">{{initdata.product.title}}</h2>
          <p class="l-about__txt">{{initdata.product.subTitle}}</p>
          <p class="l-about__row">{{initdata.product.content}}</p>
        </div>
      </section>
      <!--就诊疗程-->
      <section v-if="initdata.process" class="c-about__process l-about">
        <div class="l-wrap">
          <h2 class="l-about__tit">{{initdata.process.title}}</h2>
          <p class="l-about__txt">{{initdata.process.subTitle}}</p>
          <div class="c-about__line">
            <el-row v-for="(item , $index) in initdata.process.content" :key="$index" type="flex"
                    justify="space-between"
                    align="middle">
              <!--奇数行-->
              <el-col v-if="(($index+1)%2)" :span="12">
                <img :src="item.images">
              </el-col>
              <el-col v-else :span="12">
                <h3 class="c-about__line__tit">{{$index}}、{{item.title}}</h3>
                <p class="c-about__line__txt">{{item.text}}</p>
              </el-col>
              <!--奇数行-->
              <el-col v-if="!(($index+1)%2)" :span="12">
                <img :src="item.images">
              </el-col>
              <el-col v-else :span="12">
                <h3 class="c-about__line__tit">{{$index}}、{{item.title}}</h3>
                <p class="c-about__line__txt">{{item.text}}</p>
              </el-col>
            </el-row>
          </div>
        </div>
      </section>
      <!--品质保障-->
      <section v-if="initdata.brand" class="c-about__team l-about">
        <div class="l-wrap">
          <h2 class="l-about__tit">{{initdata.brand.title}}</h2>
          <p class="l-about__txt">{{initdata.brand.subTitle}}</p>
          <ul class="c-about__brand-list">
            <li v-for="(item ,$index) in initdata.brand.content">
              <img :src="item" height="220" width="285" alt="">
            </li>
          </ul>
        </div>
      </section>
      <!--专业团队-->
      <section v-if="initdata.team" class="c-about__team l-about">
        <div class="l-wrap">
          <h2 class="l-about__tit">{{initdata.team.title}}</h2>
          <p class="l-about__txt">{{initdata.team.subTitle}}</p>
          <div class="c-about__tab">
            <transition-group appear name="csq" enter-active-class="animated fadeInRight"
                              leave-active-class="animated fadeOutLeft">
              <div v-show="$index==tabShowIndex?true:false" v-for="(item, $index) in initdata.team.content"
                   :key="$index"
                   class="c-about__tab__cnt">
                <img class="c-about__tab__img" :src="item.bImage" height="300" width="300" alt="">
                <div class="c-about__tab__cnt__tit">
                  <h3 class="name"> {{$index}}{{item.name}}({{item.enName}})</h3>
                  <span class="txt" v-for="(itemTitle,$index) in item.title">{{itemTitle}}</span>
                </div>
                <div class="c-about__tab__cnt__txt">
                  <ul>
                    <li><b class="b">{{item.speciality.title}}</b><span class="span"><i
                      class="line"></i>{{item.speciality.text}}</span></li>
                    <li><b class="b">{{item.introduce.title}}</b><span class="span"><i
                      class="line"></i>{{item.introduce.text}}</span></li>
                  </ul>
                </div>
              </div>
            </transition-group>
            <ul class="c-about__tab__pane">
              <li v-for="(item, $index) in initdata.team.content" :key="$index">
                <a href="javascript:void(0);" @click="changeTabShow($index)">
                  <img :src="item.sImage" height="100" width="100" alt="">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!--关于我们-->
      <section v-if="initdata.about" class="c-about__about l-about">
        <div class="l-wrap">
          <h2 class="l-about__tit">{{initdata.about.title}}</h2>
          <p class="l-about__txt">{{initdata.about.subTitle}}</p>
          <div class="c-about__about__cnt">
            <div class="c-about__about__connect">
              <h3 class="h">{{initdata.about.content.name}}</h3>
              <ul class="ul">
                <li class="li">{{initdata.about.content.site.title}}&nbsp;:&nbsp;{{initdata.about.content.site.text}}</li>
                <li class="li">{{initdata.about.content.phone.title}}&nbsp;:&nbsp;{{initdata.about.content.phone.text}}</li>
                <li class="li">{{initdata.about.content.fax.title}}&nbsp;:&nbsp;{{initdata.about.content.fax.text}}</li>
                <li class="li">{{initdata.about.content.email.title}}&nbsp;:&nbsp;{{initdata.about.content.email.text}}</li>
              </ul>
            </div>
            <div class="c-about__about__subImage">
              <img :src="initdata.about.content.subImage">
            </div>
          </div>
        </div>
      </section>


    </div>
  </section>
</template>

<script type="text/javascript">
  //  获取数据
  import api from '../service/getData'
  import { mapState } from 'vuex'

  export default{
    data() {
      return {
        initdata: 0,
        tabShowIndex: 0
      }
    },
    computed: {
      ...mapState([
        'STATUS'
      ])
    },
    methods: {
      changeTabShow(index) {
        this.tabShowIndex = index
      }
    },
    created() {
      if (!this.initdata) {
        api.getAboutUs().then(({data}) => {
          let res = data
          if (res.status === this.STATUS) {
            this.initdata = res.content
            console.log(this.initdata)
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  $bc: #259cef;
  .l-about {
    padding-top: 80px;
    min-height: 600px;
    &:nth-child(odd):not(:last-child) {
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
    &__brand {
      &-list {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        li {
          margin-bottom: 50px;
        }
        padding-bottom: 75px;
      }
    }

    &__team {
      padding-bottom: 100px;
    }
    &__tab {
      position: relative;
      height: 500px;
      overflow: hidden;
      &__cnt {
        position: absolute;
        height: 364px;
        width: 100%;
        display: flex;
        flex-flow: column;
        &__tit {
          line-height: 112px;
          padding-left: 450px;
          flex: 0 0 112px;
          .name {
            display: inline-block;
            font-size: 18px;
            color: #333;
            padding-right: 30px;
          }
          .txt {
            color: #666;
          }
        }
        &__txt {
          height: 250px;
          font-size: 12px;
          padding-left: 450px;
          padding-top: 44px;
          padding-right: 50px;
          line-height: 24px;
          background-color: #f4f4f4;
          li {
            display: flex;
            flex-flow: row;
          }
          .b {
            flex: 0 0 80px;
            padding-right: 10px;
            color: #333;
          }
          .span {
            color: #666;
          }
          .line {
            width: 28px;
            height: 1px;
            background-color: #666;
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
      &__img {
        position: absolute;
        left: 100px;
        top: 0;
      }
      &__pane {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        li {
          padding: 0 60px;
        }
      }
    }
    &__about {
      background-color: #f4f4f4;
      &__cnt{
        display: flex;
        flex-flow:row nowrap;
        padding: 0 60px 100px;
      }
      &__connect {
        flex:0 0 424px;
        .h {
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: keep-all;
          white-space: nowrap;
          font-weight: 700;
          font-size: 20px;
          padding-bottom: 42px;
          color: #333;
        }
        .li {
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: keep-all;
          white-space: nowrap;
          font-size: 12px;
          color: #666;
          line-height: 24px;
        }
      }
      &__subImage{
        display: inline-block;
      }
    }
  }

</style>
