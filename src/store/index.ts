import Vue from "vue";
import Vuex from "vuex";
import { ModuleUserAuthentication } from "./modules/ModulesUserAuthentication";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    moduleUserAuthentication: ModuleUserAuthentication,
  },
});
