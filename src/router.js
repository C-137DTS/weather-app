import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Location from "@/views/Location";

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
      path: "/:query",
      name: "Location",
      component: Location,
    },
  ],
});
