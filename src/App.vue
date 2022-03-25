<template>
  <vuetitle title="Farma"/>
  <transition name='loading'>
    <router-view/>
  </transition>
</template>

<script>
import vuetitle from './components/title.vue';

export default {
  name: 'App',
  data() {
    return {
      currentPage: 'home'
    }
  },
  computed: {
    page: function() {
      return this.$store.getters.getCurrentPage
    }
  },
  methods: {

    setCurrPage(page) {
      this.currentPage = page;
    },

    getCurrPage() {
      this.setCurrPage(this.$store.getters.getCurrentPage)
    }
  },
  components: {
    vuetitle,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@600&display=swap');

* { 
  margin:0;
  padding:0;
  box-sizing: border-box;
}

:root {
  --primary-background-color-h: 10;
  --primary-background-color-s: 20%;
  --primary-background-color-l: 80%;
  --primary-background-color: hsl(var(--primary-background-color-h),var(--primary-background-color-s), var(--primary-background-color-l));
  --primary-font-color: rgb(26, 25, 25);
  --contrast-background-color: hsl(var(--primary-background-color-h),var(--primary-background-color-s), calc(var(--primary-background-color-l) - 3%));
  --button-hover-background: hsla(194, 90%, 69%, 0.062);
  --contrast-button-color: hsl(var(--primary-background-color-h),var(--primary-background-color-s), calc(var(--primary-background-color-l) + 5%));
}

html,
body {
  height:100%;
  width:100%;
}

body {
  position: absolute;
  top:0px;
  left:0px;
  transition: .4s;
  margin:0;
  padding: 0px 0px;
}

#app {
  font-family: 'Readex Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-font-color);
  margin-top: 60px;
  font-size: 16px;
}

@media screen and (max-width:1300px) {
  #app {
    font-size: 14px;
  }
}

@media 
  screen and (max-width:480px),
  screen and (max-height:480px)  {
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
  animation: bounce-in .6s reverse;
}

.loading-leave-active {
  animation: bounce-in .6s;
}

@keyframes bounce-in {
  0% {
    opacity:1;
  }
  100% {
    opacity:0.05;
  }
}

/* ---------------------------------------------------------------------- /
        BUTTONS 
 ---------------------------------------------------------------------- */


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
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
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
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: .75rem;
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
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
  transform: translate3d(0, 2px, 0);
}

.button-55:focus {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
}

</style>
