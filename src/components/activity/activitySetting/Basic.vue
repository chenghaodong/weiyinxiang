<template>
  <div>
    <p class="page-header">
      <a>活动列表 > </a>活动管理</p>
    <div class="setting">
      <p class="title padding-bottom">
        <i class="icon iconfont"> &#xe647;</i> 基础设置</p>
      <form class="padding-bottom  line-bottom">
        <div class="form-list">
          <span class="checkbox">
            <span class="required">*</span>活动名称</span>
          <b-form-input type="text" class="form-control key-input" placeholder="请输入活动名称"></b-form-input>
        </div>
        <div class="form-list padding-top">
          <span class="checkbox">
            <span class="required">*</span>活动属性</span>
          <b-form-radio-group v-model="status" name="status">
            <b-form-radio value="free">免费</b-form-radio>
            <b-form-radio value="pay">付费</b-form-radio>
          </b-form-radio-group>
          <span class="certification cert">
            <i class="icon iconfont">&#xe61f;</i> 已认证</span>
          <span class="not-certification cert">
            <i class="icon iconfont">&#xe61f;</i> 未认证</span>
          <a class="customer-color">企业账号认证</a>
        </div>
        <div class="form-list padding-top">
          <span class="checkbox">
            <span class="required">*</span>微信公众号</span>
          <b-form-radio-group v-model="wechat" name="wechat">
            <b-form-radio value="unlock">启用公众号设置</b-form-radio>
            <b-form-radio value="custom">自定义公众号</b-form-radio>
          </b-form-radio-group>
          <a :class="{'customer-color': wechat === 'custom'}">去设置</a>
        </div>
        <div class="form-list padding-top">
          <span class="checkbox">
            <span class="required">*</span>活动区域</span>
          <b-form-select v-model="selected" :options="options" class="mb-3">
          </b-form-select>
          <b-form-select v-model="selected" :options="options" class="mb-3">
          </b-form-select>
          <b-form-select v-model="selected" :options="options" class="mb-3">
          </b-form-select>
        </div>
        <div class="form-list padding-top">
          <span class="checkbox">
            <span class="required">*</span>活动地点</span>
          <b-form-input type="text" class="form-control key-input" placeholder="请输入活动地点"></b-form-input>
        </div>
        <div class="form-list padding-top">
          <span class="checkbox">
            <span class="required">*</span>开始时间</span>
          <b-form-input type="datetime-local" class="form-control key-input" placeholder="请选择开始时间"></b-form-input>
        </div>
        <div class="form-list padding-top">
          <span class="checkbox">
            <span class="required">*</span>结束时间</span>
          <b-form-input type="datetime-local" class="form-control key-input" placeholder="请选择结束时间"></b-form-input>
        </div>
        <div class="form-list padding-top padding-bottom line-bottom">
          <span class="checkbox">
            <span class="required">*</span>备注</span>
          <b-form-textarea :rows="3" :max-rows="6" class="form-control key-input" placeholder="请输入备注">
          </b-form-textarea>
        </div>
        <div class="form-list padding-top">
          <span class="checkbox">
            <span class="required">*</span>活动联系人</span>
          <b-form-input type="text" class="form-control key-input" placeholder="请输入活动联系人"></b-form-input>
        </div>
        <div class="form-list padding-top">
          <span class="checkbox">
            <span class="required">*</span>联系方式</span>
          <b-form-input type="text" class="form-control key-input" placeholder="请输入联系方式"></b-form-input>
        </div>
        <div class="form-list padding-top">
          <span class="checkbox">
            <span class="required">*</span>邮箱</span>
          <b-form-input type="text" class="form-control key-input" placeholder="请输入邮箱"></b-form-input>
        </div>
        <div class="form-list padding-top">
          <span class="checkbox">
            <span class="required">*</span>QQ/微信号</span>
          <b-form-input type="text" class="form-control key-input" placeholder="请输入QQ/微信号"></b-form-input>
        </div>
        <div class="form-list padding-top">
          <span class="checkbox">
            <span class="required">*</span>公司/组织</span>
          <b-form-input type="text" class="form-control key-input" placeholder="请输入公司/组织"></b-form-input>
        </div>
        <div class="padding-top padding-bottom">
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
  name: 'basic',
  data() {
    return {
      status: 'free',
      wechat: 'unlock',
      selected: null,
      options: [
        { value: null, text: '江苏省' },
        { value: 'a', text: '四川省' },
        { value: 'b', text: '贵州省' },
        { value: { C: '3PO' }, text: '成都市' },
        { value: 'd', text: '云南省', disabled: true }
      ]
    };
  }
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
  .cert {
    color: #fff;
    border-radius: 4px;
    margin-right: 12px;
    padding: 2px 5px;
    font-size: 12px;
    i {
      font-size: 14px;
    }
    &.certification {
      background-color: #ccc;
    }
    &.not-certification {
      background-color: #f27224;
    }
  }
  label {
    margin-bottom: 0;
  }
  .custom-control {
    min-height: 1rem;
  }
  select {
    width: 13%;
    margin-bottom: 0 !important;
    margin-right: 4px;
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