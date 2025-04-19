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
        <h2 class="font-weight-bold mb-2">{{ product.name }}</h2>
        <p class="mb-1">{{ product.description }}</p>
        <p class="mb-1">
          💰 <strong>Price:</strong> {{ product.sellingPrice }}
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
          @confirm-price="handlePriceUpdate()"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { deleteProduct, updateProductPrice } from "@/services/ProductService";
import UpdatePriceComponent from "@/components/UpdatePriceComponent.vue";

export default defineComponent({
  name: "productDetailAdmin",
  components: {
    UpdatePriceComponent,
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
      return `http://localhost:8080${path}`;
    },
    async onDelete(productId: number) {
      try {
        const response = await deleteProduct(productId);
        alert(response.data.message);
        alert(response.data.message);
        this.$emit("update-products");
      } catch (error) {
        alert("Delete product not successful");
        console.error(error);
      }
    },
    toggleUpdate() {
      this.showUpdate = !this.showUpdate;
    },
    async handlePriceUpdate(sellingPrice: number, productId: number) {
      // handle logic to update price here (call API if needed)
      const response = await updateProductPrice(sellingPrice, productId);
      console.log("New price received from child:", sellingPrice);
      this.showUpdate = false;
      this.$emit("update-products"); // refresh product list
    },
  },
});
</script>

<style scoped>
.gap-2 > * {
  margin-right: 10px;
}
</style>
