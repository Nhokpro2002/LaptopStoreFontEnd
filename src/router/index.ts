import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProductPage from "../views/ProductPage.vue";
import LoginPage from "../views/LoginPage.vue";
import AdminPage from "../views/AdminPage.vue";
import ProductPageAdmin from "../components/ProductPageAdmin.vue";
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
    path: "/dashboardAdmin",
    name: "dashboardAdmin",
    component: DashboardAdmin,
  },
  {
    path: "/productPageByCategory",
    name: "productPageByCategory",
    component: ProductPageByCategory,
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
        path: "newOrder",
        name: "newOrder",
        component: NewOrder,
      },
      {
        path: "/customerInfoPage",
        name: "customerInfoPage",
        component: CustomerInfoPage,
      },
    ],
  },
  {
    path: "/productAdmin",
    name: "productAdmin",
    component: ProductPageAdmin,
  },
  {
    path: "/userAdmin",
    name: "userAdmin",
    component: AllUser,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminPage,
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
