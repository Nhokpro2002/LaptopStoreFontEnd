<template>
  <v-app>
    <v-main class="register-page">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card elevation="12" class="pa-4 rounded-xl">
              <v-card-title class="headline justify-center text-primary">
                User Registration
              </v-card-title>
              <v-card-text>
                <v-form @submit.prevent="submitForm" ref="form">
                  <v-text-field
                    label="First Name"
                    v-model="form.firstName"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Last Name"
                    v-model="form.lastName"
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
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Email"
                    v-model="form.email"
                    type="email"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    v-model="form.userPassword"
                    type="password"
                    required
                  ></v-text-field>
                  <v-btn class="mt-4" color="primary" block type="submit">
                    Register
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

<script lang="ts">
import { AxiosError } from "axios";
import { defineComponent } from "vue";
import { register, UserRegisterRequest } from "@/services/UserService";

export default defineComponent({
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        address: "",
        userName: "",
        email: "",
        userPassword: "",
      } as UserRegisterRequest,
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await register(this.form);
        this.$router.push("/login");
        alert(response.data.message);
      } catch (error) {
        const err = error as AxiosError;
        alert("Lỗi khi đăng ký: " + err.message);
      }
    },
  },
});
</script>

<style scoped>
.register-page {
  background-color: #e3f2fd; /* Light blue background */
  min-height: 100vh;
  padding-top: 40px;
}
</style>
