<template>
  <div>
    <h1>Product List</h1>
    <div v-if="products.length">
      <div
        v-for="product in products"
        :key="product.productName"
        class="product-card"
      >
        <img
          :src="product.imageUrl"
          :alt="product.productName"
          class="product-image"
        />
        <h2>{{ product.productName }}</h2>
        <p>Price: ${{ product.sellingPrice }}</p>
        <p>Description: {{ product.description }}</p>
        <p>Category: {{ product.category }}</p>
      </div>
    </div>
    <p v-else>Loading products...</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      products: [] as {
        productName: string;
        description: string;
        sellingPrice: string;
        category: string;
        imageUrl: string;
      }[],
    };
  },
  async created() {
    try {
      const response = await axios.get("/api/products");
      console.log("Products from API:", response.data.data);
      this.products = response.data.data;
      this.products.forEach((product) => {
        console.log("Image Url:", product.imageUrl);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
});
</script>

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
