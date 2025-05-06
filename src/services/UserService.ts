import axios from "axios";
import api from "@/services/api";
import { UserRegisterRequest } from "@/models/UserInterface";
import { UserLoginRequest } from "@/models/UserInterface";

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

export const getAllUser = () => {
  return api.get("/users");
};

export const getUserQuantity = () => {
  return api.get("/users/size");
};
