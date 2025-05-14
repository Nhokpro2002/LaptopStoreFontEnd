import axios from "axios";
import api from "./api";
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

export const getUserInformation = () => {
  return api.get("/users/information");
};

export const updateUserInformation = (newAddress: string) => {
  return api.patch("/users/update", null, {
    params: {
      newAddress,
    },
  });
};
