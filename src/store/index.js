import { createStore } from 'vuex'

export default createStore({
  state: {
    currentPage: 'home',
    learning_data: [],
    questions_chosen: [],
    questions: [
      {
        id: 1,
<<<<<<< HEAD
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
=======
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
>>>>>>> 52e0965 (added arni)
        desc_neg: ''

      },
      {
        id: 3,
<<<<<<< HEAD
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
=======
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
>>>>>>> 52e0965 (added arni)
        desc_neg: ''

      },
      {
        id: 4,
<<<<<<< HEAD
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
=======
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
>>>>>>> 52e0965 (added arni)

      },
      {
        id: 6,
<<<<<<< HEAD
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
=======
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
>>>>>>> 52e0965 (added arni)

      },
      {
        id: 7,
<<<<<<< HEAD
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
        id: 10,
        cat:'Luca2',
        type: 'tf',
        question: 'Melyik házimunkát utálja a legjobban?',
        answer:'',
        option1: 'Kézimunka',
        option2: 'Libatömés',
        option3: 'Vasalás',
        option4: 'Szénbányászat',
        solution:['Vasalás'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Én az elsőt se szeretném.',
        desc_neg: 'Hahahah LOL xD NYÁÁH'

      },
      {
        id: 11,
        cat:'Luca2',
        type: 'tf',
        question: 'Hány gyereket szeretne Luca?',
        answer:'',
        option1: 'Kettőt',
        option2: 'Egyet',
        option3: 'Tőled egyet, mástol mégegyet',
        option4: 'Tőled egyet se, mástól bármennyit',
        solution:['Kettőt'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Nice nice!',
        desc_neg: 'LUCA mennyit akar(t)! :P'

      },
      {
        id: 12,
        cat:'Luca2',
        type: 'tf',
        question: 'Mi az álommunkája?',
        answer:'',
        option1: 'Kézimunka',
        option2: 'Szülészet-Nőgyógyászat',
        option3: 'Miskolci szénbányász',
        option4: 'Piaci kofa',
        solution:['Szülészet-Nőgyógyászat'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 13,
        cat:'Luca2',
        type: 'q',
        question: 'Mondj 5 dolgot amit a legjobban szeret benned!',
        answer:'Azt állítja Luca ( bár hatalmas kamu ), hogy: Nagyon jó ember vagy, nagyon jóképű, izmos, okos, és szeretsz kocsit takarítani',
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
        id: 14,
        cat:'Luca2',
        type: 'tf',
        question: 'Milyen ételt utál?',
        answer:'',
        option1: 'Paradicsomleves',
        option2: 'Paradicsomleves mégegyszer',
        option3: 'Paradicsomos húsgombóc',
        option4: 'Paradicsomos káposzta',
        solution:['Paradicsomleves','Paradicsomleves mégegyszer','Paradicsomos húsgombóc','Paradicsomos káposzta'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'ÜGYESSS VAGY MINDET UTÁLJA',
        desc_neg: ''

      },
      {
        id: 15,
        cat:'Luca2',
        type: 'tf',
        question: 'Melyik tulajdonságod idegesíti a legjobban?',
        answer:'',
        option1: 'Faszod',
        option2: 'Alkoholista vagy',
        option3: 'Amikor otthonhagyod a cuccaidat',
        option4: 'Melyik nem?',
        solution:['Amikor otthonhagyod a cuccaidat'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 16,
        cat:'Luca2',
        type: 'q',
        question: 'Mit adott Luca neked először ajándékba?',
        answer:'Zarás kapucnis cipzáros pulcsi',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: 'AZÓTA SE LÁTTA SENKI RAJTAD',
        desc_neg: 'AZÓTA SE LÁTTA SENKI RAJTAD'

      },
      {
        id: 17,
        cat:'Luca2',
        type: 'q',
        question: 'Mondj 3 dolgot a bakancslistájáról! (Ha van)',
        answer:'Ázsiai körút, hajós utazás, illetve mindenféle utazás',
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
        id: 18,
        cat:'Luca2',
        type: 'q',
        question: 'Hogy néz ki Luca egy ideális napja?',
        answer:'Hétvége, ügyelet nélkül, 9-10 fele kelni, reggeli, kávé, elmentek a kutyikkal sétálni/kutyasuliba, filmeztek, mozi/vacsora, félpihenős nap',
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
        id: 19,
        cat:'Luca2',
        type: 'tf',
        question: 'Mi a kedvenc alkoholos itala?',
        answer:'',
        option1: 'Pornstar Martini',
        option2: 'Dirty Martini',
        option3: 'Pornstar Johhny Sins',
        option4: 'Nincs kedvenc itala',
        solution:['Pornstar Martini'],
=======
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
>>>>>>> 52e0965 (added arni)
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
<<<<<<< HEAD
        id: 20,
        cat:'Luca2',
        type: 'tf',
        question: 'Mekkora a lábmérete? (Itt mindent megadunk csak az európait nem)',
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
        cat:'Luca2',
        type: 'tf',
        question: 'Ha valaki más bőrébe bújhatna, ki lenne az?',
        answer:'',
        option1: 'A tiedbe',
        option2: 'Mila Kunis',
        option3: 'Varga Irén',
        option4: 'Anne Hathaway',
        solution:['Mila Kunis'],
=======
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
>>>>>>> 52e0965 (added arni)
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
<<<<<<< HEAD
        id: 22,
        cat:'Luca3',
        type: 'tf',
        question: 'Melyik volt a kedvenc tantárgya az iskolában?',
        answer:'',
        option1: 'Angol',
        option2: 'Francia',
        option3: 'Kémia',
        option4: 'Biológia',
        solution:['Kémia'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 23,
        cat:'Luca3',
        type: 'tf',
        question: 'Mi a legfurább étel, amit megeszik és szeret?',
        answer:'',
        option1: 'Sárgaborsó főzelék',
        option2: 'Faszod',
        option3: 'Pacal',
        option4: 'Körömpörkölt',
        solution:['Sárgaborsó főzelék'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 24,
        cat:'Luca3',
        type: 'tf',
        question: 'Melyik a kedvenc Disney meséje? És szereplője?',
        answer:'',
        option1: 'Aranyhaj',
        option2: 'Quasimodó, és abból a cigó csaj',
        option3: 'Pocahontas',
        option4: 'Hamupipőke',
        solution:['Pocahontas'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 25,
        cat:'Luca3',
        type: 'q',
        question: 'Mi a legjellegzetesebb táncmozdulata? (mutasd meg)',
        answer:'LOL fogalmunk sincs',
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
        id: 26,
        cat:'Luca3',
        type: 'tf',
        question: 'Melyik a kedvenc fagyija?',
        answer:'',
        option1: 'Málna',
        option2: 'Sárgadinnye',
        option3: 'Faszod',
        option4: 'Mangó',
        solution:['Mangó'],
=======
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
>>>>>>> 52e0965 (added arni)
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
<<<<<<< HEAD
        id: 27,
        cat:'Luca3',
        type: 'q',
        question: 'Mi volt a leghülyébb balesete?',
        answer:'Amikor megcsúszott rollerrel ügyeletbe menet',
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
        id: 28,
        cat:'Luca3',
        type: 'tf',
        question: 'Milyen koncerten volt először életében?',
        answer:'',
        option1: 'Edda',
        option2: 'Hooligans',
        option3: 'Pokolgép',
        option4: 'Krisz Rudi',
        solution:['Hooligans'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 29,
        cat:'Luca3',
        type: 'tf',
        question: 'Ha állat lenne, milyen állat lenne?',
        answer:'',
        option1: 'Unikornis',
        option2: 'Ló',
        option3: 'Zebra',
        option4: 'Zsiráf',
        solution:['Zsiráf'],
=======
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
>>>>>>> 52e0965 (added arni)
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
<<<<<<< HEAD
        id: 30,
        cat:'Luca3',
        type: 'tf',
        question: 'Hány bejegyzést posztolt eddig instán? (megnézni nem ér)',
        answer:'',
        option1: '69',
        option2: '172',
        option3: '173',
        option4: '174',
        solution:['173'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
=======
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
>>>>>>> 52e0965 (added arni)
        desc_neg: ''

      },
      {
<<<<<<< HEAD
        id: 31,
        cat:'Luca3',
        type: 'tf',
        question: 'Sportolt gyerekkorában? Ha igen, mit?',
        answer:'',
        option1: 'Mazsorette',
        option2: 'RSG',
        option3: 'Nem sportolt',
        option4: 'Miskolcon túlélés',
        solution:['RSG'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Bármi is legyen',
        desc_neg: 'Bármi is legyen'

      },
      {
        id: 32,
        cat:'Luca3',
        type: 'tf',
        question: 'Mi a kedvenc ruhadarabja?',
        answer:'',
        option1: 'Faszod',
        option2: 'Zsákruha',
        option3: 'Pizsama',
        option4: 'Bármilyen nyári ruha',
        solution:['Zsákruha'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 33,
        cat:'Luca3',
        type: 'tf',
        question: 'Mit tart a kocsija kesztyűtartójában?',
        answer:'',
        option1: 'Napszemüveg',
        option2: 'Parkolójegyek',
        option3: 'Forgalmi',
        option4: 'Jegyzifüzi',
        solution:['Napszemüveg'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 34,
        cat:'Luca3',
        type: 'q',
        question: 'Mit viselt a menyasszony az első randin?',
        answer:'Zsákruhát',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Jaj, de ügyes vagy, megjegyezted :)',
        desc_neg: 'Bazz, most vettük át.'
      },
      {
        id: 35,
        cat:'Luca3',
        type: 'tf',
        question: 'Állítás: Lucának nem az anatómia vizsgája / szigója sikerült a legnehezebben.',
        answer:'',
        option1: 'Igaz',
        option2: 'Hamis',
        option3: '',
        option4: '',
        solution:['Hamis'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: 'A Patológia volt a legnehezebb testemvére.'

      },
      {
        id: 36,
        cat:'Luca3',
        type: 'tf',
        question: 'Melyik filmet utálja a leginkább?',
        answer:'',
        option1: 'Abraham Lincoln a vámpírvadász',
        option2: 'A gyilkos paradicsomok támadása 2.',
        option3: 'A maszk',
        option4: 'Pappa Pia',
        solution:['A maszk'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 37,
        cat:'Luca3',
        type: 'tf',
        question: 'Melyik az a szín, amit a legkevésbé szeret?',
        answer:'',
        option1: 'Szürke',
        option2: 'Kék',
        option3: 'Zöld',
        option4: 'Sárga',
        solution:['Zöld'],
=======
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
>>>>>>> 52e0965 (added arni)
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
<<<<<<< HEAD
        id: 38,
        cat:'Hulyeseg',
        type: 'tf',
        question: 'Hány ty-vel írjuk a teljes keresztnevét annak, akit "Matyi"-nak becézünk?',
        answer:'',
        option1: '1 TY',
        option2: '2 TY',
        option3: 'Nincs is benne TY',
        option4: '',
        solution:['1 TY'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Biztos nem MÁTTYÁS?',
        desc_neg: ''

      },
      {
        id: 39,
        cat:'Hulyeseg',
        type: 'tf',
        question: 'Ötödikben szinte minden nap mentünk hozzátok (pappbalintka) és nézegettük a hahut. Milyen márkáju autót akartunk nagyon megvenni',
        answer:'',
        option1: 'VW',
        option2: 'Volvo',
        option3: 'Ferrari',
        option4: 'Maserati',
        solution:['Maserati'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 40,
        cat:'Hulyeseg',
        type: 'tf',
        question: 'Hány sajtburgert hozott Bálint a Mekiből?',
        answer:'',
        option1: '22',
        option2: '35',
        option3: '42',
        option4: '53',
        solution:['42'],
=======
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
>>>>>>> 52e0965 (added arni)
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
<<<<<<< HEAD
        id: 41,
        cat:'Hulyeseg',
        type: 'tf',
        question: 'Hányszor hányt Imike a Szalayn?',
        answer:'',
        option1: '0',
        option2: '3',
        option3: '5',
        option4: 'Kurva sokszor',
        solution:['Kurva sokszor'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'NA, KISZÁMOLJA',
        desc_neg: 'NA, KISZÁMOLJA'

      },
      {
        id: 42,
        cat:'Hulyeseg',
        type: 'tf',
        question: 'Milyen messze van Mongólia a Szalayról?',
        answer:'',
        option1: '500 m',
        option2: '7554 km',
        option3: 'Kurva messze',
        option4: '',
        solution:['Kurva messze'],
        t_answer: '',
        f_answer: '',
        desc_poz: 'Lemértük!',
        desc_neg: ''

      },
      {
        id: 43,
        cat:'Hulyeseg',
        type: 'q',
        question: 'Hány helyen aludt Bálint a Szalayn?',
        answer:'Asztal, kanapé, padló, wc',
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
        id: 44,
        cat:'Hulyeseg',
        type: 'tf',
        question: 'Melyik filmet pofázták végig előttünk ülve kurva idegesítően?',
        answer:'',
        option1: 'A holnap határa',
        option2: 'Interstellar',
        option3: 'Paranormal Activity',
        option4: 'A fiú',
        solution:['Paranormal Activity'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 45,
        cat:'Hulyeseg',
        type: 'tf',
        question: 'Kinél találták meg Matus szemüvegét?',
        answer:'',
        option1: 'Lőrincz Ábel',
        option2: 'Nagy Norbi',
        option3: 'Papp Bálintka',
        option4: '',
        solution:[''],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      },
      {
        id: 46,
        cat:'Hulyeseg',
        type: 'q',
        question: 'Mikor fogod visszaadni Szopócot?',
        answer:'... senki se tudja',
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
        id: 47,
        cat:'Luca1',
        type: 'q',
        question: 'Mi a kedvenc pózotok?',
        answer:'Hihi',
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
        id: 48,
        cat:'Luca2',
        type: 'q',
        question: 'Luca szerint mire hasonlít a faszod?',
        answer:'Hihi',
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
        id: 49,
        cat:'Hulyeseg',
        type: 'tf',
        question: 'Szabad-e hógolyózni?',
        answer:'',
        option1: 'Természetesen',
        option2: 'NE HÓGOLYÓZZÁL!!',
        option3: '',
        option4: '',
        solution:['NE HÓGOLYÓZZÁL!!'],
        t_answer: '',
        f_answer: '',
        desc_poz: '',
        desc_neg: ''

      }
=======
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
>>>>>>> 52e0965 (added arni)
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
