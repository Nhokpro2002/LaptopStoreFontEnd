import store from "@/store";
import { AlertCustom } from "@/models/AlertCustomInterface";

export const alertUser = {
  showAlertSuccess(message: string) {
    const payload: Partial<AlertCustom> = { message, color: "success" };
    store.dispatch("moduleAlertCustom/showAlert", payload);
  },
  showAlertError(message: string) {
    const payload: Partial<AlertCustom> = { message, color: "error" };
    store.dispatch("moduleAlertCustom/showAlert", payload);
  },
};
