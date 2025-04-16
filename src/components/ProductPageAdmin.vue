<template>
  <v-data-table :headers="headers" :items="products" class="elevation-1">
    <!--<template v-slot:item="{ item }">
      <v-img
        :src="item.image"
        max-width="80"
        max-height="80"
        cover
        class="rounded"
      />
    </template> -->
  </v-data-table>
</template>

<script lang="ts">
export default {
  data() {
    return {
      headers: [
        { text: "Image", value: "image" },
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
      ],
      products: [
        {
          id: 1,
          name: "iPhone 15",
          price: 999,
          image:
            "https://1pro.vn/wp-content/uploads/2025/03/mba13-m4-skyblue-gallery1-202503-1280x984.jpeg",
        },
        {
          id: 2,
          name: "Samsung S23",
          price: 899,
          image: "https://via.placeholder.com/80x80?text=Samsung",
        },
      ],
    };
  },
};
</script>
