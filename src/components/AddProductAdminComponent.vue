<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card elevation="12" class="pa-4 rounded-xl">
          <v-card-title class="headline justify-center text-primary">
            ADD PRODUCT
          </v-card-title>
          <v-card-text>
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
              <v-text-field
                label="Category"
                v-model="product.category"
                required
              ></v-text-field>
              <v-file-input
                label="Choose Image"
                v-model="imageFile"
                accept="image/*"
                prepend-icon="mdi-image"
                required
              ></v-file-input>
              <v-btn
                class="mt-4"
                color="primary"
                block
                type="submit"
                @click="submitForm"
              >
                Add Product
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-form @submit.prevent="uploadImage">
      <v-file-input
        label="Choose Image"
        v-model="imageFile"
        accept="image/*"
        prepend-icon="mdi-image"
        required
      ></v-file-input>

      <v-btn type="submit" color="primary" class="mt-3">Upload</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { save } from "@/services/ProductService";
import { upload } from "@/services/ImageUploadService";
import { Product } from "@/services/ProductService";

export default defineComponent({
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
    };
  },
  methods: {
    async submitForm() {
      try {
        // TODO: Call your API here
        const response = await save(this.product);
        alert(response.data.message);
        this.$router.push("/productAdmin");
      } catch (error) {
        console.error("Error submitting form", error);
      }
    },

    async uploadImage() {
      try {
        if (!this.imageFile) {
          alert("No image selected.");
          return;
        }
        const formData = new FormData();
        formData.append("file", this.imageFile);
        const response = await upload(formData);
        alert(response.data.message);
        this.product.imageURL = response.data.data;
      } catch (error) {
        alert(error);
      }
    },
  },
});
</script>

<style scoped>
.register-page {
  background-color: #e3f2fd;
  /* Light blue background */
  min-height: 100vh;
  padding-top: 40px;
}
</style>
