import Vue from 'vue'
import App from './App'
import router from './router'
import 'css/reset.css'
import imageLazyload from 'lib'
Vue.config.productionTip = false

Vue.use(imageLazyload,{
  loading:'default'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
