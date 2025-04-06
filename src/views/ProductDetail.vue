<template>
  <div class="product-detail">
    <h1>{{ product.name }}</h1>
    <img :src="getFullImageUrl(product.imageUrl)" :alt="product.name" />
    <p>{{ product.description }}</p>
    <p>Price: {{ product.sellingPrice }}</p>
    <p>Category: {{ product.category }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getFullImageUrl(path: string) {
      return `http://localhost:8080${path}`;
    },
  },
};
</script>
