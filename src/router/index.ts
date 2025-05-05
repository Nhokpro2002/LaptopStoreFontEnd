import { decodeJwt } from "@/services/JwtService";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProductPage from "../views/ProductPage.vue";
import LoginPage from "../views/LoginPage.vue";
import AdminPage from "../views/AdminPage.vue";
import ProductPageAdminComponent from "../components/ProductPageAdminComponent.vue";
import ShoppingCartPage from "../views/ShoppingCartPage.vue";
import NewOrder from "../components/NewOrder.vue";
import AllUser from "../components/AllUser.vue";
import AddProductAdminComponent from "../components/AddProductAdminComponent.vue";
import ProductPageByCategory from "../views/ProductPageByCategory.vue";
import CustomerInfoPage from "../views/CustomerInfoPage.vue";
import DashboardAdmin from "../components/DashboardAdmin.vue";
import ChartWrapper from "../components/ChartWrapper.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/testChart",
    name: "testChart",
    component: ChartWrapper,
  },

  {
    path: "/home-page",
    name: "homePage",
    component: HomePage,
    children: [
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
      {
        path: "order",
        name: "order",
        component: NewOrder,
      },
      {
        path: "customerInfoPage",
        name: "customerInfoPage",
        component: CustomerInfoPage,
      },
      {
        path: "productPageByCategory",
        name: "productPageByCategory",
        component: ProductPageByCategory,
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
        component: ProductPageAdminComponent,
      },
      {
        path: "dashboardAdmin",
        name: "dashboardAdmin",
        component: DashboardAdmin,
      },
    ],
  },
  {
    path: "addNewProductAdmin",
    name: "addNewProductAdmin",
    component: AddProductAdminComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

//router.beforeEach((to, from, next) => {});

export default router;
