<template>
  <div class="order">
    <div class="table-row table-header">
      <div class="info">详情</div>
      <div class="status">状态</div>
      <div class="price">金额</div>
      <div class="type">类型</div>
      <div class="other">其他</div>
    </div>
    <div class="table-row select-row">
      <div class="checkall">
        <input type="checkbox" @change="selectAll"> 全选
      </div>
      <button class="table-btn customer-color export">导出</button>
      <button class="table-btn customer-color">删除</button>
    </div>
    <div v-for="(order, index) in orderList" :key="index" class="order-list">
      <div class="table-row table-th">
        <div class="info">
          <div class="checkall">
            <input type="checkbox" @change="selectAll">
          </div>
          <div class="date">2017年10月27日</div>
          <div class="order-num">订单号：234432432143214324321432</div>
        </div>
        <div class="status"></div>
        <div class="phone">
          <i class="icon iconfont">&#xe635;</i> 155555845266</div>
        <div class="other">支付方式
          <i class="icon iconfont alipay">&#xe63d;</i>
          <i class="icon iconfont wechat">&#xe65c;</i>
        </div>
      </div>
      <div class="table-row table-tr">
        <div class="info name-list">
          <div class="item" v-for="(item, index) in order.shopList" :key="index">
            <div class="checkall" :class="{last: index === order.shopList.length-1}">
            </div>
            <span class="name" :class="{last: index === order.shopList.length-1}">
              {{item.name}}
            </span>
          </div>
        </div>
        <div class="status" :style="{height: `${order.shopList.length*50}px`,'line-height': `${order.shopList.length*50}px`}">未完成</div>
        <div class="price" :style="{height: `${order.shopList.length*50}px`,'line-height': `${order.shopList.length*50}px`}">$1000</div>
        <div class="type" :style="{height: `${order.shopList.length*50}px`,'line-height': `${order.shopList.length*50}px`}">VIP</div>
        <div class="other">
          <i class="icon iconfont customer-color">&#xe672;</i> 取消</div>
      </div>
    </div>
    <Pagenation v-if="orderList.length>0" :total="100" :size="10" :page="5" @changePage="changePages"></Pagenation>
  </div>
</template>

<script>
import Pagenation from '@/components/common/Pagenation';
export default {
  name: 'not-completed',
  components: {
    Pagenation
  },
  data() {
    return {
      orderList: [
        {
          shopList: [{
            id: 111,
            name: '这是一个测试，这是一个测试这是一个测试'
          }, {
            id: 111444,
            name: '这是一个测试，这是一个测试这是一个测试gfdsgsdgsd'
          }, {
            id: 154353411,
            name: '这是一个测试，这是一个测试这是一个测试gsffdgdsgsd'
          }, {
            id: 15435454311,
            name: '这是一个测试，这是一个测试测一个测'
          }]
        }, {
          shopList: [{
            id: 111,
            name: '这是一个测试，这是一个测试这是一个测试'
          }, {
            id: 111444,
            name: '这是一个测试，这是一个测试这是一个测试gfdsgsdgsd'
          }, {
            id: 154353411,
            name: '这是一个测试，这是一个测试这是一个测试gsffdgdsgsd'
          }, {
            id: 15435454311,
            name: '这是一个测试，这是一个测试测一个测'
          }]
        }]
    };
  },
  methods: {
    selectAll() {
      console.log('select');
    },
    changePages(page) {
      console.log(page);
    }
  }
};
</script>

<style lang="scss" scoped>
.order {
  padding-top: 20px;
  .order-list {
    margin-bottom: 20px;
  }
  .table-row {
    display: flex;
    width: 100%;
    align-items: center;
    text-align: center;
    &.table-header {
      height: 44px;
      background-color: #fbfbfb;
      border: 1px solid #ccc;
      width: 100%;
      font-weight: bold;
    }
    &.select-row {
      margin-top: 10px;
      margin-bottom: 10px;
      .checkall {
        display: flex;
        input {
          margin-left: 16px;
          margin-right: 10px;
        }
      }
      .table-btn {
        border: 1px solid #1e96d5;
        width: 68px;
        height: 26px;
        background-color: transparent;
        margin-right: 10px;
        border-radius: 2px;
        &.export {
          margin-left: 24px;
        }
      }
    }
    &.table-th {
      height: 50px;
      color: #333;
      background-color: #e8f8ff;
      border: 1px solid #ecf6f9;
      width: 100%;
      .info {
        justify-content: flex-start;
        .date {
          font-weight: bold;
          margin-left: 24px;
          margin-right: 50px;
        }
      }
    }
    &.table-tr {
      border: 1px solid #ecf6f9;
      .name-list {
        display: block;
        border-right: 1px solid #ecf6f9;
        .item {
          display: flex;
          .checkall {
            width: 48px;
            min-width: 48px;
            margin: 0;
            border-bottom: 1px solid #ecf6f9;
            border-right: 1px solid #ecf6f9;
            &.last {
              border-bottom: none;
            }
          }
          .name {
            width: 100%;
            height: 50px;
            line-height: 50px;
            padding-left: 74px;
            text-align: left;
            border-bottom: 1px solid #ecf6f9;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            &.last {
              border-bottom: none;
            }
          }
        }
      }
      .status {
        color: #ccc;
        border-right: 1px solid #ecf6f9;
      }
      .price {
        color: #000;
        font-weight: bold;
        border-right: 1px solid #ecf6f9;
      }
      .type {
        color: #ee7b47;
        border-right: 1px solid #ecf6f9;
      }
      .other {
        border-right: 1px solid #ecf6f9;
      }
      .phone {
        border-right: 1px solid #ecf6f9;
      }
    }
    .info {
      width: 40%;
      display: flex;
      justify-content: center;
      .checkall {
        margin-right: 16px;
        margin-left: 16px;
      }
    }
    .status {
      width: 10%;
    }
    .price {
      width: 30%;
    }
    .type {
      width: 15%;
    }
    .other {
      width: 15%;
      .alipay {
        color: #02a9f1;
      }
      .wechat {
        color: #41b035;
      }
    }
    .phone {
      width: 35%;
    }
  }
}
</style>
