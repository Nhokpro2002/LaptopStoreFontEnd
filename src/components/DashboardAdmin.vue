<template>
  <v-app class="dashboard_app">
    <h1>Dashboard</h1>

    <v-container>
      <v-row align-content="center" dense>
        <v-col
          v-for="(item, index) in cards"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card color="#273746" class="pa-4" width="250" height="150">
            <v-card-title class="white--text text-h4">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="white--text text-h4">
              {{ item.value }} +
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <ChartWrapper />
    </v-container>
  </v-app>
</template>

<style>
.dashboard_app {
  background-color: #0a0b0b !important;
}
</style>

<script lang="ts">
import Vue from "vue";
import ChartWrapper from "./ChartWrapper.vue";
import { getUserQuantity } from "@/services/UserService";
import { getOrderQuantity } from "@/services/YourOrderService";
import { countNumberItems } from "@/services/ProductService";

export default Vue.extend({
  name: "DashboardAdmin",
  components: { ChartWrapper },
  data() {
    return {
      cards: [
        { title: "Profit", value: 0 },
        { title: "Customer", value: 0 },
        { title: "Order", value: 0 },
        { title: "Product", value: 0 },
      ] as { title: string; value: number }[],
    };
  },

  mounted() {
    this.fetchDashboardData();
  },

  methods: {
    async fetchDashboardData() {
      try {
        const [customerQuantity, orderQuantity, productQuantity] =
          await Promise.all([
            getUserQuantity(),
            getOrderQuantity(),
            countNumberItems(),
          ]);

        this.cards = [
          { title: "Profit", value: 1000 },
          { title: "Customer", value: customerQuantity.data.data },
          { title: "Order", value: orderQuantity.data.data },
          { title: "Product", value: productQuantity.data.data },
        ];
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    },
  },
});
</script>
