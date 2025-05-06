export interface JwtPayload {
  UserRole: string[];
  exp: number;
  iat: number;
  sub: string; // This is user name
  userId: number;
}
