import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import index from './index';
import routes from './router.js';

/* eslint-disable no-new */
Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  mode: 'history',
  routes
})
const app = new Vue({
  router
}).$mount('#app')
