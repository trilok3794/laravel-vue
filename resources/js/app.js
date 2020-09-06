require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import store from './modules/store';

Vue.use(VueRouter);

import Navbar from './components/pages/navbar';
import Footer from './components/pages/footer';
import Sidebar from './components/pages/sidebar';

Vue.component('navbar-component', Navbar);
Vue.component('footer-component', Footer);
Vue.component('sidebar-component', Sidebar);

import Dashboard from './components/dashboard';
import PostIndex from './components/posts/index';
import PostCreate from './components/posts/create';

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Dashboard,
      name: 'Dashboard'
    },
    {
      path: '/posts',
      component: PostIndex,
      name: 'PostIndex'
    },
    {
      path: '/posts/create',
      component: PostCreate,
      name: 'PostCreate'
    },
    {
      path: '/posts/edit/:id',
      component: PostCreate,
      name: 'PostEdit'
    },
  ]
});

const app = new Vue({
    el: '#app',
    store,
    router
});
