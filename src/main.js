import Vue from "vue";
import VueAnalytics from "vue-analytics";
import App from "./App.vue";
import "./registerServiceWorker";
import router from './router'
import { i18n } from '@/plugins/i18n';

Vue.config.productionTip = false;
Vue.use(VueAnalytics, { id: 'UA-32598219-9', router, disabled: false, });

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
