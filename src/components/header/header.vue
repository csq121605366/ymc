<template>
  <section class="c-header">
    <div class="c-header__tp bg-black">
      <el-row type="flex" justify="space-around" class="l-wrap">
        <el-col :span="3" class="c-header__tel">
          <i class="iconfont icon-dianhua"></i>
          <span class="tc-gray tf-small">0755-862541561</span>
        </el-col>
        <el-col :span="8">
          <ul class="c-header__fun">
            <li class="li">
              <el-input
              placeholder="搜索..."
              icon="search"
              v-model="headerSearchText"
              class="c-header__fun__search"
              :on-icon-click="headerSearchBtn"
              >
            </el-input>
          </li>
          <li class="li">
            <i class="iconfont icon-zhanghao"></i>
            <router-link class="c-header__tp__link" to="/nubrace/general">用户登录</router-link>
          </li>
          <li class="li">
            <i class="iconfont icon-yisheng"></i>
            <router-link class="c-header__tp__link" to="/nubrace/doctor">医生登录</router-link>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
  <el-row type="flex" justify="space-around" align="middle" class="c-header__cnt l-wrap">
    <el-col :span="6" class="logo">
      <img src="../../assets/images/logo.png" width="289" height="50" alt="">
    </el-col>
    <el-col tag="ul" :span="12" class="c-header__link">
      <li class="c-header__link__li">
        <router-link to="/home">首页</router-link>
      </li>
      <li class="c-header__link__li">
        <router-link to="/case">客户案例</router-link>
      </li>
      <li class="c-header__link__li">
        <router-link to="/technology">医学技术</router-link>
      </li>
      <li class="c-header__link__li">
        <router-link to="/community">用户社区</router-link>
      </li>
      <li class="c-header__link__li">
        <router-link to="/aboutUs">关于我们</router-link>
      </li>
    </el-col>
  </el-row>
</section>
</template>

<script type="text/javascript">

  export default{
    data () {
      return {
        headerSearchText: ''
      }
    },
    methods: {
      headerSearchBtn() {
        let txt = this.headerSearchText.trim()
        if (txt === '') {
          this.$message.error('请输入内容进行查询')
        } else {
          console.log(txt)
        }
      }
    },
    created() {
    },
    components: {}
  }
</script>

<style lang="scss">
  $bc: #259cef;

  .c-header {
    &__tp {
      height: 40px;
      background-color: #292e31;
    }
    &__tel {
      font-size: 0;
      .iconfont {
        margin-right: 8px;
        color: $bc;
        font-size: 12px;
        line-height: 40px;
      }
      span {
        vertical-align: middle;
      }
    }
    &__tp__link {
      font-size: 12px;
      color: #999;
      vertical-align: middle;
    }
    &__fun {
      font-size: 0;
      .li {
        display: inline-block;
        vertical-align: top;

        color: $bc;
        &:not(:first-child) {
          .iconfont {
            padding-right: 8px;
          }
          border-left: 1px solid #999;
          margin-top: 11px;
          margin-left: 14px;
          padding-left: 14px;
        }
      }
      &__search {
        width: 176px;
        height: 26px;
        margin-top: 7px;
        input {
          height: 100%;
          vertical-align: top;
          background-color: #4b5052;
          border: 0;
          color: #cecece;
          border-radius: 13px;
        }
      }
    }
    &__cnt {
      height: 90px;
    }
    &__link {
      display: flex;
      flex-flow: row nowrap;
      &__li {
        padding: 0 36px;
        a {
          font-size: 14px;
          color: #333;
          &.active {
            color: $bc;
            position: relative;
            &:after {
              content: '';
              position: absolute;
              left: 0;
              right:0;
              margin:0 auto;
              bottom: -24px;
              width: 4px;
              height: 4px;
              border-left: 1px solid $bc;
              border-top: 1px solid $bc;
              transform: rotate(45deg);
            }
          }
        }
        &:last-child {
          padding-right: 0;
        }
      }

    }
  }
</style>
