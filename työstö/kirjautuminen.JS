document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
  if (localStorage.getItem("kirjautunut") === "kylla") {
    document.getElementById("tervetuloa_teksti").textContent +=
      localStorage.getItem("nimi");
    document.getElementById("kirjautumis_lomake").style.display = "none";
  } else {
    document.getElementById("kirjautumis-lomake");
    document.getElementById("kirjaudu_ulos").style.display = "none";
  }
}

function kirjaudu() {
  localStorage.setItem("nimi", document.getElementById("nimi").value);
  localStorage.setItem("kirjautunut", "kylla");
}

function kirjaudu_ulos() {
  localStorage.clear("nimi");
}

/* navbar scrollaus */

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
