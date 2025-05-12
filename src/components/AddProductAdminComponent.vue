<template>
  <v-container class="fill-height" fluid>
    <AlertCustomComponent />
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card elevation="12" class="pa-4 rounded-xl">
          <v-card-title class="headline justify-center text-primary">
            ADD PRODUCT
          </v-card-title>
          <v-card-text>
            <!-- Upload Image -->
            <v-form @submit.prevent="submitForm" class="mb-4">
              <v-file-input
                label="Select Image"
                v-model="imageFile"
                accept="api/upload-image/*"
                prepend-icon="mdi-image"
                required
              ></v-file-input>
            </v-form>
            <!-- Product Info -->
            <v-form @submit.prevent="submitForm" ref="form">
              <v-text-field
                label="Product Name"
                v-model="product.productName"
                required
              ></v-text-field>
              <v-text-field
                label="Description"
                v-model="product.description"
                required
              ></v-text-field>
              <v-text-field
                label="Importing Price"
                v-model="product.importingPrice"
                required
              ></v-text-field>
              <v-text-field
                label="Selling Price"
                v-model="product.sellingPrice"
                required
              ></v-text-field>
              <v-text-field
                label="Stock"
                v-model="product.stock"
                required
              ></v-text-field>
              <v-radio-group v-model="product.category">
                <v-row>
                  <v-col
                    v-for="option in categoryOptions"
                    :key="option"
                    cols="12"
                    sm="6"
                  >
                    <v-radio :label="option" :value="option" color="blue" />
                  </v-col>
                </v-row>
              </v-radio-group>
              <v-btn class="mt-4" color="primary" block type="submit">
                Add Product
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style></style>

<script lang="ts">
import Vue from "vue";
import { save } from "@/services/ProductService";
import { upload } from "@/services/ImageUploadService";
import { Product } from "@/models/ProductInterface";
import { alertUser } from "@/services/AlertCustomService";
import AlertCustomComponent from "./AlertCustomComponent.vue";

export default Vue.extend({
  components: {
    AlertCustomComponent,
  },
  data() {
    return {
      product: {
        productName: "",
        description: "",
        importingPrice: 0,
        sellingPrice: 0,
        stock: 0,
        category: "",
        imageURL: "",
      } as Product,
      imageFile: null,
      category: "",
      categoryOptions: [
        "GAMING_MOUSE",
        "KEYBOARD",
        "LAPTOP_GAMING",
        "LAPTOP_OFFICE",
        "SSD",
        "SCREEN",
      ],
    };
  },
  methods: {
    async submitForm() {
      try {
        await this.uploadImage();
        const response = await save(this.product);
        alertUser.showAlertSuccess(response.data.message);
      } catch (error: any) {
        alertUser.showAlertError(error.response.data.message);
      }
    },

    async uploadImage() {
      try {
        if (!this.imageFile) {
          alertUser.showAlertError("No Image is selected");
          return;
        }
        const formData = new FormData();
        formData.append("file", this.imageFile);
        const response = await upload(formData);
        this.product.imageURL = response.data.data;
      } catch (error: any) {
        alertUser.showAlertError(error.response.data.message);
      }
    },
  },
});
</script>

<style scoped>
.register-page {
  background-color: #313639;
  min-height: 100vh;
  padding-top: 40px;
}
</style>
