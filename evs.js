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
    cond: "joy < 25",
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
  }
];

window.trophies = [
  {
    num: 0,
    name: "Aranyváros",
    good: true,
    desc: "A város életszínvonala mindenhol az egekeben van, eltűntek a szegények, a hajléktalanok, a csapból is pénz folyik!",
    type: "total",
    cond: "niv > 95"
  },
  {
    num: 1,
    name: "Eufória",
    good: true,
    desc: "A városodban minden ember tökéletesen boldog, vidáman dolgoznak és szórakoznak, mindenki téged ünnepel.",
    type: "total",
    cond: "joy > 95"
  },
  {
    num: 2,
    name: "Csőd",
    good: false,
    desc: "Kiürült a kassza, csődbe vitted a várost! Az emberek fellázadnak és meglincselnek.",
    type: "global",
    cond: "money < 1"
  },
  {
    num: 3,
    name: "Nyomor a köbön",
    good: false,
    desc: "Teljesen megnyomorítottad a városod, az emberek nincstelenek lettek, elkeseredésükben meglincselnek.",
    type: "total",
    cond: "niv < 5"
  },
  {
    num: 4,
    name: "Elkeseredettség",
    good: false,
    desc: "A városon úrrá lett a totális depresszió és kilátástalanság. Végső elkeseredésükben meglincselnek téged.",
    type: "total",
    cond: "joy < 5"
  }
]