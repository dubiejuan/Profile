import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueRouter from 'vue-router'

import Profile from './components/Profile'
import Experience from './components/Experience'
import Proyects from './components/Proyects'
import Skills from './components/Skills'
import Info from './components/Info'



Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.component('v-icon', Icon)


const router = new VueRouter({
  routes: [
    { path: '/',
    redirect:'/profile'
   },
    { path: '/profile',
    name: 'profile',
    components: {
      profile:Profile
    }
   },
   { path: '/experience',
   name: 'experience',
   components: {
   experience: Experience}
  },
//   { path: '/proyects',
//   name: 'proyects',
//   components: {proyects:Proyects}
//  },
//  { path: '/skills',
//  name: 'skills',
//  components: {skills:Skills}
// },
// { path: '/contact',
// name: 'info',
// components: {info:Info}
// },
  ],
  mode:'history',
  // scrollBehavior: function(to, from, savedPosition) {
 
  //     return {x: 0, y: 0}
    
  // }
})




new Vue({
  store,
  axios,
  router,
  render: h => h(App),
}).$mount('#app')
