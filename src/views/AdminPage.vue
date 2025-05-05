<template>
  <v-app>
    <AppbarAdmin />
    <router-view></router-view>

    <NavbarLeftAdmin />

    <FooterComponent />
  </v-app>
</template>

<style scoped></style>
<script lang="ts">
import { defineComponent } from "vue";
import AppbarAdmin from "@/components/AppbarAdmin.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import NavbarLeftAdmin from "@/components/NavbarLeftAdmin.vue";

export default defineComponent({
  name: "adminPage",
  components: {
    FooterComponent,
    AppbarAdmin,
    NavbarLeftAdmin,
  },
});
</script>
