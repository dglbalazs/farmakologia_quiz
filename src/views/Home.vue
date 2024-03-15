<template>
  <div class="home">
    <main-page></main-page>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";

export default {
  name: "Home",
  components: {
    MainPage,
  },
};
</script>

<style>
.home {
  background: black;
}

.home:before {
  content: "";
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 1;
  background-color: black;
  background-image: url("../assets/BG3.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
