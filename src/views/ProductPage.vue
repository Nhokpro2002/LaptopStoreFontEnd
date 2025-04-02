<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Danh sách sản phẩm</h2>
      </v-col>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-img :src="product.imageUrl" height="200px"></v-img>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>{{ product.price }} VND</v-card-subtitle>
          <v-card-text>{{ product.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { getProducts } from "@/services/products"; // Import API

export default Vue.extend({
  name: "ProductsPage",
  data() {
    return {
      products: [] as Array<{
        id: number;
        name: string;
        price: number;
        description: string;
        imageUrl: string;
      }>,
    };
  },
  async created() {
    try {
      this.products = await getProducts(); // Gọi API khi component được tạo
    } catch (error) {
      console.error("Don't load products", error);
    }
  },
});
</script>
