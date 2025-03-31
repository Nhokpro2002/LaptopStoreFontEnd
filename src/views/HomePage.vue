<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar app color="primary" dark>
      <v-container>
        <v-row
          align="center"
          justify="space-between"
          no-gutters
          class="flex-nowrap"
        >
          <!-- Logo -->
          <v-col cols="auto">
            <v-toolbar-title class="font-weight-bold"
              >Laptop Store</v-toolbar-title
            >
          </v-col>
          <v-col cols="auto">
            <v-btn text class="text-none d-flex align-center">
              <v-icon>mdi-reorder-horizontal</v-icon>
              <span>Category</span>
            </v-btn>
          </v-col>

          <!-- Search Bar -->
          <v-col cols="12" xs="7" sm="5" md="4">
            <v-text-field
              class="search_bar"
              v-model="searchQuery"
              label="Search..."
              outlined
              dense
              clearable
              prepend-inner-icon="mdi-magnify"
              hide-details
            ></v-text-field>
          </v-col>

          <!-- Navigation Buttons -->
          <v-col cols="12" xs="5" sm="4" md="6" class="d-flex justify-end">
            <v-btn text class="hidden-xs-only text-none d-flex align-center">
              <v-icon left>mdi-phone</v-icon>
              <span>Hotline</span>
            </v-btn>

            <v-btn text class="hidden-xs-only text-none d-flex align-center">
              <v-icon left>mdi-store</v-icon>
              <span>Showroom System</span>
            </v-btn>

            <v-btn text class="text-none d-flex align-center">
              <v-icon left>mdi-cart</v-icon>
              <span>Shopping Cart</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Hero Section - Auto Slide -->
    <v-container fluid>
      <v-carousel
        cycle
        hide-delimiters
        show-arrows="hover"
        height="400px"
        interval="2000"
      >
        <v-carousel-item v-for="(image, index) in images" :key="index">
          <v-img :src="image" class="equal-image"></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-container>

    <!-- Product Grid -->
    <v-container>
      <v-row>
        <v-col
          v-for="(laptop, index) in laptops"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card>
            <v-img :src="laptop.image" height="200px" contain></v-img>
            <v-card-title>{{ laptop.name }}</v-card-title>
            <v-card-subtitle>{{ laptop.price }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="primary">Buy Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Footer -->
    <v-footer dark padless>
      <v-card flat tile class="primary white--text text-center" width="100%">
        <v-card-text
          >&copy; 2025 Laptop Store - All Rights Reserved</v-card-text
        >
      </v-card>
    </v-footer>
  </v-app>
</template>

<style scoped>
.search_bar {
  margin-right: 20px;
  position: relative;
  margin-top: 0;
}

.equal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      laptops: [
        {
          name: "Laptop A",
          price: "$123",
          image: require("@/assets/w800.png"),
        },
        {
          name: "Laptop B",
          price: "$234",
          image: require("@/assets/laptop_asus_2.png"),
        },
        {
          name: "Laptop C",
          price: "$345",
          image: require("@/assets/laptop_asus_2.png"),
        },
        {
          name: "Laptop D",
          price: "$456",
          image: require("@/assets/laptop_asus_2.png"),
        },
        {
          name: "Laptop E",
          price: "$567",
          image: require("@/assets/laptop_asus_2.png"),
        },
        {
          name: "Laptop F",
          price: "$678",
          image: require("@/assets/laptop_asus_2.png"),
        },
      ],
      images: [
        "https://www.homepaylater.vn/static/f8fd5d1834c70f3455a7de77e6cf5040/c579c/co_bao_nhieu_dong_laptop_gaming_asus_so_sanh_giua_cac_dong_1aedfd3e5a.webp",
        "https://nvidianews.nvidia.com/_gallery/get_file/?file_id=677c4a633d63324b1c25f259",
        "https://mark.scorptec.com.au/ASUSROGFlowmed.jpg",
        "https://cdn.mos.cms.futurecdn.net/yqAB9eKn2hUsfKusqSE3v6-1000-80.jpg",
      ],
    };
  },
};
</script>
