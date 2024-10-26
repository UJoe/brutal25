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
  window.trophy = [];
  window.day = 1;
  window.allEvents = [];
  window.rnd = (arr) => arr[Math.floor(Math.random() * arr.length)];
  window.selector = [
    {
      name: "Adó",
      val: "tax",
      desc: "Egységes&nbsp;városi&nbsp;adó",
      mer: "%",
      sum: false,
      good: 20,
      bad: 50
    },
    {
      name: "Profit",
      val: "pro",
      desc: "Adóbevétel&nbsp;-&nbsp;Kiadások",
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
      desc: "Lakosság",
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
      desc: "Életszínvonal",
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
      desc: "Hangulat",
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
      desc: "Védelem&nbsp;-&nbsp;Idegenek",
      mer: " &#9876;",
      sum: true,
      prev: 0,
      cur: 0,
      good: 100,
      bad: 1
    },
    {
      name: "Alapellátás",
      val: "mtn",
      desc: "A&nbsp;lakosság&nbsp;alapellátása",
      mer: " $",
      sum: true,
      reverse: true,
      good: 300,
      bad: 1000
    },
    {
      name: "Kiadások",
      val: "exp",
      desc: "Alapellátás&nbsp;x&nbsp;Támogatások&nbsp;+&nbsp;Fejlesztésfenntartás",
      mer: " $",
      sum: true,
      reverse: true,
      good: 600,
      bad: 2000
    },
    {
      name: "Idegenek",
      val: "ufo",
      desc: "Idegen bűnözés",
      mer: " &#128369;",
      sum: true,
      reverse: true,
      good: 50,
      bad: 300
    },
    {
      name: "Védelem",
      val: "def",
      desc: "Rendfenntartás",
      mer: " &#9930;",
      sum: true,
    },
  ];
  window.selVal = "tax";

  for (ko of ker) {
    ko.mtn = Math.round(ko.pop / 10 * (1 + ko.niv / 30 + Math.random() / 3 - Math.random() / 3));
    ko.exp = Math.round(ko.mtn * (ko.eco + ko.defo + ko.culto));
    ko.pro = Math.round(ko.pop * (tax / 10) * (0.5 + ko.niv / 300) - ko.exp);
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
      let di = dev.findIndex(x => x.id === d);
      let dio = dev[di];
      let dif = dio.effect;
      for (e of dif) {
        if (e.val === val) { sum += e.ch }
      }
    }
    return sum;
  }

  function getAllDevs(darr) {
    let alldevs = [];
    if (darr.length < 1) return alldevs;
    for (d of darr) {
      let di = dev.findIndex(x => x.id === d);
      if (di > -1) alldevs.push(dev[di])
    }
    return alldevs;
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

  var disNumber = (x) => x > 0 ? "+" + x : x < 0 ? x.toString() : "-";

  function emot(happy) {
    let soundN = happy ? "happy" : "angry";
    let dice = 1 + Math.floor(Math.random() * 6);
    sound.src = "./audio/" + soundN + dice + ".mp3";
    sound.play();
  }

  //Test
  /*ker[0].dev.push(0);
  ker[0].dev.push(1);
  console.log(ker[0]);
  console.log("MTN: " + disNumber(getDevs(ker[0].dev, "mtn")));
  console.log("JOY: " + disNumber(getDevs(ker[0].dev, "joy")));
  console.log(getAllDevs(ker[0]));
  let dio = dev[0];
  ker[0].curDev = [dio.short, dio.days];
  console.log("CUR: ", ker[0].curDev); */

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
      if (Math.abs(ko.nivC) > 5) {
        ko.nivC = Math.sign(ko.nivC) * 5;
      }
      change(ko, "niv", ko.nivC);
      ko.nivCD = ko.nivC;

      let hado = ko.had;
      let ufoo = ko.ufo;
      let defo = ko.def;
      ko.defC += Math.round(ko.mtn * (ko.defo - 1) / 5 + Math.sign(ko.ufo - ko.def) * Math.random() * 5);
      change(ko, "def", ko.defC);
      ko.ufoC += Math.round(1 + Math.random() * day / 12 + (ko.ufo - ko.def) / 11);
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
      if (ko.had > 300 + Math.random() * 50 || ko.had < -100 * Math.random()) {
        rendor -= 1 + Math.round(Math.random() * 3);
      }
      if (ko.had > 1500 + Math.random() * 500 || ko.had < -200 - 100 * Math.random()) {
        rendor -= 2 + Math.floor(ko.had / 400 * Math.random());
      }
      if (Math.abs(rendor) > 8) {
        rendor = Math.sign(rendor) * 8;
      }

      let szar = Number(checkCond(ko, ko.szar)) * (150 - day) / 15 - Math.random();
      if (szar < 0) { szar = 0 };

      ko.joyC += Math.round(rendor + (ko.culto - 1) * 15 - (tax - 40) / (20 + Math.random() * 10) + (ko.niv - 50) / 15 - szar);
      if (Math.abs(ko.joyC) > 10) {
        ko.joyC = Math.sign(ko.joyC) * 10;
      }
      change(ko, "joy", ko.joyC);
      ko.joyCD = ko.joyC;

      ko.popC += Math.round(((ko.joy - 30) + (ko.niv - Math.abs(ko.niv - 50) * 2 - 20) - Number(ko.had < 0) * Math.random() * Math.abs(ko.had) + Math.random() * 10 - Math.random() * 10) / 12);
      change(ko, "pop", Math.round(ko.pop * ko.popC / 100));
      ko.popCD = ko.popC;


      let newMtn = Math.round(ko.pop / 10 * (1 + ko.niv / 30 + Math.random() / 3 - Math.random() / 3));
      sign = ko.mtn === 0 ? 1 : Math.sign(ko.mtn);
      ko.mtnC = Math.round((newMtn - ko.mtn) / ko.mtn * 100 * sign);
      ko.mtn = newMtn;
      ko.mtnCD = ko.mtnC;

      let newExp = Math.round(ko.mtn * (ko.eco + ko.defo + ko.culto) + getDevs(ko.dev, "mtn"));
      sign = ko.exp === 0 ? 1 : Math.sign(ko.exp);
      ko.expC = Math.round(((newExp - ko.exp) / ko.exp) * 100 * sign);
      ko.exp = newExp;
      ko.expCD = ko.expC;

      let newPro = ko.proC + Math.round(ko.pop * (tax / 10) * (0.4 + ko.niv / 300) - newExp);
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
        let d = ker[k].curDev;
        if (d.length < 1) continue;
        document.getElementById("ki1-" + k).innerHTML = `készül: <span class="good">${d[0]}</span>`;
        document.getElementById("ki2-" + k).innerHTML = `még <span class="bad">${d[1]}</span> nap`;
        document.getElementById("ki1-" + k).classList.add("gold");
        document.getElementById("ki2-" + k).classList.add("gold");
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
        if (Math.abs(chPer) == Infinity) { chTxt = "<i>[0-ról]</i>" }
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
          if (Math.abs(chV) == Infinity) { chT = "<i>[0-ról]</i>" };
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

  function checkCond(ko, cond) {
    let vs = cond.split('_');
    let [vvar, vop, vval] = [vs[0], vs[1], Number(vs[2])];
    if (vop === ">") {
      if (ko[vvar] > vval) {
        return true;
      }
    } else {
      if (ko[vvar] < vval) {
        return true;
      }
    }
    return false;
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
    }
    kerStr += `
      <fieldset id="supField">
        <legend id="supTitle">Támogatások</legend>
        <table id="supTable"></table>
      </fieldset>
      <br>
      <div id="kerInfo">
        <div id="kerBtns">
          <button class="kerBtn" id="kerVisit">Látogatás <span class="good">(+1 Öröm)</span></button>
          <button class="kerBtn" id="kerStats">Elemzés <span class="gold">(-100$)</span></button>
        </div>
      </div>
      <br>
      <div id="devs"></div>
    `;

    //gendevs
    let buy = [];
    let almost = [];
    for (let d of dev) {
      if (ko.dev.indexOf(d.id) < 0 && d.price <= money) {
        buy.push(d.id);
      } else if (ko.dev.indexOf(d.id) < 0 && d.price <= money * 1.2) {
        almost.push(d.id);
      }
    }
    let devStr = "";

    if (ko.dev.length > 0 || buy.length > 0 || almost.length > 0) {
      let hasDO = getAllDevs(ko.dev);
      let buyDO = getAllDevs(buy);
      let almostDO = getAllDevs(almost);
      //folyt. táblázatrajzolás
    }

    modal.innerHTML = kerStr;

    document.getElementById("kerStats").disabled = money < 100;
    updateSup(ko);

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

    function visit() {
      //lincs!
      kerAct = true;
      change(ko, "joy", 1);
      let dumarr = [];
      for (v of ko.vélemény) {
        if (checkCond(ko, v.cond)) {
          dumarr.push(rnd(v.duma));
        }
      }

      let szám = 6 - dumarr.length;

      if (szám > 3) {
        let d1 = rnd(ko.semmi);
        let d2 = rnd(ko.semmi);
        dumarr.push(d1);
        if (d2 !== d1) {
          dumarr.push(d2);
        }
      } else if (szám > 0) {
        if (Math.random() > .35) {
          dumarr.push(rnd(ko.semmi));
        }
      } else if (szám < 0) {
        dumarr = dumarr.slice(0, 6);
      }

      let dumaStr = `<ul>`;
      for (d of dumarr) {
        dumaStr += `
          <li>${d}</li>
        `
      }
      dumaStr += `</ul>`;
      document.getElementById("kerInfo").innerHTML = dumaStr;
    }

    function openStat() {
      money -= 100;
      kerAct = true;
      let statArr = ["pop", "pro", "mtn", "exp", "niv", "joy", "ufo", "def", "had"];
      let statStr = `
      <fieldset id="statField">
        <legend id="statTitle">Statisztikák</legend>
        <table id="statTable">
          <tr id="statHead">
            <th>TÉTEL</th>
            <th>ÉRTÉK</th>
            <th>VÁLTOZÁS</th>
          </tr>
      `;
      for (s of statArr) {
        let si = selector.findIndex(x => x.val === s);
        let so = selector[si];
        let vd = ko[s];
        let cd = ko[s + "CD"];
        let qvc = "neutral";
        let qcc = cd < 0 ? "bad" : cd > 0 ? "good" : "neutral";
        if (so.reverse) {
          qcc = cd < 0 ? "good" : cd > 0 ? "bad" : "neutral";
        };
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
        if (Math.abs(cd) == Infinity) { ct = "<i>[0-ról]</i>" }
        statStr += `
        <tr>
          <th class="statLabel" title="${so.desc}">${so.name}</th>
          <th class=${qvc}>${vt}</th>
          <th class=${qcc}>${ct}</th>
        </tr>`
      }

      statStr += `</table></fieldset>`

      document.getElementById("kerInfo").innerHTML = statStr;
    }

    document.getElementById("closeKer").addEventListener("click", closeModal);
    document.getElementById("kerVisit").addEventListener("click", visit);
    document.getElementById("kerStats").addEventListener("click", openStat);
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
    let mc = money < 1000 ? "bad" : money > 1000000 ? "good" : "gold";
    let trump = trophy.length === 0 ? "" : trophy.length;
    let pageStr = `
      <div id="header">
        <div id="topMenu">
          <span class="navNr ${mc}" title=${money.toLocaleString()}>${bigNumber(money, "$")}</span>
          <span class="navPair">
            <span class="navNr">${trump}</span>
            <img class="navBtn" id="saveBtn" src="./img/trophy.png">
          </span>
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
      let sel = selector[k];
      let selClass = sel.val === selVal ? "selected" : "unselected";
      let selStr = `<button id="s${k}" title=${sel.desc} class="navBtn selBtn ${selClass}">${sel.name}</button>`;
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
