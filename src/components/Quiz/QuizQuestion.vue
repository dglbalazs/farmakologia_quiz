<template>
    <div class="question-title"><h1>{{title}}</h1></div>

    <div 
    :class="['answer-type-q',answered ? 'answered' : '']" 
     v-if='type=="q"'>
        <div class="desc" v-if='!answered'>Mondd fel magadnak, aztán mehet az ellenőrzés! :)</div>
        <div class="desc" v-if='answered'>Hogy ment, gyönyörű? :)</div>
        <div 
        v-if='answered'
        class="answer"
        v-html='answer'
        >
        </div>
        <div class="timer">
            <span class='timer-text' v-if='answered'>Idő:</span> {{timer}}
        </div>
        <div 
        :class="[
            'form-row',
            rating_selected=='negative' ? 'selected' : '']"
        id='negative' v-if='answered' @click='openquestion_rating'
        >
            Ezt még gyakorolni kell
        </div>

        <div 
         :class="[
            'form-row',
            rating_selected=='neutral' ? 'selected' : '']"
        id='neutral' v-if='answered' @click='openquestion_rating'
        >
            Valamennyire megy, de nem teljesen
        </div>

        <div 
         :class="[
            'form-row',
            rating_selected=='positive' ? 'selected' : '']"
        id='positive' v-if='answered' @click='openquestion_rating'
        >
            Ezt fixen tudom
        </div>
            
    </div>

    <div 
    :class="['answer-type-tf',answered ? 'answered' : '']" 
    v-if='type=="tf"'
    >
        <div class="desc">Igaz vagy hamis?</div>
        <div class="answer" v-if='tf_random' v-html='t_answer'></div>
        <div class="answer" v-if='!tf_random' v-html='f_answer'></div>
        <div class="reply" v-if='answered' v-html='reply_msg'></div>
        <div
            id='igaz' 
            @click="true_or_false_select"
            :class="[
            'form-row',
            tr_selected=='igaz' ? 'selected' : '',
            answered && tf_random ? 'correctans' : '',
            answered && !tf_random ? 'incorrectans' : ''
            ]"
        >
        Igaz 
        </div>

        <div 
            id='hamis' 
            @click='true_or_false_select'
            :class="[
            'form-row',
            tr_selected=='hamis' ? 'selected' : '',
            answered && !tf_random ? 'correctans' : '',
            answered && tf_random ? 'incorrectans' : '']"
        >
        Hamis
        </div>
    </div>
    <button class='button-54' v-if="!answered" @click='getAnswer'>Megvan a válasz</button>
    <button class='button-54' v-if="answered" @click='nextQuestion'>Következő</button>
</template>

<script>
export default {
    name: 'QuizQuestion',
    props: {
        id: Number,
        title: String,
        type: String,
        answer: String,
        t_answer: String,
        f_answer: String
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
            tr_selected: '',

            //open ended
            intervals: [],
            rating_selected: '',
            timer: '00:00',
            time_passed: 0,
            time_passed_minutes: 0,
            time_passed_seconds: 0
        }
    },
    methods: {
        true_or_false_select(event) { 
            if (!this.answered) {
                if (this.tr_selected==event.target.id) {
                    this.tr_selected = ''
                } else {
                    this.tr_selected = event.target.id
                }
            }
        },

        openquestion_rating(event) { 
            if (this.answered) {
                if (this.rating_selected==event.target.id) {
                    this.rating_selected = ''
                } else {
                    this.rating_selected = event.target.id
                }
            }
        },

        getAnswer() {
            if (this.type=='tf')
            {
                if (this.tr_selected!='') {
                    let basic_msg = ''
                    
                    this.answered = true
                    let chosen_answ = this.tr_selected=='igaz' ? true : false
                    let real_ans = this.tf_random

                    if (chosen_answ == real_ans) {
                        this.correct_answ = true
                        basic_msg = 'Nagyon jó!'

                        if (!real_ans) {
                            this.reply_msg = basic_msg + '<br/>Hiszen:<br/><h3>' + this.t_answer + '</h3>'
                        } else {
                            this.reply_msg = basic_msg
                        }

                    } else {
                        this.correct_answ = false
                        let corrected_msg = this.t_answer 
                        basic_msg = 'Majdnem - '

                        if (this.tf_random) {
                            this.reply_msg = basic_msg + ' Sajnos, ez valójában nagyon is <b><font color="GREEN">igaz</font></b>'
                        } else {
                            this.reply_msg = basic_msg + ' Sajnos, ez valójában <b><font color="RED">hamis</font></b> hiszen:<br/><h3>' + corrected_msg + '</h3>'
                        }
                    } 

                    this.question_data.id = this.id
                    this.question_data.question = this.title
                    this.question_data.type = this.type
                    this.question_data.answer = this.answer
                    this.question_data.t_answer = this.t_answer
                    this.question_data.f_answer = this.f_answer
                    this.question_data.correctly_answered = this.correct_answ
                }
            } else if (this.type=='q') {
                this.question_data.id = this.id
                this.question_data.question = this.title
                this.question_data.type = this.type
                this.question_data.answer = this.answer
                this.question_data.t_answer = this.t_answer
                this.question_data.f_answer = this.f_answer
                this.answered = true
                this.intervals.forEach(clearInterval);
            }
            
        },

        nextQuestion() {
            if (this.type=='q') {
                if (this.rating_selected=='') {
                    alert('Előbb mondd el, hogy ment cuki')
                    return null
              } else {
                   this.question_data.correctly_answered = this.rating_selected
              }
            } 
            this.$emit('next-question',this.question_data)
    
        },
        timerFunction() {
            var timing_start = setInterval(() => {
                this.time_passed += 1
                console.log(this.time_passed)
                this.timer_convert(this.time_passed)
                let minutes_string = this.time_passed_minutes<10 ? '0' + this.time_passed_minutes.toString() : this.time_passed_minutes.toString()
                let seconds_string = this.time_passed_seconds<10 ? '0' + this.time_passed_seconds.toString() : this.time_passed_seconds.toString()
                this.timer = minutes_string + ':' + seconds_string
            }, 1000);
            this.intervals.push(timing_start)
        },

        timer_convert(seconds) {
            this.time_passed_minutes = Math.floor(seconds / 60)
            this.time_passed_seconds = Math.round(seconds % 60)
        }

    },
    mounted: function(){
        if (this.type=='tf') {
            this.tf_random = Math.random() < 0.5;
        } else if (this.type=='q') {
            this.timerFunction()
        }
    }
}
</script>

<style scoped>

.question-title {
    margin-top: 50px;
}

/* 
-----------------------------------------------------------------------
MUTUAL
-----------------------------------------------------------------------
*/
.answer-type-q,
.answer-type-tf  {
    display:grid;
    margin-top: 1.5em;
    grid-column-gap: 15px;
    justify-content: center;
    align-items: center;
    transition: 2s;
    margin-left:20px;
    margin-right: 20px;
}


/* 
-----------------------------------------------------------------------
OPEN QUESTIONS
-----------------------------------------------------------------------
*/
.answer-type-q {
    grid-template-columns: auto 1fr 1fr 1fr auto;
    grid-template-rows: 25px 200px auto 100px;
    grid-template-areas: 
        'description description description  description description'
        'answer  answer answer answer answer'
        '. timer timer timer .'
        '.  negative neutral positive  .'
    ;
}

.answer-type-q.answered {
    grid-template-columns: auto 1fr 1fr 1fr auto;
    grid-template-rows: auto auto 50px 100px;
    grid-template-areas: 
        '. timer timer timer .'
        'answer  answer answer answer answer'
        'description description description  description description'
        '.  negative neutral positive  .'
    ;
}

.answer-type-q > .desc {
    grid-area: description
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
    height:auto;
    border-radius: 25px;
    padding: 50px;
    margin-top:20px;
    margin-bottom:20px;
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
    padding: .5em;
    box-shadow: 5px 5px 10px rgba(128, 128, 128, 0.514);
    border-radius: 10px;
    cursor:pointer;
    flex: 1;
    width:100%;
    height:100%;
  }

.answer-type-q > .form-row#positive {
    grid-area: positive
}
.answer-type-q > .form-row#neutral {
    grid-area: neutral
}
.answer-type-q > .form-row#negative {
    grid-area: negative
}

.answer-type-q > .form-row#positive:hover,
.answer-type-q > .form-row#positive:focus,
.answer-type-q > .form-row#positive.selected{ 
    background:rgb(170, 212, 170);
}

.answer-type-q > .form-row#negative:hover,
.answer-type-q > .form-row#negative:focus,
.answer-type-q > .form-row#negative.selected{ 
    background:rgb(240, 169, 169);
    /*transform: scale(var(--transform-scale))*/
}

.answer-type-q > .form-row#neutral:hover,
.answer-type-q > .form-row#neutral:focus,
.answer-type-q > .form-row#neutral.selected{ 
    background:rgb(250, 255, 178);
    /*transform: scale(var(--transform-scale))*/
}

/* 
-----------------------------------------------------------------------
TRUE OR FALSE 
-----------------------------------------------------------------------
*/

.answer-type-tf {
    grid-template-columns: auto 1fr 1fr auto;
    grid-template-rows: 25px 200px auto 100px;
    grid-template-areas: 
        'description description description  description'
        'question  question question question'
        '. . . .'
        '.  igaz hamis  .'
    ;
}

.answer-type-tf.answered {
    grid-template-columns: auto 1fr 1fr auto;
    grid-template-rows: 25px 200px auto 50px;
    grid-template-areas: 
        'description description description  description'
        'question  question question question'
        'reply  reply   reply   reply'
        '.  igaz hamis  .'
    ;
}
/* FORM */

.answer-type-tf > .answer {
    grid-area: question;
    display: flex;
    justify-content: center;
    align-items: center;
    background: whitesmoke;
    height:100px;
    border-radius: 25px;
    padding: 50px;
}

.answer-type-tf > .desc {
    grid-area: description
}

.answer-type-tf > #igaz {
    grid-area: igaz
}

.answer-type-tf > #hamis {
    grid-area: hamis
}

.answer-type-tf > .reply {
    grid-area: reply;
    padding: 25px;
    line-height:1.75;
}

.answer-type-tf > .form-row {
    --transform-scale: 1.1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    padding: .5em;
    box-shadow: 5px 5px 10px rgba(128, 128, 128, 0.514);
    border-radius: 10px;
    cursor:pointer;
    flex: 1;
    width:100%;
    height:100%;
  }

.answer-type-tf > .form-row#igaz:hover,
.answer-type-tf > .form-row#igaz:focus,
.answer-type-tf > .form-row#igaz.selected{ 
    background:rgb(170, 212, 170);
}

.answer-type-tf > .form-row#hamis:hover,
.answer-type-tf > .form-row#hamis:focus,
.answer-type-tf > .form-row#hamis.selected{ 
    background:rgb(240, 169, 169);
    /*transform: scale(var(--transform-scale))*/
}

.answer-type-tf > .correctans {
    transform: scale(1.1);
}

.answer-type-tf > .incorrectans {
    transform: scale(0.9);
    opacity:0.6;
}

button {
    margin-top: 60px;
    margin-bottom: 150px;
}


</style>