import axios from "axios";

export const upload = (formData: FormData) => {
  return axios.post("/api/api/upload-image", formData);
};
