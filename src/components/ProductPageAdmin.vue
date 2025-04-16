<template>
  <div>
    <h1 class="mb-4">Product List Admin</h1>
    <div v-if="products.length">
      <v-container fluid>
        <v-row>
          <v-col
            v-for="product in products"
            :key="product.productName"
            cols="12"
            md="6"
            lg="4"
          >
            <ProductDetailAdmin :product="product" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <p v-else>Loading products...</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductDetailAdmin from "./ProductDetailAdmin.vue";
import { getProducts } from "@/services/ProductService";

interface Product {
  productName: string;
  description: string;
  sellingPrice: string;
  category: string;
  imageUrl: string;
}

export default Vue.extend({
  components: {
    ProductDetailAdmin,
  },
  data() {
    return {
      products: [] as Product[],
    };
  },
  async created() {
    try {
      const response = await getProducts();
      this.products = response.data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
});
</script>
