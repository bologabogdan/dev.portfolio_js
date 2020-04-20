import Vue from "vue";
import router from "./router";
import App from "./App";
import i18n from "./locale";
import "./assets/css/tailwind.css";
const VuePageTransition = require("vue-page-transition");
Vue.use(VuePageTransition);
Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
