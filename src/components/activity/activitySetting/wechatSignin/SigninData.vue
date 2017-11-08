<template>
  <div class="data">
    <div class="search">
      <div class="total">
        <span>总签到人数</span>
        <span class="customer-color">5000</span>
      </div>
      <div class="search-group">
        <div class="input-group">
          <span>用户名称</span>
          <input type="text" class="form-control key-input" placeholder="请输入公司名称" />
        </div>
        <div class="input-group">
          <span>手机号</span>
          <input type="text" class="form-control key-input" placeholder="请输入公司名称" />
        </div>
        <button class="btn btn-search" type="button">搜索</button>
      </div>
    </div>
    <div class="table-row select-row">
      <div class="checkall">
        <input type="checkbox" @change="selectAll"> 全选
      </div>
      <button class="table-btn customer-color export">导出</button>
      <button class="table-btn customer-color">删除</button>
    </div>
    <div class="table">
      <b-table striped hover bordered  :fields="fields" :items="list">
        <template slot="checked" scope="data">
          <input type="checkbox" @change="selectAll">
        </template>
        <template slot="other" scope="data">
          <a class="customer-color">
            <i class="icon iconfont">&#xe672;</i> 设置
          </a>
        </template>
      </b-table>
      <Pagenation v-if="list.length>0" :total="100" :size="10" :page="5" @changePage="changePages"></Pagenation>
    </div>
  </div>
</template>

<script>
import Pagenation from '@/components/common/Pagenation';
export default {
  name: 'signindata',
  components: {
    Pagenation
  },
  data() {
    return {
      fields: [
        {
          key: 'checked',
          label: '<input type="checkbox" checked>',
          class: 'text-center'
        },
        {
          key: 'name',
          label: '姓名',
          class: 'text-center'
        },
        {
          key: 'companyName',
          label: '公司名称'
        },
        {
          key: 'phone',
          label: '电话号码',
          class: 'text-center'
        },
        {
          key: 'email',
          label: '邮箱'
        },
        {
          key: 'other',
          label: '其他',
          class: 'text-center'
        }
      ],
      list: [
        { name: '这是效力', companyName: '谁的公司是公司', phone: '13432147321', email: 'tesr@cc.com' },
        { name: '这是谁呢？', companyName: '谁的公司是公司', phone: '13432147321', email: 'tesfdsafdsafdsafr@cc.com' },
        { name: '我也不知道是谁', companyName: '谁的fdsfdsafdsa公司是公司', phone: '13432147321', email: 'tesr@cfdsfc.com' },
        { name: '这是fdsafdsa小王', companyName: '谁的公司fdsafdsafdsa是公司', phone: '13432147321', email: 'tesr@cc.cddddom' }
      ]
    };
  },
  methods: {
    selectAll() {
      console.log('选中');
    },
    changePages(page) {
      console.log(page);
    }
  }
};
</script>

<style lang="scss" scoped>
.data {
  margin-top: 10px;
  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    .total {}
    .search-group {
      display: flex;
      align-items: center;
      .input-group {
        display: flex;
        align-items: center;
        margin-right: 10px;
        span {
          margin-right: 10px;
        }
        input {
          border-radius: 6px;
        }
      }
      .btn-search {
        margin-left: 10px;
        height: 36px;
        color: #169bd4;
        border: 1px solid #169bd4;
        background-color: transparent;
        cursor: pointer;
        display: block;
        padding-right: 43px;
        padding-left: 43px;
      }
    }
  }
  .table-row {
    display: flex;
    width: 100%;
    align-items: center;
    text-align: center;
    &.select-row {
      padding-top: 10px;
      padding-bottom: 10px;
      border: 1px solid #ccc;
      .checkall {
        display: flex;
        input {
          margin-top: 4px;
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

    .info {
      width: 40%;
      display: flex;
      justify-content: center;
      .checkall {
        margin-right: 16px;
        margin-left: 16px;
      }
    }
  }
  table {
    margin-bottom: 0;
  }
}
</style>
