//
const open = document.querySelector(".open");
const exit = document.querySelector(".exit");
const nav = document.querySelector("#nav");

open.addEventListener("click", openNav);
exit.addEventListener("click", closeNav);

function closeNav() {
  nav.classList.remove("open-nav");
}

function openNav() {
  nav.classList.add("open-nav");
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 500 && !nav.classList.contains("large")) {
    nav.classList.add("large");
  }
  if (window.innerWidth < 500 && nav.classList.contains("large")) {
    nav.classList.remove("large");
  }
});
