function _load() {
  window.music = document.getElementById("music");
  window.sound = document.getElementById("sound");
  music.volume = 1;
  sound.volume = 1;
  music.loop = true;
  let main = document.getElementById("main");
  let page = document.getElementById("page");
  let modal = document.getElementById("modal");
  page.style.display = "none";
  modal.style.display = "none";
  window.curMusic = "basicMusic";
  music.src = "./audio/" + curMusic + ".mp3";
  window.musicOn = true;
  window.soundOn = true;
  window.musIcon = "./img/soundOn.png";
  window.tax = 50;
  window.money = 10000;
  window.day = 1;
  window.bascol = ["#f00", "#fff", "#0f0"];
  window.selector = [
    {
      name: "Adó",
      val: "tax",
      mer: "%",
      sum: false
    },
    {
      name: "Profit",
      val: "pro",
      mer: " $",
      sum: true
    },
    {
      name: "Polgár",
      val: "pop",
      mer: "",
      sum: true
    },
    {
      name: "Nívó",
      val: "niv",
      mer: "%",
      sum: false
    },
    {
      name: "Öröm",
      val: "joy",
      mer: "%",
      sum: false
    },
    {
      name: "Rend",
      val: "def",
      mer: " ×",
      sum: true
    },
  ];
  window.selVal = "tax";
  window.ker = [
    {
      num: 0,
      name: "Erdőszél",
      desc: "Egészséges, pihentető túrák, hőssegédek és bűvös lények otthona.",
      x: 1,
      y: 1,
      pop: Math.floor(1 + Math.random() * 100),
      mtn: Math.floor(1 + Math.random() * 20),
      niv: Math.floor(30 + Math.random() * 30),
      joy: Math.floor(70 + Math.random() * 30),
      def: Math.floor(40 + Math.random() * 30),
      ufo: 10,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      ev: [],
      eco: .7,
      defo: 1,
      culto: 1,
    },
    {
      num: 1,
      name: "Farmok",
      desc: "Szorgos, egyszerű gazdálkodók földjei.",
      x: 2,
      y: 1,
      pop: Math.floor(100 + Math.random() * 400),
      mtn: Math.floor(10 + Math.random() * 40),
      niv: Math.floor(5 + Math.random() * 25),
      joy: Math.floor(25 + Math.random() * 50),
      def: Math.floor(35 + Math.random() * 30),
      ufo: 5,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      ev: [],
      eco: .7,
      defo: 1,
      culto: .7,
    },
    {
      num: 2,
      name: "Ázsiai negyed",
      desc: "Kismillió fura ember, akikről azt sem tudod, valójában mit csinálnak.",
      x: 3,
      y: 1,
      pop: Math.floor(1500 + Math.random() * 1000),
      mtn: Math.floor(50 + Math.random() * 100),
      niv: Math.floor(0 + Math.random() * 20),
      joy: Math.floor(0 + Math.random() * 20),
      def: Math.floor(5 + Math.random() * 20),
      ufo: 0,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      ev: [],
      eco: .7,
      defo: .7,
      culto: .7,
    },
    {
      num: 3,
      name: "Városliget",
      desc: "Sportpályák, játszóterek, csónakázótó a kikapcsolódni vágyóknak.",
      x: 1,
      y: 2,
      pop: Math.floor(50 + Math.random() * 300),
      mtn: Math.floor(100 + Math.random() * 100),
      niv: Math.floor(40 + Math.random() * 30),
      joy: Math.floor(50 + Math.random() * 30),
      def: Math.floor(40 + Math.random() * 30),
      ufo: 0,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      ev: [],
      eco: 1,
      defo: 1,
      culto: 1,
    },
    {
      num: 4,
      name: "Városközpont",
      x: 2,
      y: 2,
      pop: Math.floor(800 + Math.random() * 500),
      mtn: Math.floor(150 + Math.random() * 200),
      niv: Math.floor(55 + Math.random() * 45),
      joy: Math.floor(30 + Math.random() * 40),
      def: Math.floor(60 + Math.random() * 40),
      ufo: 3,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      ev: [],
      eco: 1,
      defo: 1.3,
      culto: 1,
    },
    {
      num: 5,
      name: "Üzleti negyed",
      desc: "A legnagyobb pénzintézetek és cégek központjainak felhőkarcolói magasodnak itt.",
      x: 3,
      y: 2,
      pop: Math.floor(800 + Math.random() * 600),
      mtn: Math.floor(200 + Math.random() * 250),
      niv: Math.floor(70 + Math.random() * 30),
      joy: Math.floor(30 + Math.random() * 30),
      def: Math.floor(40 + Math.random() * 25),
      ufo: 0,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      ev: [],
      eco: 1.3,
      defo: 1.3,
      culto: 1,
    },
    {
      num: 6,
      name: "Ipartelep",
      desc: "Működő és bezárt gyárak, munkásszállók nyomasztó rengetege.",
      x: 1,
      y: 3,
      pop: Math.floor(1000 + Math.random() * 700),
      mtn: Math.floor(140 + Math.random() * 150),
      niv: Math.floor(5 + Math.random() * 25),
      joy: Math.floor(0 + Math.random() * 5),
      def: Math.floor(10 + Math.random() * 20),
      ufo: 0,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      ev: [],
      eco: 1.3,
      defo: .7,
      culto: .7,
    },
    {
      num: 7,
      name: "Lakónegyed",
      desc: "Sok polgár lakhelye sok lehetőséggel. Itt van a Branyiszkó-tér is.",
      x: 2,
      y: 3,
      pop: Math.floor(2000 + Math.random() * 1000),
      mtn: Math.floor(100 + Math.random() * 75),
      niv: Math.floor(30 + Math.random() * 40),
      joy: Math.floor(20 + Math.random() * 50),
      def: Math.floor(40 + Math.random() * 30),
      ufo: 0,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      ev: [],
      eco: 1,
      defo: 1,
      culto: .7,
    },
    {
      num: 8,
      name: "Kultúrnegyed",
      desc: "Színvonalas kultúrintézmények pezsgő éjszakai élettel.",
      x: 3,
      y: 3,
      pop: Math.floor(700 + Math.random() * 500),
      mtn: Math.floor(250 + Math.random() * 250),
      niv: Math.floor(65 + Math.random() * 35),
      joy: Math.floor(75 + Math.random() * 25),
      def: Math.floor(30 + Math.random() * 70),
      ufo: 0,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      ev: [],
      eco: 1.3,
      defo: 1,
      culto: 1.3,
    }
  ];
  console.log(ker);

  //NEW DAY
  function newDay() {
    day++;
    pageUpdate(true);
  }

  function printMoney() {
    if (money >= 1000000000) return Math.floor(money / 1000000000) + "B $";
    if (money >= 1000000) return Math.floor(money / 1000000) + "M $";
    if (money >= 2000) return money.toLocaleString() + " $";
    if (money < 0) return "CSŐD!";
    return money + " $";
  }

  function generateXtra(so) {
    switch (so.val) {
      case "tax":
        let cc = tax < 20 ? 2 : tax > 50 ? 0 : 1;
        let xtraStr = `
        <button class="navBtn" id="tMinus">-</button>
        <span id="tVal" style="color: ${bascol[cc]};">${tax} %</span>
        <button class="navBtn" id="tPlus">+</button>
        `;
        document.getElementById("extraInfo").innerHTML = xtraStr;
        let tm = document.getElementById("tMinus");
        let tp = document.getElementById("tPlus");
        if (tax < 1) tm.disabled = true;
        if (tax > 99) tp.disabled = true;

        tm.addEventListener("click", function () {
          if (tax > 0) {
            tax--;
            newDay();
          }
        });

        tp.addEventListener("click", function () {
          if (tax < 100) {
            tax++;
            newDay();
          }
        });

        break;

      default:
        break;
    }
    return xtraStr;
  }

  function pageUpdate(foldal) {
    if (foldal) {
      let selInd = selector.findIndex(s => s.val === selVal);
      let selObj = selector[selInd];
      let pageStr = `
      <div id="header">
        <div id="topMenu">
          <span class="navNr" title=${money.toLocaleString()} style="color: ${bascol[Number(money > 0)]};">${printMoney()}</span>
          <img class="navBtn" id="saveBtn" src="./img/save.jpg">
          <img class="navBtn" id="loadBtn" src="./img/load.JPG">
          <img id='soundBtn' src=${musIcon} alt="music">
          <span class="navPair">
            <span class="navNr">${day}</span>
            <img class="navBtn" id="endBtn" src="./img/moon.jpg">
          </span>
        </div>
        <div id="selectBar">
        `;
      for (let k = 0; k < 6; k++) {
        let selClass = selector[k].val === selVal ? "selected" : "unselected";
        let selStr = `<button id="s${k}" class="navBtn ${selClass}">${selector[k].name}</button>`;
        pageStr += selStr;
      }
      pageStr += `</div>
        <div id="extraInfo"></div>
      </div>
      `
      for (let k = 0; k < 9; k++) {
        let kerStr = `<div id = "k${k}" class="ker"> ${ker[k].name}</div> `;
        pageStr += kerStr;
      }
      page.innerHTML = pageStr;
      generateXtra(selObj);





      /* document.getElementById("soundBtn").addEventListener("click", changeMusic);
      document.getElementById("saveBtn").addEventListener("click", saveGame);
      document.getElementById("loadBtn").addEventListener("click", loadGame);
      document.getElementById("loadBtn").disabled = localStorage.getItem("charName") == null;
      document.getElementById("saveBtn").disabled = false; */

    }
  }
  function startGame() {
    //music.play();
    main.innerHTML = "";
    page.style.display = "grid";
    pageUpdate(true);
  }

  document.getElementById("start").addEventListener("click", startGame)
  document.getElementById("start2").addEventListener("click", startGame)

}

window.addEventListener("load", _load);
