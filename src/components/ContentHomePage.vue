<template>
  <!--<div>
    <div>
      <img
        src="https://hanoicomputercdn.com/media/lib/15-07-2024/2.jpg"
        alt="Image"
      />
    </div>

    <v-row align="center" align-content="space-between">
      <v-col
        cols="12"
        lg="2"
        md="4"
        sm="12"
        v-for="imageItem in imagesAdversting"
        :key="imageItem.image_Id"
        class="image"
      >
        <v-img
          :src="imageItem.linkIntenet"
          contain
          width="500"
          height="500"
          class="mx-auto"
        />
      </v-col>
    </v-row>
    <v-spacer></v-spacer>

    <div>
      <div></div>
      <div class="div-sale-product-background"></div>
    </div>
  </div>-->
  <v-container>
    <!-- Banner quảng cáo -->
    <v-img
      src="/image/Banner-gaming_laptops.jpg"
      height="300"
      class="mb-6 rounded-lg"
      cover
    ></v-img>

    <!-- Danh mục sản phẩm nổi bật -->
    <h2 class="text-h5 font-weight-bold mb-4">Laptop nổi bật</h2>
    <v-row>
      <v-col
        v-for="product in featuredProducts"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="rounded-xl" outlined>
          <v-img :src="product.image" height="200" class="rounded-t-xl"></v-img>
          <v-card-title class="text-subtitle-1 font-weight-medium">
            {{ product.name }}
          </v-card-title>
          <v-card-subtitle class="text-primary font-weight-bold">
            {{ formatPrice(product.price) }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" @click="goToDetail(product.id)">
              Xem chi tiết
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Khuyến mãi -->
    <v-alert type="info" class="mt-8" border="left" colored-border>
      Miễn phí vận chuyển cho đơn hàng từ 10.000.000 VNĐ
    </v-alert>
  </v-container>
</template>
<style scoped>
.image {
  width: 20px;
  height: 15px;
  object-fit: contain;
  display: block;
  margin: auto;
}
.div-sale-product-background {
  position: absolute; /* Fixes it relative to the nearest positioned ancestor */
  background-image: url("https://img.freepik.com/free-photo/3d-rendering-hexagonal-texture-background_23-2150796421.jpg?semt=ais_hybrid&w=740"); /* Example: add your background image */
  background-size: cover;
  /*z-index: -1;  Ensures it's placed behind other content */
  width: 100%;
  height: 100%;
  opacity: 0.5; /* Optional: make it slightly transparent if needed */
}
.text-primary {
  color: #1976d2;
}
</style>
<script>
/*import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      imagesAdversting: [
        {
          image_Id: 0,
          linkIntenet:
            "https://i.pinimg.com/736x/d8/0e/af/d80eaf072bed31145080967d76fc3c84.jpg",
        },
        {
          image_Id: 1,
          linkIntenet:
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd/74da3746314261.584fd9b657f39.png",
        },
        {
          image_Id: 2,
          linkIntenet:
            "https://i.pinimg.com/736x/d8/0e/af/d80eaf072bed31145080967d76fc3c84.jpg",
        },
        {
          image_Id: 3,
          linkIntenet:
            "https://mir-s3-cdn-cf.behance.net/project_modules/source/91e71246314261.5b2fa9b696b56.png",
        },
        {
          image_Id: 4,
          linkIntenet:
            "https://mir-s3-cdn-cf.behance.net/project_modules/source/d91b1946314261.5b2fa9b696031.png",
        },
        {
          image_Id: 5,
          linkIntenet:
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd/74da3746314261.584fd9b657f39.png",
        },
      ],
    };
  },
});*/
export default {
  name: "HomePage",
  data() {
    return {
      featuredProducts: [
        {
          id: 1,
          name: "Laptop Dell XPS 13",
          price: 28990000,
          image:
            "https://i.pinimg.com/736x/d8/0e/af/d80eaf072bed31145080967d76fc3c84.jpg",
        },
        {
          id: 2,
          name: "MacBook Pro 14",
          price: 49990000,
          image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd/74da3746314261.584fd9b657f39.png",
        },
        {
          id: 2,
          name: "MacBook Pro 14",
          price: 49990000,
          image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd/74da3746314261.584fd9b657f39.png",
        },
        {
          id: 2,
          name: "MacBook Pro 14",
          price: 49990000,
          image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd/74da3746314261.584fd9b657f39.png",
        },
        {
          id: 2,
          name: "MacBook Pro 14",
          price: 49990000,
          image:
            "https://i.pinimg.com/736x/d8/0e/af/d80eaf072bed31145080967d76fc3c84.jpg",
        },
        {
          id: 2,
          name: "MacBook Pro 14",
          price: 49990000,
          image:
            "https://i.pinimg.com/736x/d8/0e/af/d80eaf072bed31145080967d76fc3c84.jpg",
        },
        {
          id: 2,
          name: "MacBook Pro 14",
          price: 49990000,
          image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd/74da3746314261.584fd9b657f39.png",
        },
        {
          id: 2,
          name: "MacBook Pro 14",
          price: 49990000,
          image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/hd/74da3746314261.584fd9b657f39.png",
        },
        // Thêm sản phẩm khác tại đây
      ],
    };
  },
  methods: {
    formatPrice(value) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
    goToDetail(id) {
      this.$router.push({ name: "ProductDetail", params: { id } });
    },
  },
};
</script>
