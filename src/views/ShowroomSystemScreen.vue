<template>
  <v-container class="showroom-system-screen" v-if="visible">
    <v-card class="pa-5">
      <v-card-title>Showrooms</v-card-title>
      <v-card-text>
        <a
          href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+Khoa+h%E1%BB%8Dc+T%E1%BB%B1+nhi%C3%AAn,+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+Qu%E1%BB%91c+gia+H%C3%A0+N%E1%BB%99i/@20.9958772,105.8054023,17z/data=!3m1!4b1!4m6!3m5!1s0x3135acbf0df2c0e5:0xd740a66998e1a0ed!8m2!3d20.9958722!4d105.8079772!16s%2Fm%2F04gjt_4?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
          >Location A</a
        >
      </v-card-text>
      <v-card-text>
        <a
          href="https://www.google.com/maps/place/%C4%90%E1%BA%A1i+H%E1%BB%8Dc+B%C3%A1ch+Khoa+H%C3%A0+N%E1%BB%99i/@21.0061882,105.8405558,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ac71294bf0ab:0xc7e2d20e5e04a9da!8m2!3d21.0061832!4d105.8431307!16s%2Fm%2F027jq68?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
          >Location B</a
        >
      </v-card-text>
      <v-card-text>
        <a
          href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+Kinh+T%E1%BA%BF+Qu%E1%BB%91c+D%C3%A2n+(NEU)/@21.0000992,105.8399243,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ac71752d8f79:0xd2ec575c01017afa!8m2!3d21.0000942!4d105.8424992!16s%2Fm%2F0bwj_9k?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
          >Location C</a
        >
      </v-card-text>
      <v-card-text>
        <a
          href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+X%C3%A2y+D%E1%BB%B1ng+H%C3%A0+N%E1%BB%99i+-+HUCE/@21.0033185,105.8407458,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ac773026b415:0x499b8b613889f78a!8m2!3d21.0033135!4d105.8433207!16s%2Fm%2F09gpvp0?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
          >Location D</a
        >
      </v-card-text>
      <v-card-text>
        <a
          href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+C%C3%B4ng+ngh%E1%BB%87,+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+Qu%E1%BB%91c+gia+H%C3%A0+N%E1%BB%99i/@21.0382434,105.7801041,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab354920c233:0x5d0313a3bfdc4f37!8m2!3d21.0382384!4d105.782679!16s%2Fg%2F1224n74q?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
          >Location E</a
        >
      </v-card-text>
      <v-btn color="error" @click="$emit('close')">Close</v-btn>
    </v-card>
  </v-container>
</template>

<style scoped>
.showroom-system-screen {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(90%);
  background: rgba(0, 0, 0, 0.8);
  width: 200px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.2);
  z-index: 1;
  padding: 3px;
}

span {
  font-weight: bold;
  font-size: 20px;
}

a:hover {
  cursor: pointer;
  color: red;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    visible: Boolean,
  },
});
</script>
