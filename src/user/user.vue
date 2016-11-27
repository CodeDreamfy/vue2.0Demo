<template>
  <div class="cardBox">
    <reg v-show="regflag"></reg>
    <login v-show="loginflag"></login>
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
    }
  },
  mounted: function(){
    this.renderto()
  }
}
</script>

<style lang="css">
</style>
