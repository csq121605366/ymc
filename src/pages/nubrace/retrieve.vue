<template>
  <section class="c-nubrace-box__wrapper">
    <el-card class="c-nubrace-box">
      <h3 class="c-nubrace-tit">找回密码</h3>
      <el-form :model="retrieveForm" :rules="retrieveRules" ref="retrieveForm"
               class="mater-from">
        <el-form-item prop="phone">
          <el-input placeholder="用户名" name="username" auto-complete="off" v-model="retrieveForm.phone">
            <i class="iconfont icon-zhanghao" slot="append"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input placeholder="验证码" v-model="retrieveForm.veri">
            <time-btn ref="timeBtn"
                      @run="sendCode"
                      :disabled="false"
                      value="获取验证码"
                      :second="5"
                      class="js-getVeri tc-orange"
                      slot="append"></time-btn>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="c-nubrace__btn" type="primary" @click="submitForm('retrieveForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </section>
</template>

<script type="text/javascript">
  import timeBtn from '../../components/timeBtn/timeBtn.vue'
  export default{
    data() {
      let checkUserName = (rule, value, callback) => {
        let validType = this.$store.state.app.VALIDTYPE
        validType.require.test(value) ? true : callback(new Error('请输入账号'))
        validType.username.test(value) ? true : callback(new Error('必须6-18位以英文字母开头,不能有特殊符号'))
        callback()
      }
      let sendVeri = (rule, value, callback) => {
        if (!value) {}
      }
      return {
        activeName: 'first',
        retrieveForm: {
          phone: null,
          veri: null
        },
        retrieveRules: {
          phone: [
            {validator: checkUserName, trigger: 'blur'}
          ],
          veri: [
            {validator: sendVeri, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          } else {
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      handleClick(tab, event) {

      },
      sendCode() {
        let vObj = this.$refs.timeBtn
        if (vObj) {
          vObj.start()
        }
      }
    },
    components: {
      timeBtn
    }
  }
</script>


