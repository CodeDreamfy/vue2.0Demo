<template lang="html">
  <div class="wrapper">
  </div>
</template>

<script>
import mains from './components/mains';
import menus from './components/menu';

export default {
  data: function(){
    return {
      title: 'demo'
    }
  },
  components:{
    mains: mains,
    menus: menus
  }
}
</script>

<style lang="css">
/* reset */
* { box-sizing:  border-box;}
html,body {
  -webkit-user-select: none;   /* 禁止选中文本（如无文本选中需求，此为必选项） */
  user-select: none;
  -webkit-overflow-scrolling: touch;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  height: 100%;
  overflow: hidden;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  background-color: #fff;
  -webkit-tap-highlight-color: transparent;
}
html,body,ul,li,ol,h1,h2,h3,p { margin: 0; padding: 0;}
a { text-decoration: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent;}
ul,ol { list-style: none;}
em,i { font-style: normal;}
h1,h2,h3 { font-size: 100%; font-weight: normal;}

/* common */
.wrapper {
  width: 100%; height: 100%; overflow: hidden; margin: 0 auto;
  background: #ddd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.wrapper .cardBox {
  flex-grow: 1;
  padding: 20px;
}

</style>
