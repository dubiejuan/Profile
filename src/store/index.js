import Vue from 'vue';
import Vuex from 'vuex';
import componentsModule from './modules/components/index';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    componentsStore: componentsModule,
  },
});