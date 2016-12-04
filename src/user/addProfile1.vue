<template lang="html">
  <div class="wrapper step1">
    <h2 class="step-title">请选择你的性别</h2>
    <div class="content">
      <div class="radio-wrap">
        <input type="radio" name="sex" v-model="picked" value="1"  id="radio-for-sexman">
        <label for="radio-for-sexman"  class="radio-sex man">男</label>
      </div>
      <div class="radio-wrap">
        <input type="radio" name="sex" v-model="picked" value="2" id="radio-for-sexwoman">
        <label for="radio-for-sexwoman"  class="radio-sex woman" >女</label>
      </div>
    </div>
    <router-link to="/profile/step2" class="actionToNext" @click="sexval">下一步</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      picked: ''
    }
  },
  methods: {
    sexval: function() {
      console.log(this.picked)
      if(this.picked == undefined){
        return false;
      }else {
        console.log(this.picked)
        return false;
      }
    }
  }
}
</script>

<style lang="css">
  h2.step-title {
    text-align: center;
    font-size: 24px;
    margin-top: 30px;
  }
  .step1 { padding:  0 12px; }
  .step1 .content {
    width:  100%;
    margin-top: 30%;
  }
  .step1 .radio-wrap {
    width: 100px; height: 100px;
    border-radius: 50%;
    margin:  0 auto;
  }
  .step1 .radio-wrap input {
    display: none;
  }
  .step1 .radio-wrap input + label {
    width: 100px;  height: 100px; border-radius: 50%;
    display: block; margin:  0 auto;
    border: 1px solid #eee;
    text-align: center;  font-size: 30px;
    line-height: 90px;
    margin-top: 20px;
    color: #ddd;
    border: 5px solid #eee;
    background: #fff;
  }
  label.man {
    color: #66a8d8;
  }
  label.man:active {
    background: #057dd5;
  }
  label.woman {
    color: #ff69c2;
  }
  label.woman:active {
    background: #b712cb;
  }

  .step1 .radio-wrap input:checked + label.man {
    background: #66a8d8; color: #fff;
  }
  .step1 .radio-wrap input:checked + label.woman {
    background: #ff69c2; color: #fff;
  }
  .actionToNext {
    height: 50px; line-height: 50px; width: 80%;
    border-radius: 30px;  padding: 0 12px;
    background: #0096ff; color: #fff; font-size: 20px;
    margin:  10px 0; text-align: center;
    position: absolute; bottom: 20px; left: 50%;
    transform: translateX(-50%);
  }
</style>
