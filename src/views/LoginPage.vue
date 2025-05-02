<template>
  <v-app>
    <v-main class="login-page">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card elevation="12" class="pa-4 rounded-xl">
              <v-card-title class="headline justify-center text-primary">
                Login
              </v-card-title>
              <v-card-text>
                <v-form @submit.prevent="submitLogin" ref="form">
                  <v-text-field
                    label="Username"
                    v-model="form.userName"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    v-model="form.userPassword"
                    type="password"
                    required
                  ></v-text-field>
                  <v-btn class="mt-4" color="primary" block type="submit">
                    Login
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.login-page {
  background-color: #f3e5f5; /* Light purple background */
  min-height: 100vh;
  padding-top: 40px;
}
</style>

<script lang="ts">
import { AxiosError } from "axios";
import { defineComponent } from "vue";
import { login, UserLoginRequest } from "@/services/UserService";
export default defineComponent({
  data() {
    return {
      form: {
        userName: "",
        userPassword: "",
      } as UserLoginRequest,
    };
  },
  methods: {
    async submitLogin() {
      // Handle login logic here
      try {
        const response = await login(this.form);
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        const payload = JSON.parse(this.getRoleFromToken(token.split(".")[1]));
        //console.log(payload);
        if (payload.UserRole[0] === "ROLE_CUSTOMER") {
          this.$router.push("/home-page");
          alert("Dang nhap thanh cong");
        } else if (payload.UserRole[0] === "ROLE_ADMIN") {
          this.$router.push("/admin");
        } else {
          alert("cau lenh nay khong dc chay");
        }
      } catch (error) {
        const err = error as AxiosError;
        alert("Login error: " + err.message);
      }
    },

    getRoleFromToken(token: string): string {
      let base64 = token.replace(/-/g, "+").replace(/_/g, "/");
      while (base64.length % 4 !== 0) {
        base64 += "=";
      }
      return atob(base64);
    },
  },
});
</script>
