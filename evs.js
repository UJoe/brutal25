let okBtn =
{
  type: "rnd",
  txt: "OK"
};
let badBtn =
{
  type: "rnd",
  txt: "bad",
  hang: false
};
let goodBtn =
{
  type: "rnd",
  txt: "good",
  hang: true
};

window.evs = [
  {
    title: "Zúgolódik ellened a nép",
    cond: "joy < 21 & joy > 5",
    chance: .4,
    hang: "angryCity",
    btns: [
      badBtn,
      {
        type: "change",
        txt: "Pénzt szórsz közéjük",
        hang: true,
        change: [
          {
            val: "money",
            ch: "-kob.pop*5"
          },
          {
            val: "joy",
            ch: "10+Math.round(Math.random()*(50-kob.niv)/10)"
          },
        ]
      }
    ],
  },
  {
    title: "Lázadás tört ki",
    cond: "joy < 10",
    chance: .8,
    hang: "angryCity",
    btns: [
      {
        type: "change",
        txt: "Közéjük lövetsz",
        hang: "machinegun",
        change: [
          {
            val: "pop",
            ch: "-Math.round(5+Math.random()*10)"
          },
          {
            val: "joy",
            ch: "-Math.round(2+Math.random()*8)"
          },
          {
            val: "pro",
            ch: "-Math.abs(Math.round(300+kob.pro*Math.random()))"
          },
          {
            val: "def",
            ch: "Math.round(100+Math.random()*50)"
          }
        ]
      },
      {
        type: "change",
        txt: "Pénzt szórsz közéjük",
        hang: true,
        change: [
          {
            val: "money",
            ch: "-kob.pop*10"
          },
          {
            val: "joy",
            ch: "10+Math.round(Math.random()*(50-kob.niv)/10)"
          },
          {
            val: "pro",
            ch: "-Math.abs(Math.round(kob.pro*Math.random()/2))"
          },
        ]
      },
      {
        type: "rombolás",
        txt: ["Majd leállnak.", "Leszarom."],
        hang: "rombol",
      }
    ],
  },
  {
    title: "A túl kényelmes élet miatt a nép átment önpusztításba",
    cond: "niv > 95",
    chance: .1,
    hang: "hardCity",
    btns: [
      {
        type: "change",
        txt: ["Ezek hülyék?!", "Nem normálisak!", "Ez komoly?!"],
        hang: "uhoh",
        change: [
          {
            val: "pop",
            ch: "-Math.round(5+Math.random()*30)"
          },
          {
            val: "joy",
            ch: "-Math.round(10+Math.random()*25)"
          },
          {
            val: "niv",
            ch: "-Math.round(1+Math.random()*4)"
          },
          {
            val: "def",
            ch: "-Math.round(200+Math.random()*150)"
          }
        ]
      }
    ],
  },
  {
    title: "A túl sok profit miatt sokan adócsalók lettek",
    cond: "pro > 10000 & def < 750",
    chance: .25,
    hang: "hardCity",
    btns: [
      {
        type: "change",
        txt: ["Kellemetlen.", "Pech!", "Kis huncutok!"],
        change: [
          {
            val: "pro",
            ch: "-Math.round(3000+Math.random()*5000)"
          },
          {
            val: "def",
            ch: "-Math.round(100+Math.random()*150)"
          }
        ]
      },
      {
        type: "change",
        txt: ["Tömlöcbe velük!", "Elkapom őket!"],
        hang: "machinegun",
        change: [
          {
            val: "money",
            ch: "-Math.round(1000+Math.random()*1000)"
          },
          {
            val: "def",
            ch: "Math.round(75+Math.random()*150)"
          },
          {
            val: "niv",
            ch: "-Math.round(5+Math.random()*10)"
          },
          {
            val: "joy",
            ch: "-Math.round(1+Math.random()*9)"
          }
        ]
      }
    ],
  },
  {
    title: "A túl nagy népsűrűség agresszívvá teszi az embereket",
    cond: "pop > 18000 & def < 1000",
    chance: .4,
    hang: "hardCity",
    btns: [
      {
        type: "change",
        txt: ["Csúnya dolog.", "Ejnye-bejnye!"],
        hang: false,
        change: [
          {
            val: "pop",
            ch: "-Math.round(15+Math.random()*35)"
          },
          {
            val: "joy",
            ch: "-Math.round(15+Math.random()*45)"
          },
          {
            val: "def",
            ch: "-Math.round(250+Math.random()*kob.pop/20)"
          },
        ]
      },
      {
        type: "change",
        txt: ["Rendőrt közéjük!", "Adok én nekik!"],
        hang: "machinegun",
        change: [
          {
            val: "money",
            ch: "-Math.round(kob.pop*(1.6-kob.defo)*(5+Math.random()*5))"
          },
          {
            val: "joy",
            ch: "-Math.round(5+Math.random()*10)"
          },
          {
            val: "def",
            ch: "Math.round(150+Math.random()*250*(2-kob.defo))"
          },
        ]
      }
    ],
  },
  {
    title: "Mindjárt kihal a nép",
    cond: "pop < 250",
    chance: .9,
    hang: "sadCity",
    btns: [
      {
        type: "change",
        txt: ["Ez a sorsuk", "Legalább nyugtom lesz", "Szegények", "Végre már!"],
        change: [
          {
            val: "joy",
            ch: "-Math.round(20+Math.random()*30)"
          },
        ]
      },
      {
        type: "betelepítés",
        txt: "Betelepítési programot indítok",
        hang: true,
      }
    ],
  },
];

window.gevs = [
  {
    num: 0,
    name: "Aranyváros",
    type: "total",
    cond: "niv > 95",
    trophy: true,
    end: false,
    desc: "A város életszínvonala mindenhol az egekeben van, eltűntek a szegények, a hajléktalanok, a csapból is pénz folyik!",
    hang: "happyCity"
  },
  {
    num: 1,
    name: "Eufória",
    type: "total",
    cond: "joy > 95",
    trophy: true,
    end: false,
    desc: "A városodban minden ember tökéletesen boldog, vidáman dolgoznak és szórakoznak, mindenki téged ünnepel.",
    hang: "happyCity"
  },
  {
    num: 2,
    name: "Csődközeli helyzet",
    type: "global",
    cond: "money < 10000 & money > 0",
    trophy: false,
    end: false,
    desc: "Az önkormányzat kasszája mindjárt kiürül! Rendezd el a bevételek és kiadások arányát, hogy elkerüld a csődöt!",
    hang: "angryCity"
  },
  {
    num: 3,
    name: "Csőd",
    type: "global",
    cond: "money < 1",
    trophy: false,
    end: true,
    desc: "Kiürült a kassza, csődbe vitted a várost! Az emberek fellázadnak és meglincselnek.",
    hang: "angryCity"
  },
  {
    num: 4,
    name: "Nyomor",
    type: "total",
    cond: "niv < 5",
    trophy: false,
    end: true,
    desc: "Teljesen megnyomorítottad a városod, az emberek nincstelenek lettek, elkeseredésükben meglincselnek.",
    hang: "sadCity"
  },
  {
    num: 5,
    name: "Elkeseredettség",
    type: "total",
    cond: "joy < 5",
    trophy: false,
    end: true,
    desc: "A városon úrrá lett a totális depresszió és kilátástalanság. Végső elkeseredésükben meglincselnek téged.",
    hang: "sadCity"
  },
  {
    num: 6,
    name: "Idegen aktivitás",
    type: "global",
    cond: "day = 10",
    trophy: false,
    end: false,
    desc: "Egyre több furcsa lény jelenik meg az emberek között. Ismeretlen intelligens fajok, akik gyakran agresszíven viselkednek.",
    hang: "alienEvent"
  },
  {
    num: 7,
    name: "Vészesen fogy a pénz",
    type: "total",
    cond: "pro < -50000",
    trophy: false,
    end: false,
    desc: "Az önkormányzat gazdálkodása eléggé veszteséges! Rendezd a bevételek és kiadások arányát!",
    hang: "angryCity"
  },
  {
    num: 8,
    name: "Jólét",
    type: "global",
    cond: "day = 30",
    trophy: false,
    end: false,
    desc: "Javult az ország gazdasági helyzete, az általános jólét a városodra is kihat. Nő a lakosság életszínvonala, boldogabbak és szaporodnak, mint a nyulak.",
    hang: "happyCity"
  },
  {
    num: 9,
    name: "Gazdasági válság",
    type: "global",
    cond: "day = 45",
    trophy: false,
    end: false,
    desc: "Kipukkadt a gazdasági növekedés lufija. Recesszió, elszegényedés, megszorítások, káosz üti fel a fejét az egész országban.",
    hang: "sadCity"
  },
  {
    num: 10,
    name: "Idegen támadások",
    type: "global",
    cond: "day = 55",
    trophy: false,
    end: false,
    desc: "A válságot kihasználva egyre több idegen lény kezd randalírozni a városodban. Át akarják venni a hatalmat? Közben az állam próbálja helyreállítani a gazdaságot.",
    hang: "alienEvent"
  },
  {
    num: 11,
    name: "Stabilizálódott a gazdaság",
    type: "global",
    cond: "day = 70",
    trophy: false,
    end: false,
    desc: "Az államnak végre sikerült stabilizálni a gazdaságot, helyreállt a rend, a városod pedig kapott 1 millió $ támogatást.",
    hang: "happyCity"
  },
  {
    num: 12,
    name: "Kulturális felvirágzás",
    type: "global",
    cond: "day = 80",
    trophy: false,
    end: false,
    desc: "Az állam átfogó támogatási programot indított a kultúra, oktatás és szabadidős tevékenységek fejlesztésére.",
    hang: "Kultúrnegyed"
  },
  {
    num: 13,
    name: "Hackertámadás",
    type: "global",
    cond: "day = Math.floor(85+Math.random()*6)",
    trophy: false,
    end: false,
    desc: "Hackeretámadás érte az Önkormányzat egyik bankszámláját! A pénzed felét elvesztetted!",
    hang: false
  },
  {
    num: 14,
    name: "Olajat találtatok",
    type: "global",
    cond: "day = 100",
    trophy: false,
    end: false,
    desc: "Hatalmas kőolajlelőhelyre bukkantatok. Özönlik be a pénz, minden kerületben fellendül a gazdaság, a nép önfeledten ünnepel, a terheiket csökkented!",
    hang: "happyCity"
  },
  {
    num: 15,
    name: "Motoros támadás",
    type: "global",
    cond: "day = 120",
    trophy: false,
    end: false,
    desc: "A Gyehenna Fertelmes Szagú Nyája (GyFSzNy) névre hallgató, hírhedt motoros banda támadt rá a városra Dél-Keletről! Törnek-zúznak, rontják a levegőt és ki akarják rabolni az olajkészletetetet. Drasztikus intézkedéseket kell bevezetned, hogy megvédd a várost!",
    hang: "motorgang"
  },
  {
    num: 16,
    name: "Kísértetváros",
    type: "total",
    cond: "pop < 1000",
    trophy: false,
    end: true,
    desc: "A város szinte teljesen elnéptelenedett. Aki még maradt az vagy útnak indult más városba, vagy itt maradt fosztogatni az üzleteket. Az egyik ilyen csavargó hátulról leszúr és mérgesen közli, hogy ezt csak magadnak köszönhetted.",
    hang: "sadCity"
  },
  {
    num: 17,
    name: "Metropolisz",
    type: "total",
    cond: "pop > 150000",
    trophy: true,
    end: false,
    desc: "Hatalmas méretűvé nőtt a városod, a lakosság elérte a 150 ezer főt. Egyre jelentősebb település a régióban.",
    hang: "happyCity"
  },
  {
    num: 18,
    name: "Vesszen a zsarnok!",
    type: "total",
    cond: "had > 10000+Math.floor(Math.random()*3000) ",
    trophy: false,
    end: true,
    desc: "Hiába győzted le Bitang Botondot, ha magad is olyan zsarnokká váltál mint ő! A népnek elege lesz a túlzott rendőri zaklatásokból. A lázadók egy ügyes csoportja csapdába csal téged és végez veled.",
    hang: "angryCity"
  },
  {
    num: 19,
    name: "Végzel a GyFSzNy vezérkarával",
    type: "global",
    cond: "day > 125 & money > 5000000",
    trophy: true,
    end: false,
    desc: "Sikerül egy olyan dróncsapatot legyártanod, ami megkeresi a Gyehenna Fertelmes Szagú Nyájának vezéreit, és halálos csapást mér rájuk. A vezetők nélkül a banda többi tagja abbahagyja a fosztogatást és vagy elhagyja a várost, vagy elrejtőzik. A levegő is tisztul.",
    hang: "happyCity"
  },
  {
    num: 20,
    name: "Váratlan támogatás",
    type: "global",
    cond: "day = Math.floor(57+Math.random()*12)",
    trophy: false,
    end: false,
    desc: "Egy gazdag üzletembernek megtetszik nagyon a városod és saját költségén ad nektek egy fejlesztést.",
    hang: "happyCity"
  },
  {
    num: 21,
    name: "Idegen invázió",
    type: "global",
    cond: "day = 150",
    trophy: false,
    end: false,
    desc: "A városod felett idegen űrhajók jelennek meg. Miközben felülről lövik a lakosságot, a városodba korábban beszivárgott idegenek és a GyFSzNy maradék bandatagjai folyamatosan pusztítják a lakosságot és az épületeket. Úgy tűnik, ez a végső intenzív támadás a városod ellen!",
    hang: "alienEvent"
  },
  {
    num: 22,
    name: "Idegen szabotázs",
    type: "global",
    cond: "day > Math.floor(153+Math.random()*25) & day < 179",
    trophy: false,
    end: false,
    desc: "Az idegenek szabotázst hajtottak végre a városod fejlesztései és gazdasága ellen.",
    hang: "alienEvent"
  },
  {
    num: 23,
    name: "Elrabolnak az idegenek",
    type: "global",
    cond: "day = 180",
    trophy: false,
    end: true,
    desc: "Álmodban hirtelen egy vakító villanást látsz. Megpróbálod kinyitni a szemed, de túl erős a fény. Émelygés jön rád és úgy érzed, forog körülötted a világ. Magatehetlenül sodródsz egy bizonytalan térben... Az idegenek elteleportáltak egy másik világba. Itt van a Bazibrutál II,V. részének vége!",
    hang: "alienEvent"
  },
  
]