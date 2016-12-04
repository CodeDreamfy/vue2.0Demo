<template lang="html">
  <div class="wrapper step3">
    <h2 class="step-title">请选择您的身高</h2>
    <p class="age-show height"><span>{{selectedHeight}}</span>cm</p>
    <div class="content">
      <select name="check-height" id="check-height" v-model="selectedHeight">
        <option v-for="h in heightList">{{h}}</option>
      </select>
    </div>
    <h2 class="step-title">请选择您的体重</h2>
    <p class="age-show height"><span>{{selectedWeight}}</span>kg</p>
    <div class="content">
      <select name="check-weight" id="check-height" v-model="selectedWeight">
        <option v-for="w in weightList">{{w}}</option>
      </select>
    </div>
    <router-link to="/profile/step4" class="actionToNext" >下一步</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedHeight: '',
      selectedWeight: '',
      heightList: [],
      weightList: []
    }
  },
  methods: {
    setHeightList () {
      for(var i=50; i<=230; i++){
        this.heightList.push(i)
      }
      for(var j=30; j<120; j++){
        this.weightList.push(j)
      }
    }
  },
  created () {
    this.setHeightList()
  }
}
</script>

<style lang="css">
.step3 { padding:  0 12px; }

.step3 #check-height {
  width: 100%; font-size: 26px;
  height: 60px; line-height: 60px;
  color: #0096ff; outline: none;
  text-align: center; position:relative;
  border: 1px solid #ddd; border-radius: 12px;
  background: #fff;
  display: block;
}
.step3 #check-height >option {
  line-height: 28px; height: 28px;
}
</style>
