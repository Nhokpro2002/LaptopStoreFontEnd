<template>
  <v-app>
    <v-main>
      <router-view />
      <div class="home">
        <h2>Number of click: {{ count }}</h2>
        <button @click="increment" style="background-color: blue">
          Click to increment
        </button>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
});
</script>
