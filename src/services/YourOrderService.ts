import api from "@/services/api";

export const createYourOrder = () => {
  return api.post("/your-orders");
};
