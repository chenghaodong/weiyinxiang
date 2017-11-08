<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top" style="dipaly: none;">
      <div class="container-fluid">
        <div class="navbar-header">
          <img src="../assets/images/logo.png" alt="">
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <router-link :to="{name: 'activity'}" tag="li"><a href="#">我的活动</a></router-link>
            <router-link :to="{name: 'recharge'}" tag="li"><a href="#">充值中心</a></router-link>
            <router-link :to="{name: 'demo'}" tag="li"><a href="#">演示Demo</a></router-link>
            <router-link :to="{name: 'operation'}" tag="li"><a href="#">操作手册</a></router-link>
            <li class="active"><a href="#" class="user"><img src="../assets/images/user.png" alt="" class="user-logo">慕容千千</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <b-navbar toggleable="md" type="dark" class="navbar-fixed-top">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand><img src="../assets/images/logo.png" alt=""></b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{name: 'activity'}">我的活动</b-nav-item>
          <b-nav-item :to="{name: 'recharge'}">充值中心</b-nav-item>
          <b-nav-item :to="{name: 'demo'}">演示Demo</b-nav-item>
          <b-nav-item :to="{name: 'operation'}">操作手册</b-nav-item>
          <b-nav-item class="user"><img src="../assets/images/user.png" alt="" class="user-logo">慕容千千</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  created() {
    if (this.$route.name === 'home') {
      this.$router.replace({ name: 'activity' });
    }
  },
  watch: {
    $route() {
      if (this.$route.name === 'home') {
        this.$router.replace({ name: 'activity' });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-fixed-top {
  border: 0;
  height: 44px;
  min-height: 44px;
  background-color: #1e96d5;

  .container-fluid {
    padding-left: 0;
    padding-right: 0;

    .navbar-header {
      width: 186px;
      height: 44px;
      background-color: #1979ab;
      img {
        height: 44px;
      }
    }
    .navbar-nav {
      padding-right: 80px;
      li{
        transition: all .2s ease-in-out;
        a {
          padding-top: 11px;
          padding-bottom: 11px;
          font-size: 16px;
          color: #fff;
          .user-logo {
            height: 34px;
            border-radius: 50%;
            margin-right: 5px;
          }
        }
        &:hover, &.active, &.router-link-active{
          a , a:hover, a:focus{
            background-color: #1979ab;
          }
        }
        .user {
          padding-top: 5px;
          padding-bottom: 5px;
          font-size: 14px;
        }
      }
    }
  }
}
.navbar-fixed-top {
  border: 0;
  height: 44px;
  min-height: 44px;
  background-color: #1e96d5;
  padding: 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  .navbar-brand {
    width: 186px;
    height: 44px;
    background-color: #1979ab;
    padding: 0;
    margin-right: 0;
    img {
      height: 44px;
    }
  }
  .navbar-collapse {
    height: 44px;
  }
  .navbar-nav {
    padding-right: 80px;
    height: 44px;
    li{
      transition: all .2s ease-in-out;
      a {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 16px;
        color: #fff;
        &:hover, &:focus, &.active, &.router-link-active{
          background-color: #1979ab;
        }
      }
      &.user {
        a {
          padding-top: 5px;
          padding-bottom: 5px;
          font-size: 14px;
          .user-logo {
            height: 34px;
            border-radius: 50%;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
.container-main {
  padding-top: 44px;
}
</style>
