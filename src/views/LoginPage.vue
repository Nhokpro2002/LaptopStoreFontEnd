<template>
  <v-app>
    <AlertCustomComponent />
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
import { UserLoginRequest } from "@/models/UserInterface";
import { login } from "@/services/UserService";
import { decodeJwt } from "@/services/JwtService";
import AlertCustomComponent from "@/components/AlertCustomComponent.vue";
import { alertUser } from "@/services/AlertCustomService";
import Vue from "vue";

export default Vue.extend({
  components: {
    AlertCustomComponent,
  },
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
        alertUser.showAlertSuccess(response.data.message);

        const payload = decodeJwt();
        const userRole = payload.UserRole?.[0];

        if (userRole === "ROLE_CUSTOMER") {
          this.$store.dispatch("moduleUserAuthentication/userLogIn");
          setTimeout(() => {
            this.$router.push("/home-page");
          }, 2000);
        } else if (userRole === "ROLE_ADMIN") {
          this.$store.dispatch("moduleUserAuthentication/userLogIn");

          setTimeout(() => {
            this.$router.push("/admin");
          }, 2000);
        } else {
          alertUser.showAlertError(
            "User not either ROLE_ADMIN or ROLE_CUSTOMER"
          );
        }
      } catch (error: any) {
        alertUser.showAlertError("Login error: " + error.response.data.message);
      }
    },
  },
});
</script>
