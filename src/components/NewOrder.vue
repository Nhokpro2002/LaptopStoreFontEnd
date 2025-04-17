<template>
  <div>
    <HeaderComponent />

    <v-container>
      <h1 class="text-h5 mb-4">Order Details</h1>

      <v-data-table
        :headers="headers"
        :items="yourOrderDTO.items"
        item-key="productDTO.productId"
        class="elevation-1"
        dense
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.productDTO.productName }}</td>
            <td>{{ item.productDTO.description }}</td>
            <td>{{ item.productDTO.sellingPrice }}</td>
            <td>{{ item.productQuantity }}</td>
          </tr>
        </template>
      </v-data-table>

      <div class="mt-4 text-right">
        <strong>Total Price: {{ yourOrderDTO.totalPrice }} VND</strong>
      </div>

      <v-btn color="primary" class="mt-4" @click="createYourOrder">
        Confirm and Pay
      </v-btn>
    </v-container>

    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createYourOrder } from "@/services/YourOrderService";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

interface YourOrderDTO {
  yourOrderId: number;
  customerName: string;
  customerAddress: string;
  agentName: string;
  items: YourOrderItemDTO[];
  totalPrice: number;
  yourOrderStatus: string;
}

interface YourOrderItemDTO {
  productDTO: ProductDTO;
  productQuantity: number;
}

interface ProductDTO {
  productId: number;
  productName: string;
  description: string;
  sellingPrice: string;
  category: string;
}

export default defineComponent({
  name: "yourOrder",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      yourOrderDTO: {
        yourOrderId: 0,
        customerName: "",
        customerAddress: "",
        agentName: "Nhokpro2002",
        items: [],
        totalPrice: 0,
        yourOrderStatus: "",
      } as YourOrderDTO,
      headers: [
        { text: "Product Name", value: "productDTO.productName" },
        { text: "Description", value: "productDTO.description" },
        { text: "SellingPrice", value: "productDTO.sellingPrice" },
        { text: "Quantity", value: "productQuantity" },
      ],
    };
  },
  methods: {
    async createYourOrder() {
      const response = await createYourOrder();
      const newOrder: YourOrderDTO = response.data;
      console.log("Order received:", newOrder);
      this.yourOrderDTO = newOrder;
      alert("Order be created succesfully!");
    },
  },
});
</script>
