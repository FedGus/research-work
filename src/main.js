import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios' // we import axios from installed dependencies

Vue.config.productionTip = false;

Vue.use(axios) // we register axios globally

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
