<template>
  <div>
    <div>
      <HeaderComponent />
    </div>
    <HeaderComponent />
    <div>
      <FooterComponent />
    </div>
  </div>
</template>
<style scoped></style>
<script>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "customerInfoPage",
  components: { HeaderComponent, FooterComponent },
});
</script>
