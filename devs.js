window.dev = [
  {
    id: 0,
    name: "Kakasnyalóka",
    desc: "Ingyen kakasnyalókát mindenkinek!",
    days: 2,
    price: 10000,
    szigor: [],
    effect: [
      {
        val: "joy",
        ch: 3
      },
      {
        val: "mtn",
        ch: 500
      }
    ]
  },
  {
    id: 1,
    name: "Hősképző",
    desc: "A szuperképesség-fejlesztő tanfolyammal a pogárok nemcsak boldogabbak lesznek, hanem meg is tudják védeni magukat.",
    days: 10,
    price: 5000000,
    szigor: [],
    effect: [
      {
        val: "def",
        ch: 100
      },
      {
        val: "joy",
        ch: 10
      },
      {
        val: "niv",
        ch: 10
      },
      {
        val: "mtn",
        ch: 2000
      }
    ]
  },
  {
    id: 2,
    name: "Kedvencek",
    desc: "Minden háztartás választása szerint igényelhet törpehörcsögöt, hóbaglyot vagy takarító robotnőt.",
    days: 10,
    price: 120000,
    szigor: [1, 2, 4, 6, 7],
    effect: [
      {
        val: "joy",
        ch: 8
      },
      {
        val: "niv",
        ch: 2
      },
      {
        val: "mtn",
        ch: 100
      }
    ]
  }
];

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