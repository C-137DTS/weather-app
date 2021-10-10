import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { VueSpinners } from "@saeris/vue-spinners";

Vue.use(VueSpinners);

import { formatDate } from "@/filters";

Vue.config.productionTip = false;

Vue.filter("date", formatDate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
