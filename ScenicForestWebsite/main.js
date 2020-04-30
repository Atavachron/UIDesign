const open = document.querySelector("#menu-btn");
const nav = document.querySelector("#nav");
const close = document.querySelector("#exit-btn");

open.addEventListener("click", toggleNav);
close.addEventListener("click", toggleNav);

function toggleNav() {
  nav.classList.toggle("open-nav");
}
