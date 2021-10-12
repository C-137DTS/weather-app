import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Error404 from "@/views/Error404";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/error404",
      name: "Error404",
      component: Error404,
    },
  ],
});
