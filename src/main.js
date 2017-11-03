// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// IE9, IE10 and IE11 需要
import 'babel-polyfill';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import router from './router';
import(/* webpackChunkName: "styles" */ './styles/common.scss');
import(/* webpackChunkName: "styles" */ './assets/fonts/iconfont.css');

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
