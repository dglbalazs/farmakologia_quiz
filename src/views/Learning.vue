<template>
  <div class="learning-wrapper">
      <button to="/" class='button-55' @click='goback'>Főmenü</button>
      <div class="welcome-text">
        <LearningMain @mounted-comp='setData' :learningdata="learning_data"></LearningMain>
      </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import LearningMain from '../components/Learning/LearningMain.vue';

export default {
    name: 'Learning',
    components: {
      LearningMain
    },
    data() {
        return {
            categories: [],
            init: true
        }
    },
    methods: {
      ... mapActions(['setLearning']),

      goback() {
            this.$router.push({ path: '/'})
        },

        setData() {
            this.init = false;
            this.setLearning()
            console.log(this.learning_data)
        }

    },

    computed: {
        ... mapGetters({learning_data:"getLearning"})
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