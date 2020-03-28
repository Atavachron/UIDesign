//
const open = document.querySelector(".open");
const exit = document.querySelector(".exit");
const nav = document.querySelector("#nav");

open.addEventListener("click", openNav);
exit.addEventListener("click", closeNav);

function closeNav() {
  nav.style.visibility = "hidden";
}

function openNav() {
  nav.style.visibility = "visible";
}
