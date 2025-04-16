<template>
  <v-app>
    <div>
      <HeaderComponent />
    </div>
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
              <ProductDetailPage :product="product" />
            </v-col>
          </v-row>
        </v-container>
      </div>
      <p v-else>Loading products...</p>
      <FooterComponent />
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ProductDetailPage from "./ProductDetailPage.vue";
import FooterComponent from "../components/FooterComponent.vue";
import { getProducts } from "@/services/ProductService";
import HeaderComponent from "../components/HeaderComponent.vue";

interface Product {
  productName: string;
  description: string;
  sellingPrice: string;
  category: string;
  imageUrl: string;
  stock: string;
}

export default Vue.extend({
  name: "homePage",
  components: {
    ProductDetailPage,
    FooterComponent,
    HeaderComponent,
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
