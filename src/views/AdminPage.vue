<template>
  <v-app>
    <!--<AppbarAdmin />-->
    <v-navigation-drawer permanent app color="#17202a">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 light-blue--text text--accent-4"
            >ADMIN PAGE</v-list-item-title
          >
          <v-list-item-subtitle class="light-blue--text text--accent-4"
            >Account</v-list-item-subtitle
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
            <v-list-item-title
              class="text-h6 light-blue--text text--accent-4"
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item-content>
          <v-spacer></v-spacer>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>

    <FooterComponent />
  </v-app>
</template>

<style scoped></style>
<script lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    FooterComponent,
  },
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
        { title: "User", icon: "mdi-account", route: "/admin/userAdmin" },
        { title: "Product", icon: "mdi-laptop", route: "/admin/productAdmin" },
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
