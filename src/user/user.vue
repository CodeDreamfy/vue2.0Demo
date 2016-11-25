<template lang="html">
  <div class="cardBox">
    <registered v-show="regflag"></registered>
    <login v-show="loginflag"></login>
  </div>
</template>

<script>
import registered from 'registered'
import login from 'login'

export default {
  data () {
    return {
      regflag: true,
      loginflag: ''
    }
  },
  components: {
    registered,
    login
  }
}
</script>

<style lang="css">
</style>
