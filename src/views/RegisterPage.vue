<template>
  <v-app>
    <AlertCustomComponent />
    <v-main class="register-page">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card elevation="12" class="pa-4 rounded-xl">
              <v-card-title class="headline justify-center text-primary">
                User Registration
              </v-card-title>
              <v-card-text>
                <v-form @submit.prevent="submitForm" ref="form" v-model="valid">
                  <v-text-field
                    label="First Name"
                    v-model="form.firstName"
                    :rules="form.nameRules"
                    :counter="15"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Last Name"
                    v-model="form.lastName"
                    :rules="form.nameRules"
                    :counter="15"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Address"
                    v-model="form.address"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="UserName"
                    v-model="form.userName"
                    :rules="form.nameRules"
                    :counter="15"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Email"
                    v-model="form.email"
                    :rules="form.emailRules"
                    type="email"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    v-model="form.userPassword"
                    :rules="form.userPasswordRules"
                    type="password"
                    required
                  ></v-text-field>
                  <v-btn class="mt-4" color="primary" block type="submit">
                    Register
                  </v-btn>
                  <!--<div class="another-login">
                    <a
                      href="http://localhost:8080/oauth2/authorization/facebook"
                      class="link"
                      >Login with Facebook</a
                    >
                    <a @click="authenticateFacebook" class="link"
                      >Login with Facebook</a
                    >
                    <a class="link text--primary">
                      <v-icon class="icon-google"> mdi-google </v-icon>Login
                      with google</a
                    >
                  </div>-->
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { register } from "@/services/UserService";
import { UserRegisterRequest } from "@/models/UserInterface";
import { alertUser } from "@/services/AlertCustomService";
import AlertCustomComponent from "@/components/AlertCustomComponent.vue";
//import { loginByFacebook } from "@/services/FacebookLoginService";
import Vue from "vue";

export default Vue.extend({
  components: {
    AlertCustomComponent,
  },
  data() {
    return {
      valid: false,
      form: {
        firstName: "",
        lastName: "",
        userName: "",
        nameRules: [
          (v: string) => !!v || "Name is required",
          (v: string) =>
            v.length <= 15 || "Name must be less than 15 characters",
          (v: string) => !/\s/.test(v) || "Name can't have spaces ",
        ],
        address: "",
        email: "",
        emailRules: [
          (v: string) => !!v || "Email is required",
          (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
          (v: string) => !/\s/.test(v) || "Email can't have spaces ",
        ],
        userPassword: "",
        userPasswordRules: [
          (v: string) => !!v || "Password is required",
          (v: string) =>
            v.length >= 8 || "Password must be at least 8 characters",
          (v: string) =>
            /[A-Za-z]/.test(v) || "Password must contain at least one letter",
          (v: string) =>
            /\d/.test(v) || "Password must contain at least one number",
          (v: string) =>
            /[!@#$%^&*(),.?":{}|<>]/.test(v) ||
            "Password must contain at least one special character",
        ],
      } as UserRegisterRequest,
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await register(this.form);
        alertUser.showAlertSuccess(response.data.message);
        setTimeout(() => this.$router.push("/login"), 1000);
      } catch (error: any) {
        alertUser.showAlertError(
          "Register user error: " + error.response.data.message
        );
        console.log(error);
      }
    },
    /*async authenticateFacebook() {
      try {
        const response = await loginByFacebook();
        window.location.href = response.data.data;
      } catch (error: any) {
        alertUser.showAlertError(error.response.data.message);
      }
    },*/
  },
});
</script>

<style scoped>
.register-page {
  background-color: #393a3b;
  min-height: 100vh;
  padding-top: 40px;
}

.another-login {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 20px;
}

.link:hover {
  color: red !important;
  text-decoration-line: underline !important;
}

.icon-facebook:hover {
  color: blue;
}

.icon-google:hover {
  color: orange;
}
</style>
