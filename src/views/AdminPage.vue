<template>
  <v-app>
    <v-navigation-drawer app permanent class="navigation_background">
      <v-container class="pa-4">
        <v-row align-center no-gutters>
          <v-icon>mdi-menu</v-icon>
          <span class="ml-2 font-weight-bold">ADMIN</span>
        </v-row>
      </v-container>

      <v-container>
        <v-list>
          <v-row
            align-center
            no-gutters
            style="padding: 20px 0 20px 0"
            class="navigation_item"
          >
            <v-icon>mdi-view-dashboard</v-icon>
            <span>Dashboard</span>
          </v-row>
          <v-row
            v-bind="props"
            align-center
            no-gutters
            style="padding: 20px 0 20px 0"
            class="navigation_item"
            @click="clickProductTag"
          >
            <v-icon>mdi-laptop</v-icon>
            <span>Product</span>
          </v-row>
          <v-row
            align-center
            no-gutters
            style="padding: 20px 0 20px 0"
            class="navigation_item"
          >
            <v-icon>mdi-order-bool-ascending</v-icon>
            <span>Order</span>
          </v-row>
          <v-row
            align-center
            no-gutters
            style="padding: 20px 0 20px 0"
            class="navigation_item"
          >
            <v-icon>mdi-chart-areaspline</v-icon>
            <span>Statistics</span>
          </v-row>
          <v-row
            align-center
            no-gutters
            style="padding: 20px 0 20px 0"
            class="navigation_item"
          >
            <v-icon>mdi-tag</v-icon>
            <span>Hot offers</span>
          </v-row>
          <v-row
            align-center
            no-gutters
            style="padding: 20px 0 20px 0"
            class="navigation_item"
            @click="passToAllUserPage"
          >
            <v-icon>mdi-account</v-icon>
            <span>User</span>
          </v-row>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-main style="padding: 0">
      <v-app-bar style="height: 55px">
        <div class="search-container">
          <input type="text" placeholder="Search..." class="search-input" />
          <button class="search-button">
            <v-icon>mdi-magnify</v-icon>
          </button>
        </div>

        <v-list>
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              margin-left: 250px;
            "
          >
            <div style="margin-left: 30px" class="message">
              <span style="padding-right: 5px">Message</span>
              <v-icon>mdi-chat</v-icon>
            </div>
            <div style="margin-left: 30px" class="inform">
              <span style="padding-right: 5px">Inform</span>
              <v-icon>mdi-bell</v-icon>
            </div>
            <div style="margin-left: 30px" class="nhokpro2002">
              <span style="padding-right: 5px">Nhokpro2002</span>
              <v-avatar size="30">
                <img
                  src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/456821693_1814167652441582_525605006680716638_n.jpg?stp=c0.0.720.720a_dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEk041AWYt6PB1cc4PGcwywMxZkr68s-RAzFmSvryz5EMSDAh1-WTdPAJNcImfeuuHKiYeSC0Daui-lDxbWikH-&_nc_ohc=qm4WRThDX3QQ7kNvwGHWoXC&_nc_oc=Adnb2Y9Fc59M1LjrA04z1hgWTFVnsg4fAcxI9-vP20R6h3GMMzaW1gGiLqxNnn0UgFA&_nc_zt=24&_nc_ht=scontent.fhan17-1.fna&_nc_gid=oYOCspzDohJpH8Htaf6yRA&oh=00_AfHiR87J8Q-C1c2qyTOVU-gKQUl8_ynA-2SmPvlPJGisow&oe=6803F53E"
                  alt="Avatar"
                />
              </v-avatar>
            </div>
          </div>
        </v-list>
      </v-app-bar>
      <router-view />
    </v-main>
    <FooterComponent />
    <router-view />
  </v-app>
</template>

<style>
.navigation_background {
  background-image: linear-gradient(rgb(202, 207, 210), rgb(242, 243, 244));
}

.navigation_item:hover {
  cursor: pointer;
  background-color: #1983ee;
}

.search-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  overflow: hidden;
  width: 300px;
  height: 35px;
  background-color: white;
  margin-left: 10px;
  margin-bottom: 8px;
}

.search-input {
  border: none;
  outline: none;
  padding: 8px 12px;
  flex: 1;
  font-size: 14px;
}

.search-button {
  background: none;
  border: none;
  padding: 0 12px;
  cursor: pointer;
  font-size: 16px;
}

.inform:hover,
.message:hover,
.nhokpro2002:hover {
  background-color: #1983ee;
  cursor: pointer;
}

.badge {
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  /* Nếu bạn muốn thêm kích thước chữ */
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "adminPage",
  components: {
    FooterComponent,
  },
  data() {
    return {};
  },
  methods: {
    clickProductTag(): void {
      this.$router.push("/admin/product");
    },

    passToAllUserPage() {
      this.$router.push("/admin/allUser");
    },
  },
});
</script>
