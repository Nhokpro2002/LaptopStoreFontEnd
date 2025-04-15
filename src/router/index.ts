import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProductPage from "../views/ProductPage.vue";
import LoginPage from "../views/LoginPage.vue";
import TestPage from "../views/TestPage.vue";
import AdminPage from "../views/AdminPage.vue";
import FooterComponent from "../components/FooterComponent.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/homePage",
    name: "homePage",
    component: HomePage,
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
  {
    path: "/admin",
    name: "admin",
    component: AdminPage,
  },
  {
    path: "/footer",
    name: "footer",
    component: FooterComponent,
  },
];

const router = new VueRouter({
  mode: "history", 
  routes,
});

export default router;
