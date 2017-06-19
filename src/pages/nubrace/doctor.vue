<template>
  <section class="c-nubrace-box__wrapper">
    <el-card class="c-nubrace-box">
      <h3 class="c-nubrace-tit">医生登录</h3>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm"
               class="mater-from">
        <el-form-item prop="username">
          <el-input placeholder="用户名" name="username" auto-complete="off" v-model="loginForm.username">
            <i class="iconfont icon-zhanghao" slot="append"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="密码" type="password" name="password" auto-complete="off" v-model="loginForm.password">
            <i class="iconfont icon-zhanghao" slot="append"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="remember">
          <el-checkbox-group v-model="loginForm.remember">
            <el-checkbox label="记住密码" name="remember"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button class="c-nubrace__btn" :loading="loading" type="primary" @click="submitForm('loginForm')">登录


          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </section>
</template>

<script type="text/javascript">
  // axios
  import { checkUserName, login } from '../../api/user'
  //  lodash
  import debounce from 'lodash/debounce'

  export default{
    data() {
      let interval = this.$store.state.app.INTERVAL
      let validType = this.$store.state.app.VALIDTYPE
      let checkName = (rule, value, callback) => {
        if (!validType.require.test(value)) {
          callback(new Error('请输入账号'))
        } else if (!validType.phone.test(value)) {
          callback(new Error('必须6-18位以英文字母开头,不能有特殊符号'))
        } else {
          checkUserName(value).then(res => {
            if (res.data.result) {
              callback()
              this.$message.success(res.data.info)
            } else {
              callback(new Error(res.data.info))
              this.$message.error(res.data.info)
            }
          })
        }
      }
      let checkPassword = (rule, value, callback) => {
        if (!validType.require.test(value)) {
          callback(new Error('请输入密码'))
        } else if (!validType.password.test(value)) {
          callback(new Error('由6-16位含有小写字母、大写字母、数字、特殊符号的两种及以上'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: '',
          password: '',
          remember: ''
        },
        loginRules: {
          username: [
            {validator: debounce(checkName, interval * 1000, {'leading': true, 'trailing': false}), trigger: 'blur'}
          ],
          password: [
            {validator: checkPassword, trigger: 'blur'}
          ]
        },
        loading: false
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            this.$message.success('验证通过,正在登录中...')
            this.$store.dispatch('Login', this.loginForm).then(() => {
              this.loading = false
              this.$message.success('登录成功')
              setTimeout(() => {
                this.$router.push({path: '/'})
              }, 1000)
            }).catch((error) => {
              this.$message.error(error)
              this.loading = false
            })
          } else {
            this.$message.error('表单验证未通过')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      handleClick(tab, event) {

      }
    },
    components: {}
  }
</script>


