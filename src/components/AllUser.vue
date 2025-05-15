<template>
  <v-data-table
    :headers="headers"
    :items="users"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>USERS</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedUser.userId"
                      label="User ID"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedUser.userName"
                      label="User Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedUser.lastName"
                      label="Last Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedUser.firstName"
                      label="First Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedUser.email"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedUser.address"
                      label="Address"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedUser.role"
                      label="Role"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this user?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteUserConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editUser(item)" color="blue"
        >mdi-pencil</v-icon
      >
      <v-icon small @click="deleteUser(item)" color="red">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { getAllUser } from "@/services/UserService";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "User ID",
        align: "start",
        sortable: false,
        value: "userId",
      },
      { text: "User Name", value: "userName" },
      { text: "Last Name", value: "lastName" },
      { text: "First Name", value: "firstName" },
      { text: "Email", value: "email" },
      { text: "Address", value: "address" },
      { text: "Role", value: "role" },
      { text: "Action", value: "actions", sortable: false },
    ],
    users: [],
    editedIndex: -1,
    editedUser: {
      userId: -1,
      userName: "",
      lastName: "",
      firstName: "",
      email: "",
      address: "",
      role: "",
    },
    defaultUser: {
      userId: -1,
      userName: "",
      lastName: "",
      firstName: "",
      email: "",
      address: "",
      role: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New User" : "Edit User";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  mounted() {
    this.handleGetAllUser();
  },

  methods: {
    async handleGetAllUser() {
      const response = await getAllUser();
      this.users = response.data.data;
      console.log(response);
    },

    editUser(user) {
      this.editedIndex = this.users.indexOf(user);
      this.editedUser = Object.assign({}, user);
      this.dialog = true;
    },

    deleteUser(user) {
      this.editedIndex = this.users.indexOf(user);
      this.editedUser = Object.assign({}, user);
      this.dialogDelete = true;
    },

    deleteUserConfirm() {
      this.users.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedUser = Object.assign({}, this.defaultUser);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedUser = Object.assign({}, this.defaultUser);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedUser);
      } else {
        this.users.push(this.editedUser);
      }
      this.close();
    },
  },
};
</script>
