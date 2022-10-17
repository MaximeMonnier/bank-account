const menuBurger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav_links");
const formSpent = document.querySelector(".container_spent");
const formRent = document.querySelector(".container_rent");
const slide = new Array(
  "./assest/money-2724241_1920.jpg",
  "./assest/maoney_2.jpg",
  "./assest/investment-5241253_1920.jpg"
);
let numero = 0;

console.log(slide);

// *********************** SLIDER AUTO***********************

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) {
    numero = slide.length - 1;
  }
  if (numero > slide.length - 1) numero = 0;
  document.getElementById("slide").src = slide[numero];

  setInterval("ChangeSlide(1)", 4000);
}

// *********************** calcul solde***********************

function calculSoldSpent(monSoldPrc) {
  let nouveauSolde = document.getElementById("total_solde");
  let montant = parseFloat(number1.value);
  console.log(montant);
  let nouveauMontant = monSoldPrc - montant;
  console.log(nouveauSolde);
  nouveauSolde.textContent = nouveauMontant;
  console.log(monSoldPrc);
}

function calculSoldRent(monSoldPrc) {
  let nouveauSolde = document.getElementById("total_solde");
  let montant = parseFloat(number2.value);
  console.log(montant);
  let nouveauMontant = monSoldPrc + montant;
  console.log(nouveauSolde);
  nouveauSolde.textContent = nouveauMontant;
  console.log(monSoldPrc);
}

// *********************storage element**************************

function storageSolde() {
  window.localStorage.listeSoldeSpent = list_spent.innerHTML;
  window.localStorage.listeSoldeRent = list_rent.innerHTML;
}

function getSolde() {
  list_spent.innerHTML = window.localStorage.listeSoldeSpent;
  list_rent.innerHTML = window.localStorage.listeSoldeRent;
}
getSolde();

//********************** */ add element*******************

formSpent.addEventListener("submit", (e) => {
  e.preventDefault();
  let monSoldPrc = parseFloat(
    document.getElementById("total_solde").textContent
  );
  list_spent.innerHTML += `<li>Depense de: ${number1.value + " Euro"} Pour: ${
    description1.value
  } </li>`;
  calculSoldSpent(monSoldPrc);
  number1.value = "";
  description1.value = "";
  storageSolde();
});

formRent.addEventListener("submit", (e) => {
  e.preventDefault();
  let monSoldPrc = parseFloat(
    document.getElementById("total_solde").textContent
  );
  list_rent.innerHTML += `<li>Rente de: ${number2.value} De la part de: ${description2.value} </li>`;
  calculSoldRent(monSoldPrc);
  number2.value = "";
  description2.value = "";
  storageSolde();
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

//************************ */ pour le menu burger******************

menuBurger.addEventListener("click", () => {
  navLinks.classList.toggle("mobil-menu");
});
