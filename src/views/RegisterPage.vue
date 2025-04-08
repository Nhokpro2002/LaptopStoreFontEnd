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
                    label="Username"
                    v-model="form.username"
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
                    v-model="form.password"
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

<script>
export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        address: "",
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      // You can replace this with actual logic
      console.log("Submitted form:", this.form);
    },
  },
};
</script>

<style scoped>
.register-page {
  background-color: #e3f2fd; /* Light blue background */
  min-height: 100vh;
  padding-top: 40px;
}
</style>
