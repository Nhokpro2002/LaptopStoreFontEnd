<template>
  <v-app>
    <h1 class="text-center">Dashboard</h1>
    <v-contanier>
      <v-row align-content="center">
        <v-col
          v-for="(item, index) in cards"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card color="grey lighten-1" class="pa-4" width="250">
            <v-card-title class="blue--text text--darken-3">
              {{ item.title }}
            </v-card-title>
            <v-card-text>{{ item.value }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-contanier>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { title: "Profit", value: 1000 },
        { title: "Customer", value: 2000 },
        { title: "Order", value: 3000 },
        { title: "Product", value: 4000 },
      ],
    };
  },
};
</script>
