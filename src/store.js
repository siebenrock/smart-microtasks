import Vue from "vue";
import Vuex from "vuex";
import Task from "@/models/Task"

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
      state.allTasks = tasks.map(t => new Task(t));

    }
  },
  actions: {},
});
