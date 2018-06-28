import Vue from 'vue';
import App from './app.vue';
import router from './router/router'
import store from './vuex/store'
import './style.css'
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})