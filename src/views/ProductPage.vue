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
        :length="mount()"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ProductDetailPage from "../components/ProductDetailComponent.vue";
import { getProducts, countNumberItems } from "@/services/ProductService";
import { Product } from "@/models/ProductInterface";
import AlertCustomComponent from "@/components/AlertCustomComponent.vue";
import { alertUser } from "@/services/AlertCustomService";

export default Vue.extend({
  components: {
    ProductDetailPage,
    AlertCustomComponent,
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
      } catch (error: any) {
        alertUser.showAlertError(error.response.data.message);
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
