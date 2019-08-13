import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import 'normalize.css/normalize.css'

Vue.config.productionTip = false
Vue.prototype.$axios=axios
axios.defaults.baseURL = "http://localhost:8080"  // 默认域名
axios.defaults.headers= {'Content-Type':'Application/json'} //  默认请求头
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
