import Vue from 'vue';
import Vuex from 'vuex';
import componentsModule from './modules/components/index';
import infoModule from './modules/components/info';
import modalModule from './modules/components/modal';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    componentsStore: componentsModule,
    infoStore:infoModule,
    modalStore:modalModule
  },
});