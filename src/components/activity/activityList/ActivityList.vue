<template>
  <div class="activity-list">
    <div class="title">
      <h4>
        <span class="glyphicon glyphicon-cog icon"></span>
        活动列表
      </h4>
      <div>
        <button class="btn btn-info" @click="modalShow = !modalShow"><span class="glyphicon glyphicon-cog icon"></span>创建我的活动</button>
      </div>
    </div>
    <div v-if="activityList.length>0" class="item" v-for="(item, index) in activityList" :key="index">
      <div class="left">
        <p class="name">{{item.name}}</p>
        <p>活动时间：{{item.date}}</p>
        <p>活动属性：{{item.attribute}}</p>
        <p>活动地点：{{item.address}}</p>
      </div>
      <div class="center">
        <div class="user flex1">
          <p>上墙人数（人）</p>
          <h3 class="total">{{item.person}}</h3>
        </div>
        <div class="message flex1">
          <p>上墙消息（条）</p>
          <h3 class="total">{{item.message}}</h3>
        </div>
      </div>
      <div class="right">
        <div class="manage flex1">
          <router-link :to="{name: 'activitySetting', params: {id: item.id}}" tag="a">
            <div class="btn-bg1">
              <p><i class="icon iconfont">&#xe60c;</i></p>
              <p>活动管理</p>
            </div>
          </router-link>
        </div>
        <div class="screen flex1">
          <div class="btn-bg2">
            <p><i class="icon iconfont">&#xe60c;</i></p>
            <p>查看屏幕</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="activityList.length>0" class="text-center">
      <b-pagination size="md" align="center" :total-rows="100" v-model="currentPage" :per-page="10">
      </b-pagination>
    </div>
    <b-modal v-model="modalShow">
        Hello From Modal!
    </b-modal>
    <div class="no-data" v-if="!activityList || activityList.length === 0">
      <p>
        <i class="icon iconfont">&#xe60c;</i>
        此处空空如野，快去创建活动
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'activityList',
  data() {
    return {
      activityList: [],
      currentPage: 1,
      modalShow: false
    };
  },
  created() {
    this.activityList = [{
      id: 12,
      name: '这是一个轰动名称',
      date: '2017年2月30日',
      attribute: '免费',
      address: '河北市石家庄新华社国际会展中心',
      person: 10000,
      message: 2000
    }, {
      id: 22,
      name: '这是第二个个轰动名称',
      date: '2017年12月30日',
      attribute: '免费',
      address: '河北市石家庄新华社国际会展中心',
      person: 110000,
      message: 20002
    }, {
      id: 222,
      name: '这是一个轰动名称',
      date: '2017年12月30日',
      attribute: '免费',
      address: '河北市石家庄新华社国际会展中心b栋',
      person: 100030,
      message: 20004
    }];
  },
  methods: {
    showModal() {
      this.$refs.myModalRef.show();
    },
    hideModal() {
      this.$refs.myModalRef.hide();
    }
  }
};
</script>

<style  lang="scss" scoped>
.activity-list {
  padding: 10px 60px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
  }
  .item {
    border: 1px solid #ccc;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .left {
      border-right: 1px solid #ccc;
      width: 45%;
      padding-left: 20px;
      .name {
        font-weight: bold;
      }
    }
    .center {
      border-right: 1px solid #ccc;
      width: 35%;
      display: flex;
    }
    .right {
      width: 20%;
      display: flex;
    }
  }
  .flex1 {
    text-align: center;
    flex: 1;
    .total {
      font-weight: bold;
      font-size: 24px;
      color: #7b7b7b;
    }
  }
  .btn-bg1 {
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 68px;
    width: 68px;
    .icon {
      font-size: 24px;
    }
  }
  .btn-bg2 {
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 68px;
    width: 68px;
    .icon {
      font-size: 24px;
    }
  }
  .no-data {
    border: 1px solid #ccc;
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
  }
}
</style>
