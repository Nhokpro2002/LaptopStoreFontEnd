<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">Register</v-card-title>
          <v-card-text>
            <v-form v-model="valid" @submit.prevent="onSubmit">
              <v-text-field
                v-model="user.name"
                label="Name"
                :rules="[rules.required]"
                required
              />
              <v-text-field
                v-model="user.email"
                label="Email"
                :rules="[rules.required, rules.email]"
                required
              />
              <v-text-field
                v-model="user.password"
                label="Password"
                :type="passwordVisible ? 'text' : 'password'"
                :rules="[rules.required, rules.password]"
                required
                append-icon="mdi-eye"
                @click:append="togglePasswordVisibility"
              />
              <v-btn :disabled="!valid" color="primary" type="submit" block>
                Register
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      passwordVisible: false,
      user: {
        name: "",
        email: "",
        password: "",
      },
      rules: {
        required: (value) => !!value || "This field is required",
        email: (value) => /.+@.+\..+/.test(value) || "E-mail must be valid",
        password: (value) =>
          value.length >= 6 || "Password must be at least 6 characters",
      },
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    onSubmit() {
      // Handle the registration logic (e.g., send data to backend)
      console.log("User Data:", this.user);
      // Optionally, reset the form after successful submission
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
