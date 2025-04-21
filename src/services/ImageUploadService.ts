import api from "@/services/api";

export const upload = (formData: FormData) => {
  return api.post("/images/upload", formData);
};
