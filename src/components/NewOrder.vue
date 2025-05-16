<template>
  <div></div>
  <!--<div>
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
            <td>{{ formatCurrency(item.productDTO.sellingPrice) }}</td>
            <td>{{ item.productQuantity }}</td>
          </tr>
        </template>
      </v-data-table>

      <div class="mt-4 text-right">
        <strong>Your Order Id: {{ yourOrderDTO.yourOrderId }} <br /></strong>
        <strong>Customer: {{ yourOrderDTO.customerName }} <br /></strong>
        <strong>Address: {{ yourOrderDTO.customerAddress }} <br /></strong>
        <strong>Computer Store: {{ yourOrderDTO.agentName }} <br /></strong>
        <strong>Order Status: {{ yourOrderDTO.yourOrderStatus }} <br /></strong>
        <strong
          >Total Price: {{ formatCurrency(yourOrderDTO.totalPrice) }}</strong
        >
      </div>

      <v-btn color="primary" class="mt-4" @click="confirmAndPay">
        Confirm and Pay
      </v-btn>
    </v-container>

    <FooterComponent />
  </div>-->
</template>

<script lang="ts">
/*import { defineComponent } from "vue";
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
  sellingPrice: number | string;
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
        agentName: "",
        items: [],
        totalPrice: 0,
        yourOrderStatus: "",
      } as YourOrderDTO,
      headers: [
        { text: "Product Name", value: "productDTO.productName" },
        { text: "Description", value: "productDTO.description" },
        { text: "Selling Price", value: "productDTO.sellingPrice" },
        { text: "Quantity", value: "productQuantity" },
      ],
    };
  },
  mounted() {
    this.fetchYourOrder();
  },
  methods: {
    async fetchYourOrder() {
      try {
        const response = await createYourOrder();
        const newOrder: YourOrderDTO = response.data.data;
        this.yourOrderDTO = newOrder;
        console.log("Order received:", newOrder);
      } catch (error) {
        console.error("Failed to fetch order:", error);
        alert("Failed to load order.");
      }
    },
    confirmAndPay() {
      alert("Order confirmed!");
    },
    formatCurrency(value: number | string): string {
      const num = typeof value === "string" ? parseFloat(value) : value;
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(num);
    },
  },
});*/
</script>
