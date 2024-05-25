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
  window.tax = 40;
  window.day = 1;
  window.alien = 0;
  window.bascol = ["#f00", "#bbb", "#0f0"];
  window.ker = [
    {
      num: 0,
      name: "Erdőszél",
      desc: "Egészséges, pihentető túrák, hőssegédek és bűvös lények otthona.",
      x: 1,
      y: 1,
      pop: Math.floor(1 + Math.random() * 100),
      mtn: Math.floor(1 + Math.random() * 20),
      lvl: Math.floor(30 + Math.random() * 30),
      ord: Math.floor(40 + Math.random() * 30),
      had: Math.floor(10 + Math.random() * 20),
      popC: 0,
      mtnC: 0,
      lvlC: 0,
      ordC: 0,
      hadC: 0,
      dev: [],
      ev: [],
      eco: .7,
      ordo: 1,
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
      lvl: Math.floor(5 + Math.random() * 25),
      ord: Math.floor(35 + Math.random() * 30),
      had: Math.floor(0 + Math.random() * 10),
      popC: 0,
      mtnC: 0,
      lvlC: 0,
      ordC: 0,
      hadC: 0,
      dev: [],
      ev: [],
      eco: .7,
      ordo: 1,
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
      lvl: Math.floor(0 + Math.random() * 20),
      ord: Math.floor(5 + Math.random() * 20),
      had: Math.floor(15 + Math.random() * 15),
      popC: 0,
      mtnC: 0,
      lvlC: 0,
      ordC: 0,
      hadC: 0,
      dev: [],
      ev: [],
      eco: .7,
      ordo: .7,
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
      lvl: Math.floor(40 + Math.random() * 30),
      ord: Math.floor(40 + Math.random() * 30),
      had: Math.floor(5 + Math.random() * 10),
      popC: 0,
      mtnC: 0,
      lvlC: 0,
      ordC: 0,
      hadC: 0,
      dev: [],
      ev: [],
      eco: 1,
      ordo: 1,
      culto: 1,
    },
    {
      num: 4,
      name: "Városközpont",
      x: 2,
      y: 2,
      pop: Math.floor(800 + Math.random() * 500),
      mtn: Math.floor(150 + Math.random() * 200),
      lvl: Math.floor(55 + Math.random() * 45),
      ord: Math.floor(60 + Math.random() * 40),
      had: Math.floor(20 + Math.random() * 15),
      popC: 0,
      mtnC: 0,
      lvlC: 0,
      ordC: 0,
      hadC: 0,
      dev: [],
      ev: [],
      eco: 1,
      ordo: 1.3,
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
      lvl: Math.floor(70 + Math.random() * 30),
      ord: Math.floor(40 + Math.random() * 25),
      had: Math.floor(15 + Math.random() * 15),
      popC: 0,
      mtnC: 0,
      lvlC: 0,
      ordC: 0,
      hadC: 0,
      dev: [],
      ev: [],
      eco: 1.3,
      ordo: 1.3,
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
      lvl: Math.floor(5 + Math.random() * 25),
      ord: Math.floor(10 + Math.random() * 20),
      had: Math.floor(50 + Math.random() * 50),
      popC: 0,
      mtnC: 0,
      lvlC: 0,
      ordC: 0,
      hadC: 0,
      dev: [],
      ev: [],
      eco: 1.3,
      ordo: .7,
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
      lvl: Math.floor(30 + Math.random() * 40),
      ord: Math.floor(40 + Math.random() * 30),
      had: Math.floor(0 + Math.random() * 10),
      popC: 0,
      mtnC: 0,
      lvlC: 0,
      ordC: 0,
      hadC: 0,
      dev: [],
      ev: [],
      eco: 1,
      ordo: 1,
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
      lvl: Math.floor(65 + Math.random() * 35),
      ord: Math.floor(30 + Math.random() * 70),
      had: Math.floor(0 + Math.random() * 5),
      popC: 0,
      mtnC: 0,
      lvlC: 0,
      ordC: 0,
      hadC: 0,
      dev: [],
      ev: [],
      eco: 1.3,
      ordo: 1,
      culto: 1.3,
    }
  ];
  console.log(ker);
  function pageUpdate(foldal, val) {
    if (foldal) {
      let pageStr = `
      <div id="header">
        <div id="topMenu">
          <span class="navPair">
            <img class="navPic" src="./img/sun.jpg">
            <span class="navNr">${day}</span>
          </span>
          <span class="navPair">
            <img class="navPic" src="./img/alien.jpg">
            <span class="navNr">${alien}%</span>
          </span>
          <button class="navBtn" id="saveBtn">SAVE</button>
          <button class="navBtn" id="loadBtn">LOAD</button>
          <img id='soundBtn' src=${musIcon} alt="music">
          <img class="navBtn" id="endBtn" src="./img/moon.jpg">
        </div>
        <div id="selectBar">selector</div>
        <div id="extraInfo">xtra</div>
      </div>
      `;
      for (let k = 0; k < 9; k++) {
        let kerStr = `<div id="k${k}" class="ker">${ker[k].name}</div>`;
        pageStr += kerStr;
      }
      page.innerHTML = pageStr;



      /* document.getElementById("soundBtn").addEventListener("click", changeMusic);
      document.getElementById("saveBtn").addEventListener("click", saveGame);
      document.getElementById("loadBtn").addEventListener("click", loadGame);
      document.getElementById("loadBtn").disabled = localStorage.getItem("charName") == null;
      document.getElementById("saveBtn").disabled = false; */

    }
  }
  document.getElementById("start").addEventListener("click", function () {
    //music.play();
    main.innerHTML = "";
    page.style.display = "grid";
    pageUpdate(true, "tax");
  })

}

window.addEventListener("load", _load);
