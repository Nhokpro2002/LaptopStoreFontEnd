import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProductPage from "../views/ProductPage.vue";
import LoginPage from "../views/LoginPage.vue";
import AdminPage from "../views/AdminPage.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ProductPageAdmin from "../components/ProductPageAdmin.vue";
import ShoppingCartPage from "../views/ShoppingCartPage.vue";
import NewOrder from "../components/NewOrder.vue";
import AllUser from "../components/AllUser.vue";
import AddProductAdminComponent from "../components/AddProductAdminComponent.vue";
import ProductPageByCategory from "../views/ProductPageByCategory.vue";
import CustomerInfoPage from "../views/CustomerInfoPage.vue";
import DashboardAdmin from "../components/DashboardAdmin.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
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
    path: "/footer",
    name: "footer",
    component: FooterComponent,
  },
  {
    path: "/shoppingCart",
    name: "shoppingCart",
    component: ShoppingCartPage,
  },
  {
    path: "/newOrder",
    name: "newOrder",
    component: NewOrder,
  },
  {
    path: "/addNewProductAdmin",
    name: "addNewProductAdmin",
    component: AddProductAdminComponent,
  },
  {
    path: "/customerInfoPage",
    name: "customerInfoPage",
    component: CustomerInfoPage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
