import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
//import VuetifyDemo from "../views/VuetifyDemo.vue";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    //component: HomeView,
    component: HomePage,
    //component: VuetifyDemo,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
