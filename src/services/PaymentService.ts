import api from "./api";

export const payOrder = (totalPrice: number) => {
  return api.get("/payment/vnpay", {
    params: {
      totalPrice,
    },
  });
};

/*export const processReruntedResult = (allParams: Map<string, any>, totalPrice: number) => {
  return api.get("/payment/vnpay-return", {
    params: {
      allParams,
      totalPrice,
    },
  });
};*/

export const processReruntedResult = (responseCode: string | null) => {
  return api.get("/payment/vnpay-return", {
    params: {
      responseCode,
    },
  });
};
