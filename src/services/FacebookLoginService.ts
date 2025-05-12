import axios from "axios";

export const loginByFacebook = () => {
  return axios.get("/api/facebook/oauth");
};
