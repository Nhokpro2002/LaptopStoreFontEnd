export interface JwtPayload {
  UserRole: string[];
  exp: number;
  iat: number;
  sub: string;
  userId: number;
}

export const decodeJwt = (): JwtPayload => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Token not found in localStorage.");
  }

  const payloadToken = token.split(".")[1];
  let base64 = payloadToken.replace(/-/g, "+").replace(/_/g, "/");

  while (base64.length % 4 !== 0) {
    base64 += "=";
  }

  base64 = atob(base64);
  const payload = JSON.parse(base64);
  return payload;
};
