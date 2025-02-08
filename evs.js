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

window.trophy = [
  {
    num: 0,
    name: "Aranyváros",
    good: true,
    desc: "A város életszínvonala az egekeben van, eltűntek a szegények, a hajléktalanok, a csapból is pénz folyik!",
    type: "total",
    cond: "niv > 90"
  },
  {
    num: 1,
    name: "Csőd",
    good: false,
    desc: "Kiürült a kassza, csődbe vitted a várost! Az emberek fellázadnak és meglincselnek.",
    type: "global",
    cond: "money < 1"
  }
]