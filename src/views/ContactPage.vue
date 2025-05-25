<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-6 elevation-3">
          <v-card-title class="headline font-weight-bold justify-center">
            Contact with us
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Full name"
                outlined
                dense
                required
              ></v-text-field>

              <v-text-field
                label="Email"
                outlined
                dense
                required
                type="email"
              ></v-text-field>

              <v-text-field label="Số điện thoại" outlined dense></v-text-field>

              <v-textarea
                label="Message context"
                outlined
                rows="5"
                dense
                required
              ></v-textarea>

              <v-btn color="primary" class="mt-4" block> Send </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
/* Tuỳ chỉnh giao diện nếu cần */
</style>
