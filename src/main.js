import Vue from "vue";
import Vuesax from "vuesax";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";

Vue.use(Vuesax);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
