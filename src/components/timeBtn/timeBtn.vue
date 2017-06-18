<!--使用方法-->

<template>
  <a href="javascript:void(0);" class="timeBtn" :class="disable ? 'timeBtn--disabled':''"
     v-on:click="run"
  >{{ text }}</a>
</template>

<script>
  export default{
    props: {
      second: {
        type: Number,
        default: 60
      },
      value: {
        type: String,
        default: '获取验证码'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      let num = this.second ? this.second : this.$store.state.app.TIME
      return {
        num: num,
        time: num,
        disable: this.disabled
      }
    },
    methods: {
      run: function () {
        this.$emit('run')
      },
      start: function () {
        if (this.disable) return false
        this.disable = true
        this.timer();
      },
      stop: function () {
        this.time = 0
        this.disable = false;
      },
      setDisabled: function (val) {
        this.disable = val
      },
      timer: function () {
        if (this.time > 0) {
          this.time--
          setTimeout(this.timer, 1000);
        } else {
          this.disable = false
          this.time = this.num
        }
      }
    },
    computed: {
      text: function () {
        return (this.time > 0 && this.time < this.num) ? this.time + 's 后重获取' : this.value
      }
    }
  }
</script>

<style lang="scss" scoped>
  .timeBtn.timeBtn--disabled {
    color: #ccc;
  }
</style>
