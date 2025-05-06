import axios from "axios";

export const upload = (formData: FormData) => {
  return axios.post("/images/upload", formData);
};
