<template>
  <section class="c-nubrace-box__wrapper">
    <el-card class="c-nubrace-box">
      <h3 class="c-nubrace-tit">医生登录</h3>
      <el-form :model="retrieveForm" :rules="retrieveRules" ref="retrieveForm"
               class="mater-from">
        <el-form-item prop="phone">
          <el-input placeholder="用户名" name="username" auto-complete="off" v-model="retrieveForm.phone">
            <i class="iconfont icon-zhanghao" slot="append"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input placeholder="验证码" name="code" auto-complete="off" v-model="retrieveForm.code">
            <i class="iconfont icon-zhanghao" slot="append"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="agree">
          <el-checkbox-group v-model="retrieveForm.agree">
            <el-checkbox label="记住密码" name="remember"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button class="c-nubrace__btn" type="primary" @click="submitForm('retrieveForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </section>
</template>

<script type="text/javascript">

  export default{
    data() {
      let checkUserName = (rule, value, callback) => {
        let validType = this.$store.state.app.validformType
        validType.require.test(value) ? true : callback(new Error('请输入账号'))
        validType.username.test(value) ? true : callback(new Error('必须6-18位以英文字母开头,不能有特殊符号'))
        callback()
      }
      let checkCode = (rule, value, callback) => {
        if (!value) {}
      }
      return {
        activeName: 'first',
        retrieveForm: {
          phone: '',
          code: ''
        },
        retrieveRules: {
          phone: [
            {validator: checkUserName, trigger: 'blur'}
          ],
          code: [
            {validator: checkCode, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        console.log(this)
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
      ok(e) {
        console.log(e)
      }
    }
  }
</script>


