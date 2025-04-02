const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  devServer: {
    port: 8081, // Chạy Vue trên cổng 8081
    proxy: {
      "/api": {
        target: "http://localhost:8080", // Proxy các API từ backend
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": "", // Xóa prefix /api khỏi URL khi gửi request tới backend
        },
      },
    },
  },
});
