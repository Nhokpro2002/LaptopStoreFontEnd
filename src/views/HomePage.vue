<template>
  <v-app>
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </v-app>
</template>

<style scoped></style>

<script lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "homePage",
  components: {
    FooterComponent,
    HeaderComponent,
  },

  data() {
    return {};
  },
});
</script>
