<template>
  <div class="wrapper step5">
    <h2 class="title">您的健康状况？</h2>
    <div class="form-group">
      <div class="form-item">
        <div class="inputWrap">
          <label for="type">糖尿病</label>
          <a class="val" @click="showType" href="javascript:;">未填写</a>
        </div>
        <div class="outWrap" v-show="outTypeActive">
          <template v-for="(typeval, index) in typeList" >
            <input type="radio" :id="'typeval' + index" name="typeVal"  v-model="typeed">
            <label :for="'typeval' + index" @click="getTypeVal(index)" :class="{labelCheck: true, active: itemTitle == index}" >{{typeval.val}}</label>
          </template>
        </div>
      </div>
      <div class="form-item">
        <div class="inputWrap">
          <label for="type">确诊时间（病史）</label>
          <a class="val" @click="showType" href="javascript:;">未填写</a>
        </div>
        <div class="outWrap" v-show="outTypeActive">
          <template v-for="(typeval, index) in yearList" >
            <input type="radio" :id="'typeval' + index" name="typeVal"  v-model="times">
            <label :for="'typeval' + index" @click="getTypeVal(index)" :class="{labelCheck: true, active: itemTitle == index}" >{{typeval.val}}</label>
          </template>
        </div>
      </div>
      <div class="form-item">
        <div class="inputWrap">
          <label for="type">治疗方式（可多选）</label>
          <a class="val" @click="showType" href="javascript:;">未填写</a>
        </div>
        <div class="outWrap" v-show="outTypeActive">
          <template v-for="(typeval, index) in treatmentList" >
            <input type="radio" :id="'typeval' + index" name="typeVal"  v-model="picked">
            <label :for="'typeval' + index" @click="getTypeVal(index)" :class="{labelCheck: true, active: itemTitle == index}" >{{typeval.val}}</label>
          </template>
        </div>
      </div>

    </div>
    <router-link to="/profile/step5" class="actionToNext" >下一步</router-link>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        outTypeActive: false,
        IstypeActive: false,
        itemTitle: '',
        typeed: '',
        times: '',
        picked: '',
        typeList: [
          {id:0, val:'1型糖尿病', show: false},
          {id:1, val:'2型糖尿病', show: false},
          {id:2, val:'妊娠糖尿病', show: false},
          {id:3, val:'特殊糖尿病', show: false},
          {id:4, val:'糖尿病前期', show: false},
          {id:5, val:'糖尿病其他', show: false}
         ],
         treatmentList: [
          {id:0, val:'饮食控制', show: false},
          {id:1, val:'运动控制', show: false},
          {id:2, val:'口服药', show: false},
          {id:3, val:'胰岛素', show: false},
          {id:4, val:'暂无', show: false}
         ],
         yearList: [
          {id:0, val:'1年', show: false},
          {id:1, val:'2年', show: false},
          {id:2, val:'3年', show: false},
          {id:3, val:'5年以上', show: false},
          {id:4, val:'8年以上', show: false},
          {id:5, val:'其他', show: false}
         ],
      }
    },
    methods: {
      getTypeVal (index) {
        /*for(let i=0; i<this.typeList.length; i++){
          if(i == index){
            this.typeList[index].show ? this.typeList[index].show = false : this.typeList[index].show =  true;
          }else {
            this.typeList[i].show = false;
          }
        }*/
        this.itemTitle = index;
      },
      showType () {
        this.outTypeActive  ? this.outTypeActive = false : this.outTypeActive = true;
      }
    },
    computed: {

    }
  }
</script>
<style>
  #app, .wrapper.step5 {
    overflow-y:auto;
    height: auto;
  }
  .step5 .title {
    color: #000;
    font-size: 28px;
    padding: 60px 12px 30px;
    background: #e5e9ec;
  }
  .step5 .title:first-letter { font-size: 38px; }
  .step5 .form-group {
    width: 100%; background: #fff;
    min-height: 100px;
  }
  .step5 .form-group .form-item {
    color: #000;
  }
  .step5 .form-group .form-item .inputWrap {
    height: 44px; padding: 0 26px; border-bottom: 1px solid #d1d1d3;
    display: flex; justify-content: center; align-items: center;
  }
  .step5 .form-group .form-item .inputWrap label {
     flex: 1;
  }
  .step5 .form-group .form-item .inputWrap .val {
    flex: 1; text-align: right; color: #458be0; font-size: 18px;
    position: relative; padding-right: 30px;
  }
  .step5 .form-group .form-item .inputWrap .val:after {
    content: '>'; right: 0;
    font-size: 20px; color: #d1d1d3; position: absolute;
    transition: all .8s;
  }
  .step5 .form-group .form-item .inputWrap .val.active:after {
    transform: rotate(90deg);
  }
  .step5 .form-group .form-item .outWrap {
    display: flex; justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
  }
  .step5 .form-group .form-item .outWrap>input {
    display: none;
  }
  .step5 .form-group .form-item .outWrap .labelCheck {
    font-size: 16px; padding: 0 8px; margin-top: 8px;
    height: 54px; line-height: 54px; width: 120px;
    border: 1px solid #d1d1d3; border-radius: 10px;
    text-align: center; transition: all 0.8s;
  }
  .step5 .form-group .form-item .outWrap .labelCheck:active {
    box-shadow: inset 0 0 0 30px #d1d1d3;
  }
  .step5 .form-group .form-item .outWrap .labelCheck.active {
    color: #fff; background: #458be0; border: none;
    box-shadow: none;
  }
</style>
