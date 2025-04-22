<template>
  <div>
    <h1 class="mb-4">Product List Admin</h1>
    <v-btn
      class="mx-2"
      fab
      dark
      x-large
      color="indigo"
      @click="addNewProductPage"
    >
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
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
            <ProductDetailAdmin
              :product="product"
              @update-products="loadProducts"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <p v-else>Loading products...</p>
    <v-container fluid>
      <v-row justify="center" class="my-4">
        <v-btn
          @click="previousPage"
          :disabled="options.page === 1"
          class="mx-2"
        >
          Previous page
        </v-btn>
        <v-btn @click="nextPage" class="mx-2"> Next page </v-btn>
      </v-row>
    </v-container>
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
      options: {
        page: 1,
        itemsPerPage: 9,
      },
    };
  },
  methods: {
    async loadProducts() {
      try {
        const response = await getProducts(
          this.options.page,
          this.options.itemsPerPage
        );
        this.products = response.data.data.content;
        console.log("Loaded products:", this.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    addNewProductPage() {
      this.$router.push("/addNewProductAdmin");
    },

    previousPage() {
      this.options.page--;
      this.loadProducts();
    },

    nextPage() {
      this.options.page++;
      this.loadProducts();
    },
  },

  async created() {
    await this.loadProducts();
  },
});
</script>
