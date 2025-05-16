import { decodeJwt } from "@/services/JwtService";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProductPage from "../views/ProductPage.vue";
import LoginPage from "../views/LoginPage.vue";
import AdminPage from "../views/AdminPage.vue";
import ProductPageAdmin from "../views/ProductPageAdmin.vue";
import ShoppingCartPage from "../views/ShoppingCartPage.vue";
//import NewOrder from "../components/NewOrder.vue";
import AllUser from "../components/AllUser.vue";
import AddProductAdminComponent from "../components/AddProductAdminComponent.vue";
import CustomerAccountPage from "../views/CustomerAccountPage.vue";
import DashboardAdmin from "../components/DashboardAdmin.vue";
//import ImageUploadTest from "../views/ImageUploadTest.vue";
import ContentHomePage from "../components/ContentHomePage.vue";
import AboutAdminPage from "../views/AboutAminPage.vue";
import ResultPaymentPage from "../views/ResultPaymentPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  /*{
    path: "/facebook-callback",
    name: "FacebookCallback",
    component: FacebookCallback,
  }*/
  {
    path: "https://fea5-222-252-25-162.ngrok-free.app",
    name: "result-payment",
    component: ResultPaymentPage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  /*{
    path: "/test-upload-image",
    name: "test-upload-image",
    component: ImageUploadTest,
  },*/
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },

  {
    path: "/home-page",
    component: HomePage,
    /*beforeEnter: (to, from, next) => {
      const payloadInformation = decodeJwt();
      console.log(payloadInformation);
      if (payloadInformation.UserRole.includes("ROLE_CUSTOMER")) {
        next();
      } else {
        alert("You are not a CUSTOMER");
      }
    },*/
    children: [
      {
        path: "",
        name: "",
        component: ContentHomePage,
      },
      {
        path: "products",
        name: "products",
        component: ProductPage,
      },
      {
        path: "shopping-cart",
        name: "shoppingCart",
        component: ShoppingCartPage,
      },
      /*{
        path: "order",
        name: "order",
        component: NewOrder,
      },*/
      {
        path: "account",
        name: "customerAccountPage",
        component: CustomerAccountPage,
      },
    ],
  },

  {
    path: "/admin",
    name: "admin",
    component: AdminPage,
    beforeEnter: (to, from, next) => {
      const payloadInformation = decodeJwt();
      console.log(payloadInformation);
      if (payloadInformation.UserRole.includes("ROLE_ADMIN")) {
        next();
      } else {
        alert("You are not an ADMIN");
      }
    },
    children: [
      {
        path: "userAdmin",
        name: "userAdmin",
        component: AllUser,
      },
      {
        path: "productAdmin",
        name: "productAdmin",
        component: ProductPageAdmin,
      },
      {
        path: "dashboard",
        name: "dashboardAdmin",
        component: DashboardAdmin,
      },
      {
        path: "about",
        name: "aboutAdminPage",
        component: AboutAdminPage,
      },
    ],
  },
  {
    path: "/addNewProductAdmin",
    name: "addNewProductAdmin",
    component: AddProductAdminComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
