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
  padding: 10px 60px;
  background-color: #f9f9f9;
  .user {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

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
      }
    }
  }
}
</style>
