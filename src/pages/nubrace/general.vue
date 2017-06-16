<template>
  <section class="c-nubrace-box__wrapper">
    <el-card class="c-nubrace-box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="登陆" name="first">
          <el-form :model="loginForm" :rules="loginRules" ref="loginForm"
                   class="mater-from">
            <el-form-item prop="username">
              <el-input placeholder="用户名/手机号" v-model="loginForm.username">
                <i class="iconfont icon-zhanghao" slot="append"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="密码" :modal="loginForm.password">
                <i class="iconfont icon-zhanghao" slot="append"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="agree">
              <el-checkbox-group v-model="loginForm.agree">
                <el-checkbox label="记住密码" name="type"></el-checkbox>
              </el-checkbox-group>
              <router-link class="c-nubrace__forget" to="/login/forget">忘记密码</router-link>
            </el-form-item>
            <el-form-item>
              <el-button class="c-nubrace__btn" type="primary" @click="submitForm('loginForm')">登录</el-button>
            </el-form-item>
            <v-tit :padding="20">
              <span>没有账号，去<router-link style="color: #fc6c1e;padding-left: 4px;" to="/register">注册</router-link></span>
            </v-tit>
          </el-form>
        </el-tab-pane>
        <!--注册-->
        <el-tab-pane label="注册" name="second">
          <el-form :model="registerForm" :rules="registerRules" ref="registerForm"
                   class="mater-from">
            <el-form-item prop="username">
              <el-input placeholder="用户名(设置后不可更改)" v-model="registerForm.username">
                <i class="iconfont icon-zhanghao" slot="append"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="username">
              <el-input placeholder="手机号" v-model="registerForm.phone">
                <i class="iconfont icon-shouji" slot="append"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="username">
              <el-input placeholder="验证码" v-model="registerForm.veri">
                <a href="javascript:void(0)" @click="ok" class="js-getVeri tc-orange" slot="append">（获取验证码）</a>
              </el-input>
            </el-form-item>
            <el-form-item prop="username">
              <el-input placeholder="密码" v-model="registerForm.password">
                <i class="iconfont icon-mima" slot="append"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="确认密码" :modal="registerForm.repassword">
                <i class="iconfont icon-mima" slot="append"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="c-nubrace__btn" type="primary" @click="submitForm('registerForm')">注册</el-button>
            </el-form-item>
            <el-form-item prop="agree">
              <el-checkbox-group v-model="registerForm.agree">
                <el-checkbox name="type">
                  已阅读并同意
                  <router-link class="tc-main" to="/">《注册协议》</router-link>
                </el-checkbox>
              </el-checkbox-group>
              <a href="javascript:void(0);" @click="handleClick" class="c-nubrace__forget">有账号</a>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </section>
</template>

<script type="text/javascript">
  import vTit from '../../components/tit/tit.vue'
  export default{
    data() {
      return {
        activeName: 'first',
        loginForm: {
          username: '',
          password: '',
          agree: ''
        },
        registerForm: {
          username: '',
          phone: '',
          veri: '',
          password: '',
          repassword: ''
        },
        loginRules: {
          username: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]
        },
        registerRules: {}
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
    components: {
      vTit
    }
  }
</script>

