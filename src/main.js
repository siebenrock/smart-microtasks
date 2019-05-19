import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.config.silent = true;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
