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
            global: true,
            val: "money",
            ch: "-Math.round(ko.pop*1.5)"
          },
          {
            global: false,
            val: "joy",
            ch: "+10"
          },
        ]
      }
    ],
  }
];