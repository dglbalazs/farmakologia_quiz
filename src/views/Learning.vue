<template>
  <div class="learning-wrapper">
      <button to="/" class='button-55' @click='goback'>Főmenü</button>
      <div class="welcome-text">
        Itt még nincs semmi. :(
      </div>
  </div>
</template>

<script>


export default {
    name: 'Learning',
    methods: {
        goback() {
            this.$router.push({ path: '/'})
        }
    }
}
</script>

<style scoped>

.learning-wrapper:before {
  content: '';
  display:block;
  position:fixed;
  top:0px;
  left:0px;
  width:100%;
  height:100%;
  opacity:0.4;
  /*background-image: url('../assets/exam.jpg');*/
  background-color: lightblue;
  background-position:center;
  background-size:cover;
  background-repeat: no-repeat;
  z-index:-1;
}

.goback {
    position: absolute;
    top:20px;
    left:25px;
    border: 1px solid black;
    border-radius: 15px;
    padding: 15px;
    font-size: 1.2rem;
}


</style>