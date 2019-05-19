import Vue from "vue";
import Vuex from "vuex";
import Task from "@/models/Task"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allTasks: [],
    address: null
  },
  getters: {
    getAllTasks: state => {
      return state.allTasks
    },
    getWalletAddress: state => {
      return state.address
    },
  },
  mutations: {
    setTasks (state, tasks) {
      state.allTasks = tasks.map(t => new Task(t));
    },
    setWalletAddress (state, address) {
      state.address = new String(address);
    }
  },
  actions: {},
});
