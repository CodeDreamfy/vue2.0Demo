<template lang="html">
  <mt-field label="手机号" v-model="tel" placeholder="请输入手机号" type="tel"></mt-field>
  <mt-field label="密码" v-model="password" placeholder="请输入密码" type="password"></mt-field>
  <mt-button type="primary">登陆</mt-button>
</template>

<script>
export default {
  data () {
    return {
      tel: '',
      password: ''
    }
  }
}
</script>

<style lang="css">
</style>
