<template >
  <div class="from-group">
    <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
    <mt-button size="large" type="primary" @click="toProfile">登陆</mt-button>
    <a class="tips-for-login" @click="turnForRegister">没有账号？立即注册</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tel: '',
      password: ''
    }
  },
  methods: {
    turnForRegister () {
      this.$emit('turn', {reg:true,login:false})
    },
    toProfile () {
      this.$router.push({path: '/profile/step1'})
    }
  }
}
</script>

<style lang="css">
</style>
