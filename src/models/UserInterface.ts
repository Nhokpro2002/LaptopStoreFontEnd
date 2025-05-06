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
