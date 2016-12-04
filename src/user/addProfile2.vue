<template lang="html">
    <div class="wrapper step2">
      <h2 class="step-title">请选择你的出生年份</h2>
      <p class="age-show"><span>{{age}}</span>岁</p>
      <div class="content">
        <select name="checkyear" id="checkyear" v-model="selected" @change="setAge">
          <option v-for="year in yearlist" >{{year}}</option>
        </select>
      </div>
      <router-link to="/profile/step3" class="actionToNext" @click="ageval">下一步</router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {
      age: '-',
      yearlist: [],
      selected:'',
      max:''
    }
  },
  methods: {
    getYearList: function(){
      this.max = (new Date()).getFullYear();
      for(var i=1920; i<=this.max; i++){
        this.yearlist.push(i)
      }
    },
    setAge: function(){
      if(this.selected.length != 0){
        this.age = this.max - this.selected
      }
    },
    ageval: function(){

    }
  },
  created: function(){
    this.getYearList();
  }
}
</script>

<style lang="css">
.step2 { padding:  0 12px; }

.age-show {
  text-align: center;
  margin: 18px auto; font-size: 18px;
}
.age-show span {
  font-size: 30px; color: #0096ff;
}
.step2 .content {
    margin: 20% auto;
}
.step2 #checkyear {
  width: 100%; font-size: 26px;
  height: 60px; line-height: 60px;
  color: #0096ff; outline: none;
  text-align: center; position:relative;
  border: 1px solid #ddd; border-radius: 12px;
  background: #fff;
  display: block;
}
.step2 #checkyear >option {
  line-height: 28px; height: 28px;
}
</style>
