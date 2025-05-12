<template>
  <v-card class="pa-4" max-width="600" outlined>
    <AlertCustomComponent />
    <v-row>
      <v-col cols="12" md="4" class="d-flex justify-center">
        <v-img
          :src="getFullImageUrl(product.imageUrl)"
          :alt="product.name"
          max-width="150"
          max-height="150"
          contain
          class="rounded"
        />
      </v-col>
      <v-col cols="12" md="8">
        <h2 class="font-weight-bold mb-2">{{ product.productName }}</h2>
        <p class="mb-1">{{ product.description }}</p>
        <p class="mb-1">
          💰 <strong>Price:</strong> ${{ formatePrice(product.sellingPrice) }}
        </p>
        <p class="mb-3">📦 <strong>Category:</strong> {{ product.category }}</p>

        <div class="d-flex gap-2">
          <v-btn color="red darken-1" dark @click="onDelete(product.productId)"
            >Delete</v-btn
          >
          <v-btn color="green darken-1" dark @click="toggleUpdate"
            >Update</v-btn
          >
        </div>
        <UpdatePriceComponent
          v-if="showUpdate"
          :visible="true"
          @confirm-price="
            (newPrice) => handlePriceUpdate(newPrice, product.productId)
          "
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import UpdatePriceComponent from "@/components/UpdatePriceComponent.vue";
import AlertCustomComponent from "@/components/AlertCustomComponent.vue";
import { deleteProduct, updateProductPrice } from "@/services/ProductService";
import { formatCurrency } from "@/utils/NumberFormatter";
import { alertUser } from "@/services/AlertCustomService";
//import { Product } from "@/models/ProductInterface";

export default Vue.extend({
  name: "productDetailAdmin",
  components: {
    UpdatePriceComponent,
    AlertCustomComponent,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showUpdate: false,
    };
  },
  methods: {
    getFullImageUrl(path: string) {
      return path;
    },
    async onDelete(productId: number) {
      try {
        const response = await deleteProduct(productId);
        alertUser.showAlertSuccess(response.data.message);
        this.$emit("update-products");
      } catch (error: any) {
        alertUser.showAlertError(error.response.data.message);
      }
    },
    toggleUpdate() {
      this.showUpdate = !this.showUpdate;
    },
    async handlePriceUpdate(sellingPrice: number, productId: number) {
      const response = await updateProductPrice(sellingPrice, productId);
      alertUser.showAlertSuccess(
        "New price for " +
          `${this.product.productName}` +
          ": " +
          `${sellingPrice}`
      );
      this.showUpdate = false;
      this.$emit("update-products"); // refresh product list
    },
    formatePrice(value: string | number): string {
      return formatCurrency(value);
    },
  },
});
</script>

<style scoped>
.gap-2 > * {
  margin-right: 10px;
}
</style>
