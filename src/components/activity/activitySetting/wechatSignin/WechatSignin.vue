<template>
  <div>
    <p class="page-header">
      <a class="customer-color">活动列表 > </a>活动管理
    </p>
    <div class="setting">
      <p class="title padding-bottom">
        <i class="icon iconfont"> &#xe647;</i> 签到设置
      </p>
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
  name: 'wechat-signin',
  created() {
    if (this.$route.name === 'wechat-signin') {
      this.$router.replace({ name: 'basics' });
    }
  }
};
</script>

<style lang="scss" scoped>

.setting {
  .nav-tabs {
    border-color: #1e96d5;
    padding-left: 16px;
    height: 27px;
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
          background-color: #fff;
        }
      }
    }
  }
}
</style>
