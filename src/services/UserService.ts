import axios from "axios";
//import api from "@/services/api";
import { UserRegisterRequest } from "@/models/UserInterface";
import { UserLoginRequest } from "@/models/UserInterface";

export const register = (userRegisterRequest: UserRegisterRequest) => {
  return axios.post("/users/register", {
    ...userRegisterRequest,
    userRole: "CUSTOMER",
  });
};

export const login = (userLoginRequest: UserLoginRequest) => {
  return axios.post("/users/login", {
    ...userLoginRequest,
  });
};

export const getAllUser = () => {
  return axios.get("/users");
};

export const getUserQuantity = () => {
  return axios.get("/users/size");
};
