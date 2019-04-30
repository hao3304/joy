import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "iview";
import ls from "@/libs/ls";
import VueParticles from "vue-particles";
import "iview/dist/styles/iview.css";
import "@/style/index.less";
Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(VueParticles);
Vue.prototype.$ls = ls;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
