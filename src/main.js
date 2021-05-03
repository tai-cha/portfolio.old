import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://taichan-portfolio.microcms.io/api/v1/'
axios.defaults.headers.common['X-API-KEY'] = "2cd8d5d2-1086-4683-8fbe-e8b83719a974"

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
