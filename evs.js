window.evs = [
  {
    title: "Tüntet ellened és lázong a nép",
    cond: "joy < 25",
    chance: .4,
    hang: "angryCity",
    btns: [
      {
        type: "rnd",
        txt: "bad",
        hang: false
      },
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