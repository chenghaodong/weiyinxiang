/* 我的活动 */
import Activity from '@/components/activity/Activity';
import ActivityList from '@/components/activity/activityList/ActivityList';
import ActivitySetting from '@/components/activity/activitySetting/ActivitySetting';
import Basic from '@/components/activity/activitySetting/Basic';
import Wechat from '@/components/activity/activitySetting/Wechat';
import Screen from '@/components/activity/activitySetting/Screen';
import Navigation from '@/components/activity/activitySetting/Navigation';
import WechatSignin from '@/components/activity/activitySetting/wechatSignin/WechatSignin';
import Basics from '@/components/activity/activitySetting/wechatSignin/Basics';
import HowSignin from '@/components/activity/activitySetting/wechatSignin/HowSignin';
import SigninData from '@/components/activity/activitySetting/wechatSignin/SigninData';
import WechatWall from '@/components/activity/activitySetting/WechatWall';
import Vote from '@/components/activity/activitySetting/Vote';
import Enrol from '@/components/activity/activitySetting/Enrol';
import Shake from '@/components/activity/activitySetting/Shake';

export default [{
  path: 'activity',
  name: 'activity',
  component: Activity,
  children: [
    {
      path: 'list',
      name: 'activityList',
      component: ActivityList
    }, {
      path: 'setting/:id',
      name: 'activitySetting',
      component: ActivitySetting,
      children: [
        {
          path: 'basic',
          name: 'basic',
          component: Basic
        }, {
          path: 'wechat',
          name: 'wechat',
          component: Wechat
        }, {
          path: 'screen',
          name: 'screen',
          component: Screen
        }, {
          path: 'navigation',
          name: 'navigation',
          component: Navigation
        }, {
          path: 'wechat-signin',
          name: 'wechat-signin',
          component: WechatSignin,
          children: [
            {
              path: 'basics',
              name: 'basics',
              component: Basics
            }, {
              path: 'how',
              name: 'how',
              component: HowSignin
            }, {
              path: 'data',
              name: 'data',
              component: SigninData
            }
          ]
        }, {
          path: 'wechat-wall',
          name: 'wechat-wall',
          component: WechatWall
        }, {
          path: 'vote',
          name: 'vote',
          component: Vote
        }, {
          path: 'enrol',
          name: 'enrol',
          component: Enrol
        }, {
          path: 'shake',
          name: 'shake',
          component: Shake
        }
      ]
    }
  ]
}];
