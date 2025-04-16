<template>
  <v-app-bar app color="grey darken-4" dark>
    <v-toolbar-title>Laptop Store</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      label="Search for laptops..."
      solo
      dense
      hide-details
      class="mr-4"
      style="max-width: 300px"
    ></v-text-field>
    <v-btn text>Category</v-btn>
    <v-btn text>Showroom Location</v-btn>
    <v-btn text>User</v-btn>
    <v-btn text>Support</v-btn>
    <v-btn text>
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<style scoped></style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
