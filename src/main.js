import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import index from './index'

/* eslint-disable no-new */
Vue.use(MintUI)
new Vue({
  el: '#app',
  template: '<index/>',
  components: { index }
})

/*
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: user}
  ]
})
*/
