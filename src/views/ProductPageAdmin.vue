<template>
  <div>
    <h1 class="mb-4">Product List Admin</h1>

    <div style="display: flex; justify-content: space-between">
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
      <v-text-field
        label="Search for products..."
        outlined
        solo
        dense
        hide-details
        class="mr-4"
        style="max-width: 500px; height: 80px"
        append-icon="mdi-magnify"
        @click:append="handleSearchingItem(userInputKeyword)"
        v-model="userInputKeyword"
      ></v-text-field>
    </div>
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
import ProductDetailAdmin from "../components/ProductDetailAdminComponent.vue";
import { getProducts, countProductNumber } from "@/services/ProductService";
import { Product } from "@/models/ProductInterface";

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

    async handleCountProductNumber() {
      try {
        const response = await countProductNumber();
        this.totalItems = response.data.data;
      } catch (error: any) {
        console.log(error);
      }
    },
  },

  async created() {
    await this.loadProducts();
    await this.handleCountProductNumber();
  },
});
</script>
