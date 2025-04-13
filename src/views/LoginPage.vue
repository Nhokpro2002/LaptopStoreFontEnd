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
                    v-model="login.username"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    v-model="login.password"
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

<script>
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submitLogin() {
      // Handle login logic here
      console.log("Logging in with:", this.login);
    },
  },
};
</script>
