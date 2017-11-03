import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Signin from '@/components/user/Signin';
import Recharge from '@/components/recharge/Recharge';
import Demo from '@/components/demo/Demo';
import Operation from '@/components/operation/Operation';
import Activity from './activity';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      ...Activity,
      {
        path: 'recharge',
        name: 'recharge',
        component: Recharge
      }, {
        path: 'demo',
        name: 'demo',
        component: Demo
      }, {
        path: 'operation',
        name: 'operation',
        component: Operation
      }]
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  }
];
const router = new Router({
  routes: routes
});

router.beforeEach((to, from, next) => {
  const test = false;
  console.log(test);
  if (test && to.name !== 'signin') {
    return next('/signin');
  }
  next();
});

export default router;
