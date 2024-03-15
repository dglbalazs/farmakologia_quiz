<template>
  <div class="question-title">
    <h1>{{ title }}</h1>
  </div>

  <div
    :class="['answer-type-q', answered ? 'answered' : '']"
    v-if="type == 'q'"
  >
    <div class="desc" v-if="!answered">Na tessék, mondjad!</div>
    <div class="desc" v-if="answered">Team - Hogy értékeljük?</div>
    <div v-if="answered" class="answer" v-html="answer"></div>
    <div class="timer">
      <span class="timer-text" v-if="answered">Idő:</span> {{ timer }}
    </div>
    <div
      :class="['form-row', rating_selected == 'negative' ? 'selected' : '']"
      id="negative"
      v-if="answered"
      @click="openquestion_rating"
    >
      Kurvára nem tudta
    </div>

    <div
      :class="['form-row', rating_selected == 'neutral' ? 'selected' : '']"
      id="neutral"
      v-if="answered"
      @click="openquestion_rating"
    >
      Valamennyire oké, de nem teljesen
    </div>

    <div
      :class="['form-row', rating_selected == 'positive' ? 'selected' : '']"
      id="positive"
      v-if="answered"
      @click="openquestion_rating"
    >
      Kibaszott király ez a fiú
    </div>
  </div>

  <div
    :class="['answer-type-tf', answered ? 'answered' : '']"
    v-if="type == 'tf'"
  >
    <div class="desc">Pick one testem vére</div>
    <div class="reply" v-if="answered" v-html="reply_msg"></div>
    <div class="options">
      <div
        v-if="option1 != ''"
        id="option1"
        @click="true_or_false_select"
        :class="[
          'form-row',
          'new_option',
          tr_selected == 'option1' ? 'selected' : '',
          answered && tr_selected == 'option1' && correct_answ
            ? 'correctans'
            : '',
          answered && tr_selected == 'option1' && !correct_answ
            ? 'incorrectans'
            : '',
        ]"
      >
        {{ option1 }}
      </div>

      <div
        v-if="option2 != ''"
        id="option2"
        @click="true_or_false_select"
        :class="[
          'form-row',
          tr_selected == 'option2' ? 'selected' : '',
          answered && tr_selected == 'option2' && correct_answ
            ? 'correctans'
            : '',
          answered && tr_selected == 'option2' && !correct_answ
            ? 'incorrectans'
            : '',
        ]"
      >
        {{ option2 }}
      </div>

      <div
        v-if="option3 != ''"
        id="option3"
        @click="true_or_false_select"
        :class="[
          'form-row',
          tr_selected == 'option3' ? 'selected' : '',
          answered && tr_selected == 'option3' && correct_answ
            ? 'correctans'
            : '',
          answered && tr_selected == 'option3' && !correct_answ
            ? 'incorrectans'
            : '',
        ]"
      >
        {{ option3 }}
      </div>

      <div
        v-if="option4 != ''"
        id="option4"
        @click="true_or_false_select"
        :class="[
          'form-row',
          tr_selected == 'option4' ? 'selected' : '',
          answered && tr_selected == 'option4' && correct_answ
            ? 'correctans'
            : '',
          answered && tr_selected == 'option4' && !correct_answ
            ? 'incorrectans'
            : '',
        ]"
      >
        {{ option4 }}
      </div>
    </div>
  </div>

  <button class="button-53" v-if="!answered" @click="getAnswer">
    Megvan a válasz
  </button>
  <button class="button-53" v-if="answered" @click="nextQuestion">
    Következő
  </button>
</template>

<script>
export default {
  name: "QuizQuestion",
  props: {
    id: Number,
    title: String,
    type: String,
    answer: String,
    t_answer: String,
    f_answer: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    solution: Array,
    desc_poz: String,
    desc_neg: String,
  },
  data() {
    return {
      question_data: Object,
      time_to_answer: 0,
      answered: false,

      //true or false
      correct_answ: Boolean,
      reply_msg: String,
      tf_random: Boolean,
      tr_selected: "",
      answer_selected: "",

      //open ended
      intervals: [],
      rating_selected: "",
      timer: "00:00",
      time_passed: 0,
      time_passed_minutes: 0,
      time_passed_seconds: 0,
    };
  },
  methods: {
    true_or_false_select(event) {
      if (!this.answered) {
        if (this.tr_selected == event.target.id) {
          this.tr_selected = "";
        } else {
          this.tr_selected = event.target.id;
          this.answer_selected = event.target.innerHTML;
        }
      }
    },

    openquestion_rating(event) {
      if (this.answered) {
        if (this.rating_selected == event.target.id) {
          this.rating_selected = "";
        } else {
          this.rating_selected = event.target.id;
        }
      }
    },

    getAnswer() {
      if (this.type == "tf") {
        if (this.tr_selected != "") {
          let basic_msg = "";

          this.answered = true;
          let chosen_answ = this.answer_selected;
          this.correct_answ = false;
          this.solution.forEach((e) => {
            if (e == chosen_answ) {
              this.correct_answ = true;
            }
          });

          if (this.correct_answ) {
            if (this.desc_poz == undefined || this.desc_poz == "") {
              basic_msg = "Nagyon kis ügyi vagy!";
            } else {
              basic_msg = this.desc_poz;
            }

            // if (!real_ans) {
            //     this.reply_msg = basic_msg + '<br/>Hiszen:<br/><h3>' + this.t_answer + '</h3>'
            // } else {
            this.reply_msg = basic_msg;
            // }
          } else {
            if (this.desc_neg == undefined || this.desc_neg == "") {
              basic_msg = "Nem igazán";
            } else {
              basic_msg = this.desc_neg;
            }

            // if (this.tf_random) {
            this.reply_msg =
              basic_msg +
              '<br/>A helyes megfejtés: <b><font color="GREEN">' +
              this.solution.join(" vagy ") +
              "</font></b>";
            // } else {
            //     this.reply_msg = basic_msg + ' Sajnos, ez valójában <b><font color="RED">hamis</font></b> hiszen:<br/><h3>' + corrected_msg + '</h3>'
            // }
          }

          this.question_data.id = this.id;
          this.question_data.question = this.title;
          this.question_data.type = this.type;
          this.question_data.answer = this.answer;
          this.question_data.t_answer = this.t_answer;
          this.question_data.f_answer = this.f_answer;
          this.question_data.correctly_answered = this.correct_answ;
          this.question_data.solution = this.solution;
        }
      } else if (this.type == "q") {
        this.question_data.id = this.id;
        this.question_data.question = this.title;
        this.question_data.type = this.type;
        this.question_data.answer = this.answer;
        this.question_data.t_answer = this.t_answer;
        this.question_data.f_answer = this.f_answer;
        this.answered = true;
        this.intervals.forEach(clearInterval);
      }
    },

    nextQuestion() {
      if (this.type == "q") {
        if (this.rating_selected == "") {
          alert("Előbb mondd el, hogy ment tesi");
          return null;
        } else {
          this.question_data.correctly_answered = this.rating_selected;
        }
      }
      this.$emit("next-question", this.question_data);
    },
    timerFunction() {
      var timing_start = setInterval(() => {
        this.time_passed += 1;
        // console.log(this.time_passed)
        this.timer_convert(this.time_passed);
        let minutes_string =
          this.time_passed_minutes < 10
            ? "0" + this.time_passed_minutes.toString()
            : this.time_passed_minutes.toString();
        let seconds_string =
          this.time_passed_seconds < 10
            ? "0" + this.time_passed_seconds.toString()
            : this.time_passed_seconds.toString();
        this.timer = minutes_string + ":" + seconds_string;
      }, 1000);
      this.intervals.push(timing_start);
    },

    timer_convert(seconds) {
      this.time_passed_minutes = Math.floor(seconds / 60);
      this.time_passed_seconds = Math.round(seconds % 60);
    },
  },
  mounted: function () {
    if (this.type == "tf") {
      this.tf_random = true;
    } else if (this.type == "q") {
      this.timerFunction();
    }
  },
};
</script>

<style scoped>
.question-title {
  color: white;
  margin-top: 50px;
}

/* 
-----------------------------------------------------------------------
MUTUAL
-----------------------------------------------------------------------
*/
.answer-type-q,
.answer-type-tf {
  color: white;
  display: grid;
  margin-top: 1.5em;
  grid-column-gap: 15px;
  justify-content: center;
  align-items: center;
  transition: 2s;
  margin-left: 20px;
  margin-right: 20px;
}

.desc,
.reply {
  color: white;
}

/* 
-----------------------------------------------------------------------
OPEN QUESTIONS
-----------------------------------------------------------------------
*/
.answer-type-q {
  grid-template-columns: auto 1fr 1fr 1fr auto;
  grid-template-rows: 25px auto auto 100px;
  grid-template-areas:
    "description description description  description description"
    "answer  answer answer answer answer"
    ". timer timer timer ."
    ".  negative neutral positive  .";
}

.answer-type-q.answered {
  grid-template-columns: auto 1fr 1fr 1fr auto;
  grid-template-rows: auto auto 50px 100px;
  grid-template-areas:
    ". timer timer timer ."
    "answer  answer answer answer answer"
    "description description description  description description"
    ".  negative neutral positive  .";
}

.answer-type-q > .desc {
  grid-area: description;
}
.answer-type-q > .timer {
  grid-area: timer;
  font-size: 3em;
}

.answer-type-q.answered > .timer {
  grid-area: timer;
  font-size: 1em;
}

.answer-type-q > .answer {
  grid-area: answer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: left;
  background: whitesmoke;
  height: auto;
  border-radius: 25px;
  padding: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: black;
}

.answer-type-q > .answer > a {
  color: blue !important;
}

.answer-type-q > .form-row {
  --transform-scale: 1.1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 0.5em;
  box-shadow: 5px 5px 10px rgba(128, 128, 128, 0.514);
  border-radius: 10px;
  cursor: pointer;
  flex: 1;
  width: 100%;
  height: 100%;
  color: black;
}

.answer-type-q > .form-row#positive {
  grid-area: positive;
}
.answer-type-q > .form-row#neutral {
  grid-area: neutral;
}
.answer-type-q > .form-row#negative {
  grid-area: negative;
}

.answer-type-q > .form-row#positive:hover,
.answer-type-q > .form-row#positive:focus,
.answer-type-q > .form-row#positive.selected {
  background: rgb(170, 212, 170);
}

.answer-type-q > .form-row#negative:hover,
.answer-type-q > .form-row#negative:focus,
.answer-type-q > .form-row#negative.selected {
  background: rgb(240, 169, 169);
  /*transform: scale(var(--transform-scale))*/
}

.answer-type-q > .form-row#neutral:hover,
.answer-type-q > .form-row#neutral:focus,
.answer-type-q > .form-row#neutral.selected {
  background: rgb(250, 255, 178);
  /*transform: scale(var(--transform-scale))*/
}

/* 
-----------------------------------------------------------------------
TRUE OR FALSE 
-----------------------------------------------------------------------
*/

.answer-type-tf {
  color: black;
  min-height: 40vh;
  grid-template-columns: auto 1fr 1fr auto;
  grid-template-rows: 25px 50px auto 1fr;
  grid-template-areas:
    "description description description  description"
    ".  . . ."
    ". . . ."
    ".  options options  .";
}

.answer-type-tf.answered {
  grid-template-columns: auto 1fr 1fr auto;
  grid-template-rows: 25px 50px auto 1fr;
  grid-template-areas:
    "description description description  description"
    "reply  reply reply reply"
    "reply  reply   reply   reply"
    ".  options options  .";
}
/* FORM */

.answer-type-tf .answer {
  grid-area: question;
  display: flex;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
  height: 100px;
  border-radius: 25px;
  padding: 50px;
}

.answer-type-tf .desc {
  grid-area: description;
}

.answer-type-tf .options {
  grid-area: options;
  display: grid;
  grid-auto-flow: row;
  gap: 1em;
}

.answer-type-tf .reply {
  grid-area: reply;
  padding: 25px;
  line-height: 1.75;
}

.answer-type-tf .form-row {
  --transform-scale: 1.1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 1em 0.5em;
  box-shadow: 5px 5px 10px rgba(128, 128, 128, 0.514);
  border-radius: 10px;
  cursor: pointer;
  flex: 1;
  width: 100%;
  height: 100%;
}

.answer-type-tf .form-row:hover,
.answer-type-tf .form-row:focus,
.answer-type-tf .form-row.selected {
  background: rgb(170, 212, 170);
}

.answer-type-tf .correctans {
  background: rgb(170, 212, 170) !important;
  transform: scale(1.1);
}

.answer-type-tf .incorrectans {
  transform: scale(0.9);
  opacity: 0.6;
  background: rgb(240, 169, 169) !important;
}

button {
  margin-top: 60px;
  margin-bottom: 150px;
}
</style>
