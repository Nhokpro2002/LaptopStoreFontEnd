<template>
  <div>
    <h1>Product List</h1>
    <div v-if="products.length">
      <div
        v-for="product in products"
        :key="product.productName"
        class="product-card"
        @click="selectProduct(product)"
      >
        <img
          :src="getFullImageUrl(product.imageUrl)"
          :alt="product.productName"
          class="product-image"
        />
        <h2>{{ product.productName }}</h2>
      </div>
    </div>
    <p v-else>Loading products...</p>
    <ProductDetailPage v-if="selectedProduct" :product="selectedProduct" />
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  text-align: center;
}

.product-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>

<script lang="ts">
import Vue from "vue";
import ProductDetailPage from "./ProductDetailPage.vue";
import api from "@/services/api";

interface Product {
  productName: string;
  description: string;
  sellingPrice: string;
  category: string;
  imageUrl: string;
}

export default Vue.extend({
  components: {
    ProductDetailPage,
  },
  data() {
    return {
      products: [] as Product[],
      selectedProduct: null as Product | null,
    };
  },
  async created() {
    try {
      const response = await api.get("/products");
      this.products = response.data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
  methods: {
    selectProduct(product: Product) {
      this.selectedProduct = product;
    },
    getFullImageUrl(path: string) {
      return `http://localhost:8080${path}`;
    },
  },
});
</script>
