import { AlertCustom } from "@/models/AlertCustomInterface";

export const ModuleAlertCustom = {
  namespaced: true,
  state: {
    visible: false,
    message: "",
    color: "",
    timeout: -1,
  } as AlertCustom,
  mutations: {
    showAlert(state: AlertCustom, payload: Partial<AlertCustom>) {
      state.message = payload.message || "";
      state.timeout = payload.timeout || 3000;
      state.visible = true;
      state.color = payload.color || "colorOfResult";
    },
  },
  actions: {
    showAlert(context: any, payload: Partial<AlertCustom>) {
      context.commit("showAlert", payload);
    },
  },
};
