import Vue from "vue";
import VueMeta from "vue-meta";

import IndexPage from "@/pages/Index";

import "./assets/styles/index.scss";
import "typeface-roboto";

Vue.config.productionTip = false;

Vue.use(VueMeta);

new Vue({
  render: (h) => h(IndexPage)
}).$mount("#app");
