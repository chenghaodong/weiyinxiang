<template>
  <div>
    <p class="page-header">
      <a>活动列表 > </a>活动管理</p>
    <div class="setting">
      <p class="title padding_bottom">
        <span class="glyphicon glyphicon-list-alt"></span> 基础设置</p>
      <form class="padding_bottom  line-bottom">
        <div class="form-list">
          <span class="checkbox"><span class="required">*</span>活动名称</span>
          <input type="text" class="form-control key-input" placeholder="请输入活动名称">
        </div>
        <div class="form-list padding_top">
          <span class="checkbox"><span class="required">*</span>活动属性</span>
          <input type="text" class="form-control key-input" placeholder="请输入公司名称">
        </div>
        <div class="form-list padding_top">
          <span class="checkbox"><span class="required">*</span>微信公众号</span>
          <input type="text" class="form-control key-input" placeholder="请输入职位名称">
        </div>
        <div class="form-list padding_top">
          <span class="checkbox"><span class="required">*</span>活动区域</span>
          <input type="text" class="form-control key-input" placeholder="请输入手机号码">
        </div>
        <div class="form-list padding_top">
          <span class="checkbox"><span class="required">*</span>活动地点</span>
          <input type="text" class="form-control key-input" placeholder="请输入活动地点">
        </div>
        <div class="form-list padding_top">
          <span class="checkbox"><span class="required">*</span>开始时间</span>
          <input type="text" class="form-control key-input" placeholder="请输入公司名称">
        </div>
        <div class="form-list padding_top">
          <span class="checkbox"><span class="required">*</span>结束时间</span>
          <input type="text" class="form-control key-input" placeholder="请输入职位名称">
        </div>
        <div class="form-list padding_top padding_bottom line-bottom">
          <span class="checkbox"><span class="required">*</span>备注</span>
          <input type="text" class="form-control key-input" placeholder="请输入手机号码">
        </div>
        <div class="form-list padding_top">
          <span class="checkbox"><span class="required">*</span>活动联系人</span>
          <input type="text" class="form-control key-input" placeholder="请输入活动地点">
        </div>
        <div class="form-list padding_top">
          <span class="checkbox"><span class="required">*</span>联系方式</span>
          <input type="text" class="form-control key-input" placeholder="请输入活动地点">
        </div>
        <div class="form-list padding_top">
          <span class="checkbox"><span class="required">*</span>邮箱</span>
          <input type="text" class="form-control key-input" placeholder="请输入公司名称">
        </div>
        <div class="form-list padding_top">
          <span class="checkbox"><span class="required">*</span>QQ/微信号</span>
          <input type="text" class="form-control key-input" placeholder="请输入职位名称">
        </div>
        <div class="form-list padding_top">
          <span class="checkbox"><span class="required">*</span>公司/组织</span>
          <input type="text" class="form-control key-input" placeholder="请输入职位名称">
        </div>
        <div class="padding_top padding_bottom">
          <button type="button" class="save-btn">
            保存
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basic'
};
</script>

<style lang="scss" scoped>
.form-list {
  margin-right: 0;
  margin-left: 0;
  display: flex;
  align-items: center;
  .key-input {
    width: 40%;
  }
  .checkbox {
    padding-right: 16px;
    display: inline-block;
    min-width: 110px;
    text-align: right;
    .required {
      color: red;
      margin-right: 5px;
    }
  }
}
.save-btn {
  width: 140px;
  height: 40px;
  border: none;
  background-color: #1e96d5;
  color: #fff;
  margin-left: 110px;
}
</style>