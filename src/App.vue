<template>
  <v-app>
    <v-main>
      <!--<VuexTestComponent />-->
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
//import VuexTestComponent from "@/components/VuexTestComponent.txt";

export default Vue.extend({
  name: "App",
  components: {
    //VuexTestComponent,
  },
});
</script>
