<template>
  <div>
    <p class="page-header">
      <a>活动列表 > </a>活动管理</p>
    <div class="setting">
      <p class="title padding_bottom">
        <span class="glyphicon glyphicon-list-alt"></span> 签到设置</p>
      <ul id="myTab" class="nav nav-tabs">
        <router-link :to="{name: 'how'}" tag="li">
          <a>如何签到</a>
        </router-link>
        <router-link :to="{name: 'basics'}" tag="li">
          <a>基本设置</a>
        </router-link>
        <router-link :to="{name: 'data'}" tag="li">
          <a>签到数据</a>
        </router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wechat-signin'
};
</script>

<style lang="scss" scoped>
.page-header {
  margin-top: 0;
  margin-bottom: 0;
  border: none;
}

.setting {
  margin-bottom: 30px;
  background-color: #fff;
  border: 1px solid #ececec;
  padding: 25px;
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .nav-tabs {
    border-color: #1e96d5;
    padding-left: 16px;
    li {
      a {
        color: #666;
        border: 1px solid #ccc;
        border-bottom-color: #1e96d5;
        margin-right: 10px;
        padding: 6px 15px;
        height: 32px;
        &:hover {
          border-color: #1e96d5;
          border-bottom-color: transparent;
          background-color: #fff;
          color: #1e96d5;
        }
        &:focus {
          background-color: #fff;
        }
      }
      &.router-link-active {
        a,
        a:focus,
        a:hover {
          color: #1e96d5;
          border-color: #1e96d5;
          border-bottom-color: transparent;
          border-bottom: none;
        }
      }
    }
  }
}
</style>
