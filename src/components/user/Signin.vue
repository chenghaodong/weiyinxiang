<template>
  <div class="container signin">
    <div class="content">
      <div class="form-signin">
        <h4 class="form-signin-heading">用户登录</h4>
        <p class="error text-left" v-if="errormsg"><i class="icon iconfont">&#xe607;</i>{{errormsg}}</p>
        <div class="auth">
          <span class="input-icon"><i class="icon iconfont">&#xe623;</i></span>
          <input type="text" class="form-control" placeholder="邮箱/手机/微信号" v-model="account">
        </div>
        <div class="auth">
          <span class="input-icon"><i class="icon iconfont">&#xe60c;</i></span>
          <input type="password" class="form-control" placeholder="密码" v-model="password">
        </div>
        <div class="auth code">
          <span class="input-icon"><i class="icon iconfont">&#xe61f;</i></span>
          <input type="text" class="form-control" placeholder="验证码" v-model="securityCode">
          <img :src="captchaImage" width="100" height="42" @click="refreshCaptchaImage"/>
        </div>
        <button class="btn btn-lg btn-info btn-block" type="button" @click="signin">登 录</button>
      </div>
      <div class="footer">
        <a>微信扫码登录</a>
        <a>QQ登录</a>
        <a>用户注册</a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'login',
  data() {
    return {
      account: '',
      password: '',
      securityCode: '',
      captchaImage: 'http://lmw.ewei.dev/captcha.jpg',
      errormsg: null
    };
  },
  methods: {
    signin() {
      this.$router.push({ name: 'home' });
      if (!this.account) {
        this.errormsg = '账号不能为空';
        return;
      }
      if (!this.password) {
        this.errormsg = '密码不能为空';
        return;
      }
      if (!this.securityCode) {
        this.errormsg = '验证码不能为空';
        return;
      }
      console.log('登录');
    },
    refreshCaptchaImage() {
      this.captchaImage = 'http://lmw.ewei.dev/captcha.jpg?' + Math.floor(Math.random() * 100);
    }
  }
};
</script>
<style lang="scss" scoped>
.signin{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .content {
    .form-signin {
      width: 370px;
      padding: 20px 50px;
      background-color: #fff;
      .form-signin-heading {
        margin-bottom: 10px;
      }
      .error {
        color: red;
        .icon {
          margin-right: 6px;
        }
      }
      .auth {
        position: relative;
        margin-bottom: 12px;

        .input-icon {
          position: absolute;
          left: 10px;
          z-index: 3;
          top: 8px;
          .icon {
            font-size: 20px;
            color: #8c8c8c;
          }
        }
        .form-control {
          position: relative;
          height: auto;
          padding: 10px 10px 10px 38px;
        }
      }
      .code {
        display: flex;
        align-items: center;

        img {
          margin-left: 10px;
          cursor: pointer;
        }
      }
      .btn-block {
        background-color: #169bd4;
      }
    }
    .footer {
      height: 52px;
      line-height: 52px;
      background-color: #f5f5f5;
      a {
        color: #666;
        cursor: pointer;
        border-right: 2px solid #999;
        padding-right: 15px;
        padding-left: 15px;
        &:last-child {
          border-right: none;
        }
      }
    }
  }
}
</style>