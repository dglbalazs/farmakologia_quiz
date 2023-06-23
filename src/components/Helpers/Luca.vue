<template>
  <div class="luca">
    <img v-if="type == true || type == 'positive'" src="../../assets/positive.png">
    <img v-if="type == 'neutral'" src="../../assets/medium.png">
    <img v-if="type == false || type == 'negative'" src="../../assets/negative.png">
  </div>
</template>

<script>
export default {
    name: 'Luca',
    props: {
        type: String
    }
}
</script>

<style>

.luca {
    top:10vh;
    position: fixed;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100vw;
    z-index: 999999;
    text-align: center;
}

.luca img {
    height: 80vh;
}
</style>