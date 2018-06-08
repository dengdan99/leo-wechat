import Vue from 'vue'
import App from './App'
import { Toast } from 'mint-ui'
import VueScoket from 'vue-socket.io'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$toast = Toast
Vue.use(VueScoket, 'http://127.0.0.1:3000/')

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
