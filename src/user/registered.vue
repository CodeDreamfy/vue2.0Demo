<template >
  <div class="from-group">
    <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
    <div class="form-item">
      <div class="inner-wrap">
        <label for="tel">手机号</label>
        <div class="right">
          <input type="number"/>
          <div class="yzm">
            <a href="javascript:;" class="yzm-btn">获取验证码</a>
          </div>
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
  display: flex;
  flex-direction: row;
  flex-wrap:  nowrap;
  justify-content: space-around;
  align-content:  center;
  min-height: 48px;
  border-top: 1px solid #d9d9d9;
}
.form-item label {  width: 105px; min-height: 48px; line-height: 48px;}
.form-item .right  { flex: 1; display: flex; align-content: center;}
.form-item .right input { flex: 1; border: none; outline: 0; font-size: 16px;}
.form-item .right .yzm { flex: 3; min-height: 48px; display: flex; justify-content: center; align-content: center; }
.form-item .right .yzm-btn {
  flex-grow: 1; align-self: center;
  height: 30px; line-height: 30px; border-radius: 8px;
  background: #ddd; text-align: center;
}
.form-item .right .yzm-btn:focus { outline: 0; }
</style>
