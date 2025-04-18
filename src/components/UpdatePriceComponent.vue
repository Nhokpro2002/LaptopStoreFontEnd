<template>
  <div v-if="visible" style="display: inline-block">
    <v-text-field
      v-model="newPrice"
      label="New Price"
      type="number"
      outlined
      dense
      prepend-inner-icon="mdi-currency-usd"
      style="max-width: 250px"
    />
    <v-btn @click="confirm">Confirm</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PriceInput",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      newPrice: null as number | null,
    };
  },
  methods: {
    confirm() {
      // emit the new price
      this.$emit("confirm-price", this.newPrice);
    },
  },
});
</script>
