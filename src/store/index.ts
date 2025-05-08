import Vue from "vue";
import Vuex from "vuex";
import { ModuleUserAuthentication } from "./modules/ModulesUserAuthentication";
import { ModuleAlertCustom } from "./modules/ModuleAlertCustom";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    moduleUserAuthentication: ModuleUserAuthentication,
    moduleAlertCustom: ModuleAlertCustom,
  },
});
