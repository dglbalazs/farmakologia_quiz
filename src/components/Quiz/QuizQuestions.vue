<template>
  <div class="question-wrapper">
    <QuizQuestion
      v-if="!no_more_answers && nextQuestionHelper && !nextQuestionHelper2"
      :id="question_shown.id"
      :title="question_shown.question"
      :type="question_shown.type"
      :answer="question_shown.answer"
      :t_answer="question_shown.t_answer"
      :f_answer="question_shown.f_answer"
      :option1="question_shown.option1"
      :option2="question_shown.option2"
      :option3="question_shown.option3"
      :option4="question_shown.option4"
      :solution="question_shown.solution"
      :desc_poz="question_shown.desc_poz"
      :desc_neg="question_shown.desc_neg"
      @next-question="proceed"
    ></QuizQuestion>
    <div class="admin-msg" v-if="no_more_answers && nextQuestionHelper">
      <QuizResults
        :question_results="questions_asked"
        v-if="no_more_answers && nextQuestionHelper"
      ></QuizResults>
    </div>
    <transition name="loading">
      <Loader v-if="!nextQuestionHelper"></Loader>
    </transition>
  </div>
</template>

<script>
import Loader from "../Helpers/Loader.vue";
import QuizQuestion from "./QuizQuestion.vue";
import QuizResults from "./QuizResults.vue";

export default {
  name: "QuizQuestions",
  components: {
    QuizQuestion,
    QuizResults,
    Loader,
  },
  props: {
    questions: Array,
  },
  data() {
    return {
      no_more_answers: Boolean,
      questions_random: Array,
      question_shown: Object,
      questions_asked: [],
      question_number: Number,
      nextQuestionHelper: true,
      nextQuestionHelper2: false,
      lastQuestionAnswer: String,
    };
  },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },

    checkRemaining(array1, array2) {
      let all_q_len = array1.length;
      let asked_q_len = array2.length;
      if (all_q_len > asked_q_len) {
        this.no_more_answers = false;
      } else {
        this.no_more_answers = true;
      }
    },

    proceed(questiondata) {
      console.dir(questiondata);
      this.questions_asked.push({
        id: questiondata.id,
        question: questiondata.question,
        type: questiondata.type,
        t_answer: questiondata.t_answer,
        f_answer: questiondata.f_answer,
        answer: questiondata.answer,
        correctly_answered: questiondata.correctly_answered,
        solution: questiondata.solution,
      });
      this.lastQuestionAnswer = questiondata.correctly_answered;
      this.nextQuestionHelper2 = true;
      setTimeout(() => {
        this.nextQuestionHelper = false;
        console.dir(this.questions_asked);
        this.checkRemaining(this.questions_random, this.questions_asked);
        this.question_number = this.question_number + 1;
        this.question_shown = this.questions_random[this.question_number];
        setTimeout(() => {
          this.nextQuestionHelper = true;
          this.nextQuestionHelper2 = false;
        }, 1000);
      }, 0);
    },
  },
  mounted: function () {
    this.questions_random = this.questions;
    this.question_number = 0;

    // this.shuffleArray(this.questions_random)
    this.checkRemaining(this.questions_random, this.questions_asked);

    //Init first question
    this.question_shown = this.questions_random[this.question_number];
  },
};
</script>

<style></style>
