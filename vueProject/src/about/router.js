import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import day1 from './components/day1';
import day2 from './components/day2';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/day1',
      name: 'firstday',
      component: day1
    }, {
      path: '/day2',
      name: 'secondday',
      component: day2
    }
  ]
});
/* eslint-disable */