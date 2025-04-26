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
    <v-container fluid> </v-container>
    <div class="text-center">
      <v-pagination
        v-model="options.page"
        :length="mount()"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductDetailAdmin from "./ProductDetailAdmin.vue";
import { getProducts, countNumberItems } from "@/services/ProductService";

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
  watch: {
    "options.page": "loadProducts",
  },
  data() {
    return {
      products: [] as Product[],
      totalItems: 0,
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
          this.options.page - 1,
          this.options.itemsPerPage
        );
        this.products = response.data.data.content;
        console.log("Loaded products:", this.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    mount(): number {
      return Math.ceil(this.totalItems / this.options.itemsPerPage);
    },

    addNewProductPage() {
      this.$router.push("/addNewProductAdmin");
    },
    async countPage() {
      const response = await countNumberItems();
      this.totalItems = response.data.data;
    },
  },

  async created() {
    await this.countPage();
    await this.loadProducts();
  },
});
</script>
