function _load() {
  var music = document.getElementById("music");
  var sound = document.getElementById("sound");
  music.volume = .9;
  sound.volume = .6;
  music.loop = true;
  sound.loop = false;
  var main = document.getElementById("main");
  var page = document.getElementById("page");
  var modal = document.getElementById("modal");
  var kerAct = false;
  page.style.display = "none";
  modal.style.display = "none";
  window.curMusic = "basicMusic";
  music.src = "./audio/" + curMusic + ".mp3";
  sound.src = "./audio/done.mp3";
  window.musicOn = false; //true ha éles
  window.musIcon = "./img/soundOn.png";
  window.tax = 50;
  window.money = 10000;
  window.day = 1;
  window.allEvents = [];
  window.selector = [
    {
      name: "Adó",
      val: "tax",
      mer: "%",
      sum: false,
      good: 20,
      bad: 50
    },
    {
      name: "Profit",
      val: "pro",
      mer: " $",
      sum: true,
      prev: 0,
      cur: 0,
      good: 5000,
      bad: 1000
    },
    {
      name: "Polgár",
      val: "pop",
      mer: " fő",
      sum: true,
      prev: 0,
      cur: 0,
      good: 5000,
      bad: 1000
    },
    {
      name: "Nívó",
      val: "niv",
      mer: "%",
      sum: false,
      prev: 0,
      cur: 0,
      good: 70,
      bad: 30
    },
    {
      name: "Öröm",
      val: "joy",
      mer: "%",
      sum: false,
      prev: 0,
      cur: 0,
      good: 70,
      bad: 30
    },
    {
      name: "Rend",
      val: "had",
      mer: " &#9876;",
      sum: true,
      prev: 0,
      cur: 0,
      good: 100,
      bad: 1
    },
    {
      name: "Fenntartás",
      val: "mtn",
      mer: " $",
      sum: true,
      prev: 0,
      cur: 0,
      reverse: true,
      good: 300,
      bad: 1000
    },
    {
      name: "Idegenek",
      val: "ufo",
      mer: " &#128369;",
      sum: true,
      prev: 0,
      cur: 0,
      reverse: true,
      good: 50,
      bad: 300
    },
    {
      name: "Védelem",
      val: "def",
      mer: " &#9930;",
      sum: true,
      prev: 0,
      cur: 0,
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
      mtn: 0,
      niv: Math.floor(30 + Math.random() * 30),
      joy: Math.floor(70 + Math.random() * 30),
      def: Math.floor(40 + Math.random() * 30),
      ufo: 70,
      had: 0,
      pro: 0,
      popC: 0,
      popCD: 0,
      mtnC: 0,
      mtnCD: 0,
      nivC: 0,
      nivCD: 0,
      joyC: 0,
      joyCD: 0,
      defC: 0,
      defCD: 0,
      ufoC: 0,
      ufoCD: 0,
      hadC: 0,
      hadCD: 0,
      proC: 0,
      proCD: 0,
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
      mtn: 0,
      niv: Math.floor(5 + Math.random() * 25),
      joy: Math.floor(25 + Math.random() * 50),
      def: Math.floor(35 + Math.random() * 30),
      ufo: 50,
      had: 0,
      pro: 0,
      popC: 0,
      popCD: 0,
      mtnC: 0,
      mtnCD: 0,
      nivC: 0,
      nivCD: 0,
      joyC: 0,
      joyCD: 0,
      defC: 0,
      defCD: 0,
      ufoC: 0,
      ufoCD: 0,
      hadC: 0,
      hadCD: 0,
      proC: 0,
      proCD: 0,
      dev: [],
      evs: [-1, -1],
      eco: .7,
      defo: .7,
      culto: 1,
    },
    {
      num: 2,
      name: "Ázsiai negyed",
      desc: "Kismillió fura ember, akikről azt sem tudod, valójában mit csinálnak.",
      x: 3,
      y: 1,
      pop: Math.floor(1500 + Math.random() * 1000),
      mtn: 0,
      niv: Math.floor(0 + Math.random() * 20),
      joy: Math.floor(0 + Math.random() * 20),
      def: Math.floor(5 + Math.random() * 20),
      ufo: 0,
      had: 0,
      pro: 0,
      popC: 0,
      popCD: 0,
      mtnC: 0,
      mtnCD: 0,
      nivC: 0,
      nivCD: 0,
      joyC: 0,
      joyCD: 0,
      defC: 0,
      defCD: 0,
      ufoC: 0,
      ufoCD: 0,
      hadC: 0,
      hadCD: 0,
      proC: 0,
      proCD: 0,
      dev: [],
      evs: [-1, -1],
      eco: 1,
      defo: .7,
      culto: 1,
    },
    {
      num: 3,
      name: "Városliget",
      desc: "Sportpályák, játszóterek, csónakázótó a kikapcsolódni vágyóknak.",
      x: 1,
      y: 2,
      pop: Math.floor(50 + Math.random() * 300),
      mtn: 0,
      niv: Math.floor(40 + Math.random() * 30),
      joy: Math.floor(50 + Math.random() * 30),
      def: Math.floor(40 + Math.random() * 30),
      ufo: 0,
      had: 0,
      pro: 0,
      popC: 0,
      popCD: 0,
      mtnC: 0,
      mtnCD: 0,
      nivC: 0,
      nivCD: 0,
      joyC: 0,
      joyCD: 0,
      defC: 0,
      defCD: 0,
      ufoC: 0,
      ufoCD: 0,
      hadC: 0,
      hadCD: 0,
      proC: 0,
      proCD: 0,
      dev: [],
      evs: [-1, -1],
      eco: 1,
      defo: 1,
      culto: 1,
    },
    {
      num: 4,
      name: "Városközpont",
      desc: "Itt van többek között a Városháza erődszerű épülete.",
      x: 2,
      y: 2,
      pop: Math.floor(800 + Math.random() * 500),
      mtn: 0,
      niv: Math.floor(55 + Math.random() * 45),
      joy: Math.floor(30 + Math.random() * 40),
      def: Math.floor(70 + Math.random() * 50),
      ufo: Math.floor(1 + Math.random() * 40),
      had: 0,
      pro: 0,
      popC: 0,
      popCD: 0,
      mtnC: 0,
      mtnCD: 0,
      nivC: 0,
      nivCD: 0,
      joyC: 0,
      joyCD: 0,
      defC: 0,
      defCD: 0,
      ufoC: 0,
      ufoCD: 0,
      hadC: 0,
      hadCD: 0,
      proC: 0,
      proCD: 0,
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
      mtn: 0,
      niv: Math.floor(70 + Math.random() * 30),
      joy: Math.floor(35 + Math.random() * 35),
      def: Math.floor(40 + Math.random() * 25),
      ufo: 0,
      had: 0,
      pro: 0,
      popC: 0,
      popCD: 0,
      mtnC: 0,
      mtnCD: 0,
      nivC: 0,
      nivCD: 0,
      joyC: 0,
      joyCD: 0,
      defC: 0,
      defCD: 0,
      ufoC: 0,
      ufoCD: 0,
      hadC: 0,
      hadCD: 0,
      proC: 0,
      proCD: 0,
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
      mtn: 0,
      niv: Math.floor(5 + Math.random() * 25),
      joy: Math.floor(0 + Math.random() * 5),
      def: Math.floor(10 + Math.random() * 20),
      ufo: 0,
      had: 0,
      pro: 0,
      popC: 0,
      popCD: 0,
      mtnC: 0,
      mtnCD: 0,
      nivC: 0,
      nivCD: 0,
      joyC: 0,
      joyCD: 0,
      defC: 0,
      defCD: 0,
      ufoC: 0,
      ufoCD: 0,
      hadC: 0,
      hadCD: 0,
      proC: 0,
      proCD: 0,
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
      mtn: 0,
      niv: Math.floor(30 + Math.random() * 40),
      joy: Math.floor(20 + Math.random() * 50),
      def: Math.floor(40 + Math.random() * 30),
      ufo: 0,
      had: 0,
      pro: 0,
      popC: 0,
      popCD: 0,
      mtnC: 0,
      mtnCD: 0,
      nivC: 0,
      nivCD: 0,
      joyC: 0,
      joyCD: 0,
      defC: 0,
      defCD: 0,
      ufoC: 0,
      ufoCD: 0,
      hadC: 0,
      hadCD: 0,
      proC: 0,
      proCD: 0,
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
      mtn: 0,
      niv: Math.floor(65 + Math.random() * 35),
      joy: Math.floor(75 + Math.random() * 25),
      def: Math.floor(30 + Math.random() * 70),
      ufo: 0,
      had: 0,
      pro: 0,
      popC: 0,
      popCD: 0,
      mtnC: 0,
      mtnCD: 0,
      nivC: 0,
      nivCD: 0,
      joyC: 0,
      joyCD: 0,
      defC: 0,
      defCD: 0,
      ufoC: 0,
      ufoCD: 0,
      hadC: 0,
      hadCD: 0,
      proC: 0,
      proCD: 0,
      dev: [],
      evs: [-1, -1],
      eco: 1.3,
      defo: 1,
      culto: 1.3,
    }
  ];

  for (ko of ker) {
    ko.mtn = Math.round(ko.pop / 5 * (ko.eco + ko.niv / 25 + Math.random() - Math.random()));
    ko.pro = Math.round(ko.pop * (tax / 10) * (ko.niv / 100) - (ko.mtn * (ko.eco + ko.defo + ko.culto)));
    ko.had = Math.round((ko.def - ko.ufo));
  };

  function updateTotals() {
    for (let s = 1; s < selector.length; s++) {
      let selo = selector[s];
      let sum = 0;
      for (k of ker) {
        sum += k[selo.val];
      }
      if (!selector[s].sum) {
        sum = Math.round(sum / 9);
      }
      selo.cur = sum;
      if (day === 1) {
        selo.prev = sum;
      }
      if (selo.val === "pro" && day > 1) {
        money += sum;
        if (money < 0) {
          //csőd
          alert("CSŐD!");
        }
      }
    }
  }

  updateTotals();

  function getDevs(darr, val) {
    if (darr.length < 1) return 0;
    let sum = 0;
    for (d of darr) {
      sum += d[val];
    }
    return sum;
  }

  function change(ko, val, ch) {
    let org = ko[val];
    ko[val] += ch;
    if (ko[val] < 1 && val.charAt(val.length - 1) !== "C") {
      ko[val + "C"] = Math.round((0 - org) / org * 100);
      ko[val] = 0;
    }
    if (val === "pop" && ko.pop > 10000) {
      ko.popC = Math.round((10000 - org) / org * 100);
      ko.pop = 10000;
    }
    if ((val === "niv" || val === "joy") && ko[val] > 100) {
      ko[val + "C"] = Math.round((100 - org) / org * 100);
      ko[val] = 100;
    }
    //Egyéb hatások val-onként
  }

  //NEW DAY
  function newDay() {
    if (sound.paused) {
      sound.src = "./audio/done.mp3";
      sound.play();
    }
    day++;

    for (let s = 1; s < selector.length; s++) {
      selector[s].prev = selector[s].cur;
    }

    for (ko of ker) {
      //Evs? Kell korlát? 10 alatti lakosok elvándorolnak (event: kihal)
      let sign = 1;
      ko.nivC += Math.round((ko.eco - 1) * 7 - (tax - 45) / (20 + Math.random() * 10));
      change(ko, "niv", ko.nivC);
      ko.nivCD = ko.nivC;

      let hado = ko.had;
      let ufoo = ko.ufo;
      let defo = ko.def;
      ko.defC += Math.round(ko.mtn * (ko.defo - 1) / 5 + Math.sign(ko.ufo - ko.def) * Math.random() * 5);
      change(ko, "def", ko.defC);
      ko.ufoC += Math.round(1 + Math.random() * day / 14 + (ko.ufo - ko.def) / 12);
      change(ko, "ufo", ko.ufoC);
      ko.had = Math.round(ko.def - ko.ufo);
      sign = hado === 0 ? 1 : Math.sign(hado);
      ko.hadC = Math.round((ko.had - hado) / hado * 100 * sign);
      sign = ufoo === 0 ? 1 : Math.sign(ufoo);
      ko.ufoC = Math.round((ko.ufo - ufoo) / ufoo * 100 * sign);
      sign = defo === 0 ? 1 : Math.sign(defo);
      ko.defC = Math.round((ko.def - defo) / defo * 100 * sign);
      ko.hadCD = ko.hadC;
      ko.ufoCD = ko.ufoC;
      ko.defCD = ko.defC;

      let rendor = 1 + Math.round(Math.random());
      if (ko.had > 100 + Math.random() * 50 || ko.had < -50 * Math.random()) rendor -= 1 + Math.round(Math.random() * 3);
      if (ko.had > 700 + Math.random() * 500 || ko.had < -150 - 100 * Math.random()) rendor -= 2 + Math.floor(ko.had / 200 * Math.random());
      if (Math.abs(rendor) > 20) rendor = Math.sign(rendor) * 20;

      ko.joyC += Math.round(rendor + (ko.culto - 1) * 15 - (tax - 40) / (20 + Math.random() * 10) + (ko.niv - 50) / 15);
      change(ko, "joy", ko.joyC);
      ko.joyCD = ko.joyC;

      ko.popC += Math.round(((ko.joy - 30) + (ko.niv - Math.abs(ko.niv - 50) * 2 - 20) - Number(ko.had < 0) * Math.random() * Math.abs(ko.had) + Math.random() * 20 - Math.random() * 20) / 12);
      change(ko, "pop", Math.round(ko.pop * ko.popC / 100));
      ko.popCD = ko.popC;

      let matine = ko.mtn;
      ko.mtn = Math.round(ko.pop / 5 * (1 + ko.niv / 25 + Math.random() - Math.random()));
      ko.mtnC = matine - ko.mtn;
      change(ko, "mtn", ko.mtnC);
      sign = matine === 0 ? 1 : Math.sign(matine);
      ko.mtnC = Math.round((ko.mtn - matine) / matine * 100 * sign);
      ko.mtnCD = ko.mtnC;

      let newPro = ko.proC + Math.round(ko.pop * (tax / 10) * (0.1 + ko.niv / 100) - (ko.mtn * (ko.eco + ko.defo + ko.culto) / 3) - getDevs(ko.dev, "mtn"));
      sign = ko.pro === 0 ? 1 : Math.sign(ko.pro);
      ko.proC = Math.round(((newPro - ko.pro) / ko.pro) * 100 * sign);
      ko.pro = newPro;
      ko.proCD = ko.proC;

      for (p in ko) {
        if (p.charAt(p.length - 1) === "C") ko[p] = 0;
      }
    };

    updateTotals();
    pageUpdate();
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

  function emot(happy) {
    let soundN = happy ? "happy" : "angry";
    let dice = 1 + Math.floor(Math.random() * 6);
    sound.src = "./audio/" + soundN + dice + ".mp3";
    sound.play();
  }

  function generateXtra(so) {
    let xtraStr = "";
    if (so.val === "tax") {
      let cc = tax < so.good ? "good" : tax > so.bad ? "bad" : "neutral";
      xtraStr = `
        <button class="navBtn" id="tMinus10">-10</button>
        <button class="navBtn" id="tMinus">-1</button>
        <span id="tVal" class= ${cc}>${tax} %</span>
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
          for (ko of ker) {
            change(ko, "joyC", 1);
            change(ko, "nivC", 1);
          }
          newDay();
        }
      });
      tm10.addEventListener("click", function () {
        if (tax > 9) {
          emot(true);
          tax -= 10;
          for (ko of ker) {
            change(ko, "joyC", Math.round(7 + Math.random() * 8));
            change(ko, "nivC", Math.round(6 + Math.random() * 8));
          }
          newDay();
        }
      });

      tp.addEventListener("click", function () {
        if (tax < 100) {
          tax++;
          for (ko of ker) {
            change(ko, "joyC", -1);
            change(ko, "nivC", -1);
          }
          newDay();
        }
      });
      tp10.addEventListener("click", function () {
        if (tax < 91) {
          emot(false);
          tax += 10;
          for (ko of ker) {
            change(ko, "joyC", -Math.round(7 + Math.random() * 8));
            change(ko, "nivC", -Math.round(6 + Math.random() * 8));
          }
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
      let cc = "neutral";
      let chVal = so.cur - so.prev;
      let sign = so.prev === 0 ? 1 : Math.sign(so.prev);
      let chPer = Math.round((chVal / so.prev) * 100 * sign);
      let chCol = chVal < 0 ? "bad" : chVal > 0 ? "good" : "neutral";
      let intro = "";
      let chTxt = "";
      if (so.sum) {
        intro = "Összes";
        if (so.cur < so.bad * 9) cc = "bad";
        if (so.cur > so.good * 9) cc = "good";
        if (chPer < 0) chTxt = chPer + " %";
        if (chPer > 0) chTxt = "+" + chPer + " %";
      } else {
        intro = "Átlag";
        if (so.cur < so.bad) cc = "bad";
        if (so.cur > so.good) cc = "good";
        if (chVal < 0) chTxt = chVal;
        if (chVal > 0) chTxt = "+" + chVal;
      }
      xtraStr = `
          <span class="infoVal">${intro}: </span>
          <span class=${cc}>${bigNumber(so.cur, so.mer)}</span>
          <span class="infoCh ${chCol}">${chTxt}</span>
        `;
      document.getElementById("extraInfo").innerHTML = xtraStr;

      for (let k = 0; k < 9; k++) {
        let val = ker[k][so.val];
        let chV = ker[k][so.val + "CD"];
        let chT = "";
        let cc = val < so.bad ? "bad" : val > so.good ? "good" : "neutral";
        let chC = chV < 0 ? "bad" : chV > 0 ? "good" : "neutral";
        if (so.sum) {
          if (chV < 0) chT = chV + " %";
          if (chV > 0) chT = "+" + chV + " %";
        } else {
          if (chV < 0) chT = chV;
          if (chV > 0) chT = "+" + chV;
        }

        document.getElementById("ki1-" + k).innerHTML = `${bigNumber(val, so.mer)}`;
        document.getElementById("ki1-" + k).classList.add(cc);
        document.getElementById("ki2-" + k).innerHTML = `${chT}`;
        document.getElementById("ki2-" + k).classList.add(chC);

      }


    }
  }

  function changeSel(e) {
    let sn = Number(e.target.id[1]);
    selVal = selector[sn].val;
    pageUpdate();
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

  function updateSup(ko) {
    let supArr = [ko.eco, ko.defo, ko.culto];
    let supMap = [];
    for (sa of supArr) {
      if (sa < 1) {
        supMap.push("selected")
      } else {
        supMap.push("unselected")
      }
      if (sa === 1) {
        supMap.push("selected")
      } else {
        supMap.push("unselected")
      }
      if (sa > 1) {
        supMap.push("selected")
      } else {
        supMap.push("unselected")
      }
    }

    let supStr = `
      <tr>
        <th class="supLabel">Gazdaság:</th>
        <th class="supBtn ${supMap[0]}" id="eco-.7">Kevés</th>
        <th class="supBtn ${supMap[1]}" id="eco-1">Elég</th>
        <th class="supBtn ${supMap[2]}" id="eco-1.3">Sok</th>
      </tr>
      <tr>
        <th class="supLabel">Védelem:</th>
        <th class="supBtn ${supMap[3]}" id="defo-.7">Kevés</th>
        <th class="supBtn ${supMap[4]}" id="defo-1">Elég</th>
        <th class="supBtn ${supMap[5]}" id="defo-1.3">Sok</th>
      </tr>
      <tr>
        <th class="supLabel">Kultúra:</th>
        <th class="supBtn ${supMap[6]}" id="culto-.7">Kevés</th>
        <th class="supBtn ${supMap[7]}" id="culto-1">Elég</th>
        <th class="supBtn ${supMap[8]}" id="culto-1.3">Sok</th>
      </tr>
    `;
    document.getElementById("supTable").innerHTML = supStr;
  }

  function updateStat(ko) {
    let statArr = ["pop", "pro", "mtn", "niv", "joy", "ufo", "def", "had"];
    let statStr = `
      <tr id="statHead">
        <th >Tétel</th>
        <th >Érték</th>
        <th >Változás</th>
      </tr>
    `;
    for (s of statArr) {
      let si = selector.findIndex(x => x.val === s);
      let so = selector[si];
      let vd = ko[s];
      let cd = ko[s + "CD"];
      let qvc = "neutral";
      let qcc = cd < 0 ? "bad" : cd > 0 ? "good" : "neutral";
      let vt = "";
      let ct = "";
      if (s === "def") {
        if (vd < ko.ufo - 50 || vd > ko.ufo + 700) {
          qvc = "bad";
        }
        if (vd > ko.ufo && vd < ko.ufo + 100) {
          qvc = "good";
        }
        vt = vd + so.mer;
        if (cd > 0) { ct = "+" + cd + " %"; }
        if (cd < 0) { ct = cd + " %"; }
      } else {
        if (so.sum) {
          if (so.reverse) {
            if (vd < so.good) {
              qvc = "good";
            }
            if (vd > so.bad) {
              qvc = "bad";
            }
          } else {
            if (vd > so.good) {
              qvc = "good";
            }
            if (vd < so.bad) {
              qvc = "bad";
            }
          }
          vt = vd + so.mer;
          if (cd > 0) { ct = "+" + cd + " %"; }
          if (cd < 0) { ct = cd + " %"; }
        } else {
          if (vd > so.good) {
            qvc = "good";
          }
          if (vd < so.bad) {
            qvc = "bad";
          }
          vt = vd + " %";
          if (cd > 0) { ct = "+" + cd; }
          if (cd < 0) { ct = cd; }
        }
      }
      statStr += `
      <tr>
        <th class="statLabel">${so.name}</th>
        <th class=${qvc}>${vt}</th>
        <th class=${qcc}>${ct}</th>
      </tr>
    `;
    }
    document.getElementById("statTable").innerHTML = statStr;
  }


  function openKer(e) {
    let kn = parseInt(e.target.id.slice(-1));
    let ko = ker[kn];
    page.innerHTML = "";
    page.style.display = "none";
    music.src = "./audio/" + ko.name + ".mp3";
    if (musicOn) music.play();
    modal.style.display = "flex";
    let kerStr = `
    <button id="closeKer">x</button>
    <div id="kerNev">${ko.name}</div>
    `;
    if (ko.desc) {
      kerStr += `<div id="kerDesc">${ko.desc}</div>`;
      ko.desc = false;
    } else {
      kerStr += `
        <button class="btn" id="kerVisit">Látogatás</button>
        <div id="visit"></div>
      `;
    }
    kerStr += `
      <fieldset id="supField">
        <legend id="supTitle">Támogatások</legend>
        <table id="supTable"></table>
      </fieldset>
      <br>
      <fieldset id="statField">
        <legend id="statTitle">Statisztikák</legend>
        <table id="statTable">
        </table>
      </fieldset>
    `

    modal.innerHTML = kerStr;

    updateSup(ko);
    updateStat(ko);

    function changeSup(e) {
      let sid = e.target.id.split('-');
      let svar = sid[0];
      let sval = Number(sid[1]);
      if (ko[svar] === sval) return;
      ko[svar] = sval;
      updateSup(ko);
      kerAct = true;
      document.getElementById("closeKer").addEventListener("click", closeModal);
      document.querySelectorAll(".supBtn").forEach((s) => s.addEventListener("click", changeSup));
      if (svar === "defo") return;
      if (sval < 1) emot(false);
      if (sval > 1) emot(true);
    }

    document.getElementById("closeKer").addEventListener("click", closeModal);
    document.querySelectorAll(".supBtn").forEach((s) => s.addEventListener("click", changeSup));
  }

  function closeModal() {
    //késleltesd egy kicsit vagy mit tudom én
    music.src = "./audio/" + curMusic + ".mp3";
    if (musicOn) music.play();
    if (kerAct) {
      kerAct = false;
      newDay();
    } else {
      pageUpdate();
    }
  }

  function pageUpdate() {
    modal.innerHTML = "";
    modal.style.display = "none";
    page.style.display = "grid";
    let selInd = selector.findIndex(s => s.val === selVal);
    let selObj = selector[selInd];
    let mc = money < 1000 ? "bad" : money > 1000000 ? "good" : "neutral";
    let pageStr = `
      <div id="header">
        <div id="topMenu">
          <span class="navNr ${mc}" title=${money.toLocaleString()}>${bigNumber(money, "$")}</span>
          <img class="navBtn" id="saveBtn" src="./img/save.jpg">
          <img class="navBtn" id="loadBtn" src="./img/load.JPG">
          <img id='soundBtn' src=${musIcon} alt="music">
          <span class="navPair">
            <span class="navNr">${day.toLocaleString()}</span>
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
          <div class="kername" id="kn-${k}">${ker[k].name}</div>
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
    document.querySelectorAll(".ker").forEach((s) => s.addEventListener("click", openKer));


    /* document.getElementById("saveBtn").addEventListener("click", saveGame);
    document.getElementById("loadBtn").addEventListener("click", loadGame);
    document.getElementById("loadBtn").disabled = localStorage.getItem("charName") == null;
    document.getElementById("saveBtn").disabled = false; */


  }

  function startGame() {
    if (musicOn) music.play();
    main.innerHTML = "";
    page.style.display = "grid";
    pageUpdate();
  }

  document.getElementById("start").addEventListener("click", startGame)
  document.getElementById("start2").addEventListener("click", startGame)

}

window.addEventListener("load", _load);
