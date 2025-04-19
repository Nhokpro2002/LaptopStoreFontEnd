import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProductPage from "../views/ProductPage.vue";
import LoginPage from "../views/LoginPage.vue";
import TestPage from "../views/TestPage.vue";
import AdminPage from "../views/AdminPage.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ProductPageAdmin from "../components/ProductPageAdmin.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import NewOrder from "../components/NewOrder.vue";
import AllUser from "../components/AllUser.vue";

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
    path: "/productAdmin",
    name: "productAdmin",
    component: ProductPageAdmin,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminPage,
    children: [
      {
        path: "allUser",
        component: AllUser,
      },
    ],
  },
  {
    path: "/footer",
    name: "footer",
    component: FooterComponent,
  },
  {
    path: "/productPageAdmin",
    name: "productPageAdmin",
    component: ProductPageAdmin,
  },
  {
    path: "/shoppingCart",
    name: "shoppingCart",
    component: ShoppingCart,
  },
  {
    path: "/newOrder",
    name: "newOrder",
    component: NewOrder,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
