<template>
  <v-app>
    <AlertCustomComponent />
    <div>
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
    </div>

    <div class="text-center">
      <v-pagination
        v-model="options.page"
        :length="numberOfPages"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ProductDetailPage from "../components/ProductDetailComponent.vue";
import AlertCustomComponent from "@/components/AlertCustomComponent.vue";
import { Category } from "@/models/ProductInterface";
import {
  getProductByCategory,
  getProductsByKeyword,
} from "@/services/ProductService";
import { Product } from "@/models/ProductInterface";
import { alertUser } from "@/services/AlertCustomService";
import emitter from "@/event_bus/eventBus";

export default Vue.extend({
  components: {
    ProductDetailPage,
    AlertCustomComponent,
  },

  data() {
    return {
      products: [] as Product[],
      numberOfPages: 0,
      options: {
        page: 1,
        itemsPerPage: 9,
      },
    };
  },

  watch: {
    "$route.query.itemName"(
      newCategory: string | undefined,
      oldCategory: string | undefined
    ) {
      if (newCategory && newCategory !== oldCategory) {
        this.handleGetProductsByCategory();
      }
    },
    "$route.query.keyword"(
      newKeyword: string | undefined,
      oldKeyword: string | undefined
    ) {
      if (newKeyword && newKeyword !== oldKeyword) {
        this.handleUserSerachingItem();
      }
    },
  },

  mounted() {
    if (this.$route.query.itemName) {
      this.handleGetProductsByCategory();
    }
    if (this.$route.query.keyword) {
      this.handleUserSerachingItem();
    }
  },

  methods: {
    async handleGetProductsByCategory() {
      try {
        const category = this.$route.query.itemName as Category;
        const response = await getProductByCategory(
          this.options.page - 1,
          this.options.itemsPerPage,
          category
        );
        this.products = response.data.data.content;
        this.numberOfPages = Math.ceil(
          this.products.length / this.options.itemsPerPage
        );
      } catch (error: any) {
        alertUser.showAlertError(error.response.data.message);
      }
    },

    async handleUserSerachingItem() {
      try {
        const keyword = this.$route.query.keyword;
        const response = await getProductsByKeyword(
          this.options.page - 1,
          this.options.itemsPerPage,
          keyword
        );
        this.products = response.data.data.content;
      } catch (error: any) {
        alertUser.showAlertError(error.response.data.message);
      }
    },
  },
});
</script>
