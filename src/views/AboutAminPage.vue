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
          <!--<img src="/w3images/team3.jpg" alt="Jane" style="width: 100%" />-->
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
          <!--<img src="/w3images/team3.jpg" alt="Mike" style="width: 100%" />-->
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
          <!--<img src="/w3images/team3.jpg" alt="John" style="width: 100%" />-->
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
