<template >
  <div class="from-group">
    <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
    <div class="form-item">
      <div class="inner-wrap">
        <label for="tel">手机号</label>
        <div class="right">
          <input type="number" placeholder="请输入手机号"/>
          <a href="javascript:;" class="yzm-btn">获取验证码</a>
        </div>
      </div>
    </div>
    <mt-field label="验证码"></mt-field>
  </div>
</template>

<script>
export default {
  data () {
    return {
      regisiter: true
    }
  }
}
</script>

<style lang="css" scoped>
.form-item { width: 100%; padding: 0 10px;}
.form-item .inner-wrap{
  width: 100%;
  min-height: 48px;
  border-top: 1px solid #d9d9d9;
}
.form-item label { float: left; width: 105px; min-height: 48px; line-height: 48px;}
.form-item .right  { overflow: hidden;}
.form-item .right input { width: 60%; border: none; outline: 0; font-size: 16px; vertical-align: middle; min-height: 48px;}
.form-item .right .yzm-btn {
  display: inline-block; padding: 0 10px;
  height: 30px; line-height: 30px; border-radius: 8px;
  background: #ddd; text-align: center; vertical-align: middle;
}
.form-item .right:after {
  content:''; width: 1px; min-height: 48px; display: inline-block; vertical-align: middle; margin-right: -1px;
}
.form-item .right .yzm-btn:focus { outline: 0; }
</style>
