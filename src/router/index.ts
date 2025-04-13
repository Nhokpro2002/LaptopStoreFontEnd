import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProductPage from "../views/ProductPage.vue";
import LoginPage from "../views/LoginPage.vue";
import TestPage from "../views/TestPage.vue";

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
    component: RegisterPage,
  },
  {
    path: "/products",
    name: "products",
    component: ProductPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/test",
    name: "test",
    component: TestPage,
  },
];

const router = new VueRouter({
  mode: "history", // Dùng mode "history" để bỏ dấu "#" trên URL
  routes,
});

export default router;
