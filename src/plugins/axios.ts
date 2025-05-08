import Vue from "vue";
import axios from "axios";
// Config Axios with baseURL is your backend
const api = axios.create({
  baseURL: "http://localhost:8080", // location backend http://localhost:8080
  timeout: 5000,
});
// Mount to call APIs
Vue.prototype.$axios = api;
export default api;
