<template>
  <v-app>
    <AlertCustomComponent />
    <v-form>
      <v-container>
        <v-text-field
          class="v-input__slot"
          :value="user.userId"
          label="UserID"
          readonly
          outlined
          prepend-inner-icon="mdi-identifier"
          dense
        >
        </v-text-field>

        <v-text-field
          class="v-input__slot"
          :value="user.userName"
          label="User Name"
          readonly
          outlined
          prepend-inner-icon="mdi-account"
          dense
        ></v-text-field>

        <v-text-field
          class="v-input__slot"
          :value="user.lastName"
          label="Last Name"
          readonly
          outlined
          prepend-inner-icon="mdi-account"
          dense
        ></v-text-field>

        <v-text-field
          class="v-input__slot"
          :value="user.firstName"
          label="First Name"
          readonly
          outlined
          dense
          prepend-inner-icon="mdi-account"
        ></v-text-field>

        <v-text-field
          class="v-input__slot"
          :value="user.email"
          label="Email"
          readonly
          outlined
          dense
          prepend-inner-icon="mdi-email"
        ></v-text-field>

        <div style="display: flex; gap: 8px; width: 650px">
          <v-text-field
            class="v-input__slot"
            v-model="user.address"
            label="Address"
            outlined
            dense
            prepend-inner-icon="mdi-map-marker"
          ></v-text-field>
          <v-btn
            @click="handleUpdateUserInformation(user.address)"
            style="background-color: blue; color: black"
          >
            Update
          </v-btn>
        </div>

        <v-text-field
          class="v-input__slot"
          :value="user.role"
          label="Role"
          readonly
          outlined
          dense
          prepend-inner-icon="mdi-account"
        ></v-text-field>
      </v-container>
    </v-form>
  </v-app>
</template>
<style scoped>
.v-input__slot {
  width: 550px !important;
}
</style>
<script lang="ts">
import Vue from "vue";
import { UserDTO } from "@/models/UserInterface";
import {
  getUserInformation,
  updateUserInformation,
} from "@/services/UserService";
import AlertCustomComponent from "@/components/AlertCustomComponent.vue";
import { alertUser } from "@/services/AlertCustomService";

export default Vue.extend({
  components: {
    AlertCustomComponent,
  },
  data() {
    return {
      user: {
        userId: -1,
        userName: "",
        lastName: "",
        firstName: "",
        email: "",
        address: "",
        role: "",
      } as UserDTO,
    };
  },

  methods: {
    async handleGetUserInformation() {
      try {
        const response = await getUserInformation();
        this.user = response.data.data;
      } catch (error: any) {
        alertUser.showAlertError(error.response.data.message);
      }
    },

    async handleUpdateUserInformation(newAddress: string) {
      try {
        const response = await updateUserInformation(newAddress);
        this.user = response.data.data;
        alertUser.showAlertSuccess(response.data.message);
      } catch (error: any) {
        alertUser.showAlertError(error.response.data.message);
      }
    },
  },

  mounted() {
    this.handleGetUserInformation();
    console.log(this.user.address);
  },
});
</script>
