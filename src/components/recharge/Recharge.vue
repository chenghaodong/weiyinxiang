<template>
  <div class="recharge">
    <div class="user">
      <div class="left">
        <div class="user-logo">
          <img src="../../assets/images/user.png" alt="">
        </div>
        <div class="user-info">
          <p class="name">{{user.name}}</p>
          <p>注册时间：{{user.date}}</p>
          <p>充值记录：{{user.chargeCount}}次</p>
        </div>
      </div>
      <div class="center">
        <p class="count-name">账户余额</p>
        <h3 class="total">{{user.count}}</h3>
        <button class="btn btn-info">充值</button>
      </div>
    </div>
    <div class="setting">
      <p class="title padding-bottom">
        <span class="glyphicon glyphicon-list-alt"></span> 基础设置
      </p>
      <ul id="myTab" class="nav nav-tabs">
        <router-link :to="{name: 'not-completed'}" tag="li">
          <a>未完成订单</a>
        </router-link>
        <router-link :to="{name: 'completed'}" tag="li">
          <a>已完成订单</a>
        </router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recharge',
  data() {
    return {
      user: {
        id: 222,
        name: '慕容千千',
        date: '2017年12月30日',
        chargeCount: 10,
        count: 1000
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.recharge {
  .user {
    padding: 20px 80px 40px;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;

    .left {
      border-right: 1px solid #ccc;
      width: 45%;
      padding-left: 20px;
      display: flex;
      align-items: center;
      .user-logo {
        margin-right: 10px;
        img {
          border-radius: 50%;
          width: 80px;
          height: 80px;
        }
      }
      .user-info {
        .name {
          font-weight: bold;
          font-size: 16px;
        }
      }
    }
    .center {
      width: 35%;
      display: flex;
      align-items: center;
      justify-content: center;
      .count-name {
        font-size: 16px;
        font-weight: bold;
      }
      .total {
        margin: 0;
        padding-left: 5px;
        padding-right: 40px;
        color: #1e96d5;
        font-size: 16px;
        font-weight: bold;
      }
      .btn-info {
        width: 100px;
        height: 30px;
        background-color: #1e96d5;
        padding: 0;
        cursor: pointer;
      }
    }
  }
  .setting {
    padding-left: 80px;
    padding-right: 80px;
    border: none;
    .nav-tabs {
      height: 27px;
      li {
        a {
          color: #999;
          border: none;
          margin: 0;
          border-bottom: 1px solid #ccc;
          padding: 6px 24px;
          height: 32px;
          &:hover {
            background-color: transparent;
            border-bottom: 2px solid #1e96d5;
            color: #1e96d5;
          }
          &:focus {
            background-color: transparent;
          }
        }
        &.router-link-active {
          a,
          a:focus,
          a:hover {
            color: #1e96d5;
            border: none;
            border-bottom: 2px solid #1e96d5;
          }
        }
      }
    }
  }
}
</style>
