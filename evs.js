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
    cond: "joy < 21 & joy > 9",
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
            val: "had",
            ch: "Math.round(50+Math.random()*50)"
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
        txt: "Majd leállnak.",
        hang: "angryCity",
      }
    ],
  },
  {
    title: "A túl kényelmes élet miatt a nép átment önpusztításba",
    cond: "niv > 90",
    chance: .12,
    hang: "hardCity",
    btns: [
      {
        type: "change",
        txt: "Ezek hülyék?!",
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
            val: "had",
            ch: "-Math.round(200+Math.random()*150)"
          }
        ]
      }
    ],
  },
  {
    title: "A túl sok profit miatt sokan adócsalók lettek",
    cond: "pro > 7500",
    chance: .25,
    hang: "hardCity",
    btns: [
      {
        type: "change",
        txt: "Kellemetlen.",
        change: [
          {
            val: "pro",
            ch: "-Math.round(3000+Math.random()*5000)"
          },
          {
            val: "had",
            ch: "-Math.round(100+Math.random()*150)"
          }
        ]
      },
      {
        type: "change",
        txt: "Tömlöcbe velük!",
        change: [
          {
            val: "money",
            ch: "-Math.round(1000+Math.random()*1500)"
          },
          {
            val: "had",
            ch: "Math.round(100+Math.random()*150)"
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
    cond: "pop > 9000",
    chance: .4,
    hang: "hardCity",
    btns: [
      {
        type: "change",
        txt: "Csúnya dolog.",
        change: [
          {
            val: "pop",
            ch: "-Math.round(15+Math.random()*35)"
          },
          {
            val: "joy",
            ch: "-Math.round(20+Math.random()*50)"
          },
          {
            val: "had",
            ch: "-Math.round(250+Math.random()*kob.pop/20)"
          },
        ]
      },
      {
        type: "change",
        txt: "Rendőrt közéjük!",
        change: [
          {
            val: "money",
            ch: "-Math.round(kob.pop*(2-kob.defo)*(1000-Math.random()*200))"
          },
          {
            val: "joy",
            ch: "-Math.round(5+Math.random()*10)"
          },
          {
            val: "had",
            ch: "Math.round(150+Math.random()*250)"
          },
        ]
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
    name: "Csőd",
    type: "global",
    cond: "money < 1",
    trophy: false,
    end: true,
    desc: "Kiürült a kassza, csődbe vitted a várost! Az emberek fellázadnak és meglincselnek.",
    hang: "angryCity"
  },
  {
    num: 3,
    name: "Nyomor a köbön",
    type: "total",
    cond: "niv < 5",
    trophy: false,
    end: true,
    desc: "Teljesen megnyomorítottad a városod, az emberek nincstelenek lettek, elkeseredésükben meglincselnek.",
    hang: "sadCity"
  },
  {
    num: 4,
    name: "Elkeseredettség",
    type: "total",
    cond: "joy < 5",
    trophy: false,
    end: true,
    desc: "A városon úrrá lett a totális depresszió és kilátástalanság. Végső elkeseredésükben meglincselnek téged.",
    hang: "sadCity"
  },
  {
    num: 5,
    name: "Idegen aktivitás",
    type: "global",
    cond: "day = 10",
    trophy: false,
    end: false,
    desc: "Egyre több furcsa lény jelenik meg az emberek között. Ismeretlen intelligens fajok, akik gyakran agresszíven viselkednek.",
    hang: "alienEvent"
  },
]