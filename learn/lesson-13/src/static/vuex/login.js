import Vue from "vue";
import Vuex from "vuex";
import { setCookie, getCookie, removeToken } from "@/utils/auth";
Vue.use(Vuex);
const state = {
  user: "",
  token: getCookie()
};
const getters = {
  user: state => state.user
};
const mutations = {
  TOKEN: (state, token) => {
    state.user = token;
  },
  LOGOUT (state) {
    removeCookie();
    state.token = null;
  }
};
const actions = {
  Login ({ commit }, user) {
    setCookie(user);
    commit("TOKEN", user);
  },
  LoginOut ({ commit }) {
    commit("LOGOUT");
  }
};
const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations
});

export default store;
