<template>
  <v-app>
    <div>
      <HeaderComponent />
    </div>
    <div>
      <h1 class="mb-4">Product List</h1>
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

    <div>
      <v-btn @click="previousPage"> Previous page </v-btn>
      <v-btn @click="nextPage"> Next page </v-btn>
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
  productId: number;
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
      options: {
        page: 1,
        itemsPerPage: 9,
      },
    };
  },
  async created() {
    try {
      const response = await getProducts(
        this.options.page - 1,
        this.options.itemsPerPage
      );
      this.products = response.data.data.content;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  methods: {
    async nextPage() {
      this.options.page++;
      try {
        const response = await getProducts(
          this.options.page - 1,
          this.options.itemsPerPage
        );
        this.products = response.data.data.content;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async previousPage() {
      this.options.page--;
      try {
        const response = await getProducts(
          this.options.page - 1,
          this.options.itemsPerPage
        );
        this.products = response.data.data.content;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
});
</script>
