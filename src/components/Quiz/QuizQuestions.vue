<template>
  <div class="question-wrapper">
      <div class="question-title">{{title}}</div>
      <div class="answer" v-if='type=="q"'>{{answer}}</div>
      <div class="answer" v-if='type=="tf"'>{{t_answer}}</div>
  </div>
</template>

<script>
export default {
    name: 'QuizQuestions',
    props:{
        title: String,
        type: String,
        answer: String,
        t_answer: String,
        f_answer: String
    },
    data(){
    
    },
    mounted: function(){

    }
}
</script>

<style>

</style>