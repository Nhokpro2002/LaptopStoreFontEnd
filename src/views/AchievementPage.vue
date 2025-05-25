<template>
  <v-container class="py-12">
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-1 font-weight-bold">Thành Tựu Đạt Được</h1>
        <p class="subtitle-1 mt-2">
          Một số cột mốc đáng nhớ mà chúng tôi đã đạt được trong suốt hành trình
          phát triển.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(achievement, index) in achievements"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="pa-4 text-center elevation-2">
          <v-icon size="48" color="primary">{{ achievement.icon }}</v-icon>
          <h3 class="headline mt-3">{{ achievement.title }}</h3>
          <p class="mt-2 grey--text text--darken-1">
            {{ achievement.description }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  //name: "AchievementsPage",
  data() {
    return {
      achievements: [
        {
          icon: "mdi-star-circle",
          title: "Top 1 Doanh số năm 2024",
          description:
            "Chúng tôi dẫn đầu thị trường với doanh số bán hàng ấn tượng trong năm vừa qua.",
        },
        {
          icon: "mdi-account-group",
          title: "100,000+ Khách hàng",
          description:
            "Hơn 100 nghìn khách hàng đã tin tưởng sử dụng sản phẩm và dịch vụ của chúng tôi.",
        },
        {
          icon: "mdi-trophy-award",
          title: "Giải thưởng công nghệ 2023",
          description:
            "Được vinh danh là sản phẩm công nghệ xuất sắc tại hội nghị TechViet 2023.",
        },
        {
          icon: "mdi-earth",
          title: "Mở rộng ra quốc tế",
          description:
            "Đã có mặt tại 5 quốc gia và đang tiếp tục mở rộng thị trường toàn cầu.",
        },
        {
          icon: "mdi-school",
          title: "Đào tạo hơn 500 lập trình viên",
          description:
            "Hợp tác cùng các trường đại học để phát triển thế hệ kỹ sư tài năng.",
        },
        {
          icon: "mdi-heart",
          title: "Hoạt động cộng đồng",
          description:
            "Tham gia hơn 50 chương trình thiện nguyện vì cộng đồng và môi trường.",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1.display-1 {
  font-size: 3rem;
}
</style>
