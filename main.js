const menuBurger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav_links");
const formSpent = document.querySelector(".container_spent");
const formRent = document.querySelector(".container_rent");
const pres = document.getElementById("precedent");
const suiv = document.getElementById("suivant");
const slide = new Array(
  "./assest/investment-5241253_1920.jpg",
  "./assest/money-2724241_1920.jpg",
  "./assest/maoney_2.jpg"
);
let numero = 0;
let interval;

// *********************** SLIDER AUTO ***********************

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) {
    numero = slide.length - 1;
  }
  if (numero > slide.length - 1) numero = 0;
  document.getElementById("slide").src = slide[numero];
  clearInterval(interval);

  interval = setInterval("ChangeSlide(1)", 4000);
}
ChangeSlide(1);

// *********************** calcul solde***********************

function calculSoldSpent(monSoldPrc) {
  let nouveauSolde = document.getElementById("total_solde");
  let montant = parseFloat(number1.value);
  let nouveauMontant = monSoldPrc - montant;
  nouveauSolde.textContent = nouveauMontant;
}

function calculSoldRent(monSoldPrc) {
  let nouveauSolde = document.getElementById("total_solde");
  let montant = parseFloat(number2.value);
  let nouveauMontant = monSoldPrc + montant;
  nouveauSolde.textContent = nouveauMontant;
}

// *********************storage element**************************

function storageSolde() {
  window.localStorage.setItem("depense", list_spent.innerHTML);
  window.localStorage.setItem("rente", list_rent.innerHTML);
  window.localStorage.setItem("solde", total_solde.textContent);
}

function getSolde() {
  list_spent.innerHTML = window.localStorage.getItem("depense");
  list_rent.innerHTML = window.localStorage.getItem("rente");
  total_solde.textContent = window.localStorage.getItem("solde");
}

if (window.localStorage.length == 0) {
  ("");
} else getSolde();

console.log(window.localStorage.length);

//********************** */ add histoique liste *******************

formSpent.addEventListener("submit", (e) => {
  e.preventDefault();
  let monSoldPrc = parseFloat(
    document.getElementById("total_solde").textContent
  );
  if (number1.value == "") {
    alert("Veuillez entrer une valeur svp !!!");
    return monSoldPrc;
  }
  let date = new Date().toLocaleString();
  list_spent.innerHTML += `
  <li>Depense de: ${number1.value + " €"} Pour: ${
    description1.value
  } le ${date}</li>`;
  calculSoldSpent(monSoldPrc);
  storageSolde();
  number1.value = "";
  description1.value = "";
});

formRent.addEventListener("submit", (e) => {
  e.preventDefault();
  let monSoldPrc = parseFloat(
    document.getElementById("total_solde").textContent
  );
  if (number2.value == "") {
    alert("Veuillez entrer une valeur svp !!!");
    return monSoldPrc;
  }
  let date = new Date().toLocaleString();
  list_rent.innerHTML += `<li>Rente de: ${number2.value + " €"} De la part de: ${description2.value} le ${date} </li>`;
  calculSoldRent(monSoldPrc);
  storageSolde();
  number2.value = "";
  description2.value = "";
});

//************************ */ pour le menu burger******************

menuBurger.addEventListener("click", () => {
  navLinks.classList.toggle("mobil-menu");
});

//************************ */ pour le slide******************

pres.addEventListener("click", () => {
  ChangeSlide(-1);
});

suiv.addEventListener("click", () => {
  ChangeSlide(1);
});

//************************** */ remove liste*******************

list_spent.addEventListener("click", (e) => {
  e.target.remove();
  storageSolde();
});

list_rent.addEventListener("click", (e) => {
  e.target.remove();
  storageSolde();
});
