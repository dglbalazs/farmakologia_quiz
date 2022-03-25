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
