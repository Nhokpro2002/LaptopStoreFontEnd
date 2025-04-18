import axios from "axios";
import api from "@/services/api";

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

export interface UserDTO {
  userId: number;
  userName: string;
  lastName: string;
  firstName: string;
  email: string;
  address: string;
  role: string;
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

export const getAllUser = () => {
  return api.get("/users");
};
