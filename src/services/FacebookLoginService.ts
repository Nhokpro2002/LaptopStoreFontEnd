import axios from "axios";

export const loginByFacebook = () => {
  return axios.get("/api/facebook/oauth");
};

export const getTokenFacebookReturn = (code: string) => {
  return axios.get("/api/facebook/token", {
    params: {
      code,
    },
  });
};

export const getUserInfo = (token: string) => {
  return axios.get("api/facebook/userInfo", {
    params: {
      token,
    },
  });
};
