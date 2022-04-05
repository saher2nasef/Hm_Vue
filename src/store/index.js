import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import resourceAr from "../Data/resourceAr.json";

export default new Vuex.Store({
  state: {
    Islogin: false,
    The_State: "Admin",
    resource: resourceAr,
    Token: "",
    IdUser: "",
  },
  mutations: {},
  actions: {},
  modules: {},
});
