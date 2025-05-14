import api from "./api";

export const payOrder = (totalPrice: number) => {
  return api.get("/payment/vnpay", {
    params: {
      totalPrice,
    },
  });
};
