<template>
  <div class="how">
    <div class="enter">
      <span class="in">签到入口</span>
      <i class="icon iconfont data">&#xe6c1;</i>
      登录<span class="grey">微信公众号</span>，把链接设置到"自动回复"或"自定义菜单"，操作更方便哦！
    </div>
    <div class="padding-top padding-left">
      <p class="methods">方法一</p>
      <p>用微信扫公众号二维码，回复关键字，进行签到。<span class="grey">关键字在基本设置中的公众号关键字中设置！</span>
      </p>
    </div>
    <div class="padding-top padding-left">
      微信公众号二维码
      <img src="../../../../assets/images/er-code.png" alt="">
    </div>
    <div class="padding-top padding-bottom line-bottom padding-left">
      <p class="methods">方法二</p>
      <p class="padding-bottom">复制签到链接用微信打开，进行签到。</p>
    </div>
    <div class="enter padding-left padding-bottom">
      <span class="in">数据显示</span>
      <i class="icon iconfont data">&#xe6c1;</i>
      <span>签到数据可在大屏端显示查看</span><span class="grey">复制下面的大屏链接即可</span><span>,或再签到数据中查看,</span>
      <span class="grey">点击上方签到数据即可查看。</span>
    </div>
    <div class="form-list padding-top padding-left">
      <span class="checkbox">签到链接</span>
      <input type="text" class="form-control key-input" placeholder="">
      <button class="btn btn-infos">复制链接</button>
      <span class="er-code"><i class="icon iconfont">&#xe600;</i></span>
    </div>
    <div class="form-list padding-top padding-left">
      <span class="checkbox">大屏链接</span>
      <input type="text" class="form-control key-input" placeholder="">
      <button class="btn btn-infos">复制链接</button>
      <button class="btn btn-infos">打开查看</button>
    </div>
    <p class="tip">用户通过微信扫码，或者点击公众号菜单绑定此链接可以参与活动现场</p>
  </div>
</template>

<script>
export default {
  name: 'how'
};
</script>

<style lang="scss" scoped>
.how {
  .enter {
    margin-top: 30px;
    background-color: #e7f4fc;
    padding: 14px 16px;
    .in {
      font-size: 18px;
      margin-right: 24px;
    }
  }
  .grey {
    color: #e69216;
  }
  .tip {
    padding-left: 86px;
    color: #8f8f8f;
  }
  .methods {
    font-weight: bold;
  }
  .icon.data {
    color: #999;
    font-size: 20px;
    display: inline-block;
  }
  .er-code {
    display: inline-block;
    width: 36px;
    height: 36px;
    line-height: 36px;
    border: 1px solid #169bd4;
    padding-left: 3px;
    border-radius: 6px;
    margin-left: 10px;
    .icon {
      font-size: 30px;
      color: #169bd4;
    }
  }
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
    text-align: right;
  }
  .btn-infos {
    margin-left: 10px;
    width: 110px;
    height: 36px;
    color: #169bd4;
    border: 1px solid #169bd4;
    background-color: transparent;
    cursor: pointer;
  }
}
</style>
