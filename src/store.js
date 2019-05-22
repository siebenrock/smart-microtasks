import Vue from "vue";
import Vuex from "vuex";
import Task from "@/models/Task"
import { stat } from "fs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allTasks: [],
    address: null,
    lastTask: null,
  },
  getters: {
    getAllTasks: state => {
      return state.allTasks
    },
    getWalletAddress: state => {
      return state.address
    },
    getLastTask: state => {
      return state.lastTask;
    }
  },
  mutations: {
    setTasks (state, tasks) {
      state.allTasks = tasks.map(t => new Task(t));
    },
    setWalletAddress (state, address) {
      state.address = new String(address);
    },
    setLastTask(state, lastTask) {
      state.lastTask = lastTask;
    }
  },
  actions: {},
});
