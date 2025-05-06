import axios from "axios";

export const createProduct = (productId: number, quantity: number) => {
  return axios.post("/shopping-carts/items", null, {
    params: {
      productId,
      quantity,
    },
  });
};

export const getAllProduct = () => {
  return axios.get("/shopping-carts");
};

export const addItem = (productId: number) => {
  return axios.patch("/shopping-carts/addition", null, {
    params: {
      productId,
    },
  });
};

export const reduceItem = (productId: number) => {
  return axios.patch("/shopping-carts/reduction", null, {
    params: {
      productId,
    },
  });
};
