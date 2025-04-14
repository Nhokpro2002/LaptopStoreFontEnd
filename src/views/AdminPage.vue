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
          <v-row align-center no-gutters class="my-5">
            <v-icon>mdi-view-dashboard</v-icon>
            <span>Dashboard</span>
          </v-row>
          <v-row align-center no-gutters class="my-10">
            <v-icon>mdi-laptop</v-icon>
            <span>Product</span>
          </v-row>
          <v-row align-center no-gutters class="my-10">
            <v-icon>mdi-order-bool-ascending</v-icon>
            <span>Order</span>
          </v-row>
          <v-row align-center no-gutters class="my-10">
            <v-icon>mdi-chart-areaspline</v-icon>
            <span>Statistics</span>
          </v-row>
          <v-row align-center no-gutters class="my-10">
            <v-icon>mdi-tag</v-icon>
            <span>Hot offers</span>
          </v-row>
          <v-row align-center no-gutters class="my-10">
            <v-icon>mdi-account</v-icon>
            <span>User</span>
          </v-row>
        </v-list>
      </v-container>

      <v-list>
        <!-- Menu items ở đây -->
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <h1>Welcome to Admin Page</h1>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.navigation_background {
  background-image: linear-gradient(black, rgb(242, 243, 244));
}
</style>
