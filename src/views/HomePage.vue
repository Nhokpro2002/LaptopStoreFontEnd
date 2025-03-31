<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar app color="#070d12">
      <v-container>
        <v-row
          align="center"
          justify="space-between"
          no-gutters
          class="flex-nowrap"
        >
          <!-- Logo -->
          <v-col cols="auto">
            <v-toolbar-title class="font-weight-bold" style="color: #00ffff"
              >Laptop Store</v-toolbar-title
            >
          </v-col>
          <v-col cols="auto">
            <v-btn
              text
              class="text-none d-flex align-center"
              @click="toggleCategory"
            >
              <v-icon style="color: #00ffff">mdi-reorder-horizontal</v-icon>
              <span style="color: #00ffff">Category</span>
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
              <v-icon left style="color: #00ffff">mdi-phone</v-icon>
              <span>Hotline</span>
            </v-btn>

            <v-btn text class="hidden-xs-only text-none d-flex align-center">
              <v-icon left style="color: #00ffff">mdi-store</v-icon>
              <span>Showroom System</span>
            </v-btn>

            <v-btn text class="text-none d-flex align-center">
              <v-icon left style="color: #00ffff">mdi-cart</v-icon>
              <span>Shopping Cart</span>
            </v-btn>

            <v-btn text class="text-none d-flex align-center">
              <v-icon left style="color: #00ffff">mdi-account</v-icon>
              <span style="color: #00ffff">User</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Category Screen Component -->
    <CategoryScreen :visible="showCategory" @close="showCategory = false" />

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
              <v-btn color="primary" class="button_buy_now">Buy Now</v-btn>
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
  border-color: red;
}

.equal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

span {
  color: #00ffff;
  transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
}

span:hover {
  text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff; /* Hiệu ứng phát sáng */
}

/* Khi chưa click vào (màu viền khác với màu nền) */
::v-deep(.v-input) {
  border: 2px solid #888 !important; /* Viền xám nhạt */
  background-color: #ffffff !important; /* Nền tối hơn một chút */
  color: #00f0ff !important; /* Màu chữ sáng hơn */
  transition: all 0.3s ease-in-out;
}

/* Khi click vào (focus) */
::v-deep(.v-input.v-input--is-focused) {
  border-color: #00f0ff !important; /* Viền xanh neon */
  color: #00f0ff !important; /* Màu chữ xanh neon */
  box-shadow: 0 0 10px #00f0ff; /* Hiệu ứng phát sáng */
}

/* Placeholder cũng đổi màu khi focus */
::v-deep(.v-input input::placeholder) {
  color: #00f0ff !important; /* Màu chữ placeholder nhạt */
}

::v-deep(.v-input.v-input--is-focused input::placeholder) {
  color: rgba(
    0,
    240,
    255,
    0.7
  ) !important; /* Placeholder phát sáng khi focus */
}

.button_buy_now {
  background-color: blue !important;
  color: white;
}

.button_buy_now:hover {
  background-color: red !important;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CategoryScreen from "@/views/CategoryScreen.vue";

export default defineComponent({
  components: {
    CategoryScreen,
  },
  setup() {
    // Search query state
    const searchQuery = ref<string>("");

    // Laptop list
    const laptops = ref([
      {
        name: "ASUS TUF Gaming",
        price: "$123",
        image: require("@/assets/w800.png"),
      },
      {
        name: "ASUS TUF Gaming",
        price: "$234",
        image: require("@/assets/laptop_asus_2.png"),
      },
      {
        name: "ASUS TUF Gaming",
        price: "$345",
        image: require("@/assets/laptop_asus_2.png"),
      },
      {
        name: "ASUS TUF Gaming",
        price: "$456",
        image: require("@/assets/laptop_asus_2.png"),
      },
      {
        name: "ASUS TUF Gaming",
        price: "$567",
        image: require("@/assets/laptop_asus_2.png"),
      },
      {
        name: "ASUS TUF Gaming",
        price: "$678",
        image: require("@/assets/laptop_asus_2.png"),
      },
    ]);

    // Image list
    const images = ref([
      "https://www.homepaylater.vn/static/f8fd5d1834c70f3455a7de77e6cf5040/c579c/co_bao_nhieu_dong_laptop_gaming_asus_so_sanh_giua_cac_dong_1aedfd3e5a.webp",
      "https://nvidianews.nvidia.com/_gallery/get_file/?file_id=677c4a633d63324b1c25f259",
      "https://mark.scorptec.com.au/ASUSROGFlowmed.jpg",
      "https://cdn.mos.cms.futurecdn.net/yqAB9eKn2hUsfKusqSE3v6-1000-80.jpg",
    ]);

    // Category screen visibility state
    const showCategory = ref<boolean>(false);

    // Toggle function
    const toggleCategory = () => {
      showCategory.value = !showCategory.value;
    };

    return {
      searchQuery,
      laptops,
      images,
      showCategory,
      toggleCategory,
    };
  },
});
</script>
