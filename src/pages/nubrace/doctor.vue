<template>
  <section class="c-nubrace-box__wrapper">
    <el-card class="c-nubrace-box">
      <h3 class="c-nubrace-tit">找回密码</h3>
      <el-form :model="retrieveForm" :rules="retrieveRules" ref="retrieveForm"
               class="mater-from">
        <el-form-item prop="username">
          <el-input placeholder="用户名" v-model="loginForm.phone">
            <i class="iconfont icon-zhanghao" slot="append"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="验证码" :modal="loginForm.code">
            <i class="iconfont icon-zhanghao" slot="append"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="agree">
          <el-checkbox-group v-model="loginForm.agree">
            <el-checkbox label="记住密码" name="type"></el-checkbox>
          </el-checkbox-group>
          <!--<router-link class="c-nubrace__forget" to="/login/forget">忘记密码</router-link>-->
        </el-form-item>
        <el-form-item>
          <el-button class="c-nubrace__btn" type="primary" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
        <!--<v-tit :padding="20">-->
          <!--<span>没有账号，去<router-link style="color: #fc6c1e;padding-left: 4px;" to="/register">注册</router-link></span>-->
        <!--</v-tit>-->
      </el-form>
    </el-card>
  </section>
</template>

<script type="text/javascript">

  export default{
    data() {
      return {
        activeName: 'first',
        retrieveForm: {
          phone: '',
          code: ''
        },
        retrieveRules: {
          username: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
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
      ok(e) {
        console.log(e)
      }
    },
    components: {}
  }
</script>


