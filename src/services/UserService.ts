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
