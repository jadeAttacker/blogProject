import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import reg from './components/reg';
import login from './components/login';
import content from './components/content';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/reg',
      name: 'reg',
      component: reg
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/content',
      name: 'content',
      component: content
    }
  ]
});
/* eslint-disable */