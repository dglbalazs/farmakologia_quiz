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

</style>
