<template>
  <v-app-bar app color="grey darken-4" dark>
    <v-toolbar-title>Laptop Store</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      label="Search for laptops..."
      solo
      dense
      hide-details
      class="mr-4"
      style="max-width: 300px"
    ></v-text-field>
    <v-row
      align-center
      no-gutters
      style="padding: 20px 0 20px 0"
      class="navigation_item"
      @click="getProducts"
    >
      <v-icon>mdi-laptop</v-icon>
      <span>Product</span>
    </v-row>
    <v-row
      align-center
      no-gutters
      style="padding: 20px 0 20px 0"
      class="navigation_item"
    >
      <v-icon>mdi-comment-question-outline</v-icon>
      <span>Question</span>
    </v-row>
    <v-row
      align-center
      no-gutters
      style="padding: 20px 0 20px 0"
      class="navigation_item"
      @click="addToCart"
    >
      <v-icon>mdi-cart-outline</v-icon>
      <span>Shopping-Cart</span>
      <span>( {{ productQuantity }} )</span>
    </v-row>
    <v-row
      align-center
      no-gutters
      style="padding: 20px 0 20px 0"
      class="navigation_item"
      @click="getOrder"
    >
      <v-icon>mdi-order-bool-ascending</v-icon>
      <span>YourOrder</span>
      <span>( {{ productQuantity }} )</span>
    </v-row>
    <v-row
      align-center
      no-gutters
      style="padding: 20px 0 20px 0"
      class="navigation_item"
      @click="changeAdminPage"
    >
      <v-icon>mdi-account-outline</v-icon>
      <span>Account</span>
    </v-row>
  </v-app-bar>
</template>
<style scoped>
.navigation_item:hover {
  cursor: pointer;
  background-color: aqua;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      productQuantity: 0,
    };
  },
  methods: {
    getProducts() {
      this.$router.push("/products");
    },
    addToCart() {
      this.productQuantity++;
      this.$router.push("/shoppingCart");
    },
    getOrder() {
      this.$router.push("/orders");
    },
    changeAdminPage() {
      this.$router.push("/admin");
    },
  },
});
</script>
