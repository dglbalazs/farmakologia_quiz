import { createStore } from 'vuex'

export default createStore({
  state: {
    currentPage: 'home',
    questions_chosen: [],
    questions: [
      {
        id: 1,
        cat:'Elsodia',
        type: 'q',
        question: 'Mi a Farmakológia?',
        answer: 'A farmakológia élő szervezetek és kívülről bejuttatott kémiai anyagok kölcsönhatását leíró tudományág.',
        t_answer:'',
        f_answer:''
      },
      {
        id: 2,
        cat:'Elsodia',
        type: 'tf',
        question: 'Mi a Farmakokinetika?',
        answer:'',
        t_answer: 'Leírja a szervezet hatását a farmakonra',
        f_answer: 'Leírja a farmakon hatását a szervezetre'
      },
      {
        id: 3,
        cat:'Elsodia',
        type: 'tf',
        question: 'Mi a Farmakodinámia?',
        answer:'',
        t_answer: 'Leírja a szervezet hatását a farmakonra',
        f_answer: 'Leírja a farmakon hatását a szervezetre'
      },
      {
        id: 4,
        cat:'Elsodia',
        type: 'tf',
        question: 'A gyógyszerek eredetük szerint csoportosítva, lehetnek...',
        answer:'',
        t_answer: 'természetesek, félszintetikusak és szintetikusak',
        f_answer: 'természetesek és szintetikusak'
      },
      {
        id: 5,
        cat:'Elsodia',
        type: 'tf',
        question: 'Ugyanaz a konformációs változás alakul ki a receptoron, ami az endogén ligand esetében...',
        answer:'',
        t_answer: 'amikor agonista kapcsolódik a receptorhoz',
        f_answer: 'amikor antagonista kapcsolódik a receptorhoz'
      },
      {
        id: 6,
        cat:'Elsodia',
        type: 'tf',
        question: 'A torzult agonizmus esetében...',
        answer:'',
        t_answer: 'csak néhány sejtműködésbeli változás következik be az eredeti konformációs változáshoz képest',
        f_answer: 'másfajta konformációváltozás következik be'
      },
      {
        id: 7,
        cat:'Elsodia',
        type: 'tf',
        question: 'Az inverz agonizmus esetében...',
        answer:'',
        t_answer: 'másfajta konformációváltozás következik be',
        f_answer: 'csak néhány sejtműködésbeli változás következik be az eredeti konformációs változáshoz képest'
      },
      {
        id:8,
        cat:'Elsodia',
        type:'q',
        question:'Mik lehetnek farmakon célpontok?',
        answer: '<ul><li>Fehérjék<ul><li>receptorok</li><li>enzimek</li><li>transzporterek</li></ul></li><li>Lipidek</li><li>Nukleinsavak (DNS, RNS)</li></ul><br/>Kivéve: bisphosphonátok, ozmotikus diuretikumok, laxativumok, adszorbensek',
        t_answer: '',
        f_answer: ''
      },
      {
        id:9,
        cat:'Elsodia',
        type:'q',
        question:'Mi a farmakon?',
        answer:'Olyan ismert szerkezetű vegyület, ami élő szervezetben már kis mennyiségben is jelentős hatást képes kiváltani (<10 g, tipikusan <1 g).<br/>A farmakonok megkülönböztetendők az esszenciális tápanyagoktól (vitaminok), melyek nélkülözhetetlenek az egészséghez, és az ún. szemiesszenciális tápanyagoktól is (pl. a vörösborban is megtalálható rezveratrol), melyek nem elengedhetetlenek, de hasznosak. <br/>A farmakon jogi jelentéstartalom nélküli fogalom.',
        t_answer:'',
        f_answer:''
      },
      {
        id:10,
        cat:'Elsodia',
        type:'q',
        question:'Mi a gyógyszer?',
        answer:'Egy (esetleg több) farmakont tartalmazó készítmény, melyet valamilyen kedvező hatás kiváltása céljából adnak.<br/>A farmakon (hatóanyag) mellett általában egyéb összetevőket is tartalmaz (segédanyagok), melyek használatát megbízhatóbbá vagy kényelmesebbé teszik.<br/>A gyógyszer minősítést csak törvényileg meghatározott eljárás után adják meg.',
        t_answer:'',
        f_answer:''
      },
      {
        id:11,
        cat:'Elsodia',
        type:'q',
        question:'Mik a receptorok (farmakológiai értelemben)?',
        answer:'A receptorok olyan molekulák (vagy molekula-aggregátumok), melyek egyetlen funkciója, hogy bizonyos kis vagy közepes méretű endogén molekulák (ligandok) megkötése után jelentős mértékben megváltoztassák az őket hordozó sejtek működését<br/>A specifikus endogén ligand megkötése után általában egymást indukáló változások sorozata következik be (jelátvitel avagy szignáltranszdució)<br/>A receptorok tipikus ligandjai neurotranszmitterek, hormonok (endokrintranszmitterek) és autakoidok (parakrin transzmitterek)',
        t_answer:'',
        f_answer:''
      },
      {
        id:12,
        cat:'Elsodia',
        type:'q',
        question:'Milyen ligandok kapcsolódhatnak a receptorhoz?',
        answer:'Az endogén ligandokon túl exogén ligandok is kapcsolódhatnak a receptorokhoz (hasonlóság alapján). Ezek lehetnek agonisták vagy antagonisták.',
        t_answer:'',
        f_answer:''
      },
      {
        id:13,
        cat:'Elsodia',
        type:'q',
        question:'Mi történik, ha agonista kapcsolódik a receptorhoz?',
        answer:'Ha agonista kapcsolódik, a receptoron kialakul az a konformációs változás (vagy egy hasonló), ami az endogén ligand esetében is, így a receptor meg tudja változtatni a sejt működését.<br/>Van, hogy nem az összes, csak néhány sejtműködésbeli változás következik be (torzult agonizmus), és olyan is, hogy másfajta konformációváltozás lép fel (inverz agonizmus).',
        t_answer:'',
        f_answer:''
      },
      {
        id:14,
        cat:'Elsodia',
        type:'q',
        question:'Mi történik, ha antagonista kapcsolódik a receptorhoz?',
        answer:'Ha antagonista kapcsolódik, a receptor konformációja nem változik meg úgy, hogy az sejtműködésbeli változáshoz vezessen.<br/>Ha azonban agonista is kerül a rendszerbe, az antagonista akadályozza annak kötődését a receptorhoz.',
        t_answer:'',
        f_answer:''
      },
      {
        id:15,
        cat:'Elsodia',
        type:'q',
        question:'Milyen agonista ligandokat ismersz?',
        answer:'<ul><li>endogén vagy exogén (eredetük szerint – a farmakonok természetszerűleg exogének)</li><li>reverzibilis vagy irreverzibilis (az agonista-receptor komplex disszociációs hajlandósága alapján)</li><li>ortoszterikus vagy alloszterikus (az alapján, hogy az adott agonista ugyanoda kötődik-e, mint az endogén ligand, vagy sem)</li><li>full (teljes) vagy parciális (a kiváltható maximális hatás nagysága alapján – a full agonisták által kiváltható maximális hatásnál nem érhető el nagyobb az adott sejten az adott receptort ingerelve)</li><li>pozitív („rendes”) vagy inverz (attól függően, hogy az adott agonista a sejtválaszt ugyanabba az irányba változtatja-e meg, mint az endogén ligand, vagy ellenkező irányba)</li></ul>',
        t_answer:'',
        f_answer:''
      },
      {
        id:16,
        cat:'Elsodia',
        type:'tf',
        question:'A receptorok inaktív és aktív konformációi dinamikus egyensúlyban vannak egymással.',
        answer:'',
        t_answer:'Ezen aktív állapot lehetséges agonista jelenléte nélkül is',
        f_answer:'Ezen aktív állapot csak agonista jelenlétével lehetséges'
      },
      {
        id:17,
        cat:'Elsodia',
        type:'tf',
        question:'A receptorok inaktív és aktív konformációi dinamikus egyensúlyban vannak egymással.',
        answer:'',
        t_answer:'Az aktív konformáció esélyét és ezáltal az aktív receptorok arányát növeli az agonista kötődése',
        f_answer:'Az aktív konformáció esélyét és ezáltal az aktív receptorok arányát növeli az antagonista kötődése'
      },
      {
        id:18,
        cat:'Elsodia',
        type:'q',
        question:'Mi az affinitás?',
        answer:'Az affinitás az agonista és a receptor kapcsolódását határozza meg - ami, az agonista-receptor komplex stabilitását mutatja.',
        t_answer:'',
        f_answer:''
      },
      {
        id:19,
        cat:'Elsodia',
        type:'q',
        question:'Mi az intrizik hatékonyság?',
        answer:'Az intrizik (belső) hatékonysággal jellemezhető a receptorhoz kötődött agonista hatáskiváltó képessége (vagyis képessége a receptort hordozó sejt működésének megváltoztatására).',
        t_answer:'',
        f_answer:''
      },
      {
        id:20,
        cat:'Elsodia2',
        type:'q',
        question:'Mi a koncentráció-hatás görbe?',
        answer:'A koncentráció-hatás (E/c) görbe egy farmakon által kiváltott hatás a farmakon koncentrációjának függvényében ábrázolva (vagyis az x tengelyen a koncentráció, az y tengelyen a hatás látszik).<br/>A hatás jellege alapján lehet kvantális, és folytonos.',
        t_answer:'',
        f_answer:''
      },
      {
        id:21,
        cat:'Elsodia2',
        type:'tf',
        question:'Mit mutat a kvantális koncentráció-hatás görbe?',
        answer:'',
        t_answer:'Az y tengelyen azon individuumok száma, aránya vagy százaléka látható, akik egy előre meghatározott nagyságú biológiai választ mutatnak',
        f_answer:'Az y tengelyen egy biológiai válasz valamely mértéke (mérhető mennyisége) található, ami egy individuumhoz vagy individuumok egy csoportjához tartozik (átlag)'
      },
      {
        id:22,
        cat:'Elsodia2',
        type:'tf',
        question:'Mit mutat a folytonos koncentráció-hatás görbe?',
        answer:'',
        t_answer:'Az y tengelyen egy biológiai válasz valamely mértéke (mérhető mennyisége) található, ami egy individuumhoz vagy individuumok egy csoportjához tartozik (átlag)',
        f_answer:'Az y tengelyen azon individuumok száma, aránya vagy százaléka látható, akik egy előre meghatározott nagyságú biológiai választ mutatnak'
      },
      {
        id:23,
        cat:'Elsodia2',
        type:'q',
        question:'A Hill egyenletben - mi a Hill koefficiens (n)?',
        answer:'Meghatározza a függvény meredekségét a középpontban',
        t_answer:'',
        f_answer:''
      },
      {
        id:24,
        cat:'Elsodia2',
        type:'q',
        question:'A Hill egyenletben - mi az E max?',
        answer:'Az adott agonistával elérhető maximális hatás. Az Emax az agonista hatékonyságát adja meg.',
        t_answer:'',
        f_answer:''
      },
      {
        id:25,
        cat:'Elsodia2',
        type:'q',
        question:'A Hill egyenletben - mi az E C50?',
        answer:'A maximális hatás felét kiváltó agonista koncentráció.Az E C50 reciproka az agonista hatáserősségét (potency) adja meg.',
        t_answer:'',
        f_answer:''
      },
      {
        id:26,
        cat:'Elsodia2',
        type:'q',
        question:'Milyen antagonista ligandokat ismersz?',
        answer:'<ul><li>endogén vagy exogén (eredet alapján – nagyon kevés endogén antagonista van, és ezek fiziológiai szerepe is megkérdőjelezhető)</li><li>reverzibilis vagy irreverzibilis (az antagonista-receptor komplex disszociációs hajlandósága szerint)</li><li>ortoszterikus vagy alloszterikus (az alapján, hogy az antagonista ugyanoda kötődik-e, mint az endogén ligand, vagy sem)</li><li>szintópikus vagy allotópikus (egy adott agonistával való interakció alapján, vagyis hogy az antagonista ugyanoda kötődik-e, mint az adott agonista, vagy sem)</li></ul>',
        t_answer:'',
        f_answer:''
      },
      {
        id:27,
        cat:'Elsodia2',
        type:'q',
        question:'Mi a kompetitív antagonizmus?',
        answer:'Ha egy agonista és egy antagonista egyaránt reverzibilis és szintópikusak, kompetitív antagonizmus lép fel közöttük a receptoruknál.<br/>A kompetitív antagonista gátló hatása az agonista koncentrációjának emelésével áttörhető, az eredeti maximális hatás mindig elérhető.',
        t_answer:'',
        f_answer:''
      },
      {
        id:28,
        cat:'Elsodia2',
        type:'q',
        question:'Mi a nem-kompetitív antagonizmus?',
        answer:'Nem-kompetitív antagonizmus esetén az antagonista mindig tudja csökkenteni az agonista maximális hatását.',
        t_answer:'',
        f_answer:''
      },
      {
        id:29,
        cat:'Elsodia2',
        type:'tf',
        question:'Az agonista maximális hatása mindig elérhető...',
        answer:'',
        t_answer:'A kompetetív antagonizmus esetében.',
        f_answer:'A nem-kompetetív antagonizmus esetében.'
      },
      {
        id:30,
        cat:'Elsodia2',
        type:'tf',
        question:'Az agonista maximális hatása mindig csökkenthető...',
        answer:'',
        t_answer:'A nem-kompetetív antagonizmus esetében.',
        f_answer:'A kompetetív antagonizmus esetében.'
      },
      {
        id:31,
        cat:'Elsodia2',
        type:'q',
        question:'Mi történik funkcionális antagonizmus esetében?',
        answer:'Az agonista és funkcionális antagonistája nem ugyanahhoz a receptorhoz kötődik, de a jelátviteli utak átfedése miatt a hatás szintjén egymás ellen dolgoznak.',
        t_answer:'',
        f_answer:''
      },
      {
        id:32,
        cat:'Elsodia2',
        type:'tf',
        question:'Elhúzódó és/vagy nagy dózisú farmakon-használat a hatás....',
        answer:'',
        t_answer:'csökkenéséhez vezet.',
        f_answer:'növeléséhez vezet.'
      },
      {
        id:33,
        cat:'Elsodia2',
        type:'q',
        question:'Mi a farmakon tolerancia gyorsan kialakuló formája? Mi áll a hátterében?',
        answer:'Tachyphylaxia - általában gyors receptor deszenzitizáció következménye.',
        t_answer:'',
        f_answer:''
      },
      {
        id:34,
        cat:'Elsodia2',
        type:'q',
        question:'Mi a farmakon tolerancia kialakulásának két legfontosabb oka?',
        answer:'<ul><li>Receptor deszenzitizáció – a jelátvitel hatékonyságának („erősítés”) csökkenése</li><li>Receptor down-regulation – a receptorszám csökkenése(fokozott receptor internalizáció és lebontás)</li></ul>',
        t_answer:'',
        f_answer:''
      },
      {
        id:35,
        cat:'Elsodia2',
        type:'q',
        question:'Mi alapján osztályozzuk a receptorokat?',
        answer:'<ul><li>Receptor nagycsalád</li><li>Receptor család</li><li>Receptor típus</li><li><i>Esetlegesen</i>: Receptor altípus, al-altípus</li></ul><br/>Pl.:<br/>G protein-kapcsolt receptorok (nagycsalád)<br/>acetilkolin receptorok (család)<br/>muszkarin receptorok (típus)<br/>M2 muszkarin receptor (altípus)',
        t_answer:'',
        f_answer:''
      },
      {
        id:36,
        cat:'secppt1',
        type:'tf',
        question:'A vazelin, paraffin, fehér agyag mind...',
        answer:'',
        t_answer:'Ásványi eredetű',
        f_answer:'Állati eredetű'
      },
      {
        id:37,
        cat:'secppt1',
        type:'tf',
        question:'A pepszin, csukamájolaj, méhviasz mind...',
        answer:'',
        t_answer:'Állati eredetű',
        f_answer:'Ásványi eredetű'
      },
      {
        id:38,
        cat:'secppt1',
        type:'tf',
        question:'A vazelin, paraffin, fehér agyag mind...',
        answer:'',
        t_answer:'Ásványi eredetű',
        f_answer:'Állati eredetű'
      },
      {
        id:42,
        cat:'secppt1',
        type:'tf',
        question:'A membrán áteresztő képessége és a lipid-oldékonyság között',
        answer:'',
        t_answer:'van összefüggés',
        f_answer:'nem található összefüggés'
      },
      {
        id:46,
        cat:'secppt1',
        type:'tf',
        question:'A vizelet savanyítása...',
        answer:'',
        t_answer:'felgyorsítja a gyenge bázisok kiválasztását és visszatartja a gyenge savak kiválasztását',
        f_answer:'felgyorsítja a gyenge savak kiválasztását és visszatartja a gyenge bázisok kiválasztását'
      },
      {
        id:47,
        cat:'secppt1',
        type:'tf',
        question:'A vizelet lúgosítása...',
        answer:'',
        t_answer:'felgyorsítja a gyenge savak kiválasztását és visszatartja a gyenge bázisok kiválasztását',
        f_answer:'felgyorsítja a gyenge bázisok kiválasztását és visszatartja a gyenge savak kiválasztását'
      },
      {
        id:48,
        cat:'secppt1',
        type:'tf',
        question:'A plazma pH növelésére...',
        answer:'',
        t_answer:'a gyenge savak a KIR-ből a plazmába dúsulnak',
        f_answer:'a gyenge savak a KIR-ben dúsulnak'
      },
      {
        id:49,
        cat:'secppt1',
        type:'tf',
        question:'A plazma pH csökkentésére...',
        answer:'',
        t_answer:'a gyenge savak a KIR-ben dúsulnak',
        f_answer:'a gyenge savak a KIR-ből a plazmába dúsulnak'
      },
      {
        id:39,
        cat:'secppt1',
        type:'q',
        question:'Mit takar az ADME betűszó?',
        answer:'Abszorpció az alkalmazás helyéről<br/>Disztribúció a szervezetben<br/>Metabolizmus<br/>Exkréció',
        t_answer:'',
        f_answer:''
      },
      {
        id:40,
        cat:'secppt1',
        type:'q',
        question:'Mit tudsz a sejtmembránról, és az epitheliális barrierről? Hogy kapcsolódik ez a gyógyszermolekulák átjutásához?',
        answer:'A sejtmembrán, másnéven a barrier, tehát akadály, gát, amely elválasztja az extra- és intracelluláris tereket.<br/>Az epitheliális barrier szorosan kapcsolódó sejtek rétege, pl.: GI mucosa, vesetubulus.<br/><br/>Minden gyógyszermolekulának két membránon kell áthaladnia (külső és belső), hogy átjusson.',
        t_answer:'',
        f_answer:''
      },
      {
        id:41,
        cat:'secppt1',
        type:'q',
        question:'Milyen fő útvonalon keresztül juthatnak át a membránokon a kis molekulák?',
        answer:'I. diffúzió közvetlenül a lipidrétegen keresztül<br/>II. carrier-mediált transzport<br/>III. diffúzió vizes pórusokon keresztül (aquaporin-ok)<br/>IV. pinocytosis',
        t_answer:'',
        f_answer:''
      },
      {
        id:43,
        cat:'secppt1',
        type:'q',
        question:'Fick I. törvényében mit takar a D?',
        answer:'A diffúziós együttható<br/>Megmutatja, hogy egységnyi felületen, egységnyi idő alatt, egységnyi koncentráció gradiens mellett mennyi az átáramló anyagmennyiség.',
        t_answer:'',
        f_answer:''
      },
      {
        id:44,
        cat:'secppt1',
        type:'q',
        question:'Mit határoz meg a lipid-oldékonyság, és miért hasznos az ismerete?',
        answer:'A lipid-oldékonyság meghatározza a gyógyszer farmakokinetikai viselkedését - tudatában meg tudjuk jósolni a gyógyszer bélből való felszívódását, a különböző szövetekbe való bejutását és a vesén keresztüli kiválasztását.',
        t_answer:'',
        f_answer:''
      },
      {
        id:45,
        cat:'secppt1',
        type:'q',
        question:'Mi jellemzi a gyógyszerek kémhatását?',
        answer:'A legtöbb gyógyszer gyenge sav vagy bázis<br/>A pH és a pK függvényében ionizált és nem-ionizált forma.<br/><ul><li>Az ionizált forma alacsony lipid oldékonysággal rendelkezik, gyakorlatilag nem képesek átjutni a membránokon</li><li>A nem-ionizált forma lipid-oldékonysága a kémiai szerkezettől függ, de a legtöbb gyógyszer nem-ionizált formája elég lipid-oldékony a membrándiffúzióhoz.</li></ul>',
        t_answer:'',
        f_answer:''
      },
      {
        id:50,
        cat:'secppt2',
        type:'q',
        question:'Mit tudsz a Carrier-Mediált transzportról? Milyen sejtekre jellemző, és milyen típusai különböztethetőek meg?',
        answer:'Számos sejtnek van speciális transzport mechanizmusa az élettanilag fontos molekulák belépésének és kijutásának szabályozására:<ul><li>cukroknak</li><li>aminosavak</li><li>neurotranszmitterek</li><li>fém ionok</li></ul><br/><br/>2, azaz kettő tehát két típusuk van:<br/>Aktív transzport (ATP-függő)<br/>Passzív transzport - vagy facilitált diffúzió, carrier fehérjék által',
        t_answer:'',
        f_answer:''
      },
      {
        id:51,
        cat:'secppt2',
        type:'q',
        question:'Na, mégis mi az az aquaporin? Nekem fogalmam sincs.',
        answer:'Az aquaporin-ok képezik a sejtek „vízvezeték rendszerét” (ezért a csodálatos felfedezésért Péter Ogre, najo Peter Agre Nobel díjat kapott alig 19 eve 2003-ban. Itt egy kép róla)<br/><br/><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Peter_Agre.jpg/300px-Peter_Agre.jpg"><br/><br/>Az aquaporinok transzmembrán, pórus-képző fehérjék - vízcsatornák!<br/>Fő funkciójuk a víz visszaszívás a vesékben ADH függően<br/>Szelektíven csak vízmolekulákat engednek át, ionokat és más oldott anyagokat nem.<br/>Az aquaporinok mérete túl kicsi (csak 0.4 nanométer) ahhoz, hogy a legtöbb gyógyszermolekulát (amik nagyobbak, mint 1 nm OMG big alert) átengedje.',
        t_answer:'',
        f_answer:''
      },
      {
        id:52,
        cat:'secppt2',
        type:'q',
        question:'Mit jelent a pino?',
        answer:'Inni. Na, ezt biztos tudtad.',
        t_answer:'',
        f_answer:''
      },
      {
        id:53,
        cat:'secppt2',
        type:'q',
        question:'Beszélj nekem kicsit, kérlek, a pinocitózisról!',
        answer:'A pinocytosis folyadék-endocitózis!<br/>A vezikula tartalma felszabadulhat a sejten belül, vagy a másik oldalon kiválasztódhat<br/> Ez a mechanizmus makromolekulák transzportjához fontos (pl. inzulin, ami ezzel a folyamattal jut át a vér-agy gáton)<br/>Kis és közepes molekulák számára, mint a legtöbb hagyományos (vagyis nem-biológiai terápiás) gyógyszer, ez a mechanizmus ritka (de pl. így jut át bárium-szulfát)',
        t_answer:'',
        f_answer:''
      },
      {
        id:54,
        cat:'secppt2',
        type:'q',
        question:'Mit jelent a biológiai hasznosulás?',
        answer:'A beadott gyógyszer azon hányada (F) ami érintetlenül eléri a szisztémás keringést',
        t_answer:'',
        f_answer:''
      },
      {
        id:55,
        cat:'secppt2',
        type:'q',
        question:'Mi a first-pass effect?',
        answer:'A first-pass effect a metabolizmus egy jelensége - A gyógyszer koncentrációja jelentősen csökken mielőtt elérné a szisztémás keringést („preszisztémás metabolizmus”)',
        t_answer:'',
        f_answer:''
      },
      {
        id:56,
        cat:'secppt2',
        type:'q',
        question:'A first-pass effect esetében milyen útvonalon megy végig a gyóccer? Jaj, elírtam. Tehát, a gyótzer.',
        answer:'Per os (a szájasféle) bevitel -> abszorpció a máj kapuér rendszerébe (portalis véna) -> gyógyszer a májba -> A máj számos gyógyszert metabolizál. -> gyógyszer bekerül a szisztémás keringésbe',
        t_answer:'',
        f_answer:''
      },
      {
        id:57,
        cat:'secppt2',
        type:'q',
        question:'Mi a first-pass effect négy fő meghatározó rendszere?',
        answer:'<ul><li>A gasztrointesztinális lumen enzimei</li><li> Bélfali enzimek</li><li>Bakteriális enzimek</li><li>Máj enzimek</li></ul>',
        t_answer:'',
        f_answer:''
      },
      {
        id:58,
        cat:'secppt2',
        type:'q',
        question:'Mik a First-pass effect következményei?',
        answer:'A gyógyszer biohasznosulása lecsökken<br/>Magasabb dózis kell orálisan, mint parenterálisan</br>Jelentős egyéni különbségek vannak a first-pass metabolism mértékében',
        t_answer:'',
        f_answer:''
      },
      {
        id:59,
        cat:'secppt2',
        type:'q',
        question:'Tudnál mondani pár példát gyógyszerekre, amiken megfigyelhető a first-pass metabolizmus?',
        answer:'Hát persze!<br/><br/><br/>Aspirin<br/>Metoprolol<br/>Glyceryl trinitrate (tehát Nitroglycerin)<br/>Morfium<br/>Izoszorbid dinitrát<br/>Propranolol<br/>Levodopa<br/>Salbutamol (vagy más nevén albuterol)<br/>Lidokain<br/>Verapamil',
        t_answer:'',
        f_answer:''
      },
      {
        id:60,
        cat:'secppt2',
        type:'q',
        question:'Hogy mérjük a biohasznosulást (F)?',
        answer:'Felvesszük a gyógyszer plazmakoncentráció-idő görbéit alanyok egy csoportjában:<br/><ol><li>Orális adagolás után</li><li>( egy másik alkalommal pedig) Intravénás adalogás után</li></ol><br/>Aztán meg elosztjuk a szájasat a szúróssal.',
        t_answer:'',
        f_answer:''
      },
      {
        id:68,
        cat:'secppt3',
        type:'tf',
        question:'Az AUC...',
        answer:'',
        t_answer:'egyenesen arányos a beadott gyógyszer mennyiségével',
        f_answer:'független a beadott gyógyszer mennyiségétől'
      },
      {
        id:69,
        cat:'secppt3',
        type:'tf',
        question:'Az AUC...',
        answer:'',
        t_answer:'független a felszívódás mértékétől',
        f_answer:'egyenesen arányos a felszívódás mértékével'
      },
      {
        id:72,
        cat:'secppt3',
        type:'tf',
        question:'Gyógyszerek felszívódását tekintve',
        answer:'',
        t_answer:'intravénás adagolásnál nincs abszorpció',
        f_answer:'intravénás adagolásnál a leggyorsabb az abszorpció'
      },
      {
        id:75,
        cat:'secppt3',
        type:'tf',
        question:'A szájüregi felszívódást segíti a...',
        answer:'',
        t_answer:'Jó vérellátás, és a vékony epithelium',
        f_answer:'A nagy felszín és a jó vérellátás'
      },
      {
        id:61,
        cat:'secppt3',
        type:'q',
        question:'Mi az AUC?',
        answer:'Ezt mondom, ha beverem a lábam. Áuc. :(<br/>De farmakológiában az area under the curve-t is jelentheti, a koncentráció-idő grafikonon a görbe integrálja, tehát az az alatti terület.<br/>Az időbeni teljes gyógyszerterhelést jelenti<br/>Vagy a teljes gyógyszermennyiséget, ami eléri a vérkeringést.',
        t_answer:'',
        f_answer:''
      },
      {
        id:62,
        cat:'secppt3',
        type:'q',
        question:'Mire használjuk az AUC-t?',
        answer:'Egy gyógyszer különböző formáinak abszolút biohasznosulás-mérésére (pl. 1 gyógyszer per os vs i.v.)<br/>Vagy relatív biohasznosulás mérésére (két különböző gyógyszer összehasonlítása)',
        t_answer:'',
        f_answer:''
      },
      {
        id:63,
        cat:'secppt3',
        type:'q',
        question:'Hogy számoljuk az AUC-t?',
        answer:'A területet az adagolási idő kezdetétől számítjuk addig, amíg a plazma-koncentráció már elhanyagolható<br/>Gyakorlatban a koncentrációt bizonyos időközönként megmérjük és a trapéz-szabályt használva számolunk (illetve háromszög-szabályt a végén) (meg p.o. adagolás estén az elején is)<br/>Trapéz szabálynál vesszük az adott időhöz tartozó koncentrációkat (4db sarok pont - idő1, koncentráció1, idő2, koncentráció2) majd a kapott trapéz területét számítjuk általuk.',
        t_answer:'',
        f_answer:''
      },
      {
        id:64,
        cat:'secppt3',
        type:'q',
        question:'Miért használják az AUC-t generikus gyógyszerek bioekvivalenciájának originalissal való összevetésére?',
        answer:'Hát, mert erre jó, hogy összehasonlítson 2 különböző, de mégis ugyanazon hatóanyagot tartalmazó gyógyszert. Duhhh.',
        t_answer:'',
        f_answer:''
      },
      {
        id:65,
        cat:'secppt3',
        type:'q',
        question:'Mennyibe kerül egy új gyógyszer feltalálását követően a kutatás madagaszkári ariary-ban számolva?',
        answer:'Hát, mivel egy hasonló kutatás akár 600-1200 millió dollárba is kerülhet, így kb. 2,400,000,000,000 - 4,800,000,000,000 madagaszkári ariary-ba kerülne.',
        t_answer:'',
        f_answer:''
      },
      {
        id:66,
        cat:'secppt3',
        type:'q',
        question:'Mi a generikus gyógyszer?',
        answer:'Na szóval, új gyógyszer feltalálása esetén, a procedúrákat végignyomva kap a szabadalmaztató 20 év védettséget, amíg monopolpiaca van rá. Aztán lejár, bárki gyárthat, de igazolni kell a bioekvivalenciát az eredeti hatóanyaggal, amit már korábban engedélyeztek.<br/>Ezek alapján a saját szavaimmal meghatározva a generikus gyógyszer definíciója:<br/>"Olyan gyógyszer, ami egy már forgalomban lévő eredeti gyógyszerhez hasonló kiszerelésében, erősségében, minőségében és hatásában"',
        t_answer:'',
        f_answer:''
      },
      {
        id:67,
        cat:'secppt3',
        type:'q',
        question:'Hogy tudjuk igazolni a bioekvivalenciát generikus gyógyszer esetében?',
        answer:'Vegyünk 20-20 beteget (van valami piac, ahol árulják őket?), 20 szedjen eredeti tablettát, 20 a generikumot. Felvesszük a hatóanyag koncentráció/idő görbéit, majd kiszámoljuk az AUC-t. :) Ugye, nem is olyan nehéz?!',
        t_answer:'',
        f_answer:''
      },
      {
        id:70,
        cat:'secppt3',
        type:'q',
        question:'Miért nem elég a gyakorlatban az AUC a bioekvivalencia bizonyítására? Mi az, ami viszont már elegendő?',
        answer:'Hát, tudniillik, hogy az AUC független a felszívódás mértékétől, így nem kapunk információt az abszorpció vagy elimináció kinetikájáról.<br/>Így az AUC mellett még a koncentráció maximuma és az idő maximuma (tehát az összes ehhez szükséges eltelt idő) is mind az originális gyógyszer 80 és 125% közé kell essenek.',
        t_answer:'',
        f_answer:''
      },
      {
        id:71,
        cat:'secppt3',
        type:'q',
        question:'Mi az az abszorpció?',
        answer:'A gyógyszerek felszívódása az alkalmazás helyéről a vérplazmába',
        t_answer:'',
        f_answer:''
      },
      {
        id:73,
        cat:'secppt3',
        type:'q',
        question:'Mik a fő adagolási útvonalak?',
        answer:'<ul><li>Szájon át</li><li>Nyelvalatti(száj nyálkahártya)</li><li>rektális (hihi a popóba)</li><li>inhalációs</li><li>injekció</li><li>Más epitheliális felszínen való alkalmazás, pl. bőr , cornea, vagina hmm, és orr-nyálkahártya</li></ul>',
        t_answer:'',
        f_answer:''
      },
      {
        id:74,
        cat:'secppt3',
        type:'q',
        question:'Mi jellemzi a szájüregi felszívódását? Mit tudsz a nyelvalatti gyógyszeradagolásról?',
        answer:'Jó vérellátás<br/>Vékony epithelium<br/>pH = 6<br/><br/>Sublingualis gyógyszeradagolás: A gyógyszer egyből a szisztémás keringésbe kerül, elkerülve a portális rendszert, így a májat, elkerülve a first-pass metabolizmust<br/>Hasznos, ha a gyógyszer nem stabil gyomor pH-n vagy gyorsan metabolizálódika májban. Érdemes megemlíteni a nitroglicerint/glicerin trinitrátot valamiért!',
        t_answer:'',
        f_answer:''
      },
      {
        id:76,
        cat:'secppt3',
        type:'q',
        question:'Mi jellemzi az orális adagolást általánosságban?',
        answer:'Közepesen nagy felszín<br/>Jó vérellátás<br/>pH=1-2<br/>A legtöbb gyógyszer itt ionizált lesz és lipid-víz megoszlási hányadosuk lecsökken!<br/>Az abszorpciót befolyásolják: A gyomor motilitás, a tartalma, a testhelyzet és más tényezők.<br/>A savas karakterű gyógyszerek jól felszívódnak a gyomorból - ion csapda!',
        t_answer:'',
        f_answer:''
      },
      {
        id:77,
        cat:'secppt3',
        type:'q',
        question:'Mi jellemzi az orális adagolást a bélrendszerben?',
        answer:'Vékonybelek : duodenum, jejunum, ileum. Egyrétegű hengerhám;<br/>Nagy felszín: villusok<br/>Jó vér- és nyirok-ellátású<br/>pH= 5-6<br/>Főleg passzív diffuzió történik<br/> vastag belekben általában nincs gyógyszer-felszívódás (főleg csak víz)',
        t_answer:'',
        f_answer:''
      },
      {
        id:78,
        cat:'secppt3',
        type:'q',
        question:'Mi befolyásolja a gasztrointesztinális felszívódást (vékonybeles válaszok + másik)?',
        answer:'A GI felszívódást befolyásolják:<ul><li>lipid-víz megoszlási hányados</li><li>véráramlás</li><li>gyomor ürülés</li><li>GI motilitás</li><li>a gyógyszer hatása a gi traktusra</li><li>betegségek</li><li>táplálék</li><li>adagolási formák</li><li>gyógyszer formája, molekula mérete, fizikai kémiai tulajdonsága</li></ul>',
        t_answer:'',
        f_answer:''
      },
      {
        id:79,
        cat:'secppt3',
        type:'q',
        question:'Miért jó, ha a fenekedbe nyomnak gyógyszert? Mi az útvonal?',
        answer:'Alkalmazható: <br/>helyi hatás kifejtésére pl. aranyér<br/>szisztémás hatás kifejtésére pl. lázcsillapítás<br/><br/>Az útvonalát tekintve, az alsó és középső szakaszban vena iliaca-ba, majd a vena cava-ba vezetődnek a vénák, a felső részben pedig a portális keringésbe, mégpontosabban a májba. Így, láthatjuk, hogy a dózis 66.666667% vagy 2/3-a, elkerüli a máj first-pass metabolizmusát.',
        t_answer:'',
        f_answer:''
      },
      {
        id:80,
        cat:'secppt3',
        type:'q',
        question:'Mi jellemzi a tüdő - inhalációs gyógyszeradagolást?',
        answer:'Hát, kurva gyors!<br/>Nagyon nagy, 50-100 négyzetméter alveoláris felszín. Kb. mint az albérletem! Csak az inkább 50, mint 100.<br/>Vékony membrán (0.2 nanométer)<br/>Perctérfogat 100%a áthalad a tüdőn<br/>Itt is lehet szisztémás (pl. gáz anesztetikum) vagy helyi alkalmazás (pl. szteroidok és NSAIDok aeroszolként, illetve bornchodilatátorok)<br/>Muy importante, hogy a tüdő mind az abszorpció, mind az elimináció útvonala is<br/>Főleg passzív és facilitált diffúzió történik, illetve a szilárd részecskék fagocitózisa makrofágak által OMG de szép mondat, olvasd el mégegyszer',
        t_answer:'',
        f_answer:''
      },
      {
        id:81,
        cat:'secppt3',
        type:'q',
        question:'Mik a tüdőből való szisztémás felszívódást befolyásoló tényezők?',
        answer:'<ul><li>Gyógyszer parciális nyomása a belélegzett keverékben</li><li>Alveolaris ventilláció</li><li>Gyógyszer áthaladása az alveolusokból a vérbe</li><li>Lipid-víz megoszlási hányados</li><li>Vér-levegő megoszlási hányados</li></ul>',
        t_answer:'',
        f_answer:''
      },
      {
        id:82,
        cat:'secppt3',
        type:'q',
        question:'Mi jellemző az innyekciósra? Vagyis a parenterálisan adagolt gyógyszerek felszívódására?',
        answer:'Leggyakrabban intramuscular, subcutan - ezeknél gyorsabb az abszorpció, mint orálisan<br/>Intravénásnál meg nincs abszorpció',
        t_answer:'',
        f_answer:''
      },
      {
        id:83,
        cat:'secppt3',
        type:'q',
        question:'Parenterálisan adagolt gyógyszerek esetében mik az abszorpciót befolyásoló tényezők?',
        answer:'<ul><li>Vérellátás</li><li>Kötőszövet tömörsége</li><li>Vasoconstrictor adása</li><li>pH</li><li>koncentráció</li><li>térfogat</li><li>oldószer</li><li>lipid-víz megoszlási hányados, stb szokásosok</li></ul>',
        t_answer:'',
        f_answer:''
      },
      {
        id:84,
        cat:'secppt3',
        type:'q',
        question:'Mi jellemzi a bőr - perkután, dermális felszívódást?',
        answer:'Mérsékelten nagy felszín jól ellátva vér- és nyirokerekkel<br/>Többrétegű elszarusodó laphám gátolja a felszívódást<br/>Főleg lipofil anyagok jutnak át, DE (jólvan már, nem kell kiabálni) az izzadság és faggyúmirigyeken keresztül vízoldékony molekulák is bejuthatnak.<br/>Alkalmas helyi alkalmazásra (dermatológia) vagy szisztémás alkalmazásra (transzdermális terápiás rendszerek, TTS)',
        t_answer:'',
        f_answer:''
      },
      {
        id:85,
        cat:'secppt3',
        type:'q',
        question:'A fő adagolási útvonalakon kívül, milyen egyéb járatokba mehetnek a gyóccer molekulák?',
        answer:'<ul><li>Orrnyálkahártya</li><li>Húgycső</li><li>Hüvely (de csak, ha van - ha nincs, akkor nem)</li><li>Szem (őő..de csak ha van?)</li><li>Fül</li><li>Implantátumok</li></ul>',
        t_answer:'',
        f_answer:''
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
