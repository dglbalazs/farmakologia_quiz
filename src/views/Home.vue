<template>
  <div class="home">
    <main-page></main-page>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/components/MainPage.vue'

export default {
  name: 'Home',
  components: {
    MainPage
  }
}
</script>

<style>

.home:before {
  content: '';
  display:block;
  position:absolute;
  top:0px;
  left:0px;
  width:100%;
  height:100%;
  opacity:1;
  background-image: url('../assets/openbg.png');
  background-position:center;
  background-size:contain;
  background-repeat: no-repeat;
}

</style>
