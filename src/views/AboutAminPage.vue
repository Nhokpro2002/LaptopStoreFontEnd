<template>
  <v-app>
    <div class="about-section">
      <h1>About Us Page</h1>
      <p>This website belong to Nhokpro2002</p>
      <p>
        Nhokpro2002 make website during time of internship in Newwave Solution
        JSC
      </p>
      <p>
        E-commerce website with features for buying, selling, adding, editing,
        and deleting products
      </p>
    </div>

    <h2 style="text-align: center">ONE FOR ALL</h2>
    <div class="row">
      <div class="column">
        <div class="card">
          <img
            src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/456821693_1814167652441582_525605006680716638_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tNMdrmdZeTUQ7kNvwHWZA5l&_nc_oc=AdlA8IJELFW-MAJb0eH-rKxR_8xxGnAadm0VGhnNQoV9L_NtkRwto2ylu54ADoWxp7Q&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=OPGqD-p_1CzTmxIqU7j-zA&oh=00_AfJcL0-YEueBTJBxdL-uz5-p0JlqkAv43kl3D7ndilI32A&oe=682B867C"
            alt="Jane"
            style="width: 100%"
          />
          <div class="container">
            <h2>Jane Doe</h2>
            <p class="title">Frontend Developer</p>
            <p>CSS wizard</p>
            <p>nhokpro2002@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/456821693_1814167652441582_525605006680716638_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tNMdrmdZeTUQ7kNvwHWZA5l&_nc_oc=AdlA8IJELFW-MAJb0eH-rKxR_8xxGnAadm0VGhnNQoV9L_NtkRwto2ylu54ADoWxp7Q&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=OPGqD-p_1CzTmxIqU7j-zA&oh=00_AfJcL0-YEueBTJBxdL-uz5-p0JlqkAv43kl3D7ndilI32A&oe=682B867C"
            alt="Mike"
            style="width: 100%"
          />
          <div class="container">
            <h2>Nhokpro2002</h2>
            <p class="title">Backend Developer</p>
            <p>Java king</p>
            <p>nhokpro2002@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/456821693_1814167652441582_525605006680716638_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tNMdrmdZeTUQ7kNvwHWZA5l&_nc_oc=AdlA8IJELFW-MAJb0eH-rKxR_8xxGnAadm0VGhnNQoV9L_NtkRwto2ylu54ADoWxp7Q&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=OPGqD-p_1CzTmxIqU7j-zA&oh=00_AfJcL0-YEueBTJBxdL-uz5-p0JlqkAv43kl3D7ndilI32A&oe=682B867C"
            alt="John"
            style="width: 100%"
          />
          <div class="container">
            <h2>Nhokpro2002</h2>
            <p class="title">Web Designer</p>
            <p>Creative master</p>
            <p>nhokpro2002@gmail.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<style scoped>
h1 {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>
<script></script>
