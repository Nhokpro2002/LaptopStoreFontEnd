<template>
  <v-container>
    <HeaderComponent />
    <v-row dense>
      <v-col
        v-for="(item, index) in shoppingCartDTO.items"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="pa-3">
          <v-img
            :src="getImageByUrl(item.productDTO.imageUrl)"
            :alt="item.productDTO.productName"
            height="200"
            contain
            class="mb-3"
          />
          <v-card-title class="headline">{{
            item.productDTO.productName
          }}</v-card-title>
          <v-card-subtitle
            >SellingPrice: {{ item.productDTO.sellingPrice }}</v-card-subtitle
          >
          <v-card-text>
            <p>Quantity: {{ item.productQuantity }}</p>
            <p>
              Price:
              {{ item.productQuantity * Number(item.productDTO.sellingPrice) }}
            </p>
          </v-card-text>
          <v-btn color="#d7dbdd" @click="reduceItems(item.productDTO.productId)"
            ><v-icon color="red">mdi-minus-circle-outline</v-icon></v-btn
          >
          <v-btn color="#d7dbdd" @click="addItems(item.productDTO.productId)"
            ><v-icon color="blue">mdi-plus-circle-outline</v-icon></v-btn
          >
          <v-btn color="red"><v-icon>mdi-delete-outline</v-icon></v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="my-4" />

    <div class="text-right pr-4">
      <strong class="text-h6"
        >Total Price: {{ shoppingCartDTO.totalPrice }}</strong
      >
    </div>
    <FooterComponent />
  </v-container>
</template>

<style scoped></style>

<script lang="ts">
import { defineComponent } from "vue";
import {
  getAllProduct,
  addItem,
  reduceItem,
} from "@/services/ShoppingCartService";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

interface ShoppingCartDTO {
  items: ShoppingCartItemDTO[];
  totalPrice: number;
}

interface ShoppingCartItemDTO {
  product: ProductDTO;
  productQuantity: number;
}

interface ProductDTO {
  productId: number;
  productName: string;
  description: string;
  sellingPrice: string;
  category: string;
  imageUrl: string;
}

export default defineComponent({
  name: "shoppingCart",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      shoppingCartDTO: {
        items: [],
        totalPrice: 0,
      } as ShoppingCartDTO,
    };
  },
  methods: {
    async getAllProduct() {
      const response = await getAllProduct();
      this.shoppingCartDTO = response.data.data;
      console.log("API data:", response.data.data);
    },

    getImageByUrl(path: string) {
      return `http://localhost:8080${path}`;
    },

    async addItems(productId: number) {
      const response = await addItem(productId);
      alert(response.data.message);
      await this.getAllProduct();
    },

    async reduceItems(productId: number) {
      const response = await reduceItem(productId);
      alert(response.data.message);
      await this.getAllProduct();
    },
  },
  mounted() {
    this.getAllProduct();
  },
});
</script>
