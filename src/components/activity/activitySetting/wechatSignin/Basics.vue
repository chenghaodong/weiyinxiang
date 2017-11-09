<template>
  <div class="tab-pane">
    <form class="padding-bottom  line-bottom">
      <div class="form-list padding-bottom line-bottom">
        <span class="checkbox">公众号签到关键字</span>
        <b-form-input type="text" class="form-control key-input" placeholder="请输入公众号签到关键字"></b-form-input>
      </div>
      <div class="form-list padding-top wx-name">
        <span class="checkbox">获取微信用户名称</span>
        <input type="checkbox" class="checkbox-switch1" />
        <span class="name">微信用户</span>
        <b-form-input type="text" class="form-control key-input" placeholder="请输入微信用户名称"></b-form-input>
      </div>
      <div class="form-list padding-top wx-company">
        <span class="checkbox">填入公司名称</span>
        <input type="checkbox" class="checkbox-switch2" />
        <span class="name">公司名称</span>
        <b-form-input type="text" class="form-control key-input" placeholder="请输入公司名称"></b-form-input>
      </div>
      <div class="form-list padding-top wx-position">
        <span class="checkbox">填入人员职位</span>
        <input type="checkbox" class="checkbox-switch3" />
        <span class="name">职位名称</span>
        <b-form-input type="text" class="form-control key-input" placeholder="请输入职位名称"></b-form-input>
      </div>
      <div class="form-list padding-top wx-phone">
        <span class="checkbox">填入手机号码</span>
        <input type="checkbox" class="checkbox-switch4" />
        <span class="name">手机号码</span>
        <b-form-input type="text" class="form-control key-input" placeholder="请输入手机号码"></b-form-input>
      </div>
      <div class="form-list padding-top wx-email">
        <span class="checkbox">填入邮箱地址</span>
        <input type="checkbox" class="checkbox-switch5" />
        <span class="name">邮箱地址</span>
        <b-form-input type="email" class="form-control key-input" placeholder="请输入邮箱地址"></b-form-input>
      </div>
    </form>
    <div class="padding-top padding-bottom line-bottom">
      <p class="padding-left">微信签到大屏基本设置</p>
      <div class="wx-setting">
        <div class="left">
          <p class="padding-top padding-left wx-setting-title">字体颜色</p>
          <div id="cp2" class="input-group colorpicker-component padding-left">
            <input type="text" v-model="color" class="form-control color-input" :style="{color: color}"/>
            <span class="input-group-addon">
              <color-picker v-model="color" @change="onChange"></color-picker>
              <i class="icon iconfont">&#xe655;</i>
            </span>
          </div>
          <p class="padding-top padding-left wx-setting-title">背景</p>
          <div class="list-img padding-left">
            <img src="../../../../assets/images/custome.png" alt="">
            <span>图片格式：jpg、png、等格式； 图片大小：16：9</span>
          </div>
          <p class="padding-top padding-left wx-setting-title">签到成功背景</p>
          <div class="list-img padding-left">
            <img src="../../../../assets/images/custome.png" alt="">
            <span>图片格式：jpg、png、等格式； 图片大小：16：9</span>
          </div>
          <p class="padding-top padding-left wx-setting-title">自定义背景</p>
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
    <div class="padding-top padding-bottom">
      <button type="button" class="save-btn">
        保存
      </button>
    </div>
  </div>
</template>

<script>
import 'weatherstar-switch/dist/switch.css';
import Switch from 'weatherstar-switch';
import { VueColorpicker } from 'vue-pop-colorpicker';
import rgbHex from 'rgb-hex';

export default {
  name: 'basics',
  components: {
    'color-picker': VueColorpicker
  },
  data() {
    return {
      switches: {},
      switchConfig: {
        'checkbox-switch1': this.options(false),
        'checkbox-switch2': this.options(true),
        'checkbox-switch3': this.options(false),
        'checkbox-switch4': this.options(true),
        'checkbox-switch5': this.options(true)
      },
      color: '#1e96d5'
    };
  },
  mounted() {
    Object.keys(this.switchConfig).forEach((key) => {
      this.switches[key] = new Switch(document.querySelector(`.${key}`), this.switchConfig[key]);
    });
  },
  methods: {
    options(checked) {
      return {
        checked: checked,
        onSwitchColor: '#1e96d5',
        onChange() {
          console.log('1111');
        }
      };
    },
    initSwith(el, checked) {
      const mySwitch = new Switch(el, this.SwithOptions(checked));
    },
    onChange(color) {
      this.color = `#${rgbHex(color)}`;
    }
  }
};
</script>

<style lang="scss">
.tab-pane {
  margin-top: 30px;
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
  padding: 0px 12px;
  .vue-colorpicker {
    height: 20px;
    width: 44px;
    border: none;
    padding: 0;
    text-align: left;
    position: absolute;
  }
  .vue-colorpicker-btn {
    width: 20px;
    height: 20px;
    border: none;
  }
  i {
    margin-left: 28px;
  }
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
