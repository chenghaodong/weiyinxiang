<template>
  <div>
    <p class="page-header">
      <a>活动列表 > </a>活动管理</p>
    <div class="setting">
      <p class="title padding-bottom">
        <i class="icon iconfont"> &#xe647;</i> 绑定公众号
      </p>
      <div>
        <b-form-radio-group v-model="wechat" name="wechat">
          <b-form-radio value="unlock">系统公众号</b-form-radio>
          <b-form-radio value="custom">自定义公众号</b-form-radio>
        </b-form-radio-group>
      </div>
      <div class="form-list padding-top">
        <span class="checkbox">微信公众号名称</span>
        <input type="text" class="form-control key-input" placeholder="请输入公众号名称">
        <button class="btn btn-info">更换绑定</button>
      </div>
      <div class="form-list padding-top">
        <span class="checkbox">微信公众号头像</span>
        <img src="../../../assets/images/wx-logo.png" alt="">
      </div>
      <div class="form-list padding-top">
        <span class="checkbox">微信公众号二维码</span>
        <img src="../../../assets/images/er-code.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wechat',
  data() {
    return {
      wechat: 'unlock'
    };
  }
};
</script>

<style lang="scss" scoped>
.customer {
  margin-left: 58px;
}
.form-list {
  margin-right: 0;
  margin-left: 0;
  display: flex;
  align-items: center;
  .key-input {
    width: 30%;
  }
  .checkbox {
    padding-right: 16px;
    display: inline-block;
    min-width: 150px;
    text-align: right;
  }
  .btn-info {
    margin-left: 10px;
    width: 150px;
    background-color: #169bd4;
  }
}
</style>
