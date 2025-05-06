import axios from "axios";

export const createYourOrder = () => {
  return axios.post("/your-orders");
};

export const getOrderQuantity = () => {
  return axios.get("/your-orders/size");
};
