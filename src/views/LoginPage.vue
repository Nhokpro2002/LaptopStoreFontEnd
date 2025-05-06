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
  background-color: #f3e5f5;
  min-height: 100vh;
  padding-top: 40px;
}
</style>

<script lang="ts">
import { AxiosError } from "axios";
import { UserLoginRequest } from "@/models/UserInterface";
import { login } from "@/services/UserService";
import { decodeJwt } from "@/services/JwtService";
import Vue from "vue";
export default Vue.extend({
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
      try {
        const response = await login(this.form);
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        const payload = decodeJwt();
        console.log(payload);
        if (payload.UserRole[0] === "ROLE_CUSTOMER") {
          this.$store.dispatch("moduleUserAuthentication/userLogIn");
          console.log(
            this.$store.dispatch("moduleUserAuthentication/userLogIn")
          );
          this.$router.push("/home-page");
          alert("Login successfully");
        } else if (payload.UserRole[0] === "ROLE_ADMIN") {
          this.$router.push("/admin");
        } else {
          alert("User not either ROLE_ADMIN or ROLE_CUSTOMER");
        }
      } catch (error) {
        const err = error as AxiosError;
        alert("Login error: " + err.message);
      }
    },
  },
});
</script>
