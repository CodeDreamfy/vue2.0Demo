<template >
  <div class="from-group">
    <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
    <div class="form-item">
      <div class="inner-wrap">
        <label for="tel">手机号</label>
        <div class="right">
          <input type="number" placeholder="请输入手机号"/>
          <a href="javascript:;" class="yzm-btn" :class="{yzmActive : isActive}" @click="yzm">{{tips}}</a>
        </div>
      </div>
    </div>
    <mt-field label="验证码" placeholder="请输入验证码" type="number"></mt-field>
    <mt-button size="large" type="primary" @click="toProfile">注册</mt-button>
    <a class="tips-for-login" @click="turnForLogin">已有账号？立即登陆</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tips: '获取验证码',
      isActive: true
    }
  },
  methods: {
    yzm () {
      if(this.isActive){
        this.isActive = false;
        let i = 60;
        let _this = this;
        let m = setInterval(function(){
          if(i>0){
            _this.tips = '剩余'+ i +'s'
          }else {
            clearTimeout(m);
            _this.tips = '获取验证码'
            _this.isActive = true;
          }
          i--;
        },1000);
      }
    },
    turnForLogin () {
      this.$emit('turn',{reg:false,login:true})
    },
    toProfile () {
      this.$router.push({path: '/profile/step1'})
    }
  }
}
</script>

<style lang="css">
.from-group { padding:  0 24px; }
.form-item { width: 100%; padding: 0 10px;}
.form-item .inner-wrap{
  width: 100%;
  min-height: 48px;
  border-top: 1px solid #d9d9d9;
}
.form-item label { float: left; width: 90px; min-height: 48px; line-height: 48px; font-size: 16px;}
.form-item .right  { display: flex; align-items: center;}
.form-item .right input { min-width: 100px; flex: 3; border: none; outline: 0; font-size: 16px; min-height: 48px;}
.form-item .right .yzm-btn {
  flex: 2;
  padding: 0 4px;
  height: 30px; line-height: 30px; border-radius: 8px;
  background: #ddd; text-align: center;
}
.form-item .right .yzm-btn.yzmActive {
  background: #26a2ff; color: #fff;
}
.form-item .right .yzm-btn:focus { outline: 0; }

.from-group .mint-cell.mint-field .mint-cell-wrapper .mint-cell-title {
  width: 90px;
}
.tips-for-login {
  display: block; height: 40px; line-height: 40px;
  text-align: right; text-decoration: underline;
}
</style>
