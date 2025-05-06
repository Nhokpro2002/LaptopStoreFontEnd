import axios from "axios";

// Config Axios with baseURL is your backend
axios.defaults.baseURL = "http://localhost:8080";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
