// javascript

const get = element => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");

open.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

exit.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 850 && !nav.classList.contains("large")) {
    nav.classList.add("large");
  }
  if (window.innerWidth < 850 && nav.classList.contains("large")) {
    nav.classList.remove("large");
  }
});
