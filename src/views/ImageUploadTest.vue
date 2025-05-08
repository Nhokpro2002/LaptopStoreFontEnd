<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <img :src="imageUrl" v-if="imageUrl" alt="Uploaded Image" />
  </div>
</template>

<script>
import { upload } from "../services/ImageUploadService";

export default {
  data() {
    return {
      imageUrl: null, // Lưu URL của ảnh sau khi upload
    };
  },
  methods: {
    async handleFileUpload(event) {
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
      try {
        const response = await upload(formData);
        this.imageUrl = response.data.data;
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    },
  },
};
</script>
