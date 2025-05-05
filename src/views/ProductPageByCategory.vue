<template>
  <v-app>
    <div></div>
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
              <ProductDetailComponent :product="product" />
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
import ProductDetailComponent from "../components/ProductDetailComponent.vue";
import {
  getProductByCategory,
  Category,
  countNumberItemsByCategory,
} from "@/services/ProductService";

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
  components: {
    ProductDetailComponent,
  },

  data() {
    return {
      products: [] as Product[],
      totalItemsByCategory: 0,
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
    try {
      const productCategory = this.$route.query.category as Category;
      const response = await getProductByCategory(
        this.options.page - 1,
        this.options.itemsPerPage,
        productCategory
      );
      this.products = response.data.data.content;

      await this.countNumberItemsByCategory();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  methods: {
    async loadProduct() {
      try {
        const productCategory = this.$route.query
          .category as unknown as Category;
        const response = await getProductByCategory(
          this.options.page - 1,
          this.options.itemsPerPage,
          productCategory
        );
        this.products = response.data.data.content;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async countNumberItemsByCategory() {
      try {
        const productCategory = this.$route.query
          .category as unknown as Category;
        const response = await countNumberItemsByCategory(productCategory);
        this.totalItemsByCategory = response.data.data;
      } catch (error) {
        alert("Call api error");
      }
    },
    mount(): number {
      return Math.ceil(this.totalItemsByCategory / this.options.itemsPerPage);
    },
  },
});
</script>
