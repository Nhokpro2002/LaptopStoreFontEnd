<template>
  <v-app>
    <v-data-table
      :headers="headers"
      :items="userDTOs"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <FooterComponent />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { getAllUser, UserDTO } from "@/services/UserService";

export default Vue.extend({
  name: "AllUser",
  components: {
    FooterComponent,
  },
  data() {
    return {
      headers: [
        { text: "UserID", value: "userId" },
        { text: "UserName", value: "userName" },
        { text: "LastName", value: "lastName" },
        { text: "FirstName", value: "firstName" },
        { text: "Email", value: "email" },
        { text: "Address", value: "address" },
        { text: "Role", value: "role" },
      ],
      userDTOs: [] as UserDTO[],
    };
  },
  mounted() {
    this.getAllUser();
  },
  methods: {
    async getAllUser() {
      const response = await getAllUser();
      this.userDTOs = response.data.data;
    },
  },
});
</script>
