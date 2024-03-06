window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa1();
  esemenykezeles1();
  esemenykezeles2();

  esemenykezeles4();
});

function elemekElerese1() {
  /**Ide jön az első feladat */
  const ELEM = document.querySelectorAll("section h2")[0];
  console.log(ELEM.innerHTML);
}
function elemekElerese2() {
  /**Ide jön az 2.  feladat */
  ELEM = document.querySelectorAll("#ide")[0];
  ELEM.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese3() {
  /**Ide jön az 3. feladat */
  const ELEM = document.querySelectorAll(".ide")[0];
  ELEM.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese4() {
  /*4. feladat*/
  const listaELEM = document.querySelectorAll(".lista")[0];

  let genszam = "<ul>";
  for (let i = 0; i < 5; i++) {
    let veletlen = Math.floor(Math.random() * 20 + 10);
    genszam += `<li>${veletlen}</li>`;
  }
  genszam += "<ul>";
  listaELEM.innerHTML = genszam;
}
function elemekFormazasa1() {
  /*5.feladat*/
  const listaELEM = document.querySelectorAll(".lista")[0];
  listaELEM.classList.add("formazott");
}
function esemenykezeles1() {
  /*6.feladat */
  const listaELEM = document.querySelectorAll(".lista")[0];
  const kattutanELEM = document.querySelectorAll(".kattintasutan")[0];

  listaELEM.addEventListener("click", function () {
    kattutanELEM.innerHTML = listaELEM.innerHTML;
  });
}
function esemenykezeles2() {
  const feladatELEM = document.querySelectorAll(".feladat")[0];
  feladatELEM.innerHTML = "<button>OK</button>";

  const gombELEM = document.querySelectorAll(".feladat button")[0];
  gombELEM.addEventListener("click", function () {
    feladatELEM.innerHTML = `<img src="kep/ez.jpeg" alt="kep">`;
    esemenykezeles3()
  });
}
function esemenykezeles3() {
  const kepELEM = document.querySelector(".feladat img");
  kepELEM.addEventListener("mouseenter", function () {
    kepELEM.style.width = "120%";
  });
  kepELEM.addEventListener("mouseleave", function () {
    kepELEM.style.width = "100%";
  });
}
function esemenykezeles4() {
  const taroloELEMEK = document.querySelectorAll(".elem");
  const eredmenyELEM = document.querySelector(".megjelenito");

  for (let i = 0; i < taroloELEMEK.length; i++) {
    taroloELEMEK[i].addEventListener("click", function (event) {
      eredmenyELEM.innerHTML += event.target.innerHTML;
    });
  }
}
