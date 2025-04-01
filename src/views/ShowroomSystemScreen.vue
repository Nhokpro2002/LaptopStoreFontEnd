<template>
  <v-container class="showroom-system-screen" v-if="visible">
    <v-card class="pa-5">
      <v-card-title>Showrooms</v-card-title>
      <v-card-text>
        <span>Location A</span>
      </v-card-text>
      <v-card-text>
        <span>Location B</span>
      </v-card-text>
      <v-card-text>
        <span>Location C</span>
      </v-card-text>
      <v-card-text>
        <span>Location D</span>
      </v-card-text>
      <v-card-text>
        <span>Location E</span>
      </v-card-text>
      <v-btn color="error" @click="$emit('close')">Close</v-btn>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    visible: Boolean,
  },
});
</script>

<style scoped>
.showroom-system-screen {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(90%);
  background: rgba(0, 0, 0, 0.8);
  width: 200px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.2);
  z-index: 1;
  padding: 3px;
}

span {
  font-weight: bold;
  font-size: 20px;
}

span:hover {
  cursor: pointer;
  color: red;
}
</style>
