<template>
  <div 
    :class="['question-result-wrapper',
    result_helper=='' ? '' : result_helper
    ]"
    
    @click='trigger_clicked'>
      <div class="question-text">{{title}}</div>
      <div class="result">{{result}}</div>
  </div>
  <div class="correct-answer" v-if='clicked'>
      <div class="definition" v-html='definition'></div>
  </div>
</template>

<script>
export default {
    name: 'QuizResult',
    props: {
        id: Number,
        title: String,
        type: String,
        answer: String,
        t_answer: String,
        correctly_answered: String
    },
    data() {
        return {
            definition: '',
            result_helper:'',
            result: '',
            clicked: false
        }
    },
    methods: {
        trigger_clicked () {
            this.clicked = !this.clicked
        }
    },
    mounted: function (){
        if (this.type=='q') {
            this.definition = this.answer
            if (this.correctly_answered=='negative') {
                this.result_helper = 'r'
                this.result = 'Még nem jó'
            } else if (this.correctly_answered=='neutral') {
                this.result_helper = 'k'
                this.result = 'Majdnem'
            } else if (this.correctly_answered=='positive') {
                this.result_helper = 'j'
                this.result = 'Szuper! :)'
            }
        } else if (this.type=='tf') {
            this.definition = this.t_answer
            if (this.correctly_answered==true) {
                this.result_helper = 'j'
                this.result = 'Szuper! :)'
            } else if (this.correctly_answered==false) {
                this.result_helper = 'r'
                this.result = 'Még nem jó'
            }
        }
    }
}
</script>

<style>

.question-result-wrapper {
    display: flex;
    gap: 15px;
    background: white;
    border-radius: 25px;
    margin: 25px;
    padding: 25px;
    justify-content: center;
    align-items: center;
    cursor:pointer;
}

.question-result-wrapper.r {
    background:rgb(240, 169, 169);
}

.question-result-wrapper.k {
    background:rgb(250, 255, 178);
}

.question-result-wrapper.j {
    background:rgb(170, 212, 170);
}

.question-text {
    font-size: 1.3em;
}

.result {
    margin-left: auto
}

.correct-answer {
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 25px;
    font-size: 1em;
    background: white;
    border-radius: 50px;
    height: auto;
    padding:50px;
}

</style>