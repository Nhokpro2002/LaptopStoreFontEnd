<template>
  <v-footer app>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <h3>About Us</h3>
          <p>
            We are a leading e-commerce platform providing a wide range of
            products.
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <h3>Contact Us</h3>
          <p>Email: support@ecommerce.com</p>
          <p>Phone: +123 456 7890</p>
        </v-col>
        <v-col cols="12" md="4">
          <h3>Follow Us</h3>
          <v-btn icon>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
v-footer {
  background-color: #f5f5f5;
  padding: 20px 0;
}

h3 {
  margin-bottom: 10px;
}

p {
  margin: 0;
}
</style>
