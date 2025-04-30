<template>
  <v-app-bar app color="#1f2833" dark>
    <v-toolbar-title>Laptop Store</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-row
      align-center
      no-gutters
      style="padding: 20px 0 20px 0"
      class="navigation_item"
      @click="backHomePage"
    >
      <v-icon color="#66fcf1">mdi-home-circle</v-icon>
      <span>Home</span>
    </v-row>
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
      <v-icon color="#66fcf1">mdi-laptop</v-icon>
      <span>Product</span>
    </v-row>
    <v-row
      align-center
      no-gutters
      style="padding: 20px 0 20px 0"
      class="navigation_item"
    >
      <v-icon color="#66fcf1">mdi-comment-question-outline</v-icon>
      <span>Question</span>
    </v-row>
    <v-row
      align-center
      no-gutters
      style="padding: 20px 0 20px 0"
      class="navigation_item"
      @click="addToCart"
    >
      <v-icon color="#66fcf1">mdi-cart-outline</v-icon>
      <span>Shopping-Cart</span>
    </v-row>
    <v-row
      align-center
      no-gutters
      style="padding: 20px 0 20px 0"
      class="navigation_item"
      @click="getOrder"
    >
      <v-icon color="#66fcf1">mdi-order-bool-ascending</v-icon>
      <span>YourOrder</span>
    </v-row>
    <v-row
      align-center
      no-gutters
      style="padding: 20px 0 20px 0"
      class="navigation_item"
      @click="changeAdminPage"
    >
      <v-icon color="#66fcf1">mdi-account-outline</v-icon>
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
      this.$router.push("/home-page/products");
    },
    addToCart() {
      this.productQuantity++;
      this.$router.push("/home-page/shopping-cart");
    },
    getOrder() {
      this.$router.push("/home-page/newOrder");
    },
    changeAdminPage() {
      this.$router.push("/admin");
    },
    backHomePage() {
      this.$router.push("/home-page");
    },
  },
});
</script>
