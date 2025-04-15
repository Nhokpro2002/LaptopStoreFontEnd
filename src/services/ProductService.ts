import api from "@/services/api";

export const getProducts = () => {
  return api.get("/products");
};
