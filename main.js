function _load() {
  var gameover = false;
  function el(id) {
    return document.getElementById(id);
  }
  var music = el("music");
  var sound = el("sound");
  music.volume = .9;
  sound.volume = .7;
  var gmv = .9;
  var gsv = .7;
  music.loop = true;
  sound.loop = false;
  var timo;
  var timo2;
  var main = el("main");
  var page = el("page");
  var modal = el("modal");
  var happen = el("happen");
  var fly = el("fly");
  var hf = el("hf");
  hf.style.display="none";
  let okBtn = [
    {
      type: "rnd",
      txt: "OK"
    }
  ];
  let badBtn = [
    {
      type: "rnd",
      txt: "bad",
      hang: false
    }
  ];
  let goodBtn = [
    {
      type: "rnd",
      txt: "good",
      hang: true
    }
  ];
  var kerAct = false;
  var pushMessage = [];
  page.style.display = "none";
  modal.style.display = "none";
  window.curMusic = "basicMusic";
  music.src = "./audio/" + curMusic + ".mp3";
  sound.src = "./audio/done.mp3";
  window.tax = 50;
  window.money = 10000;
  window.pros = 1;
  window.trophy = [];
  window.day = 1;
  window.rnd = (arr) => arr[Math.floor(Math.random() * arr.length)];
  window.selector = [
    {
      name: "Pénz",
      val: "money",
    },
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
      good: 7000,
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
      name: "Fenntart",
      val: "mtn",
      desc: "A&nbsp;lakosság&nbsp;alapellátása",
      mer: " $",
      sum: true,
      reverse: true,
      good: 300,
      bad: 1000
    },
    {
      name: "Kiadás",
      val: "exp",
      desc: "Fenntartás&nbsp;x&nbsp;Támogatások&nbsp;+&nbsp;Fejlesztésfenntartás",
      mer: " $",
      sum: true,
      reverse: true,
      good: 600,
      bad: 2000
    },
    {
      name: "Idegen",
      val: "ufo",
      desc: "Idegenek&nbsp;által&nbsp;okozott&nbsp;károk",
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
  
  window.hfnames = ['U.G', 'EDE', 'IMI', 'LEO', 'ATI', 'EVI', 'BEA', 'PAL', 'NOE', 'XYZ'];
  window.hfscores = [300, 270, 240, 210, 180, 150, 120, 90, 60, 30];
  if (localStorage.getItem("hfnames")) {
    hfnames = localStorage.getItem("hfnames").split(",");
    hfscores = localStorage.getItem("hfscores").split(",");
  }
  var pos = 9;
  function inBajnok(e) {
    let curw = e.target.value;
    let curp = curw.length-1;
    let curl = curw.charAt(curp);
    if (/[öüóőűúéáí]/i.test(curl)) {
      curw = curw.slice(0, -1);
      e.target.value = curw;
    }
  }

  function finBajnok(e) {
    let champ = e.target.value;
    hfnames[pos]= champ.toUpperCase();
    htStr = "";
    for (let i = 0; i < 10; i++) {
      let hs = hfscores[i];
      let hn = hfnames[i];
      htStr += `
        <tr id="hfline-${i}">
          <td class="hend">${i+1}</td>
          <td class="hsta">${hn}</td>
          <td class="hend">${hs}</td>
        </tr>
      `;
    }
    el("ht").innerHTML=htStr;
    localStorage.setItem("hfnames", hfnames.join())
    localStorage.setItem("hfscores", hfscores.join())
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        el("hfline-"+i).style.animation = "colorstxt 0.8s linear infinite";
      }, i*180);
    }
  }
    

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
      }
    }
  }

  updateTotals();

  function valToName(txt) {
    let si = selector.findIndex(x => x.val === txt);
    return selector[si].name;
  }

  function getDev(n) {
    let di = dev.findIndex(x => x.id === n);
    return dev[di];
  }

  function getKob(n) {
    let ki = ker.findIndex(x => x.num === n);
    return ker[ki];
  }

  function getDevs(darr, val) {
    if (darr.length < 1) return 0;
    let sum = 0;
    for (d of darr) {
      let dio = getDev(d);
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

  function newDev(ko, deo) {
    ko.dev.push(deo.id);
    for (e of deo.effect) {
      if (e.val !== "mtn" && e.val !== "pro" && e.val !== "pop") {
        let ec = e.val + "C";
        ko[ec] += e.ch;
      }
    }
  }

  function delDev(ko, deo) {
    const index = ko.dev.indexOf(deo.id);
    if (index > -1) {
      ko.dev.splice(index, 1);
    }
    for (e of deo.effect) {
      if (e.val !== "mtn" && e.val !== "pro" && e.val !== "pop") {
        let ec = e.val + "C";
        ko[ec] -= e.ch;
      }
    }
  }

  function message(txt, kid, btn, hang = "x") {
    let kob = false;
    if (kid > -1) { kob = getKob(kid) };
    happen.classList.remove("nosee");
    happen.classList.add("see");
    let msgStr = `
      <div id="mescard">
        <p>${txt}</p>
        <div id="mesBtns">
      `;
    for (let i = 0; i < btn.length; i++) {
      let b = btn[i];
      let bt = "";
      if (b.type === "rnd") {
        let bar = ["OK"];
        switch (b.txt) {
          case "OK":
            bar = ["OK", "Ez van.", "Ilyen az élet.", "Jól van az úgy.", "Helyes!", "Így van!", "Nocsak!", "Micsoda hír!", "Értem.", "Nem mondod!", "Vettem.", "Jó."]
            break;

          case "good":
            bar = ["Fasza!", "Király!", "Örömöm végtelen!", "Na végre!", "Szuper!", "Zsír!", "Juhéjj!", "Azta!", "De jó!"]
            break;

          case "bad":
            bar = ["Naba...", "Leszarom.", "Megérdemlik.", "Ne már!", "Mi a szösz?", "Ez van!", "Hínye!", "Bakker!", "Na és?", "A szajha életbe!", "Szar ügy.", "Anyátokat!", "Kellemetlen.", "Ó, jaj!", "Hűha!"]
            break;

          default:
            break;
        }
        bt = rnd(bar);
      } else if (typeof b.txt == "object") {
        bt = rnd(b.txt);
      } else {
        bt = b.txt;
      }
      msgStr += `<button class="mesBtn" id="mb-${i}">${bt}</button>`;
    }
    msgStr += `</div></div>`;
    happen.innerHTML = msgStr;
    if (typeof hang === "boolean") {
      emo(hang)
    } else if (hang !== "x") {
      sound.src = "./audio/" + hang + ".mp3";
      sound.play();
    }

    function mesEnd(e) {
      let i = e.target.id.split("-")[1];
      let bp = btn[i];
      sound.pause();
      if (bp.hang !== undefined) {
        if (typeof bp.hang === "boolean") {
          emo(bp.hang)
        } else if (hang !== "x") {
          sound.src = "./audio/" + bp.hang + ".mp3";
          sound.play();
        }
      }

      if (bp.txt === "bad" && kob) {
        let c = -Math.round(1.25 + Math.random() * 2);
        flier(kob, [
          {
            val: "joy",
            ch: c
          }
        ])
      }

      if (typeof bp.type == 'number') {
        console.log("Csinálom: ", bp.type);
        switch (bp.type) {
          case 6:
            for (k of ker) {
              k.ufoC += Math.round(50 + Math.random() * (100 - k.defo * 50));
            }
            break;

          case 8:
            for (k of ker) {
              k.nivC += Math.round(5 + Math.random() * 4 + k.eco);
              k.joyC += Math.round(4 + Math.random() * 3);
              k.popC += Math.round(10 + Math.random() * 10);
            }
            pros = 1.25
            break;

          case 9:
            for (k of ker) {
              k.joyC -= Math.round(10 + Math.random() * (10 - k.culto * 5));
              k.nivC -= Math.round(15 + Math.random() * (15 - k.eco * 10));
              k.ufoC += Math.round(50 + Math.random() * (50 - k.defo * 20));
              k.defC -= Math.round(100 + Math.random() * (1.5 - k.defo) * 150);
              k.popC -= Math.round(7 + Math.random() * 5);
            }
            pros = 0.5
            break;

          case 10:
            for (k of ker) {
              k.nivC += 1 + Math.round(k.eco + Math.random() * k.eco * 4);
              k.ufoC += Math.round(250 + Math.random() * (500 - k.defo * 100));
              k.popC -= Math.round(8 + Math.random() * (12 - k.defo * 5));
            }
            pros = 0.7
            break;

          case 11:
            for (k of ker) {
              k.nivC += Math.round(12 + Math.random() * k.eco * 10);
              k.joyC += Math.round(5 + Math.random() * k.nivC / 2);
              k.popC += 1;
              if (k.had < 300) {
                k.defC += Math.round(50 + Math.random() * k.defo * 100);
              }
            }
            pros = 1;
            money += 1000000;
            break;

          case 12:
            for (k of ker) {
              money += Math.round((2 - k.culto) * 50000);
              k.culto = 1.3;
              k.joyC += Math.round(5 + Math.random() * 5);
              k.nivC += Math.round(1 + Math.random() * (k.eco - k.defo) * 5);
              k.popC += 3;
            }
            break;

          case 13:
            money = Math.round(money / 2);
            break;

          case 14:
            for (k of ker) {
              if (k.eco < 1.1) { k.eco += .3; }
              k.joyC += Math.round(5 + Math.random() * 5);
              k.nivC += Math.round(15 + Math.random() * 10);
              k.proC += Math.abs(k.pro);
              k.defC -= parseInt((Math.random() / 4 + (1.5 - k.defo) / 4) * k.def)
              if (k.defo > 1.1) { k.defo -= .3; }
            }
            tax = tax >= 40 ? tax - 20 : tax >= 20 ? tax - 10 : 10;
            money += Math.round(10000000 + money / 5 + Math.random() * 5000000);
            pros = 1.5;
            break;

          case 15:
            let xs = "";
            for (k of ker) {
              k.joyC -= Math.round(k.num * 2 + Math.random() * 10);
              k.nivC -= Math.round(k.num + 10 + Math.random() * 10);
              k.popC -= Math.round(10 + Math.random() * k.num);
              k.proC -= parseInt(k.pro / 2);
              k.ufoC += Math.round((10 + k.num) * 50 + (2 - k.defo) * Math.random() * 500)
              k.defC -= Math.round((1 + k.num) * 75 + (2 - k.defo) * Math.random() * 300)
              if (k.defo < 1.2) {
                k.defo += .3;
              };
              if (k.dev.length > 0 && k.had < 500 + Math.random() * 300) {
                let devNo = rnd(k.dev);
                let ndod = getDev(devNo);
                delDev(k, ndod);
                xs += `
                <tr>
                  <td>A GyFSzNy lerombolta <span class="gold">${k.hely}</span>:</td>
                </tr>
                <tr>
                  <td class="bad center">${ndod.name}</td>
                </tr>
                `;
              }
            }
            if (xs.length > 0) {
              flier(k, [], xs, true);
            }
            tax = tax <= 40 ? tax + 20 : tax <= 60 ? tax + 10 : 90;
            money -= Math.round(1000000 + money / 6 + Math.random() * 1000000);
            pros = 0.75;
            break;

          case 19:
            for (k of ker) {
              k.joyC += Math.round(5 + Math.random() * 5);
              k.nivC += Math.round(5 + Math.random() * 5);
              k.popC += Math.round(1 + Math.random() * k.num);
              k.proC += parseInt(k.pro / 3);
              k.ufoC -= Math.round((1 + k.defo) * 200 + Math.random() * 150);
            }
            money -= 2000000;
            pros = 1;
            break;

          case 20:
            let hit = false;
            do {
              let hdev = Math.floor(Math.random() * dev.length);
              let hk = rnd(ker);
              let hd = getDev(hdev);
              if (hk.dev.indexOf(hdev) < 0) {
                let xxs = `
                  <tr>
                    <td>Új fejlesztés:</td>
                    <td class="good">${hd.name}</td>
                  </tr>
                  `;
                flier(hk, [], xxs);
                hit = true;
                newDev(hk, hd);
              }
            } while (hit === false);
            break;

          case 21:
            for (k of ker) {
              k.nivC -= 5 + Math.round(Math.random() * (2 - k.eco) * 10);
              k.ufoC += Math.round(1000 + Math.random() * (1000 - k.defo * 250));
              k.popC -= Math.round(15 + Math.random() * (20 - k.defo * 5));
              k.joyC -= Math.round(10 + Math.random() * (15 - k.defo * 5));
            }
            break;

          case 22:
            let xys = "";
            let chlp = [
              {
                val: "joy",
                ch: "-Math.round(1+Math.random()*4)"
              },
              {
                val: "niv",
                ch: "-Math.round(1+Math.random()*4)"
              },
              {
                val: "pro",
                ch: "-Math.round(Math.random()*1000)"
              },
              {
                val: "def",
                ch: "-Math.round(250+Math.random()*150)"
              },
              {
                val: "ufo",
                ch: "Math.round(250+Math.random()*150)"
              }
            ];
            let xhk = rnd(ker);
            if (xhk.dev.length > 0) {
              let dNo = rnd(xhk.dev);
              let dod = getDev(dNo);
              delDev(xhk, dod);
              xys = `
              <tr>
                <td colspan="2">Az idegenek lerombolták:</td>
              </tr>
              <tr>
                <td colspan="2" class="bad center">${dod.name}</td>
              </tr>
              `;
            }
            flier(xhk, chlp, xys);
            if (pros > .1) {
              pros -= Math.random() / 15;
            }
            break;

          default:
            break;

        }
      }

      if (bp.type === "change" && kob) {
        flier(kob, bp.change)
      }

      if (bp.type === "restart") {
        window.location.reload(true);
        return;
      }

      //Hall of Fame
      if (bp.type === "hf") {
        happen.innerHTML = "";
        happen.classList.remove("see");
        happen.classList.add("nosee");
        page.style.display = "none";
        modal.classList.add("nosee");
        hf.classList.remove("nosee");
        hf.style.display="grid";
        document.body.classList.add("brighten");
        sound.pause();
        music.pause();
        music.src="./audio/hallOfFame.mp3";
        music.volume = gmv;
        music.play();
        let score = day + trophy.length * 50;
        let hfStr = `
          <div id="hftitle" class="hfspan">HALL OF FAME</div>
          <table id="ht"></table>
          <button class="nosee"></button>
        `;
        hf.innerHTML = hfStr;
        let htStr="";
        let bajnok="";
        let hit = false;
        for (let i = 0; i < 10; i++) {
          let hs = hfscores[i];
          let hn = hfnames[i];
          if (score >= hs && hit === false) {
            pos = i;
            hit = true;
            hfscores.splice(pos, 0, score);
            hfscores.pop();
            hfnames.splice(pos, 0, "");
            hfnames.pop();
            hn= `
              <input type="text" id="hiname" maxlength="3" size="3">
            `
          }
          hs = hfscores[i];
          htStr += `
            <tr>
              <td class="hend">${i+1}</td>
              <td class="hsta">${hn}</td>
              <td class="hend">${hs}</td>
            </tr>
          `;
        }
        el("ht").innerHTML=htStr;
        el("hiname").focus();
        el("hiname").addEventListener("input", inBajnok);
        el("hiname").addEventListener("change", finBajnok);
        gameover = true;
      }


      if (bp.type === "rombolás" && kob) {
        let xs = "";
        let chalap = [
          {
            val: "joy",
            ch: "-Math.round(1+Math.random()*4)"
          },
          {
            val: "niv",
            ch: "-Math.round(1+Math.random()*4)"
          },
          {
            val: "pro",
            ch: "-Math.abs(Math.round(kob.pro*Math.random()))"
          },
          {
            val: "def",
            ch: "-Math.round(100+Math.random()*150)"
          }
        ];
        if (kob.dev.length > 0) {
          let devNo = rnd(kob.dev);
          let ndod = getDev(devNo);
          delDev(kob, ndod);
          xs = `
          <tr>
            <td colspan="2">A nép lerombolta:</td>
          </tr>
          <tr>
            <td colspan="2" class="bad center">${ndod.name}</td>
          </tr>
          `;
        }
        flier(kob, chalap, xs);
      }

      if (bp.type === "betelepítés" && kob) {
        let migráncs = 0;
        if (kob.pop < 1) {
          kob.pop = 1;
        }
        for (let i = 0; i < ker.length; i++) {
          if (i === kob.num) continue;
          ker[i].popC -= 1;
          migráncs += Math.floor(ker[i].pop / 100);
        }
        let pc = Math.round(migráncs / kob.pop * 100);
        let chalap = [
          {
            val: "joy",
            ch: Math.round(5 + Math.random() * 5)
          },
          {
            val: "niv",
            ch: Math.round(5 + Math.random() * 5)
          },
          {
            val: "def",
            ch: -Math.round(1 + Math.random() * pc / 15)
          },
          {
            val: "pop",
            ch: pc
          },
          {
            val: "money",
            ch: -Math.round(migráncs * (250 + Math.random() * 100))
          },
        ];
        let xs = `
        <tr>
          <td colspan="2">Betelepülők száma:</td>
        </tr>
        <tr>
          <td colspan="2" class="neutral center">${migráncs}</td>
        </tr>
        `;
        flier(kob, chalap, xs);
      }

      if (gameover) return;

      pushMessage.shift();
      if (pushMessage.length > 0) {
        let m = pushMessage[0];
        let h = m.hang ? m.hang : "x";
        message(m.msg, m.id, m.btn, h);
      } else {
        happen.innerHTML = "";
        happen.classList.remove("see");
        happen.classList.add("nosee");
        music.volume = gmv;
        sound.volume = gsv;
        closeModal();
      }
    }

    document.querySelectorAll(".mesBtn").forEach((m) => m.addEventListener("click", mesEnd));

  }

  function flier(kob, chs, xStr = "", noker = false) {
    let efStr = "";
    if (noker === false) {
      efStr = `<tr class="gold">
          <th colspan="2">${kob.name}</th>
        </tr>`;
    }
    if (xStr.length > 0) {
      efStr += xStr;
    };
    if (chs.length > 0) {
      for (c of chs) {
        let ccc = eval(c.ch);
        let cc = ccc < 0 ? "bad" : ccc > 0 ? "good" : "neutral";
        let [cval, bal] = "";
        let jobb = disNumber(ccc);
        if (c.val === "money" || c.val === "tax") {
          cval = c.val;
          bal = valToName(cval);
          window[cval] += ccc;
        } else {
          if (c.val === "defo") {
            bal = "Véd-tám";
            jobb = "csökken"
            cval = c.val;
          } else {
            bal = valToName(c.val);
            cval = c.val + "C";
          }
          kob[cval] += ccc;
        }
        efStr += `
                <tr>
                  <td>${bal}:</td>
                  <td title=${ccc.toLocaleString()} class=${cc}>${jobb}</td>
                </tr>
              `;
      }
    }
    if (efStr.length > 0) {
      fly.style.left = Math.round(40 + Math.random() * 20) + "vw";
      fly.style.top = Math.round(40 + Math.random() * 20) + "vh";
      fly.innerHTML = efStr;
      fly.classList.remove("effKi");
      fly.classList.add("effBe");
      clearTimeout(timo);
      clearTimeout(timo2);
      fly.style.display = "table";
      timo = setTimeout(() => {
        fly.classList.remove("effBe");
        fly.classList.add("effKi");
        fly.style.left = Math.round(40 + Math.random() * 20) + "vw";
        fly.style.top = Math.round(40 + Math.random() * 20) + "vh";
      }, 3000);
      timo2 = setTimeout(() => {
        fly.style.display = "none";
      }, 4000);
    }
   
  }


  function change(ko, val, ch) {
    let org = ko[val];
    let min = getDevs(ko.dev, val);
    if (min < 1) min = 0;
    ko[val] += ch;
    if (ko[val] < min && val.charAt(val.length - 1) !== "C") {
      ko[val + "C"] = Math.round((min - org) / org * 100);
      ko[val] = min;
    }
    if (val === "pop" && ko.pop > 20000) {
      ko.popC = Math.round((20000 - org) / org * 100);
      ko.pop = 20000;
    }
    if ((val === "niv" || val === "joy") && ko[val] > 100) {
      ko[val + "C"] = Math.round((100 - org) / org * 100);
      ko[val] = 100;
    }
  }

  function bigNumber(x, y = "") {
    let ax = Math.abs(x);
    if (ax >= 1000000000) {
      {
        let l = parseInt(x / 1000000000).toLocaleString();
        let r = String(ax).slice(-9, -8);
        r = r == "0" ? "" : "," + r;
        return l + r + "B&nbsp;" + y;
      }
    }
    if (ax >= 1000000) {
      let l = parseInt(x / 1000000);
      let r = String(ax).slice(-6, -5);
      r = r == "0" ? "" : "," + r;
      return l + r + "M&nbsp;" + y;
    }
    if (ax >= 1000) return x.toLocaleString() + "&nbsp;" + y;
    if (x < 0 && y == "fő") {
      x = 0;
    }
    return x + "&nbsp;" + y;

  }

  var disNumber = (x) =>
    x > 0 ? "+" + bigNumber(x) : x < 0 ? bigNumber(x) : "-";

  function emo(happy) {
    let soundN = happy ? "happy" : "angry";
    let dice = 1 + Math.floor(Math.random() * 8);
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
      if (ko.curDev.length > 0) {
        ko.curDev[1]--;
        if (ko.curDev[1] === 0) {
          let devi = dev.findIndex(x => x.name == ko.curDev[0]);
          let devo = dev[devi];
          let msg = `Kész lett ${névelős(devo.name)} ${ko.hely}!`;
          pushMessage.push({
            msg: msg,
            id: ko.num,
            btn: goodBtn
          });
          ko.curDev = [];
          newDev(ko, devo);
        }
      }
      
      /* if (ko.pop < 1) continue; */

      let sign = 1;
      ko.nivC += Math.round((ko.eco - 1) * 7 - (tax - 45) / (20 + Math.random() * 10));
      /* if (Math.abs(ko.nivC) > 10) {
        ko.nivC = Math.sign(ko.nivC) * 10;
      } */
      change(ko, "niv", ko.nivC);
      ko.nivCD = ko.nivC;

      let [hado, ufoo, defo] = [ko.had, ko.ufo, ko.def];
      ko.defC += Math.round(ko.mtn * (ko.defo - 0.95) / 5 + Math.sign(ko.ufo - ko.def) * Math.random() * 5);
      change(ko, "def", ko.defC);
      ko.ufoC += Math.round(day / 6 + Math.random() * day / 1.2 + (ko.ufo - ko.def / 1.25 + getDevs(ko.dev, "ufo")/(1.6 - ko.defo / 2)) / (10 + Math.random() * 3));
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
      if (ko.had > 300 + Math.random() * 200 || ko.had < -100 * Math.random()) {
        rendor -= 1 + Math.round(Math.random() * 3);
      }
      if (ko.had > 1500 + Math.random() * 500 || ko.had < -200 - 100 * Math.random()) {
        rendor -= 2 + parseInt(ko.had / 400 * Math.random());
      }
      if (Math.abs(rendor) > 8) {
        rendor = Math.sign(rendor) * 8;
      }

      let szar = Number(checkCond(ko, ko.szar)) * (150 - day) / 15 - Math.random();
      if (szar < 0) { szar = 0 };

      ko.joyC += Math.round(rendor + (ko.culto - 1) * 15 - (tax - 40) / (20 + Math.random() * 10) + (ko.niv - 50) / 15 - szar);
      /* if (Math.abs(ko.joyC) > 10) {
        ko.joyC = Math.sign(ko.joyC) * 10;
      } */
      change(ko, "joy", ko.joyC);
      ko.joyCD = ko.joyC;

      ko.popC += Math.round(((ko.joy - 30) + (ko.niv - Math.abs(ko.niv - 50) * 2 - 20) - Number(ko.had < 0) * Math.random() * Math.abs(ko.had / 4) + Math.random() * 10 - Math.random() * 10) / 12 + getDevs(ko.dev, "pop"));
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

      let newPro = ko.proC + Math.round(ko.pop * (tax / 10) * pros ** (0.4 + ko.niv / 300) - newExp) + getDevs(ko.dev, "pro");
      sign = ko.pro === 0 ? 1 : Math.sign(ko.pro);
      ko.proC = Math.round(((newPro - ko.pro) / ko.pro) * 100 * sign);
      ko.pro = newPro;
      ko.proCD = ko.proC;

      for (p in ko) {
        if (p.charAt(p.length - 1) === "C") ko[p] = 0;
      }

      //EVENTS
      let balhé = false;
      for (e of evs) {
        if (balhé == false && checkCond(ko, e.cond) && e.chance >= Math.random() && ko.had < (1500 + Math.random() * 1500) && (ko.pop > 0 || (ko.pop < 1 && e.title == "Kihal a nép"))) {
          balhé = true;
          music.volume = 0.01;
          pushMessage.push({
            msg: e.title + " " + ko.hely + "!",
            id: ko.num,
            btn: e.btns,
            hang: e.hang
          });
        }
      }
    };

    updateTotals();

    for (g of gevs) {
      if (checkCond(g.type, g.cond) && trophy.indexOf(g.num) < 0) {
        music.volume = .01;
        
        let mStr = `Egy jelentős esemény történt a városban: 
          <span class="gold">${g.name}</span>!</p>
          <p>${g.desc}`;
        if (g.end) {
          //halál
          let tr = trophy.length;
          let score = day + tr * 50;
          let hfStr = "Ez kevés ahhoz, hogy felkerülj a Hall of Fame listára. Legközelebb ügyesebb legyél!";
          let hfBtn = [{
            type: "restart",
            txt: "Újrakezdés",
          }];
          if (score >= hfscores[9]){
            hfStr = "Ezzel felkerültél a Hall of Fame listára! Gratulálunk!"
            hfBtn = [{
              type: "hf",
              txt: "Feliratkozom!",
            }]
          }
          mStr+=`
            <br><br>
            A Bazibrutál II,V. része véget ért számodra. De ne keseredj el!<br>
            Eljutottál a ${day}. napig és megszereztél a 4-ből ${tr} trófeát, így a végső pontod <span class="gold">${score}</span> lett.<br><br>
            ${hfStr}
          `          
          message(
            mStr,
            -1,
            hfBtn,
            "sadCity"
          );
          document.body.classList.add("dark");
          return;
        } else {
          if (g.trophy) {
            trophy.push(g.num);
            mStr+= `
            <br><br>
            <span class="navPair">
            <img class="zeneBtn" src="./img/trophy.png">
            <span class="navNr">${trophy.length} / 4</span>
            </span>
            `
          } 
          pushMessage.push({
            msg: mStr,
            id: -1,
            btn: [g.btn],
            hang: g.hang
          });
        }
      }
    }

    if (pushMessage.length > 0) {
      let m = pushMessage[0];
      let h = m.hang ? m.hang : "x";
      message(m.msg, m.id, m.btn, h);
    }

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
      el("extraInfo").innerHTML = xtraStr;

      let tm = el("tMinus");
      let tp = el("tPlus");
      let tm10 = el("tMinus10");
      let tp10 = el("tPlus10");
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
          emo(true);
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
          emo(false);
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
        el("ki1-" + k).innerHTML = `készül: <span class="good">${d[0]}</span>`;
        el("ki2-" + k).innerHTML = `még <span class="bad">${d[1]}</span> nap`;
        el("ki1-" + k).classList.add("gold");
        el("ki2-" + k).classList.add("gold");
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
          <span title=${so.cur.toLocaleString()} class=${cc}>${bigNumber(so.cur, so.mer)}</span>
          <span class="infoCh ${chCol}">${chTxt}</span>
        `;
      el("extraInfo").innerHTML = xtraStr;

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

        el("ki1-" + k).innerHTML = `${bigNumber(val, so.mer)}`;
        el("ki1-" + k).title = `${val}`;
        el("ki1-" + k).classList.add(cc);
        el("ki2-" + k).innerHTML = `${chT}`;
        el("ki2-" + k).classList.add(chC);

      }


    }
  }

  function changeSel(e) {
    let sn = Number(e.target.id[1]);
    selVal = selector[sn].val;
    pageUpdate();
  }

  function changeMusic(e) {
    let val = Number(e.target.value);
    gmv = val/100;
    music.volume = gmv;
  }
  
  function changeSound(e) {
    let val = Number(e.target.value);
    gsv = val/100;
    sound.volume = gsv;
  }
  
  function checkCond(ko, cond) {
    let result = true;
    let conds = cond.split(" & ");
    for (let c of conds) {
      let vs = c.split(' ');
      let [vvar, vop, vval] = [vs[0], vs[1], eval(vs[2])];
      let varvara = undefined;
      if (ko === "global") {
        varvara = window[vvar];
      } else if (ko === "total") {
        let picki = selector.findIndex((s) => s.val === vvar);
        let picko = selector[picki];
        varvara = picko.cur;
      } else {
        varvara = ko[vvar];
      }
      if (vop === ">") {
        if (varvara <= vval) {
          result = false;
        }
      } else if (vop === "<") {
        if (varvara >= vval) {
          result = false;
        }
      } else {
        if (varvara != vval) {
          result = false;
        }
      }
    }
    return result;
  }

  function névelős(str, nagy = false) {
    let ne = nagy ? "A" : "a";
    ne += (/[öüóeuioőúaéáűí]/i.test(str.charAt(0))) ? "z " : " ";
    return ne + str;
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
        <td class="supBtn ${supMap[0]}" id="eco-.7">Kevés</td>
        <td class="supBtn ${supMap[1]}" id="eco-1">Elég</td>
        <td class="supBtn ${supMap[2]}" id="eco-1.3">Sok</td>
      </tr>
      <tr>
        <th class="supLabel">Védelem:</th>
        <td class="supBtn ${supMap[3]}" id="defo-.7">Kevés</td>
        <td class="supBtn ${supMap[4]}" id="defo-1">Elég</td>
        <td class="supBtn ${supMap[5]}" id="defo-1.3">Sok</td>
      </tr>
      <tr>
        <th class="supLabel">Kultúra:</th>
        <td class="supBtn ${supMap[6]}" id="culto-.7">Kevés</td>
        <td class="supBtn ${supMap[7]}" id="culto-1">Elég</td>
        <td class="supBtn ${supMap[8]}" id="culto-1.3">Sok</td>
      </tr>
    `;
    el("supTable").innerHTML = supStr;
  }

  function openKer(e) {
    let kn = parseInt(e.target.id.slice(-1));
    let ko = ker[kn];
    page.innerHTML = "";
    page.style.display = "none";
    music.src = "./audio/" + ko.name + ".mp3";
    music.play();
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
        <legend class="kerTitle"">Támogatások</legend>
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

    modal.innerHTML = kerStr;
    el("kerStats").disabled = money < 100;
    el("kerVisit").disabled = ko.pop < 1;
    updateSup(ko);

    //gendevs
    let buy = [];
    let almost = [];
    for (let d of dev) {
      if (ko.curDev.length < 1 && ko.dev.indexOf(d.id) < 0 && d.price <= money && (d.szigor.length === 0 || d.szigor.indexOf(ko.num) > -1)) {
        buy.push(d.id);
      } else if (ko.curDev[0] !== d.name && ko.dev.indexOf(d.id) < 0 && d.price <= money * 1.5 && (d.szigor.length === 0 || d.szigor.indexOf(ko.num) > -1)) {
        almost.push(d.id);
      }
    }
    let devStr = "";

    function devAct(e) {
      let teljesSzó = e.target.id.split("-");
      let szótő = teljesSzó[0];
      let devNo = -1;
      if (teljesSzó.length > 1) devNo = Number(teljesSzó[1]);
      switch (szótő) {
        case "curEnd":
          emo(false);
          kerAct = true;
          let msg = `Meggondoltam, a francnak se kell ez ${névelős(ko.curDev[0])}!`;
          message(msg, ko.num, okBtn, false);
          ko.curDev = [];
          break;

        case "hasEnd":
          emo(false);
          kerAct = true;
          let ndod = getDev(devNo);
          delDev(ko, ndod);
          let msg3 = `${névelős(ndod.name, true)} át lett adva az enyészetnek.`;
          message(msg3, ko.num, okBtn);
          break;

        case "newDev":
          emo(true);
          kerAct = true;
          let ndo = getDev(devNo);
          money -= ndo.price;
          ko.curDev = [ndo.name, ndo.days];
          let msg4 = `Elkezdtetek dolgozni ${névelős(ko.curDev[0])} fejlesztésen, ami ${ko.curDev[1]} nap múlva lesz kész.`;
          message(msg4, ko.num, goodBtn, "hammer");
          break;

        default:
          break;
      }
    }

    if (ko.curDev.length > 0 || ko.dev.length > 0 || buy.length > 0 || almost.length > 0) {
      let hasDO = getAllDevs(ko.dev);
      let buyDO = getAllDevs(buy);
      let almostDO = getAllDevs(almost);
      let proci = ko.pro > 0 ? "good" : ko.pro < 0 ? "bad" : "neutral";
      devStr += `<fieldset id="devField">
        <legend class="kerTitle">Fejlesztések</legend>
        <div class="devSub"><i>A város pénze:</i> <b title=${money.toLocaleString()} class="aqua">${bigNumber(money, "$")}</b></div>
        <div class="devSub"><i>Kerületi profit:</i> <b title=${ko.pro.toLocaleString()} class=${proci}>${disNumber(ko.pro)} $</b></div>
        <br>
        `;


      if (ko.curDev.length > 0) {
        let oi = dev.findIndex(x => x.name === ko.curDev[0]);
        let o = dev[oi];
        devStr += `<br><div class="devLabel" id="dlCur">Folyamatban:</div>
            <table class="devTable"> 
              <tr>
                <th>Név</th>
                <th>Hatások</th>
                <th>Hátralévő idő</th>
                <th>Akció</th>
              </tr>
              <tr>
                <td>${ko.curDev[0]}</td>
                <td class="devEffectCont"><table class="devEffects">`;
        for (e of o.effect) {
          let bal = valToName(e.val);
          let jobb = disNumber(e.ch);
          let mani = e.val === "mtn" ? "bad" : "";
          devStr += `
              <tr class=${mani}>
                <td>${bal}:</td>
                <td title=${e.ch.toLocaleString()}>${jobb}</td>
              </tr>
            `;
        }
        devStr += `</table></td>
                <td>${ko.curDev[1]} nap</td>
                <td class="centralCont">
                  <button class="devBtn badB" id="curEnd">Hagyjuk</button>
                </td>
              </tr>
            </table>
          `;
      }

      if (hasDO.length > 0) {
        devStr += `<br><div class="devLabel" id="dlHas">Meglévő:</div>
            <table class="devTable"> 
              <tr>
                <th>Név</th>
                <th>Leírás</th>
                <th>Hatások</th>
                <th>Akció</th>
              </tr>
              `;
        for (o of hasDO) {
          devStr += `
            <tr><td>${o.name}</td>
            <td>${o.desc}</td>
            <td class="devEffectCont"><table class="devEffects">`;
          for (e of o.effect) {
            let bal = valToName(e.val);
            let jobb = disNumber(e.ch);
            let mani = e.val === "mtn" ? "bad" : "";
            devStr += `
              <tr class=${mani}>
                <td>${bal}:</td>
                <td title=${e.ch.toLocaleString()}>${jobb}</td>
              </tr>
            `;
          }
          devStr += `</table></td>
            <td class="centralCont">
              <button class="devBtn badB" id="hasEnd-${o.id}">Nem kell</button>
            </td>
            </tr>`;
        }
        devStr += "</table>";
      }

      if (buyDO.length > 0) {
        devStr += `<br><div class="devLabel" id="dlBuy">Indítható:</div>
            <table class="devTable"> 
              <tr>
                <th>Név + Leírás</th>
                <th>Hatások</th>
                <th>Indítás</th>
                <th>Akció</th>
              </tr>
              `;
        for (o of buyDO) {
          devStr += `
            <tr><td class="center"><b><i>${o.name}</i></b><br><br>${o.desc}</td>
            <td class="devEffectCont"><table class="devEffects">`;
          for (e of o.effect) {
            let bal = valToName(e.val);
            let jobb = disNumber(e.ch);
            let mani = e.val === "mtn" ? "bad" : "";
            devStr += `
              <tr class=${mani}>
                <td>${bal}:</td>
                <td title=${e.ch.toLocaleString()}>${jobb}</td>
              </tr>
            `;
          }
          devStr += `</table></td>
            <td title=${o.price.toLocaleString()} class="gold center">${bigNumber(o.price, "$")}<br><span class="good">${o.days} nap</span></td>
            <td class="centralCont">
              <button class="devBtn goodB" id="newDev-${o.id}">Kell</button>
            </td>
            </tr>`;
        }
        devStr += "</table>";
      }

      if (almostDO.length > 0) {
        devStr += `<br><div class="devLabel" id="dlAlmost">Fontolgatjátok:</div>
            <table class="devTable"> 
              <tr>
                <th>Név</th>
                <th>Leírás</th>
                <th>Hatások</th>
                <th>Költség</th>
              </tr>
              `;
        for (o of almostDO) {
          devStr += `
            <tr><td>${o.name}</td>
            <td>${o.desc}</td>
            <td class="devEffectCont"><table class="devEffects">`;
          for (e of o.effect) {
            let bal = valToName(e.val);
            let jobb = disNumber(e.ch);
            let mani = e.val === "mtn" ? "bad" : "";
            devStr += `
              <tr class=${mani}>
                <td>${bal}:</td>
                <td title=${e.ch.toLocaleString()}>${jobb}</td>
              </tr>
            `;
          }
          devStr += `</table></td>
            <td title=${o.price.toLocaleString()} class="gold">${bigNumber(o.price)}</td>
            </tr>`;
        }
        devStr += "</table>";
      }

      devStr += "</fieldset>"
      el("devs").innerHTML = devStr;
      el("devs").addEventListener("click", devAct);
    }

    function changeSup(e) {
      let sid = e.target.id.split('-');
      let svar = sid[0];
      let sval = Number(sid[1]);
      if (ko[svar] === sval) return;
      ko[svar] = sval;
      updateSup(ko);
      kerAct = true;
      el("closeKer").addEventListener("click", closeModal);
      document.querySelectorAll(".supBtn").forEach((s) => s.addEventListener("click", changeSup));
      if (svar === "defo") return;
      if (sval < 1) emo(false);
      if (sval > 1) emo(true);
    }

    function visit() {
      kerAct = true;
      ko.joyC++;
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

      if (ko.dev.length > Math.random() * 5) {
        let q = (ko.joy < 30 + Math.random() * 15 || ko.niv < 25 + Math.random() * 10) ? 0 : (ko.joy > 70 + Math.random() * 10 || ko.niv > 75 + Math.random() * 5) ? 1 : -1;
        if (q > -1) {
          let ds = rnd(ko.dev);
          let dd = getDev(ds);
          let ddStr = ko.devdum[q] + névelős(dd.name) + "!";
          dumarr.push(ddStr);
        }
      }

      if (ko.had > 3000 + Math.random() * 3000) {
        dumarr.push("Kezdesz olyan zsarnok lenni, mint Bitang Botond...");
      }

      let dumaStr = `
      <fieldset id="dumaField">
        <legend class="kerTitle">A nép hangja</legend>
        <ul>`;
      for (d of dumarr) {
        dumaStr += `
          <li>${d}</li>
        `
      }
      dumaStr += `</ul></fieldset>`;
      el("kerInfo").innerHTML = dumaStr;
    }

    function openStat() {
      money -= 100;
      kerAct = true;
      let statArr = ["pop", "pro", "mtn", "exp", "niv", "joy", "ufo", "def", "had"];
      let statStr = `
      <fieldset id="statField">
        <legend class="kerTitle">Statisztikák</legend>
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

      el("kerInfo").innerHTML = statStr;
    }

    el("closeKer").addEventListener("click", closeModal);
    el("kerVisit").addEventListener("click", visit);
    el("kerStats").addEventListener("click", openStat);
    document.querySelectorAll(".supBtn").forEach((s) => s.addEventListener("click", changeSup));
  }

  function closeModal() {
    music.src = "./audio/" + curMusic + ".mp3";
    music.play();
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
    let pageStr = `
      <div id="header">
        <div id="topMenu">
          <span class="navNr ${mc}" title=${money.toLocaleString()}>${bigNumber(money, "$")}</span>
          <span class="navPair">
            <img class="zeneBtn" src="./img/musicOn.png" alt="music"/>
            <input class="zeneIn" id="musicVol" type="range" min="0" max="100" step="10" value=${gmv*100}>
          </span>
          <span class="navPair">
            <img class="zeneBtn" src="./img/soundOn.png" alt="music"/>
            <input class="zeneIn" id="soundVol" type="range" min="0" max="100" step="10" value=${gsv*100}>
          </span>
          <span class="navPair">
            <span class="navNr">${day.toLocaleString()}</span>
            <img class="navBtn" id="endBtn" src="./img/moon.jpg">
          </span>
        </div>
        <div id="selectBar">
        `;
    for (let k = 1; k < 7; k++) {
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

    el("endBtn").addEventListener("click", newDay);
    document.querySelectorAll(".selBtn").forEach((s) => s.addEventListener("click", changeSel));
    el("musicVol").addEventListener("change", changeMusic);
    el("soundVol").addEventListener("change", changeSound);
    document.querySelectorAll(".ker").forEach((s) => s.addEventListener("click", openKer));
  }

  function startGame() {
    music.play();
    main.innerHTML = "";
    page.style.display = "grid";
    pageUpdate();
  }

  el("start").addEventListener("click", startGame)
  el("start2").addEventListener("click", startGame)

}

window.addEventListener("load", _load);
