<template>
  <v-app>
    <HeaderComponent />
    <v-sheet class="gradient-background">
      <!-- Image Slider for Ads -->
      <v-carousel cycle :interval="2000" class="carousel-container">
        <v-carousel-item
          v-for="(ad, index) in ads"
          :key="index"
          :src="ad"
          class="carousel-image"
        ></v-carousel-item>
      </v-carousel>
    </v-sheet>
    <FooterComponent />
  </v-app>
</template>

<style scoped>
.gradient-background {
  background: linear-gradient(
    to bottom,
    #cfd8dc,
    #eceff1
  ); /* Gradient from light gray to lighter gray */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full screen height */
}

.carousel-container {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.carousel-image {
  max-width: 500px; /* Set the maximum width for the images */
  max-height: 300px; /* Set the maximum height for the images */
  object-fit: contain; /* Ensure the images fit within the specified dimensions without being cut off */
}
</style>

<script lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "homePage",
  components: {
    FooterComponent,
    HeaderComponent,
  },

  data() {
    return {
      // Array to hold the image URLs for the ads
      ads: [
        "https://img.freepik.com/free-psd/black-friday-product-sale-social-media-post-design-template_47987-24560.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bcee4e175735195.64c65b0e7f738.jpg",
        "https://img.freepik.com/premium-psd/gaming-laptop-product-sale-advertising-social-media-post_252779-890.jpg", // Ad 1
      ],
    };
  },
};
</script>
