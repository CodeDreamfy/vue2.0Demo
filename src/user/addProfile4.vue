<template>
  <div class="wrapper step4">
    <div class="content">
      <span class="status">健康</span>
      <p class="tips">BMI:<span>{{tipsVal}}</span></p>
      <p class="wikiBmi">什么是BMI（体重指数）？</p>
      <p class="ps">不错哦，您的体重很正常。请继续保持适当的运动和良好的饮食。</p>
    </div>
    <router-link to="/profile/step5" class="actionToNext" >下一步</router-link>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        tipsVal: 23.21
      }
    }
  }
</script>
<style>
  .step4 { padding:  0 12px; }

  .step4 .status {
    width: 150px; height: 150px; display: block; margin: 20px auto;
    border-radius: 50%;  background: #8dc152;
    color: #fff; font-size: 60px; line-height: 150px; text-align: center;
  }
  .step4 .tips {
    text-align: center; color: #000;
    font-size: 26px; margin-top: 33px;
  }
  .step4 .tips span { color: #61a9d1; padding: 0 8px;}
  .step4 .wikiBmi {
    text-align: center; font-size: 18px; color: #579af1;
    margin-top: 76px;
  }
  .step4 .ps {
    color: #000; font-size: 18px; line-height: 30px; margin-top: 30px;
  }
</style>
