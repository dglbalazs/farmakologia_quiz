<template>
  <div class="results-wrapper">
    <div class='result-statistics'>
      <div class="asked">Kérdések - {{questions_asked}} db</div>
      <div class="correct">Helyes - {{questions_correct}} db</div>
      <div class="neutral">Közepes - {{questions_maybe}} db</div>
      <div class="neutral">Helytelen - {{questions_incorrect}} db</div>
    </div>
    <QuizResult
    v-for='result in question_results'
    :key='result.id'
    :id='result.id'
    :title='result.question'
    :type='result.type'
    :answer='result.answer'
    :t_answer='result.t_answer'
    :correctly_answered='result.correctly_answered'
    ></QuizResult>
  </div>
</template>

<script>

import QuizResult from './QuizResult.vue'
export default {
    name: 'QuizResults',
    components: {
      QuizResult
    },
    props: {
      question_results: Array
    },
    data() {
      return {
        questions_asked: 0,
        questions_correct: 0,
        questions_maybe: 0,
        questions_incorrect: 0
      }
    },
    methods: {
      calculateAnswers () {
        this.question_results.forEach((result) => {
          this.questions_asked += 1;
          if (result.correctly_answered==true || result.correctly_answered=='positive') {
            this.questions_correct +=1
          } else if (result.correctly_answered=='neutral') {
            this.questions_maybe +=1 
          } else if (result.correctly_answered==false || result.correctly_answered=='negative') {
            this.questions_incorrect +=1 
          }
        })
      }
    },
    mounted : function (){ 
      this.calculateAnswers()
    }
}
</script>

<style>

.results-wrapper{
  margin-bottom: 100px;
  padding: 50px;
  padding-bottom: 150px;
}

.result-statistics {
  margin-inline: auto;
}

.result-statistics .asked{
  text-decoration: underline;
  font-size: 1.1em;
}
</style>