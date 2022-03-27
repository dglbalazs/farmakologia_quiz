import { createStore } from 'vuex'

export default createStore({
  state: {
    currentPage: 'home',
    questions_chosen: [],
    questions: [
      {
        id: 1,
        cat:'Alapfogalmak',
        type: 'q',
        question: 'Mi a Farmakológia?',
        answer: 'A farmakológia élő szervezetek és kívülről bejuttatott kémiai anyagok kölcsönhatását leíró tudományág.',
        t_answer:'',
        f_answer:''
      },
      {
        id: 2,
        cat:'Alapfogalmak',
        type: 'tf',
        question: 'Mi a Farmakokinetika?',
        answer:'',
        t_answer: 'Leírja a szervezet hatását a farmakonra',
        f_answer: 'Leírja a farmakon hatását a szervezetre'
      },
      {
        id: 3,
        cat:'Alapfogalmak',
        type: 'tf',
        question: 'Mi a Farmakodinámia?',
        answer:'',
        t_answer: 'Leírja a szervezet hatását a farmakonra',
        f_answer: 'Leírja a farmakon hatását a szervezetre'
      },
      {
        id: 4,
        cat:'Alapfogalmak',
        type: 'tf',
        question: 'A gyógyszerek eredetük szerint csoportosítva, lehetnek...',
        answer:'',
        t_answer: 'természetesek, félszintetikusak és szintetikusak',
        f_answer: 'természetesek és szintetikusak'
      },
      {
        id: 5,
        cat:'Alapfogalmak',
        type: 'tf',
        question: 'Ugyanaz a konformációs változás alakul ki a receptoron, ami az endogén ligand esetében...',
        answer:'',
        t_answer: 'amikor agonista kapcsolódik a receptorhoz',
        f_answer: 'amikor antagonista kapcsolódik a receptorhoz'
      },
      {
        id: 6,
        cat:'Alapfogalmak',
        type: 'tf',
        question: 'A torzult agonizmus esetében...',
        answer:'',
        t_answer: 'csak néhány sejtműködésbeli változás következik be az eredeti konformációs változáshoz képest',
        f_answer: 'másfajta konformációváltozás következik be'
      },
      {
        id: 7,
        cat:'Alapfogalmak',
        type: 'tf',
        question: 'Az inverz agonizmus esetében...',
        answer:'',
        t_answer: 'másfajta konformációváltozás következik be',
        f_answer: 'csak néhány sejtműködésbeli változás következik be az eredeti konformációs változáshoz képest'
      },
      {
        id:8,
        cat:'Alapfogalmak',
        type:'q',
        question:'Mik lehetnek farmakon célpontok?',
        answer: '<ul><li>Fehérjék<ul><li>receptorok</li><li>enzimek</li><li>transzporterek</li></ul></li><li>Lipidek</li><li>Nukleinsavak (DNS, RNS)</li></ul><br/>Kivéve: bisphosphonátok, ozmotikus diuretikumok, laxativumok, adszorbensek',
        t_answer: '',
        f_answer: ''
      }
    ]
  },
  mutations: {
    setCurrentPage(state,payload) {
      state.currentPage = payload;
    },

    setQuestions(state,categories) {
      state.questions_chosen = state.questions.filter(item=>
        {
          return categories.indexOf(item.cat)>-1
        })
    }
  },
  actions: {
    async setCurrentPage(state,payload) {
      state.commit('setCurrentPage',payload)
    },

    async setQuestions(state,categories) {
      state.commit('setQuestions',categories)
    }
  },
  modules: {
    
  },
  getters: {
    getQuestions: (state) => state.questions_chosen,
    getCurrentPage: (state) => state.currentPage,
   
  }
})
