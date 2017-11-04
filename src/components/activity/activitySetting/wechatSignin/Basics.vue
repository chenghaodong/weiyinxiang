<template>
  <div class="tab-pane fade in active" id="home">
    <form class="padding_bottom  line-bottom">
      <div class="form-list padding_bottom line-bottom">
        <span class="checkbox">公众号签到关键字</span>
        <input type="text" class="form-control key-input" placeholder="请输入公众号签到关键字">
      </div>
      <div class="form-list padding_top wx-name">
        <span class="checkbox">获取微信用户名称</span>
        <input type="checkbox" class="checkbox-switch1" />
        <span class="name hide">微信用户</span>
        <input type="text" class="form-control key-input hide" placeholder="请输入微信用户名称">
      </div>
      <div class="form-list padding_top wx-company">
        <span class="checkbox">填入公司名称</span>
        <input type="checkbox" class="checkbox-switch2" />
        <span class="name show">公司名称</span>
        <input type="text" class="form-control key-input show" placeholder="请输入公司名称">
      </div>
      <div class="form-list padding_top wx-position">
        <span class="checkbox">填入人员职位</span>
        <input type="checkbox" class="checkbox-switch3" />
        <span class="name hide">职位名称</span>
        <input type="text" class="form-control key-input hide" placeholder="请输入职位名称">
      </div>
      <div class="form-list padding_top wx-phone">
        <span class="checkbox">填入手机号码</span>
        <input type="checkbox" class="checkbox-switch4" />
        <span class="name show">手机号码</span>
        <input type="text" class="form-control key-input show" placeholder="请输入手机号码">
      </div>
      <div class="form-list padding_top wx-email">
        <span class="checkbox">填入邮箱地址</span>
        <input type="checkbox" class="checkbox-switch5" />
        <span class="name show">邮箱地址</span>
        <input type="text" class="form-control key-input show" placeholder="请输入邮箱地址">
      </div>
    </form>
    <div class="padding_top padding_bottom line-bottom">
      <p class="padding-left">微信签到大屏基本设置</p>
      <div class="wx-setting">
        <div class="left">
          <p class="padding_top padding-left wx-setting-title">字体颜色</p>
          <div id="cp2" class="input-group colorpicker-component padding-left">
            <input type="text" value="#1e96d5" class="form-control color-input" />
            <span class="input-group-addon">
              <i></i>
              <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            </span>
          </div>
          <p class="padding_top padding-left wx-setting-title">背景</p>
          <div class="list-img padding-left">
            <img src="../../../../assets/images/custome.png" alt="">
            <span>图片格式：jpg、png、等格式； 图片大小：16：9</span>
          </div>
          <p class="padding_top padding-left wx-setting-title">签到成功背景</p>
          <div class="list-img padding-left">
            <img src="../../../../assets/images/custome.png" alt="">
            <span>图片格式：jpg、png、等格式； 图片大小：16：9</span>
          </div>
          <p class="padding_top padding-left wx-setting-title">自定义背景</p>
          <div class="list-img padding-left">
            <img src="../../../../assets/images/custome.png" alt="">
            <span>图片格式：jpg、png、等格式； 图片大小：16：9</span>
          </div>
        </div>
        <div class="right">
          <img src="../../../../assets/images/wx.png" alt="">
        </div>
      </div>
    </div>
    <div class="padding_top padding_bottom">
      <button type="button" class="save-btn">
        保存
      </button>
    </div>
  </div>
</template>

<script>
import 'weatherstar-switch/dist/switch.css';
import Switch from 'weatherstar-switch';

export default {
  name: 'basics',
  created() {
    const el = document.querySelector('.checkbox-switch1');
    const mySwitch = new Switch(el, {
      checked: true,
      onSwitchColor: '#1e96d5'
    });
    console.log(mySwitch);
  },
  methods: {
    options(dom, checked) {
      return {
        checked: checked,
        onSwitchColor: '#1e96d5'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-content {
  min-height: 500px;
}

.setting .form-list {
  margin-right: 0;
  margin-left: 0;
  display: flex;
  align-items: center;
}

.setting .form-list .key-input {
  width: 50%;
}

.form-list .checkbox {
  padding-left: 16px;
  padding-right: 16px;
  display: inline-block;
  min-width: 143px;
  text-align: right;
}

.form-list .name {
  padding-left: 16px;
  padding-right: 16px;
}

.wx-setting {
  display: flex;
  align-items: center;
}

.wx-setting .left {
  width: 316px;
  margin-right: 30px;
}

.colorpicker-component {
  width: 85%;
}

.wx-setting .wx-setting-title {
  margin-bottom: 10px;
}

.colorpicker-component .color-input {
  height: 22px;
  color: #1e96d5;
}

.colorpicker-component .input-group-addon {
  border: none;
  background: transparent;
  padding: 3px 12px;
}

span .glyphicon-pencil {
  margin-left: 5px;
}

.list-img {
  display: flex;
  align-items: center;
}

.list-img img {
  margin-right: 5px;
}

.save-btn {
  width: 140px;
  height: 40px;
  border: none;
  background-color: #1e96d5;
  color: #fff;
}
</style>
