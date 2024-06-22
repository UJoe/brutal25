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
  window.musicOn = false; //true ha éles
  window.soundOn = true;
  window.musIcon = "./img/soundOn.png";
  window.tax = 50;
  window.money = 10000;
  window.day = 1;
  window.bascol = ["#f00", "#fff", "#0f0"];
  window.allEvents = [];
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
      sum: true,
      prev: 0,
      cur: 0
    },
    {
      name: "Polgár",
      val: "pop",
      mer: " fő",
      sum: true,
      prev: 0,
      cur: 0
    },
    {
      name: "Nívó",
      val: "niv",
      mer: "%",
      sum: false,
      prev: 0,
      cur: 0
    },
    {
      name: "Öröm",
      val: "joy",
      mer: "%",
      sum: false,
      prev: 0,
      cur: 0
    },
    {
      name: "Rend",
      val: "had",
      mer: " &#9876;",
      sum: true,
      prev: 0,
      cur: 0
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
      had: 0,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      evs: [-1, -1],
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
      had: 0,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      evs: [-1, -1],
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
      had: 0,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      evs: [-1, -1],
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
      had: 0,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      evs: [-1, -1],
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
      had: 0,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      evs: [-1, -1],
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
      had: 0,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      evs: [-1, -1],
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
      had: 0,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      evs: [-1, -1],
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
      had: 0,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      evs: [-1, -1],
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
      had: 0,
      pro: 0,
      popC: 0,
      mtnC: 0,
      nivC: 0,
      joyC: 0,
      defC: 0,
      hadC: 0,
      proC: 0,
      dev: [],
      evs: [-1, -1],
      eco: 1.3,
      defo: 1,
      culto: 1.3,
    }
  ];

  for (ko of ker) {
    ko.pro = Math.round(ko.pop * (tax / 10) * (ko.niv / 100) - ko.mtn);
    ko.had = Math.round((ko.def - ko.ufo * 10) * ko.defo);
  };
  for (let s = 1; s < selector.length; s++) {
    let selo = selector[s];
    let sum = 0;
    for (k of ker) {
      sum += k[selo.val];
    }
    if (!selector[s].sum) {
      sum = Math.round(sum / 9);
    }
    selo.prev = sum;
    selo.cur = sum;
  }

  //NEW DAY
  function newDay() {
    day++;
    pageUpdate(true);
  }

  function bigNumber(x, y) {
    if (x >= 1000000000) return Math.floor(x / 1000000000) + "B " + y;
    if (x >= 1000000) return Math.floor(x / 1000000) + "M " + y;
    if (x >= 2000) return x.toLocaleString() + " " + y;
    if (x < 0) {
      switch (y) {
        case "$":
          return "CSŐD!";

        case "fő":
          return "0 fő";

        default:
          break;
      }
    }
    return x + " " + y;
  }

  function generateXtra(so) {
    let xtraStr = "";
    if (so.val === "tax") {
      let cc = tax < 20 ? 2 : tax > 50 ? 0 : 1;
      xtraStr = `
        <button class="navBtn" id="tMinus10">-10</button>
        <button class="navBtn" id="tMinus">-1</button>
        <span id="tVal" style="color: ${bascol[cc]};">${tax} %</span>
        <button class="navBtn" id="tPlus">+1</button>
        <button class="navBtn" id="tPlus10">+10</button>
        `;
      document.getElementById("extraInfo").innerHTML = xtraStr;

      let tm = document.getElementById("tMinus");
      let tp = document.getElementById("tPlus");
      let tm10 = document.getElementById("tMinus10");
      let tp10 = document.getElementById("tPlus10");
      if (tax < 1) tm.disabled = true;
      if (tax > 99) tp.disabled = true;
      if (tax < 10) tm10.disabled = true;
      if (tax > 90) tp10.disabled = true;

      tm.addEventListener("click", function () {
        if (tax > 0) {
          tax--;
          newDay();
        }
      });
      tm10.addEventListener("click", function () {
        if (tax > 9) {
          tax -= 10;
          newDay();
        }
      });

      tp.addEventListener("click", function () {
        if (tax < 100) {
          tax++;
          newDay();
        }
      });
      tp10.addEventListener("click", function () {
        if (tax < 91) {
          tax += 10;
          newDay();
        }
      });

      for (let k = 0; k < 9; k++) {
        let ei = ker[k].evs[0];
        if (ei > -1) {
          document.getElementById("ki1-" + k).innerHTML = `${ev[ei].name}`;
        }
        ei = ker[k].evs[1];
        if (ei > -1) {
          document.getElementById("ki2-" + k).innerHTML = `${ev[ei].name}`;
        }
      }
    } else {
      let chVal = so.cur - so.prev;
      let chPer = Math.round((chVal / so.prev) * 100);
      let chCol = chVal < 0 ? 0 : chVal > 0 ? 2 : 1;
      let intro = "";
      let chTxt = "";
      if (so.sum) {
        intro = "Összes";
        if (chPer < 0) chTxt = chPer + " %";
        if (chPer > 0) chTxt = "+" + chPer + " %";
      } else {
        intro = "Átlag";
        if (chVal < 0) chTxt = chVal;
        if (chVal > 0) chTxt = "+" + chVal;
      }
      xtraStr = `
          <span class="infoVal">${intro}: ${bigNumber(so.cur, so.mer)}</span>
          <span class="infoCh" style="color: ${bascol[chCol]}">${chTxt}</span>
        `;
      document.getElementById("extraInfo").innerHTML = xtraStr;

      for (let k = 0; k < 9; k++) {
        let val = ker[k][so.val];
        let chV = ker[k][so.val + "C"];
        let chT = "";
        let chC = chV < 0 ? 0 : chV > 0 ? 2 : 1;
        if (so.sum) {
          if (chV < 0) chT = chV + " %";
          if (chV > 0) chT = "+" + chV + " %";
        } else {
          if (chV < 0) chT = chV;
          if (chV > 0) chT = "+" + chV;
        }

        document.getElementById("ki1-" + k).innerHTML = `${bigNumber(val, so.mer)}`;
        document.getElementById("ki2-" + k).innerHTML = `${chT}`;
        document.getElementById("ki2-" + k).style.color = bascol[chC];
      }


    }
  }

  function changeSel(e) {
    let sn = Number(e.target.id[1]);
    selVal = selector[sn].val;
    console.log(selVal);
    pageUpdate(true);
  }

  function changeMusic() {
    let sBtn = document.getElementById("soundBtn");
    if (musicOn) {
      music.pause();
      sBtn.src = "./img/soundOff.png";
      musicOn = false;
    } else {
      music.play();
      sBtn.src = "./img/soundOn.png";
      musicOn = true;
    }
  }

  function pageUpdate(foldal) {
    if (foldal) {
      let selInd = selector.findIndex(s => s.val === selVal);
      let selObj = selector[selInd];
      let pageStr = `
      <div id="header">
        <div id="topMenu">
          <span class="navNr" title=${money.toLocaleString()} style="color: ${bascol[Number(money > 0)]};">${bigNumber(money, "$")}</span>
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
        let selStr = `<button id="s${k}" class="navBtn selBtn ${selClass}">${selector[k].name}</button>`;
        pageStr += selStr;
      }
      pageStr += `</div>
        <div id="extraInfo"></div>
      </div>
      `
      for (let k = 0; k < 9; k++) {
        let kerStr = `<div id = "k${k}" class="ker">
          <div class="kername">${ker[k].name}</div>
          <div class="kerinfo1" id="ki1-${k}"></div>
          <div class="kerinfo2" id="ki2-${k}"></div>
        </div> `;
        pageStr += kerStr;
      }
      page.innerHTML = pageStr;
      generateXtra(selObj);

      document.getElementById("endBtn").addEventListener("click", newDay);
      document.querySelectorAll(".selBtn").forEach((s) => s.addEventListener("click", changeSel));
      document.getElementById("soundBtn").addEventListener("click", changeMusic);


      /* document.getElementById("saveBtn").addEventListener("click", saveGame);
      document.getElementById("loadBtn").addEventListener("click", loadGame);
      document.getElementById("loadBtn").disabled = localStorage.getItem("charName") == null;
      document.getElementById("saveBtn").disabled = false; */

    }
  }
  function startGame() {
    if (musicOn) music.play();
    main.innerHTML = "";
    page.style.display = "grid";
    pageUpdate(true);
  }

  document.getElementById("start").addEventListener("click", startGame)
  document.getElementById("start2").addEventListener("click", startGame)

}

window.addEventListener("load", _load);
