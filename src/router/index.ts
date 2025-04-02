import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue"; // Import RegisterPage

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage, // Thêm route cho trang đăng ký
  },
];

const router = new VueRouter({
  mode: "history", // Dùng mode "history" để bỏ dấu "#" trên URL
  routes,
});

export default router;
