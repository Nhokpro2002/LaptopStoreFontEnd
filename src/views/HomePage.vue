<template>
  <v-app>
    <HeaderComponent />
    <!--
    <v-app-bar app color="grey darken-4" dark>
      <v-toolbar-title>Laptop Store</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        label="Search for laptops..."
        solo
        dense
        hide-details
        class="mr-4"
        style="max-width: 300px"
      ></v-text-field>
      <v-btn text>Category</v-btn>
      <v-btn text>Showroom Location</v-btn>
      <v-btn text>User</v-btn>
      <v-btn text>Support</v-btn>
      <v-btn text>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
    -->

    <!-- Content Section with Gradient Background -->
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

    <div style="display: inline-flex">
      <router-link to="/products">
        <button>PRODUCT</button>
      </router-link>
      <router-view />
    </div>

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
