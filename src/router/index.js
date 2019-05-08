import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Settings from '@/pages/Settings';
import Profile from '@/components/users/Profile';
import Account from '@/components/users/Account'
import Security from '@/components/users/Security'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/settings',
      component: Settings,
      children: [{
        path: 'profile',
        component: Profile
      },
      {
        path: 'account',
        component: Account
      },
      {
        path: 'security',
        component: Security
      }]
    }
  ]
})