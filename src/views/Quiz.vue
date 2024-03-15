<template>
  <div class="quiz-wrapper">
    <button to="/" class="button-55" @click="goback">Kezdőkép</button>
    <QuizMain @start-quiz="setTopics" v-if="init"></QuizMain>
    <QuizQuestions v-if="!init" :questions="questions"></QuizQuestions>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import QuizMain from "@/components/Quiz/QuizMain.vue";
import QuizQuestions from "@/components/Quiz/QuizQuestions.vue";

export default {
  name: "Quiz",
  components: {
    QuizMain,
    QuizQuestions,
  },
  data() {
    return {
      topics: [],
      init: true,
    };
  },
  methods: {
    ...mapActions(["setQuestions"]),

    goback() {
      this.$router.push({ path: "/" });
    },
    setTopics(topics) {
      this.topics = typeof topics == "string" ? [topics] : topics;
      this.init = false;
      this.setQuestions(this.topics);
      console.log(this.topics[0]);
      console.log("Ez jott vissza : " + this.questions);
    },
  },
  computed: {
    ...mapGetters({ questions: "getQuestions" }),
  },
};
</script>

<style scoped>
.quiz-wrapper:before {
  content: "";
  display: block;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 1;
  /*background-image: url('../assets/exam.jpg');*/
  background-color: lightskyblue;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../assets/beerbg2.jpg");
  z-index: -1;
}

.goback {
  position: absolute;
  top: 20px;
  left: 25px;
  border: 1px solid black;
  border-radius: 15px;
  padding: 15px;
  font-size: 1.2rem;
}
</style>
