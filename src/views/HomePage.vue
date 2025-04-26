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

    <v-container fluid>
      <v-row>
        <v-col
          v-for="image in images"
          :key="image.name"
          cols="12"
          md="3"
          lg="4"
        >
          <v-card
            @click="handleImageClick(image.productCategory)"
            max-height="350"
            max-width="400"
          >
            <v-card-text>{{ image.name }}</v-card-text>
            <v-img
              :src="image.src"
              contain
              aspect-ratio="1"
              class="mx-auto"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <FooterComponent />
  </v-app>
</template>

<style scoped>
.gradient-background {
  background: linear-gradient(to bottom, #cfd8dc, #eceff1);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
import { Category } from "@/services/ProductService";
import { defineComponent } from "vue";

export default defineComponent({
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
        "https://img.freepik.com/premium-psd/gaming-laptop-product-sale-advertising-social-media-post_252779-890.jpg",
      ],

      images: [
        {
          name: "LAPTOP OFFICE",
          src: "https://cdn.hoanghamobile.com/Uploads/2024/04/16/laptop-4.jpg",
          productCategory: Category.LAPTOP_OFFICE,
        },
        {
          name: "LAPTOP GAMING",
          src: "https://cdn.tgdd.vn//News/1173869//23-730x408-1.jpg",
          productCategory: Category.LAPTOP_GAMING,
        },
        {
          name: "SDD vs HDD",
          src: "https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/dau-hieu-hu-o-cung-ssd-01.jpg",
          productCategory: Category.SSD,
        },
        {
          name: "MOUSE",
          src: "https://product.hstatic.net/200000680839/product/81dfwlpheel._ac_sl1500__9bea606b9f464b0e854a942dc5659915_f9c3c0c8c0fa43d593f32dc7cd9e492c.jpg",
          productCategory: Category.GAMING_MOUSE,
        },
        {
          name: "KEYBOARD",
          src: "https://vgnlab.com/cdn/shop/articles/7.21green_keyboard.jpg?v=1695377731&width=1500",
          productCategory: Category.KEYBOARD,
        },
        {
          name: "SCREEN",
          src: "https://images.thdstatic.com/productImages/42da889e-b286-4405-a60c-a39665d82ff8/svn/vivohome-projector-screens-x002cmjaqf-64_600.jpg",
          productCategory: Category.SCREEN,
        },
      ],
    };
  },

  methods: {
    handleImageClick(productCategory: Category) {
      this.$router.push({
        name: "productPageByCategory",
        query: { category: productCategory.toString() },
      });
    },
  },
});
</script>
