<template>
  <v-container>
    <v-row dense>
      <v-col
        v-for="(item, index) in shoppingCartDTO.items"
        :key="index"
        cols="12"
        sm="12"
        md="12"
        lg="6"
      >
        <v-card class="pa-3 shopping-cart-item" width="650" height="150">
          <div class="div_image_product_and_button">
            <v-img
              :src="getImageByUrl(item.productDTO.imageUrl)"
              :alt="item.productDTO.productName"
              height="85"
              width="100"
              contain
              class="mb-3"
            />
            <v-btn width="20" height="20" color="red">Delete</v-btn>
          </div>

          <div style="margin-right: 150px">
            <p style="font-weight: bold; font-size: 18px">
              {{ item.productDTO.productName }}
            </p>
            <p>SellingPrice: {{ formatPrice(item.productDTO.sellingPrice) }}</p>
            <p>Quantity: {{ item.productQuantity }}</p>
            <p style="font-weight: bold; font-size: 18px; color: red">
              Into Money:
              {{
                formatPrice(
                  item.productQuantity * Number(item.productDTO.sellingPrice)
                )
              }}
            </p>
          </div>

          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 10px;
            "
          >
            <v-btn
              color="#d7dbdd"
              @click="reduceItems(item.productDTO.productId)"
              ><v-icon>mdi-minus</v-icon></v-btn
            >
            <v-btn color="#d7dbdd" @click="addItems(item.productDTO.productId)"
              ><v-icon>mdi-plus</v-icon></v-btn
            >
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="my-4" />

    <div class="text-right pr-4">
      <v-btn
        class="background-color: blue"
        @click="handlePayOrder(shoppingCartDTO.totalPrice)"
        >Place Order</v-btn
      >
      <strong
        style="
          text-decoration: underline;
          color: red;
          font-weight: bold;
          font-size: 25px;
          margin-left: 20px;
        "
        >Total Price: {{ formatPrice(shoppingCartDTO.totalPrice) }}</strong
      >
    </div>
    <div></div>
  </v-container>
</template>

<style scoped>
.shopping-cart-item {
  display: flex;
}
.div_image_product_and_button {
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-right: 20px;
}
p {
  margin-bottom: 9px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import {
  getAllProduct,
  addItem,
  reduceItem,
} from "@/services/ShoppingCartService";
import { formatCurrency } from "@/utils/NumberFormatter";
import { payOrder } from "@/services/PaymentService";

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
    },

    getImageByUrl(path: string) {
      return `${path}`;
    },

    async addItems(productId: number) {
      const response = await addItem(productId);
    },

    async reduceItems(productId: number) {
      const response = await reduceItem(productId);
    },

    async handlePayOrder(totalPrice: number) {
      //this.$router.push("/home-page/order");
      const response = await payOrder(totalPrice);
      // console.log(response);
      window.location.href = response.data.url;
    },
    formatPrice(value: string | number): string {
      return formatCurrency(value);
    },
  },
  mounted() {
    this.getAllProduct();
  },
  /*watch: {
    "shoppingCartDTO.items": {
      handler(newItems) {
        this.getAllProduct();
      },
      deep: true,
    },
  },*/
});
</script>
