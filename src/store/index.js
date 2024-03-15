import { createStore } from 'vuex'

export default createStore({
  state: {
    currentPage: 'home',
    learning_data: [],
    questions_chosen: [],
    questions: [
      {
        id: 1,
        cat:'Niki1',
        type: 'tf',
        question: 'Melyik évben jöttetek össze?',
        answer:'Lukács Luca',
        option1: '2010',
        option2: '2011',
        option3: '2012',
        option4: '2013',
        solution: ['2012'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Jó, ez még megy.',
        desc_neg: 'HALO NIKI ARNI NEM TUDJA MIKOR JÖTTETEK ÖSSZE'
      },
      {
        id: 2,
        cat:'Niki1',
        type: 'tf',
        question: 'Ki mondta elsōnek, hogy szereti a másikat?',
        answer:'',
        option1: 'Arni',
        option2: 'Niki',
        option3: 'Balázs',
        option4: 'Árpi',
        solution: ['Niki'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Árpi is nagy esélyes volt pedig',
        desc_neg: ''

      },
      {
        id: 3,
        cat:'Niki1',
        type: 'tf',
        question: 'Mit szeret Niki a leginkább benned?',
        answer:'',
        option1: 'Hogy egy létai köcsög vagy',
        option2: 'Hogy lazac-srác vagy',
        option3: 'A nyelvtechnikádat',
        option4: 'Hogy könnyen teremtessz kapcsolatot a DiVinonál 40+ os bigékkel',
        solution:['Hogy könnyen teremtessz kapcsolatot a DiVinonál 40+ os bigékkel'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'De azért lazac-srác is vagy',
        desc_neg: ''

      },
      {
        id: 4,
        cat:'Niki1',
        type: 'tf',
        question: 'Mi Niki kedvenc autója?',
        answer:'',
        option1: 'Fiat Multipla',
        option2: 'Bármelyik új szériás Lada',
        option3: 'G-Wagon',
        option4: 'G-Wagina',
        solution:['G-Wagon'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'G-WAGINA VICCES VOLT MI? HEHE',
        desc_neg: ''
      },
      {
        id: 5,
        cat:'Niki1',
        type: 'tf',
        question: 'Hány gyereket szeretne?',
        answer:'',
        option1: 'Egyet sem',
        option2: '1',
        option3: '2',
        option4: '3',
        solution:['2'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 6,
        cat:'Niki1',
        type: 'tf',
        question: 'Mit mond Niki a leggyakrabban, amikor káromkodik?',
        answer:'',
        option1: 'A teringettét',
        option2: 'Bazdmeg',
        option3: 'Bobr Kurwa',
        option4: 'Pénisz',
        solution:['Bazdmeg'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Biztos sokszor kiváltod belőle',
        desc_neg: 'Közel közel, de mégsem'

      },
      {
        id: 7,
        cat:'Niki1',
        type: 'q',
        question: 'Milyen nevet adna a születendő gyereketeknek?',
        answer:'Ha fiú, akkor Ernst vagy Nolen, ha Lány Lívia Lídia',
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
        id: 8,
        cat:'Niki1',
        type: 'tf',
        question: 'Igaz-e, hogy Niki az iskolában levetkōzött az osztálytársai elōtt?',
        answer:'',
        option1: 'Igaz',
        option2: 'Hamis',
        option3: '',
        option4: '',
        solution:['Igaz'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'LOL DE MINDENKI LEVETKŐZÖTT',
        desc_neg: 'Lesz egy kis megbeszélnivalód Nikivel, úgy néz ki'

      },
      {
        id: 9,
        cat:'Niki1',
        type: 'tf',
        question: 'Mi volt a legveszélyesebb dolog, amit valaha csinált?',
        answer:'',
        option1: 'Összejött veled',
        option2: 'Bungee jumping',
        option3: 'Buszjegyre kért pénzt egy cigánytól',
        option4: 'Semmi veszély nincs az életében',
        solution:['Semmi veszély nincs az életében','Összejött veled'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 10,
        cat:'Niki1',
        type: 'tf',
        question: 'Mi akart lenni kiskorában?',
        answer:'',
        option1: 'Gyümölcs a Jogobellában',
        option2: 'Létai löncshús kofa',
        option3: 'Ügyvéd',
        option4: 'Vámos',
        solution:['Ügyvéd'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 11,
        cat:'Niki1',
        type: 'tf',
        question: 'Hányszor kellett Nikinek kijönnie hajnalban, amikor hazaértél, és megmutatnia melyik lakásban laktok?',
        answer:'',
        option1: 'Egyszer sem',
        option2: 'Heti egyszer',
        option3: 'Négyszer',
        option4: 'Számtalanszor',
        solution:['Négyszer','Számtalanszor'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Tes erre senki se tudja a választ, de leszokhatnál róla',
        desc_neg: 'NA azért csak az én (Balázs) társaságomban vagy 3x előfordult már'

      },
      {
        id: 12,
        cat:'Niki1',
        type: 'tf',
        question: 'Melyik az a tulajdonságod, ami Nikit a legjobban idegesíti?',
        answer:'',
        option1: 'Fogyasztási szokások',
        option2: 'Hogy egy létai köcsög vagy',
        option3: 'Shadowboxing',
        option4: 'Kipakolod a ruhákat a szekrényből és nem pakolod vissza',
        solution:['Fogyasztási szokások','Hogy egy létai köcsög vagy','Shadowboxing','Kipakolod a ruhákat a szekrényből és nem pakolod vissza'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 13,
        cat:'Niki1',
        type: 'tf',
        question: 'Melyik a kedvenc szexpozíciója?',
        answer:'',
        option1: 'Reversed-cowboy',
        option2: 'Holland kemence',
        option3: 'A létai kéjolló',
        option4: '',
        solution:['Reversed-cowboy','A létai kéjolló'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'A HÍRÖS LÉTAI KÉJOLLÓ',
        desc_neg: 'A HÍRÖS LÉTAI KÉJOLLÓ'

      },
      {
        id: 14,
        cat:'Niki1',
        type: 'tf',
        question: 'Az alábbiak közül hol szeretne Niki a leginkább szeretkezni veled?',
        answer:'',
        option1: 'Létán',
        option2: 'Stayben',
        option3: 'Elsō napos fesztiváli ToiToi-ban',
        option4: 'Utolsó napos összeszart fesztiváli ToiToi-ban',
        solution:['Egyik sem'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: 'SEHOL HAHAHAH - najó ezt lehet nem kérdeztük meg tőle'

      },
      {
        id: 15,
        cat:'Niki1',
        type: 'tf',
        question: 'Mi a kedvenc ruhadarabja?',
        answer:'',
        option1: 'Fejőgép',
        option2: 'Latex búslakodó',
        option3: 'Fekete bőrnadrág',
        option4: 'Kozák kucsma',
        solution:['Fekete bőrnadrág'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 16,
        cat:'Niki1',
        type: 'tf',
        question: 'Mi volt az elsō job, amit Niki elvállalt?',
        answer:'',
        option1: 'Blowjob',
        option2: 'Onlyfans',
        option3: 'Műkörmös',
        option4: '',
        solution:['Műkörmös'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Nem? NEM?',
        desc_neg: ''

      },
      {
        id: 17,
        cat:'Niki1',
        type: 'tf',
        question: 'Mi volt az elsō becenév, ahogy Niki szólított téged?',
        answer:'',
        option1: 'Létai köcsög',
        option2: 'Szívem',
        option3: 'Daddy',
        option4: 'Mommy',
        solution:['Szívem'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 18,
        cat:'Niki1',
        type: 'tf',
        question: 'Mi a legfurább étel, amit megeszik?',
        answer:'',
        option1: 'Pacal',
        option2: 'Létai löncshús',
        option3: 'Provence-i melegszendó',
        option4: 'Kakashere',
        solution:['Provence-i melegszendó'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Pedig a melegszendóban semmi furi nincs',
        desc_neg: 'Pedig a melegszendóban semmi furi nincs'

      },
      {
        id: 19,
        cat:'Niki1',
        type: 'tf',
        question: 'Niki melyik testrészed szereti a legjobban?',
        answer:'',
        option1: 'Hát biztos a fasz, nem tudom',
        option2: 'Létai löncshús',
        option3: 'A kis kezed',
        option4: '',
        solution:['A kis kezed'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 20,
        cat:'Niki1',
        type: 'tf',
        question: 'Mekkora Niki lábmérete?',
        answer:'',
        option1: 'US 8.5',
        option2: 'UK 5.5',
        option3: '24,1 cm',
        option4: '9,25 hüvelyk',
        solution:['UK 5.5'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'UK 5.5, azaz EU 38!',
        desc_neg: 'UK 5.5, azaz EU 38!'

      },
      {
        id: 21,
        cat:'Niki1',
        type: 'tf',
        question: 'Nikinek melyik filmrōl jutsz mindig eszébe?',
        answer:'',
        option1: 'Túl a barátságon',
        option2: 'Paranormal Activity',
        option3: 'Trópusi vihár',
        option4: 'Star Wars',
        solution:['Star Wars','Trópusi vihár'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'KIRK LAZARUS!!',
        desc_neg: 'KIRK LAZARUS!!'

      },
      {
        id: 22,
        cat:'Niki1',
        type: 'tf',
        question: 'Hol szeretett aludni Arni Klinika buli után?',
        answer:'',
        option1: 'Létán',
        option2: 'Az erdőben',
        option3: 'A Kenézyben',
        option4: 'Kasszában',
        solution:['Az erdőben'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 23,
        cat:'Niki1',
        type: 'tf',
        question: 'Kit szeretsz jobban: a menyasszonyodat vagy a testvéred?',
        answer:'',
        option1: 'Nikit',
        option2: 'Nikit',
        option3: '',
        option4: '',
        solution:['Nikit'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Oh nice',
        desc_neg: ''

      },      
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
