import { createStore } from 'vuex'

export default createStore({
  state: {
    currentPage: 'home',
    learning_data: [],
    questions_chosen: [],
    questions: [
      {
        id: 1,
        cat:'Luca1',
        type: 'q',
        question: 'Mi Luca teljes (!) születési neve?',
        answer:'Lukács Luca',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution: [''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''
      },
      {
        id: 2,
        cat:'Luca1',
        type: 'tf',
        question: 'Melyik évben jöttetek össze?',
        answer:'',
        option1: '2016',
        option2: '2017',
        option3: '2018',
        option4: '2019',
        solution: ['2017'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 3,
        cat:'Luca1',
        type: 'q',
        question: 'Ki írt rá először a másikra, és mikor? ',
        answer:'Gergőke írt, a felezőtábor után nagy magányában',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 4,
        cat:'Luca1',
        type: 'tf',
        question: 'Luca melyik testrészedet szereti a legjobban?',
        answer:'',
        option1: 'Fasz',
        option2: 'Bicepsz',
        option3: 'Szem',
        option4: '',
        solution:['Szem'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Könnyű úgy kilogikázni, hogy Luca előttünk úgyse mondana durvákat.. Meglátjuk, tényleg így lesz-e!',
        desc_neg: 'Na, meg még mit nem!'
      },
      {
        id: 5,
        cat:'Luca1',
        type: 'tf',
        question: 'Mi Luca álomutazásának a helyszíne?',
        answer:'',
        option1: 'Zanzibár',
        option2: 'Nox',
        option3: 'Groovehouse',
        option4: '',
        solution:['Zanzibár'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Beszt együttes.',
        desc_neg: 'Ezekkel tudod, hogy bünti pontokat gyűjtessz?'

      },
      {
        id: 6,
        cat:'Luca1',
        type: 'tf',
        question: 'Igaz-e, hogy Luca általános iskolai legjobb barátját Martinnak hívták?',
        answer:'',
        option1: 'Igaz',
        option2: 'Hamis',
        option3: '',
        option4: '',
        solution:['Hamis'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Honnan tudta he',
        desc_neg: 'Nem volt általános iskolai legjobb barátja, beszoptad'

      },
      {
        id: 7,
        cat:'Luca1',
        type: 'tf',
        question: 'Mikor van a leendő anyós születésnapja?',
        answer:'',
        option1: '1969. március 21.',
        option2: '1970. március 21.',
        option3: '1970. március 24.',
        option4: '1969. március 24.',
        solution:['1969. március 24.'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Azért volt benne egy kis tipp is, nem?',
        desc_neg: 'Hijjjjjj, pedig ezt nagyon kellett volna tudni'

      },
      {
        id: 8,
        cat:'Luca1',
        type: 'tf',
        question: 'Hogy szeret Luca aludni? (Hason, háton stb)',
        answer:'',
        option1: 'Állva, mint a lovak',
        option2: 'Rajtad',
        option3: 'Hason',
        option4: 'Háton',
        solution:['Háton'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Minek figyeled álmában? Aludjál inkább',
        desc_neg: 'Ennyi idő alatt nem sikerült megfigyelni?'

      },
      {
        id: 9,
        cat:'Luca1',
        type: 'tf',
        question: 'Mi az, amit egy férfiban/ férfin nem bír elviselni?',
        answer:'',
        option1: 'Nagy a bicepsze',
        option2: 'Túl csupasz',
        option3: 'Tutyi-mutyi',
        option4: 'Volvóval jár',
        solution:['Túl csupasz','Tutyi-mutyi'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Magadra ismertél?',
        desc_neg: 'Tény, hogy ezek se túl jó tulajdonságok.'

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: '',
        answer:'',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      }
     
    ],
  },
  mutations: {
    setCurrentPage(state,payload) {
      state.currentPage = payload;
    },

    setQuestions(state,categories) {
      console.log(categories)
      
      state.questions_chosen = state.questions.filter(item=>
        {
          return categories.indexOf(item.cat)>-1
        })
    },

    setLearning(state) {
      state.questions_TrueOrFalseGenerator.forEach(element => {
        console.log(element)
        state.learning_data.push(element)
      });
    }
  },
  actions: {
    async setCurrentPage(state,payload) {
      state.commit('setCurrentPage',payload)
    },

    async setQuestions(state,categories) {
      state.commit('setQuestions',categories)
    },

    async setLearning(state) { 
      state.commit('setLearning')
    }
  },
  modules: {
    
  },
  getters: {
    getQuestions: (state) => state.questions_chosen,
    getLearning: (state) => state.learning_data,
    getCurrentPage: (state) => state.currentPage,
   
  }
})
