import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Signin from '@/components/user/Signin';
import Recharge from '@/components/recharge/Recharge';
import NotCompleted from '@/components/recharge/NotCompleted';
import Completed from '@/components/recharge/Completed';
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
        component: Recharge,
        children: [
          {
            path: 'not-completed',
            name: 'not-completed',
            component: NotCompleted
          }, {
            path: 'completed',
            name: 'completed',
            component: Completed
          }
        ]
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
  if (test && to.name !== 'signin') {
    return next('/signin');
  }
  next();
});

export default router;
