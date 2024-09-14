window.ker = [
  {
    num: 0,
    name: "Erdőszél",
    desc: "Egészséges, pihentető túrák, hőssegédek és bűvös lények otthona.",
    x: 1,
    y: 1,
    pop: Math.floor(1 + Math.random() * 100),
    mtn: 0,
    exp: 0,
    niv: Math.floor(30 + Math.random() * 30),
    joy: Math.floor(70 + Math.random() * 30),
    def: Math.floor(40 + Math.random() * 30),
    ufo: 70,
    had: 0,
    pro: 0,
    popC: 0,
    popCD: 0,
    mtnC: 0,
    mtnCD: 0,
    expC: 0,
    expCD: 0,
    nivC: 0,
    nivCD: 0,
    joyC: 0,
    joyCD: 0,
    defC: 0,
    defCD: 0,
    ufoC: 0,
    ufoCD: 0,
    hadC: 0,
    hadCD: 0,
    proC: 0,
    proCD: 0,
    dev: [],
    evs: [-1, -1],
    eco: .7,
    defo: 1,
    culto: 1,
    szar: "pop_>_3000",
    vélemény: [
      {
        cond: "ufo_>_500",
        duma: ["Kicsit furák ezek az erdei lények. Neked nem?",
          "kjh[ÄfsdfđĐ[đĐ... Én... vagyok... ihbdifurigk... Nem.",
          "Éjjelente olyan, mintha mozognának a fák! Hátborzongató!",
          "Bzzzzzzz... Mezonscanelésem szerint most már agytumorod van!",
          "Bübü! Bübü! Gurgurgul. Etejóka, pípíííí!",
          "Egyre több itt az új faj. Vajon mutánsok vagy földönkívüliek?"]
      },
      {
        cond: "had_<_-50",
        duma: ["Félek tőlük! Rettegek! Ott vannak mindenhol!",
          "Eleinte még aranyosak voltak ezek a lények, de most már egyre agresszívebbek!",
          "Itt van például ez a mosolygós kis fa... Ááááá! Letépte a karom!!! A barom!!!",
          "Üdvözöllek, földlakó! Mi vagyunk szadisták. Elpusztítunk titeket!",
          "Csináljon valamit, polgi! Ezek az erdei lények kinyírnak minket!!!",
          "Meghackelik a gondolatainkat és olyan büdöseket finganak, hogy el lehet tőle kárhozni!"]
      },
      {
        cond: "joy_<_25",
        duma: ["Ez egy bűnös hely. Egy bűnös város.",
          "Én már csak egy megfelelő fát meg kötelet keresek...",
          "Utállak téged! Bíztunk benned, de csalódtunk! Takarodj!",
          "Szerinted miért élek itt? Lehet abban a rothadó városban élni??!!",
          "Ez korábban egy üde, kellemes hely volt, de tönkretetted!"]
      },
      {
        cond: "niv_<_20",
        duma: ["No money, no problem!",
          "A romlott társadalom anyagilag tönkretett. Most itt próbálok békére találni.",
          "Éppenséggel élhetnénk itt is egy kicsit magasabb színvonalon. Ez még nem a mélydzsungel!",
          "Ennyi pénzből nem lehet utánpótlást nevelni! Mi lesz így a sporttal?"]
      },
      {
        cond: "pop_<_100",
        duma: ["Jó ez a csend és nyugalom, de lassan kihalunk...",
          "Mindig erre a magányra vágytam!",
          "Jé, egy ember!"]
      },
      {
        cond: "def_>_100",
        duma: ["Minek ide ennyi rendőr? Itt mi békében élünk az erdei lényekkel!",
          "A sok egyenruhás fickó már veszélyezteti az erdő szabad világát!"]
      },
      {
        cond: "pop_>_3000",
        duma: ["Sosem volt ilyen tömegnyomor itt!",
          "Nem lehet már nyugodtan szarni a bokorban, annyian vannak!",
          "Elveszett a régi csend és nyugalom!"]
      },
      {
        cond: "joy_>_75",
        duma: ["Itt végre megtaláltam a belső békém.",
          "Sej-haj, oly vidám a vándor élet!",
          "Jöjjön, mutatok egy gyönyörű tájat!",
          "Ez a legjobb hely az egész városban!",
          "A boldogság titka: az Erdőszél!"]
      },
    ],
    semmi: [
      "Ha ön a polgármester, igazán fejleszthetné ezt az elvadult környéket!",
      "Éppen hugyoznék... Nem tudsz másvalakit kérdezni?",
      "Fütyfürüty! Szép az élet, csicseregnek a madarak! Madarak?",
      "A legfontosabb a tiszta sport és a minőségi utánpótlás-nevelés!",
      "Üdv! Ügyes Frigyes vagyok, az ezermester! Mit kell elintézni?",
      "Az ember kijön ide békésen meditálni... Erre a pofájába nyomnak egy mikrofont!",
      "Mi van? Nem voltál még erdőben? Hát milyen lenne?",
      "Érdekes itt az élővilág. Szerinted ez növény vagy állat?",
      "A legfontosabb a szeretet. Akit szeretsz, az sosem hal meg!",
      "Ha Isten nem Szentháromság, akkor nincs értelme a teremtésnek, mert az egyedüllét a tökéletesség.",
      "Cssssss! Hallgasd a természet hangjait...",
      "Megmutatom, hogy lehet természetes módszerekkel, köveket verve igazi ökölvívóvá válni!",
      "Itt születnek a valódi legendák és a... favágók!"
    ]
  },
  {
    num: 1,
    name: "Farmok",
    desc: "Szorgos, egyszerű gazdálkodók földjei.",
    x: 2,
    y: 1,
    pop: Math.floor(150 + Math.random() * 400),
    mtn: 0,
    exp: 0,
    niv: Math.floor(5 + Math.random() * 25),
    joy: Math.floor(25 + Math.random() * 50),
    def: Math.floor(35 + Math.random() * 30),
    ufo: 50,
    had: 0,
    pro: 0,
    popC: 0,
    popCD: 0,
    mtnC: 0,
    mtnCD: 0,
    expC: 0,
    expCD: 0,
    nivC: 0,
    nivCD: 0,
    joyC: 0,
    joyCD: 0,
    defC: 0,
    defCD: 0,
    ufoC: 0,
    ufoCD: 0,
    hadC: 0,
    hadCD: 0,
    proC: 0,
    proCD: 0,
    dev: [],
    evs: [-1, -1],
    eco: .7,
    defo: .7,
    culto: 1,
    szar: "niv_>_75",
    vélemény: [
      {
        cond: "had_<_-5",
        duma: ["Jól vagyunk. Csak néha jönnek óriások le a hegyről.",
          "Pitymallatkor fura hangok gyünnek az erdőbű...",
          "Agyon kéne vágni ezeket az óriásokat! Én mondom, ezek nem hoznak semmi jót!",
          "Valami ludvércek viszik a birkáinkat éjjel, hogy ütné agyon őket az Isten nyila!",
          "A minap egy markoláb elvitte a disznómat! Csinálni kell valamit!",
          "Jönnek az óriások megint! Fodg a kecskét! Miklós, engedj be!"
        ]
      },
      {
        cond: "had_>_100",
        duma: [
          "Hát, most már jó. Nem nagyon gyünnek már azok a fene nagy óriások!",
          "Amikor az a pandúr jól nyakoncsípte azt a pomogácsot, az betyáros volt ám!",
          "Igaz, hogy kevesebb a tolvaj lidérc, de már túl sok a pandúr itt, kérem alásan!"
        ]
      },
      {
        cond: "pop_<_300",
        duma: [
          "Fogyunk, kérem, egyre csak fogyunk!",
          "Nem bírunk ilyen kevesen szántani! Megdöglött a Riska is! Mi lesz igy vélünk?",
          "Nem tudjuk bétakarítani a termést! Nincs elíg ámbör!"
        ]
      },
      {
        cond: "niv_<_20",
        duma: [
          "Vagyogatunk. Szegínyesön, de böcsülettöl!",
          "Megkínálnám szívesen, de nincs mibűl!",
          "Hát, kérem, itt nálunk mindég nehéz az élet!",
          "A fene akart paraszt lenni! Inkább lennék iparos!"
        ]
      },
      {
        cond: "culto_>_1",
        duma: [
          "Jobb az oktatás, mióta ön a polgármester! A gyerekek szépen tanulnak! Talán már nem kell kapálniok!",
          "Felpezsdült itt az élet, mióta ön a polgármester. Köszönjük!",
          "A Sári a minap aszongya, hogy ügyvéd akar lenni. Ügyvéd, a mi Sárink! Még mindig nem fogtam fel...",
          "A gyerekeinknek talán már könnyebb lesz, mint nekünk volt.",
          "Szépen fejlődik ez a környék. Mozi, ringlispíl, céllövölde!",
          "Azok a vándorkomédiások gyönnek majd jövőre is? Jópofák voltak!",
          "Jó ez az új tanítónő! Bencikénk azóta csak a Háry Pétert bújja, hogy ő jött."
        ]
      },
      {
        cond: "niv_>_75",
        duma: [
          "Mióta bejöttek ezek a kütymük, a gyerekek folyton csak azokat nyomkodják, a tyúkok meg éheznek!",
          "Egyszerű élethez vagyunk mi hozzászokva, nem ehhez a sok... csilivilihez!",
          "Megmondom én kerek-perec: nem kell nékünk ez a sok fejlődés! Jó vót apáink útja!",
          "Akinek sok a pénze, az csak elissza a kocsmában! Ahelyett, hogy dógozna!"
        ]
      },
      {
        cond: "joy_>_75",
        duma: [
          "Jól vagyunk, az anyja keservit, jól!",
          "Ihaj-csuhaj, sallárom! Lett már nékem talárom!",
          "Jöjjön, iszunk magára! Isten-Isten!",
          "Húzzad, cigány, eliszom az utolsó garasom is!",
        ]
      },
    ],
    semmi: [
      "Kicsit büdös van, de azért... hát, csak büdös van, na!",
      "Pillanat, még megetetem a tyúkokat...",
      "Osztán minek köszönhetjük a látogatást?",
      "Hogy szolgál az egészség?",
      "Dolgozunk mi mindég! De a lurkóknak mindig van pár pofonunk! Érzik is a törődést!",
      "Érik a szőlő, hajlik a vessző, bodor a levele..."
    ]
  },
  {
    num: 2,
    name: "Ázsiai negyed",
    desc: "Kismillió fura ember, akikről azt sem tudod, valójában mit csinálnak.",
    x: 3,
    y: 1,
    pop: Math.floor(1500 + Math.random() * 1000),
    mtn: 0,
    exp: 0,
    niv: Math.floor(0 + Math.random() * 20),
    joy: Math.floor(0 + Math.random() * 20),
    def: Math.floor(5 + Math.random() * 20),
    ufo: 10,
    had: 0,
    pro: 0,
    popC: 0,
    popCD: 0,
    mtnC: 0,
    mtnCD: 0,
    expC: 0,
    expCD: 0,
    nivC: 0,
    nivCD: 0,
    joyC: 0,
    joyCD: 0,
    defC: 0,
    defCD: 0,
    ufoC: 0,
    ufoCD: 0,
    hadC: 0,
    hadCD: 0,
    proC: 0,
    proCD: 0,
    dev: [],
    evs: [-1, -1],
    eco: 1,
    defo: .7,
    culto: 1,
    szar: "def_>_500",
    vélemény: [
      {
        cond: "had_<_-100",
        duma: ["Csen Jüt elvitték ufók.",
          "Vannak zöld ember ott kert. Kici, mint mi, cak zöld.",
          "Mi kérdez zöld ember új recept. Te kóstol? Kicit édes, kicit szavanyú, de már miénk.",
          "Baba Jaga jár mindig mi kert. Visz kutya, galamb, articóka, minden!",
        ]
      },
      {
        cond: "def_>_500",
        duma: [
          "Sok rendőr és katona! Nem jó üzlet. Nem jó.",
          "Inkább zöld ember, mint nagy rendőr! Mi fél.",
          "Nem tudjuk ápolni jakuza hagyományainkat. Mindenbe beleütik az orrukat a fakabátok!",
          "Nem kell rendőr! Tong vigyáz magára. Mindig megold."
        ]
      },
      {
        cond: "pop_<_500",
        duma: [
          "Egyre kevesebb ázsiai itt. Mi lesz, ha mi elfogy?",
          "Régen sokkal több ember itt! Akkor ment üzlet jól!",
          "Nagy családok vannak a kihalás szélén! Szégyent hozunk apáinkra!"
        ]
      },
      {
        cond: "pro_<_1000",
        duma: [
          "Egyre kevesebb pénz! Senki vesz gumi dugó! Nem kell gumi dugó? Óccó.",
          "Nézd, van nekem szög. Nem rozda az, feszték! Színes szög. Cak száz! Jó szög!",
          "Finom husit adok óccón! Nem macka. Kisseb.",
          "Te elront üzlet! Régen üzlet virágzó, most semmi! Te inkább megdöglik!"
        ]
      },
    ],
    semmi: [
      "Szia, uram! Turbó csiga érdekel? Ezeöccá! Nem drága.",
      "Van jó zokni! Original Zara! Ezerér tiéd!",
      "Jöjjön! Van nálunk friss vízi hal! Nem drága.",
      "Masszázs? Van itt szép lányok. Te leszesz boldog!",
      "Van finom kaca! Háp-háp! Gyere be!",
      "Nézd! Villogó gyík! Gyerek szeret! Vegyél gyerek villogó gyík!",
      "A megvilágosodás útja olyan, mint ahogy a csiga kúszik a cseresznyefán.",
      "Készüljetek! Megrázta a hóoroszlán a bajszát. Elkezdődött..."
    ]
  },
  {
    num: 3,
    name: "Városliget",
    desc: "Sportpályák, játszóterek, csónakázótó a kikapcsolódni vágyóknak.",
    x: 1,
    y: 2,
    pop: Math.floor(50 + Math.random() * 300),
    mtn: 0,
    exp: 0,
    niv: Math.floor(40 + Math.random() * 30),
    joy: Math.floor(50 + Math.random() * 30),
    def: Math.floor(30 + Math.random() * 30),
    ufo: 20,
    had: 0,
    pro: 0,
    popC: 0,
    popCD: 0,
    mtnC: 0,
    mtnCD: 0,
    expC: 0,
    expCD: 0,
    nivC: 0,
    nivCD: 0,
    joyC: 0,
    joyCD: 0,
    defC: 0,
    defCD: 0,
    ufoC: 0,
    ufoCD: 0,
    hadC: 0,
    hadCD: 0,
    proC: 0,
    proCD: 0,
    dev: [],
    evs: [-1, -1],
    eco: 1,
    defo: 1,
    culto: 1,
    szar: "def_>_300",
    vélemény: [
      {
        cond: "had_<_-10",
        duma: ["Nem merem a gyereket elengedni, mert mindenféle bizarr lények jelennek meg a játszótéren!",
          "Szerintem nem normális, hogy egy faszerű lény gyökeret ver a hinta alatt, bármennyire is cuki!",
          "Jaj, megyek! Jönnek ezek a debella lények, akik mindenkit lealáznak húzódzkodásban! Hogy csajozzon így az ember?!",
          "Pistike, ne játsz azzal a fával, mert megharap, mint múltkor!",
          "A csónakházban találtunk egy összetört fejű hullát!",
          "Azt mondják, a tóba belefulladt egy gyerek! Minden héten!"
        ]
      },
      {
        cond: "def_>_300",
        duma: [
          "Ide az ember azért jönne, hogy szórakozzon, de tele vagyunk már katonákkal!",
          "Minek ide ennyi rendőr? Ez egy békés park, kérem!",
          "Tisztára katonaállam lettünk! Mintha diktatúra lenne!",
          "Beverném a zsaruk orrát, ha nem lenne náluk fegyver!",
          "Minek ez a nagy rendvédelem? Nézd ezt a bicepszet! Ki merne velem szívózni?"
        ]
      },
      {
        cond: "niv_<_30",
        duma: [
          "Nézd ezt a düledező csúszdát! Nem merem már a gyereket felengedni, mert még összeseik alatta!",
          "Jó kis játszótér volt ez, de hagyták tönkremenni! Miért nem tesz valamit, polgármester?",
          "Egyre több a hajléktalan! Ezek itt élnek, döglenek, vizelnek, finganak! Undorító!",
          "Mindent benőtt a gaz már! A csövesek meg életvitelszerűen elfoglalják a padokat!",
          "Hagyjál békén! Nincs hová mennem. Nem érdekel, hogy ez egy mászóka! Akkor meg bemászok alá!",
          "A favonatot hálókocsiként használják... És iszonyatosan büdösek! Fúááááj!",
          "A hinta lánca elszakadva, a csúszda eltörve, a padok telefirkálva! Ki törödik ezzel?"
        ]
      },
      {
        cond: "joy_<_35",
        duma: [
          "Tököm kivan ettől a géptől! Na... nem azért... De ez életveszélyes!",
          "Sok itt a vandál! Nézze meg ezt a padot is! Tele vagdosták sátánista jelképekkel!",
          "Régen ez egy vidám hely volt! Most meg mindenkin érződik a feszültség...",
          "Húzz innen, nem látod, hogy futok?!",
        ]
      },
      {
        cond: "joy_>_60",
        duma: [
          "Mindig ide jövünk ki a haverokkal suli helyett! Hozzuk a csajokat is!",
          "Jó ide kijönni! Sok a sportolási lehetőség.",
          "Ó, meseszép ez a csónakázó-tó! Azt mondják, feneketlen, de állítólag kincset rejt a mélye!",
          "Minden nap járok ide kocogni. Tiszta levegő, vidám gyerekzsivaj! Ez mindig motivál a gyorsabb tempóra! Haha!",
          "A zöld a kedvenc színem."
        ]
      },
    ],
    semmi: [
      "Éééés... jobb láb! Gyerünk, húzd meg! Még három, kettő, és egy!",
      "Kell is egy ilyen park a város forgatagában. Jó itt a levegő is!",
      "Én csak itt üldögélek a padon és nézem a pillangókat. Úgy öregecskén.",
      "Van vanília, tutti-frutti, karamell, rumos dió és kávé.",
      "Délutánonként mindig szundítok egyet itt a pázsiton. Most is azt tettem volna éppenséggel...",
      "Légyszi ne álld el a napot! Köszike!"
    ]
  },
  {
    num: 4,
    name: "Városközpont",
    desc: "Itt van többek között a Városháza erődszerű épülete.",
    x: 2,
    y: 2,
    pop: Math.floor(800 + Math.random() * 500),
    mtn: 0,
    exp: 0,
    niv: Math.floor(55 + Math.random() * 45),
    joy: Math.floor(30 + Math.random() * 40),
    def: Math.floor(70 + Math.random() * 50),
    ufo: Math.floor(1 + Math.random() * 30),
    had: 0,
    pro: 0,
    popC: 0,
    popCD: 0,
    mtnC: 0,
    mtnCD: 0,
    expC: 0,
    expCD: 0,
    nivC: 0,
    nivCD: 0,
    joyC: 0,
    joyCD: 0,
    defC: 0,
    defCD: 0,
    ufoC: 0,
    ufoCD: 0,
    hadC: 0,
    hadCD: 0,
    proC: 0,
    proCD: 0,
    dev: [],
    evs: [-1, -1],
    eco: 1,
    defo: 1.3,
    culto: 1,
    szar: "had_<_40",
    vélemény: [
      {
        cond: "had_<_40",
        duma: ["Bitang Botond idejében ez a kerület volt a legbiztonságosabb. Most meg alig merek kimenni már az utcára!",
          "Hihetetlenül szemtelenek ezek a lények! Már ide is bemerészkednek!",
          "Korábban minden sarkon állt egy rendőr, most meg alig látni őket! Hova lesz így a közbiztonság?",
          "Nézzétek, itt van a hülye polgi! Nem megy ez neked, maradtál volna inkább a csatornában!",
          "Battle Beatle barátai bosszút fognak rajtad állni! Jobb, ha nézed, hova lépsz!",
        ]
      },
      {
        cond: "niv_>_85",
        duma: [
          "Jól csinálod, polgi! Tényleg jobban élünk, mint Boti alatt!",
          "Köszönjük, amit a városért tesz!",
        ]
      },
      {
        cond: "niv_<_40",
        duma: [
          "Boti idejében jobban éltünk...",
          "Monnyonle!",
          "Te is csak szétloptad ezt a várost! Lógni fogtok!",
          "Kilopod a pénzt a becsületes munkások zsebéből!",
          "Ilyen még Boti idejében sem volt, hogy hajléktalanoktól bűzlenek az aluljárók...",
          "Nem szatír vagyok, csak nincs pénzem ruhára! Nem önszántamból lógatom a fa... orrom!",
          "Feltörték a garázsom, ellopták a biciklim meg a fregolim. Ki fogja megtalálni, he?!",
          "Mi itt éhezünk, te meg csak járkálsz a városban, ahelyett, hogy dolgoznál!"
        ]
      },
      {
        cond: "pop_>_9000",
        duma: [
          "Nagyon zsúfolt lett a belváros! Aki tud, vidékre menekül.",
          "Ekkora tömegben még fingani sem tud az ember kényelmesen!",
          "Túl nagy a tömeg! Lélegezni sem lehet a buszon!",
        ]
      },
      {
        cond: "pop_<_1000",
        duma: [
          "Nem gondolod, hogy ciki, hogy ilyen kevesen maradtak a belvárosban?",
          "Nincs még egy olyan város, aminek ennyire kihalt lenne a központja! Nincs itt már semmi!",
          "Kísértetváros lett ez... Egy bűnös és rémísztő kisértetváros...",
        ]
      },
      {
        cond: "joy_<_35",
        duma: [
          "Monnyonle!",
          "Csináljon már valamit, ne csak itt lófráljon az utcákon! Nincs dolga?",
          "Marhára nem jól csinálod te ezt. Hősnek talán jó voltál, de várost vezetni nem tudsz!",
          "Battle Beatle, Bitang Botond, most meg ön! Úgy látszik, rajtunk már senki nem tud segíteni.",
          "Sokan azt hittük, jobb lesz, ha átveszed a hatalmat attól a zsarnok Botitól, de nem lett jobb! Egyáltalán!",
          "Csalódtunk magában... Jobb, ha távozik."
        ]
      },
      {
        cond: "joy_>_70",
        duma: [
          "Nézd már, ez tényleg a polgi! De jó!",
          "Mi örülünk, hogy ön lett a polgármester! Éljen, éljen, éljen!",
          "Nagyon jól csinálod, csak így tovább! Felvirágzik így a város!",
          "Gyere, polgi, meghívunk egy italra!",
          "Végre már élhetőbb ez a város. Ezt önnek köszönhetjük!"
        ]
      },
      {
        cond: "defo_<_1",
        duma: [
          "Végre már eltűntek Boti bérencei!",
          "Örülök, hogy nem nézik már minden mozdulatomat a rendőrök! Gengszter volt mindegyik!",
          "Nem kellene szerintem ennyire lazán venni a közbiztonságot! Fegyelem kell ide!",
          "Több őr kellene! Mégis csak ez a városközpont! Egyre több a gyanús alak...",
          "Múltkor ufók rongálták meg a Kossuth-szobrot! Levágták az orrát és Leöntötték lávával! Vagy lárváváal... mittomén...",
          "Nézze mit írtak ide! Ráadásul vérrel! 'Battle Beatle will return!' Ez vajon mit jelent?",
          "Hozzák vissza Botit! Botival volt az erő!"
        ]
      },
    ],
    semmi: [
      "Aaaa jövő havi koncertműsor!",
      "Szép jó reggelt, polgármester!",
      "Jegyeket, bérleteket ellenőrzésre szíveskedjenek felmutatni!",
      "City Tour! See the city at a discount price! Not tourist? Sorry!",
      "Azt szeretem, hogy itt sok hírességgel találkozhat az ember. Banana Joe, Dundi Bandi, Dick Duck, Büdös Berci... most meg ön is!",
      "Füvet? Őőőőőő, úgy értem a kecskének...",
      "Ez egy büdös hely... egy büdös város!"
    ]
  },
  {
    num: 5,
    name: "Üzleti negyed",
    desc: "A legnagyobb pénzintézetek és cégek központjainak felhőkarcolói magasodnak itt.",
    x: 3,
    y: 2,
    pop: Math.floor(800 + Math.random() * 600),
    mtn: 0,
    exp: 0,
    niv: Math.floor(70 + Math.random() * 30),
    joy: Math.floor(35 + Math.random() * 35),
    def: Math.floor(40 + Math.random() * 25),
    ufo: 1,
    had: 0,
    pro: 0,
    popC: 0,
    popCD: 0,
    mtnC: 0,
    mtnCD: 0,
    expC: 0,
    expCD: 0,
    nivC: 0,
    nivCD: 0,
    joyC: 0,
    joyCD: 0,
    defC: 0,
    defCD: 0,
    ufoC: 0,
    ufoCD: 0,
    hadC: 0,
    hadCD: 0,
    proC: 0,
    proCD: 0,
    dev: [],
    evs: [-1, -1],
    eco: 1.3,
    defo: 1.3,
    culto: 1,
    szar: "niv_<_50",
    vélemény: [
      {
        cond: "niv_<_50",
        duma: [
          "Kezd teljesen lezülleni ez a kerület...",
          "Már a shortolás sem ment meg minket! Mi van ebben a kerületben?!",
          "Azt mondta a főnök, önköltségesek lesznek a céges bulik! Ki hallott már ilyet?",
          "Nem ehhez az életszínvonalhoz voltunk szokva. Valamit nagyon elkúrt az önkormányzat!",
          "Korábban elmehettem simán egy hónapra a családdal Hawaii-ra, most meg örülönk, ha 2 hét Bali belefér!",
          "Ennyi adót nem lehet befizetni, csak elkerülni! Tessék adót csökkenteni, akkor majd fizetjük!",
          "A csőd szélére jutott a családi vállalkozásunk. Egyre nő a vállalkozói réteg haragja...",
          "Nem lehet ilyen alacsony haszonkulccsal semmilyen hosszútávú üzleti tervet készíteni!",
          "Elfogyott minden megtakarításunk. Mi lesz most velünk?"
        ]
      },
      {
        cond: "had_<_45",
        duma: ["Elég lazán veszik itt a biztonságot...",
          "Hova tűntek a biztonsági őrök? Ez üzleti kockázat!!",
          "Képtelen az önkormányzat megvédeni a jogos tulajdont?!",
          "Ezek az idegen lények ügyesebb hackerek, mint közülük bárki! Nem tudom, hogy csinálják...",
          "A hónapban már a harmadik káresetet jelentettük! Nincs közbiztonság!"
        ]
      },
      {
        cond: "pro_<_2500",
        duma: [
          "Újabb recesszió van most. Sötét a helyzet, de próbálunk valamit kitalálni.",
          "A teljes árbevételünk 20%-kal csökkent a tavalyi év azonos időszakához képest.",
          "Itt behalt a piac! Más városba tesszük át a székhelyünket.",
          "Ha nem élénkül újra a piac, lehúzhatjuk a rolót!",
          "Egyre kevesebb a kisvállalkozó. Már csak a nagyok maradnak versenyben, de azok is nemsokára elköltöznek innen, ha van egy csepp eszük!",
          "A béka segge alatt van az EBITDA-nk, a BUBOR meg elszállt..."
        ]
      },
      {
        cond: "joy_<_40",
        duma: [
          "Mi értelme van annak, amit csinálunk? Nem csinálunk semmit!",
          "Már a bulik sem dobnak fel. Csupa képmutató vigyorgó alak!",
          "Bizonytalan a jövő. Senki nem tudja, mi lesz...",
          "Nincs erre most időm!",
          "Meg mondom őszintén: már csak a drog az egyetlen örömöm. Nem kérsz?"
        ]
      },
      {
        cond: "pop_<_1000",
        duma: [
          "Innen mindenki csak menekül!",
          "Tökretettük a konkurenciát, hehe!",
          "Nem sokan maradtunk. Nem jók itt a piaci körülmények.",
          "Ha az a cél, hogy mindenki elköltözzön innen, azt nagyol jól csinálod!",
          "Haldoklik a munkaerőpiac! 28 betöltetlen pozíciónk van február óta!",
          "Fontolgatjuk, hogy humán erőforrás helyett áttérünk AI megoldásokra."
        ]
      },
      {
        cond: "pro_>_5000",
        duma: [
          "Virágzik az üzlet, a mutatóink az eget verdesik!",
          "Felvirágoztattam apám vállalkozását. Lassan mindenki tőlünk vásárol mungóbabot!",
          "15%-os bővülést értünk el csak ebben az évben! És ez még csak a kezdet!",
          "Dübörög a gazdaság! Húzó ágazat lett a terépcsecső-gyártás! Kígyók kígyóznak a rakodóudvarban!",
          "Tavaly még csak egy garázsban árultam foszforeszkáló WC-papírt. Ma már 1200 hektárnyi foszforfarmom van és uraljuk az egész WC-ipart!"
        ]
      },
    ],
    semmi: [
      "Tényleg ennyi volt az ELÁBÉ-nk múlt hónapban? Hívjunk össze egy meetinget!",
      "Elnézést, sietek! Le kell adnom egy jelentést.",
      "Hogy hogy élünk itt? A tavalyi év azonos időszakához vagy az előző negyedévhez képest? És milyen KPI-ok alapján?",
      "A friss adatok alapján valószínűleg módosítanunk kell a tervszámokat.",
      "Elnézést, hívnak... Mennyi? Add el mindet és vegyél belőle pézsma illatú gyurmát! Tutti tippet kaptam!",
      "Te mit keresel itt? Tegnap kirúgtalak! Mi az, hogy polgármester? Itt én vagyok az Area Supervisor!"
    ]
  },
  {
    num: 6,
    name: "Ipartelep",
    desc: "Működő és bezárt gyárak, munkásszállók nyomasztó rengetege.",
    x: 1,
    y: 3,
    pop: Math.floor(1000 + Math.random() * 700),
    mtn: 0,
    exp: 0,
    niv: Math.floor(5 + Math.random() * 25),
    joy: Math.floor(0 + Math.random() * 5),
    def: Math.floor(10 + Math.random() * 20),
    ufo: 5,
    had: 0,
    pro: 0,
    popC: 0,
    popCD: 0,
    mtnC: 0,
    mtnCD: 0,
    expC: 0,
    expCD: 0,
    nivC: 0,
    nivCD: 0,
    joyC: 0,
    joyCD: 0,
    defC: 0,
    defCD: 0,
    ufoC: 0,
    ufoCD: 0,
    hadC: 0,
    hadCD: 0,
    proC: 0,
    proCD: 0,
    dev: [],
    evs: [-1, -1],
    eco: 1.3,
    defo: .7,
    culto: .7,
    szar: "pro_<_1500",
    vélemény: [
      {
        cond: "niv_<_15",
        duma: [
          "Elég nehéz itt az élet, remélem a gyerekeim el tudnak költözni egy jobb helyre!",
          "Itt csak megdögleni lehet...",
          "Az ember dolgozik, ameddig bírja, aztán megy a kemencébe a fémhulladékkal együtt!",
          "Egy munkatábor az egész lepra hely. Ha elvégeztem volna a 8 általánost, elhúznék innét a valagba!",
          "Az üzemi büfé bezárt, de nincs egy rendes bolt sem a környéken! Nem tudunk enni!",
          "Ha valaki beteg lesz, nincs pénze orvosra sem! Megdöglik, azt ennyi vót.",
          "Azt mondják, lehet, hogy bezár az gyár. Akkor mit fogunk csinálni? Maga fogja etetni a gyerekeket?",
          "Alig tudjuk már eladni, amit gyártunk, a felére kellett visszavennünk a termelést!",
        ]
      },
      {
        cond: "had_<_10",
        duma: ["Aszongyák, az éjjelesek közül hármat fura lények raboltak el az utcán! Nagyobb biztonság kellene!",
          "Lopják az alkatrészeket! Nem tudom, kik, de ezek nem a mieink, az biztos!",
          "Múltkor eltűnt egy egész marógép. Nem az ajtón vitték ki, a plafonon volt egy luk! Hallott már ilyet?",
          "Valaki folyamatosan lop a készletekből! Azt mondta a Józsi, hogy ufók viszik el. Mire kellhet nekik hat tonna acéllemez?",
          "Látja ezt a hatalmas lyukat a falon? Maga szerint mivel lehet ilyet csinálni? Nem vagyunk biztonságban!",
          "Mityu szerint beépültek közénk az idegenek. Mármint ufók. Mindig is gyanús volt nekem a Mari, szemüveg nélkül heggeszt...",
          "Rendszeresek az üsszetűzések a kohászok meg a bányászok között! Rendet kellene tenni! Kevesek ehhez a gépészek!"
        ]
      },
      {
        cond: "pro_<_1500",
        duma: [
          "Múlt héten újabb üzem zárt be! Nem lesz ez így jó...",
          "Kezd teljesen tönkremenni ez a kerület! Miért hagyja, ha maga a polgármester? Csináljon valamit!",
          "Megmondom őszintén: elfogyott a pénz. Ha nincs beruházás, nem tudunk termelni.",
          "Nemcsak a beszállítók kifizetését, hanem már a működési költségeket sem tudjukkigazdálkosni! Tönkre fogunk menni...",
          "Muszáj zsebre dolgoznunk! Nem a mi hibánk...",
          "Nézzed meg ezt a rengeteg számlát! Nem az adó itt a gond, azt leszarjuk, anélkül még jobban is működünk. De ezeket ki kell fizetni, hogy ne húzzuk le a rolót!"
        ]
      },
      {
        cond: "pop_<_1200",
        duma: [
          "Nagyon fogy a munkaerő! Már mindenki három műszakban dolgozik egyszerre! Nem állhatunk le!",
          "Ilyen kevés emberrel nem tudunk gazdaságosn üzemelni. A gépeket is kezelni kell valakinek!",
          "Én a műszakvezető vagyok, de kénytelen voltam én is beállni lapátolni mióta a Lacit elvitte a köszvény!",
          "Azért van ekkora kupleráj, mert kénytelenek voltunk a személyügyes Icukát a targoncához ültetni. Volt 1 perce megtanulni a kezelést... Nincs ember!",
          "Fogd meg inkább ezt a rohadt kart ahelyett, hogy itt traccsolsz, és ha szólok, húzd meg! Nincs más ember! Nem azt...! ÁÁÁÁÁÁÁÁÁÁÁ!",
          "Már mindenki bezárt, csak mi vagyunk. Annyira nincs ember! Még szerencse, hogy búgócsiga mindig kell az embereknek..."
        ]
      },
      {
        cond: "pro_>_3000",
        duma: [
          "Fantasztikusan megy az üzlet! E hónapban újabb termékekkel bővült a kínálatunk!",
          "Már nemcsak vasrugókat gyártunk, hanem vasmacskákat is! Apám, ha még élne, büszke lenne rám!",
          "Fontolgatjuk, hogy újra beindítjuk a régi fagyigyárat. Kipofozzuk egy kicsit és újra lesz itt minden!",
          "Újabb gyártósort tudtunk venni! Megduplázzuk a termelést!",
          "Le tudunk mi mindent gyártani, ami kell. Csak mondja, hogy mi kell, és megoldjuk!",
          "Ki hitte volna, hogy ennyi ember fog volfrámpörölyt venni? Már külföldre is szállítunk!"
        ]
      },
    ],
    semmi: [
      "Mi itt dolgozunk, kérem. Nem érünk rá beszélgetni!",
      "Nem értem... Már harmadszor vágok le belőle, oszt még mindig rövid!",
      "Állj hátrébb, ha nem akarsz szénné égni!",
      "BRRRRRRRRRR, KSSSSSSSSSSSSSSSS, Nyihunyihunyihu... Mi van?! BRRRRRRRRRRRRRR! Nem értem!",
      "Hozni kell a tervet, különben ordítani fog a főnök! Nem tudunk leállni!",
      "Hogy miért nincs védőfelszerelése Gazsinak? Ő csak feketézik, valakinek a haverja. Bejelenteni? Azt se tudjuk, Gazsi-e az igazi neve.",
      "Tudjuk, hogy koszos a munkásszálló, de ez kinek a hibája, he?",
      "Milyen bűz? Azóta van más szag, hogy te bejöttél!",
      "Bekötjük mi a villanyórát a városházán úgy, hogy nem lesz gond vele. Megcsináljuk olcsón okosba!",
      "Nem kell a városházának vashokedli? Rajtunk maradt 600 hokedli, mert túl korán csődbe ment a megrendelő.",
      "A raklap meg a járólap között annyi a különbség, mint a... Teszed le azt a döngölő békát, amikor hozzád beszélek! Na, itt a vége a gyárlátogatásnak!",
      "Gyere ki onnan, héééé...! Már megint egy beszorult hulla miatt kell leállítani az egész gyártósort, hogy dolgozzon így az ember?!"
    ]
  },
  {
    num: 7,
    name: "Lakónegyed",
    desc: "Sok polgár lakhelye sok lehetőséggel. Itt van a Branyiszkó-tér is.",
    x: 2,
    y: 3,
    pop: Math.floor(2000 + Math.random() * 1234),
    mtn: 0,
    exp: 0,
    niv: Math.floor(30 + Math.random() * 40),
    joy: Math.floor(20 + Math.random() * 50),
    def: Math.floor(40 + Math.random() * 30),
    ufo: Math.floor(Math.random() * 10),
    had: 0,
    pro: 0,
    popC: 0,
    popCD: 0,
    mtnC: 0,
    mtnCD: 0,
    expC: 0,
    expCD: 0,
    nivC: 0,
    nivCD: 0,
    joyC: 0,
    joyCD: 0,
    defC: 0,
    defCD: 0,
    ufoC: 0,
    ufoCD: 0,
    hadC: 0,
    hadCD: 0,
    proC: 0,
    proCD: 0,
    dev: [],
    evs: [-1, -1],
    eco: 1,
    defo: 1,
    culto: .7,
    szar: "pop_<_1500",
  },
  {
    num: 8,
    name: "Kultúrnegyed",
    desc: "Színvonalas kultúrintézmények pezsgő éjszakai élettel.",
    x: 3,
    y: 3,
    pop: Math.floor(700 + Math.random() * 500),
    mtn: 0,
    exp: 0,
    niv: Math.floor(65 + Math.random() * 35),
    joy: Math.floor(75 + Math.random() * 25),
    def: Math.floor(30 + Math.random() * 70),
    ufo: 0,
    had: 0,
    pro: 0,
    popC: 0,
    popCD: 0,
    mtnC: 0,
    mtnCD: 0,
    expC: 0,
    expCD: 0,
    nivC: 0,
    nivCD: 0,
    joyC: 0,
    joyCD: 0,
    defC: 0,
    defCD: 0,
    ufoC: 0,
    ufoCD: 0,
    hadC: 0,
    hadCD: 0,
    proC: 0,
    proCD: 0,
    dev: [],
    evs: [-1, -1],
    eco: 1.3,
    defo: 1,
    culto: 1.3,
    szar: "joy_<_50",
  }
];