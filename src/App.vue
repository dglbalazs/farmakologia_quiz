<template>
  <vuetitle title="Farma" />
  <transition name="loading">
    <router-view />
  </transition>
</template>

<script>
import vuetitle from "./components/title.vue";

export default {
  name: "App",
  data() {
    return {
      currentPage: "home",
    };
  },
  computed: {
    page: function () {
      return this.$store.getters.getCurrentPage;
    },
  },
  methods: {
    setCurrPage(page) {
      this.currentPage = page;
    },

    getCurrPage() {
      this.setCurrPage(this.$store.getters.getCurrentPage);
    },
  },
  components: {
    vuetitle,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-background-color-h: 50;
  --primary-background-color-s: 00%;
  --primary-background-color-l: 80%;
  --primary-background-color: hsl(
    var(--primary-background-color-h),
    var(--primary-background-color-s),
    var(--primary-background-color-l)
  );
  --primary-font-color: rgb(26, 25, 25);
  --contrast-background-color: hsl(
    var(--primary-background-color-h),
    var(--primary-background-color-s),
    calc(var(--primary-background-color-l) - 3%)
  );
  --button-hover-background: hsla(194, 90%, 69%, 0.062);
  --contrast-button-color: hsl(
    var(--primary-background-color-h),
    var(--primary-background-color-s),
    calc(var(--primary-background-color-l) + 5%)
  );
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  position: absolute;
  top: 0px;
  left: 0px;
  transition: 0.4s;
  margin: 0;
  padding: 0px 0px;
}

#app {
  font-family: "Readex Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-font-color);
  margin-top: 60px;
  font-size: 16px;
}

@media screen and (max-width: 1300px) {
  #app {
    font-size: 14px;
  }
}

@media screen and (max-width: 480px), screen and (max-height: 480px) {
  #app {
    font-size: 12px;
  }
}

a {
  text-decoration: none;
  color: var(--primary-font-color);
}

/* ---------------------------------------------------------------------- /
        ANIMATION 
 ---------------------------------------------------------------------- */

.loading-enter-active {
  animation: bounce-in 0.6s reverse;
}

.loading-leave-active {
  animation: bounce-in 0.6s;
}

.loading2-enter-active {
  animation: bounce-in 0.7s reverse;
}

.loading2-leave-active {
  animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.05;
  }
}

/* ---------------------------------------------------------------------- /
        BUTTONS 
 ---------------------------------------------------------------------- */

/* CSS */
.button-74 {
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-74:hover {
  background-color: #fff;
}

.button-74:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
    padding: 0 25px;
  }
}

/* CSS */
.button-54 {
  margin: 15px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-54:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  .button-54 {
    padding: 0.25em 0.75em;
  }
}

/* CSS */
.button-55 {
  align-self: center;
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: 0.75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-55:hover {
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
  transform: translate3d(0, 2px, 0);
}

.button-55:focus {
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
}

/* CSS */
.button-53 {
  margin-inline: auto;
  background-color: #3dd1e7;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 100%;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-53:focus {
  outline: 0;
}

.button-53:after {
  content: "";
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

.button-53:hover:after {
  bottom: 2px;
  left: 2px;
}

@media (min-width: 768px) {
  .button-53 {
    padding: 0.75rem 3rem;
    font-size: 1.25rem;
  }
}
</style>
