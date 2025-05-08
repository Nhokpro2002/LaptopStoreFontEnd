<template>
  <div class="text-center">
    <v-snackbar
      top
      v-model="$store.state.moduleAlertCustom.visible"
      :timeout="$store.state.moduleAlertCustom.timeout"
      :color="$store.state.moduleAlertCustom.color || 'colorOfResult'"
      elevation="8"
      dark
    >
      <v-icon left>mdi-information</v-icon>
      {{ $store.state.moduleAlertCustom.message }}

      <template v-slot:action="{ attrs }">
        <v-btn
          icon
          @click="$store.state.moduleAlertCustom.visible = false"
          v-bind="attrs"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<style scoped>
.v-snackbar {
  max-width: 400px;
  margin: auto;
}
</style>

<script>
export default {};
</script>
