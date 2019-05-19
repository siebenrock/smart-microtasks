import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allTasks: [],
  },
  getters: {
    getAllTasks: state => {
      return state.allTasks
    }
  },
  mutations: {
    setTasks (state, tasks) {
      state.allTasks = tasks;
    }
  },
  actions: {},
});
