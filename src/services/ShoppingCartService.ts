import api from "./api";

export const createProduct = (productId: number, quantity: number) => {
  return api.post("/shopping-carts/items", null, {
    params: {
      productId,
      quantity,
    },
  });
};

export const getAllProduct = () => {
  return api.get("/shopping-carts");
};

export const addItem = (productId: number) => {
  return api.patch("/shopping-carts/addition", null, {
    params: {
      productId,
    },
  });
};

export const reduceItem = (productId: number) => {
  return api.patch("/shopping-carts/reduction", null, {
    params: {
      productId,
    },
  });
};
