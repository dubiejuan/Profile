import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueParticles from 'vue-particles'
import VueRouter from 'vue-router'
import Info from './components/Info'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Proyects from './components/Proyects'

Vue.use(VueRouter)
Vue.use(VueParticles)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.component('v-icon', Icon)



const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: "active",
  routes: [
    { path: '/contact', name:'info', component: Info },
    { path: '/profile', name:'profile' ,component: Profile },
    { path: '/experience', name:'experience' ,component: Experience },
    { path: '/skills', name:'skills', component: Skills },
    { path: '/proyects', name:'proyects' ,component: Proyects },
    { path: '*', redirect: '/profile' },
    { path: '/', redirect: '/profile' }
  ]
})


new Vue({
  store,
  axios,
  router,
  render: h => h(App),
}).$mount('#app')
