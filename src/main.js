import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'



Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.component('v-icon', Icon)




new Vue({
  store,
  axios,
  render: h => h(App),
}).$mount('#app')
