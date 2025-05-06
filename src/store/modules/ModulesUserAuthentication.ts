import { JwtPayload } from "@/models/JwtPayloadInterface";
import { decodeJwt } from "@/services/JwtService";

export const ModuleUserAuthentication = {
  namespaced: true,
  state: {
    UserRole: [""],
    exp: 0,
    iat: 0,
    sub: "Account", // This is user name
    userId: 0,
  },
  mutations: {
    // Logged in or Logged out
    userLogIn(state: JwtPayload) {
      const payload = decodeJwt();
      state.UserRole = payload.UserRole;
      state.exp = payload.exp;
      state.iat = payload.iat;
      state.sub = payload.sub;
      state.userId = payload.userId;
    },

    userLogOut(state: JwtPayload) {
      state.UserRole = [""];
      state.exp = 0;
      state.iat = 0;
      state.sub = "";
      state.userId = 0;
    },
  },
  actions: {
    userLogIn(context: any) {
      context.commit("userLogIn");
    },
    userLogOut(context: any) {
      context.commit("userLogOut");
    },
  },
  getters: {},
};
