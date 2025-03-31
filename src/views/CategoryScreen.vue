<template>
  <v-container class="category-screen" v-if="visible">
    <v-card class="pa-5">
      <v-card-title>Category List</v-card-title>
      <v-card-text>
        <span>Gaming Laptops</span>
      </v-card-text>
      <v-card-text>
        <span>Office Laptops</span>
      </v-card-text>
      <v-card-text>
        <span>Main, CPU, VGA</span>
      </v-card-text>
      <v-card-text>
        <span>Case, Power, Cooling</span>
      </v-card-text>
      <v-card-text>
        <span>Hard drive, RAM, Memory Card</span>
      </v-card-text>
      <v-card-text>
        <span>Screen</span>
      </v-card-text>
      <v-card-text>
        <span>Keyboard</span>
      </v-card-text>
      <v-btn color="error" @click="$emit('close')">Close</v-btn>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    visible: Boolean, // Define the prop with TypeScript
  },
});
</script>

<style scoped>
.category-screen {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  z-index: 1000;
}
</style>
