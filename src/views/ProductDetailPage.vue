<template>
  <v-card class="pa-4" max-width="600" outlined>
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
          💰 <strong>Price:</strong> {{ product.sellingPrice }}
        </p>
        <p class="mb-1">📦 <strong>Stock:</strong> {{ product.stock }}</p>
        <p class="mb-3">🏷️ <strong>Category:</strong> {{ product.category }}</p>

        <div class="d-flex gap-2">
          <v-btn color="red darken-1" dark @click="onBuyNow">Buy Now</v-btn>
          <v-btn color="yellow darken-1" dark @click="onAddToShoppingCart"
            >Add Shopping Cart</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createProduct } from "@/services/ShoppingCartService";

export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getFullImageUrl(path: string) {
      return `http://localhost:8080${path}`;
    },
    onBuyNow(): void {
      console.log("you click button buy now");
    },
    async onAddToShoppingCart() {
      try {
        const response = await createProduct(this.product.productId, 1);
        alert(response.data.message);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>

<style scoped>
.gap-2 > * {
  margin-right: 10px;
}
</style>
