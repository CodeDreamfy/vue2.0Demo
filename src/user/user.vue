<template>
  <div class="cardBox">
    <reg v-show="regflag" @turn="turnTo"></reg>
    <login v-show="loginflag" @turn="turnTo"></login>
  </div>
</template>


<script>
import registered from '../user/registered.vue';
import login from '../user/login.vue';

export default {
  data () {
    return {
      regflag: true,
      loginflag: false
    }
  },
  components: {
    'reg': registered,
    login
  },
  methods: {
    renderto (){
      console.log("uuuuuu")
    },
    turnTo (o) {
      this.regflag = o.reg;
      this.loginflag = o.login;
    }
  },
  mounted: function(){
    this.renderto()
  }
}
</script>

<style lang="css">
</style>
