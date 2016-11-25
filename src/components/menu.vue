<template lang="html">
    <div class="footer">
      <p id="menu">{{msg}}</p>
    </div>
</template>

<script>
export default {
  name: 'menu',
  data: function(){
    return {
      msg: 'footer'
    }
  }
}
</script>

<style lang="css">
.footer {
  width: 100%; height: 60px; background: #0cf;
}
</style>
