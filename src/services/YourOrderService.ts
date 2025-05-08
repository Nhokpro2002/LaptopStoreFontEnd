import api from "./api";

export const createYourOrder = () => {
  return api.post("/your-orders");
};

export const getOrderQuantity = () => {
  return api.get("/your-orders/size");
};
