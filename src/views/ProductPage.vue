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
      <!--<FooterComponent />-->
    </div>

    <div class="text-center">
      <v-pagination
        v-model="options.page"
        :length="mount()"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ProductDetailPage from "./ProductDetailPage.vue";
import { getProducts, countNumberItems } from "@/services/ProductService";

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

  watch: {
    "options.page": "loadProduct",
  },

  async created() {
    await this.loadProduct();
    await this.countItems();
  },

  methods: {
    async loadProduct() {
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
    async countItems() {
      const response = await countNumberItems();
      this.totalItems = response.data.data;
    },
    mount(): number {
      return Math.ceil(this.totalItems / this.options.itemsPerPage);
    },
  },
});
</script>
