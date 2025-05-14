<template>
  <v-app>
    <v-app-bar app color="#1f2833" dark>
      <v-toolbar-title>Laptop Store</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        label="Search for laptops..."
        solo
        dense
        hide-details
        class="mr-4"
        style="max-width: 300px"
        append-icon="mdi-magnify"
        @click:append="handleSearchingItem(userInputKeyword)"
        v-model="userInputKeyword"
      ></v-text-field>
      <v-row
        align-center
        no-gutters
        style="padding: 20px 0 20px 0"
        class="navigation_header_item"
        @click="handleClickNavigateHeaderItem(item.itemName)"
        v-for="item in navigationHeaderItems"
        :key="item.itemName"
      >
        <v-icon color="#66fcf1">{{ item.icon }}</v-icon>
        <span>{{ item.itemName }}</span>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense>
        <v-list-item
          v-for="item in navigationProductCategory"
          :key="item.itemName"
          link
          class="navigation_productCategory_item"
          @click="handleClickNavigationProductCategory(item.itemName)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.itemName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <router-view />

    <FooterComponent />
  </v-app>
</template>

<style scoped>
.navigation_header_item:hover {
  cursor: pointer;
  background-color: aqua;
}
.navigation_productCategory_item:hover {
  cursor: pointer;
  background-color: #e6381c;
}
</style>

<script lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    FooterComponent,
  },
  data() {
    return {
      drawer: false,
      userInputKeyword: "",
      navigationHeaderItems: [
        { itemName: "Home", icon: "mdi-home-circle" },
        { itemName: "Category", icon: "mdi-laptop" },
        { itemName: "Showroom System", icon: "mdi-comment-question-outline" },
        { itemName: "Shopping-Cart", icon: "mdi-cart-outline" },
        { itemName: "Order", icon: "mdi-order-bool-ascending" },
        { itemName: "Account", icon: "mdi-account-outline" },
      ],
      navigationProductCategory: [
        { itemName: "LAPTOP_GAMING", icon: "mdi-gamepad-variant-outline" },
        { itemName: "LAPTOP_OFFICE", icon: "mdi-microsoft-office" },
        { itemName: "GAMING_MOUSE", icon: "mdi-mouse-right-click" },
        { itemName: "KEYBOARD", icon: "mdi-keyboard" },
        { itemName: "SSD", icon: "mdi-memory" },
        { itemName: "SCREEN", icon: "mdi-monitor-screenshot" },
      ],
    };
  },

  methods: {
    handleClickNavigateHeaderItem(headerItemName: string): void {
      switch (headerItemName) {
        case "Category":
          this.drawer = !this.drawer;
          break;
        case "Home":
          this.$router.push("/home-page");
          break;
        case "Showroom System":
          this.$router.push("/home-page/showroom-system");
          break;
        case "Shopping-Cart":
          this.$router.push("/home-page/shopping-cart");
          break;
        case "Order":
          this.$router.push("/home-page/order");
          break;
        case "Account":
          this.$router.push("/home-page/account");
          break;
        default:
      }
    },
    handleClickNavigationProductCategory(itemName: string): void {
      this.$router
        .push({
          name: "products",
          query: { itemName },
        })
        .catch(() => {
          console.log("you are in this location");
        });
    },
    handleSearchingItem(keyword: string): void {
      this.$router
        .push({
          name: "products",
          query: { keyword },
        })
        .catch(() => {
          console.log("you are in this location");
        });
    },
  },
});
</script>
