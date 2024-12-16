window.ev = [
  {
    title: "Morog a nép",
    text: "",
    cond: "",
    chance: .5,
    hang: "",
    btns: [
      {
        type: "rnd",
        txt: "bad",
        hang: false
      },
      {
        type: "change",
        txt: "Pénzt szórsz közéjük",
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