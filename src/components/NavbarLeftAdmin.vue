<template>
  <v-navigation-drawer permanent app color="#17202a">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6 light-blue--text text--accent-4"
          >ADMIN PAGE</v-list-item-title
        >
        <v-list-item-subtitle class="light-blue--text text--accent-4"
          >Nhokpro2002</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        class="py-3"
        @click="navigateTo(item.route)"
      >
        <v-list-item-icon>
          <v-icon size="30" color="#0091EA">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-h6 light-blue--text text--accent-4">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
        <v-spacer></v-spacer>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style></style>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavbarLeftAdmin",
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          route: "/admin/dashboard",
        },
        { title: "About", icon: "mdi-image", route: "/admin/about" },
        {
          title: "Achievement",
          icon: "mdi-trophy",
          route: "/admin/achievement",
        },
        {
          title: "Notification",
          icon: "mdi-square-rounded-badge",
          route: "/admin/notification",
        },
        { title: "User", icon: "mdi-account", route: "/userAdmin" },
        { title: "Product", icon: "mdi-laptop", route: "/productAdmin" },
        { title: "Setting", icon: "mdi-cog", route: "/admin/setting" },
      ],
      right: null,
    };
  },

  methods: {
    navigateTo(route: string) {
      this.$router.push(route);
    },
    getAllUser(route: string) {
      this.$router.push(route);
    },
  },
});
</script>
