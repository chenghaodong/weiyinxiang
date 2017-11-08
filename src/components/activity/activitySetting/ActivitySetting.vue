<template>
  <div class="row">
    <div class="sidebar">
      <p class="text-center tag">我是会议名称</p>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-btn block href="#" v-b-toggle.accordion1 variant="info" class="text-left">
            <i class="icon iconfont">&#xe67f;</i> 设置
          </b-btn>
        </b-card-header>
        <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <ul class="nav nav-sidebar">
              <router-link :to="{name: 'basic'}" tag="li"><a>基础设置</a></router-link>
              <router-link :to="{name: 'wechat'}" tag="li"><a>绑定微信公众号</a></router-link>
              <router-link :to="{name: 'screen'}" tag="li"><a>大屏设置</a></router-link>
              <router-link :to="{name: 'navigation'}" tag="li"><a>导航设置</a></router-link>
            </ul>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-btn block href="#" v-b-toggle.accordion2 variant="info" class="text-left">
            <i class="icon iconfont">&#xe637;</i> 应用管理
          </b-btn>
        </b-card-header>
        <b-collapse id="accordion2" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <ul class="nav nav-sidebar">
              <router-link :to="{name: 'wechat-signin'}" tag="li"><a>签到</a></router-link>
              <router-link :to="{name: 'wechat-wall'}" tag="li"><a>微信墙</a></router-link>
              <router-link :to="{name: 'vote'}" tag="li"><a>投票</a></router-link>
              <router-link :to="{name: 'enrol'}" tag="li"><a>报名</a></router-link>
              <router-link :to="{name: 'shake'}" tag="li"><a>摇一摇</a></router-link>
            </ul>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-btn block href="#" v-b-toggle.accordion3 variant="info" class="text-left">
            <i class="icon iconfont">&#xe756;</i> 常见问题</b-btn>
        </b-card-header>
      </b-card>
      <div class="text-center btn-list">
        <router-link :to="{name: 'activityList'}" tag="button" class="back-btn">返回活动列表</router-link>
      </div>
    </div>
     <div class="main">
      <router-view></router-view>
     </div>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style  lang="scss" scoped>
.row {
  background: #f2f2f2;
  top: 44px;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
}
.sidebar {
  width: 186px;
  position: fixed;
  top: 44px;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: block;
  padding: 0px;
  overflow-x: hidden;
  overflow-y: auto; 
  background-color: #001520;
  border-right: 1px solid #001520;
  font-size: 14px;

  .card {
    background-color: #00293d;
    border: none;
    margin-bottom: 0 !important;
    .card-header{
      padding: 0;
    }
    .card-body {
      padding: 0;
    }
  }
  .btn-info {
    color: #fff;
    font-size: 14px;
    background-color: #002336 !important;
    border: none;
    text-align: left;
    box-shadow: none;
    &:active {
      box-shadow: none;
    }
    .icon{
      margin-right: 10px;
    }
  }
  .nav-sidebar {
    margin-bottom: 0px;
    border: none;

    >li {
      border-left: 4px solid #00293d;
      cursor: pointer;
      width: 100%;
      height: 40px;
      line-height: 40px;

      &:hover, &.active, &.router-link-active{
        border-left: 4px solid #1e96d5;
        background-color: #004467;
      }
      >a {
        padding-left: 56px;
        color: #94a3af;
        font-weight: bold;
        background-color: transparent;
        width: 100%;
        height: 40px;
        display: block;
      }
      >a:focus, >a:hover{
        text-decoration: none;
        background-color: transparent;
      }
    }
  }
  .tag{
    color: #fff;
    font-size: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .btn-list {
    margin-top: 24px;
    .back-btn {
      width: 140px;
      height: 36px;
      background: transparent;
      border: 1px solid #218cdf;
      border-radius: 6px;
      color: #218cdf;
      font-size: 16px;
    }
  }
}
.main {
  padding-right: 30px;
  padding-left: 0;
  margin-left: 226px;
  margin-top: 10px;
  width: 100%;
}
</style>
