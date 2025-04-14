/**import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
});

export const getProducts = async () => {
  try {
    const response = await api.post("/users");
    return response.data;
  } catch (error) {
    console.error("Register failer:", error);
    throw error;
  }
}; **/

import axios from "axios";

export interface UserRegisterRequest {
  email: string;
  userPassword: string;
  firstName: string;
  lastName: string;
  userName: string;
  address: string;
}

export interface UserLoginRequest {
  userName: string;
  userPassword: string;
}

export const register = (userRegisterRequest: UserRegisterRequest) => {
  return axios.post("/api/users/register", {
    ...userRegisterRequest,
    userRole: "CUSTOMER",
  });
};

export const login = (userLoginRequest: UserLoginRequest) => {
  return axios.post("/api/users/login", {
    ...userLoginRequest,
  });
};
