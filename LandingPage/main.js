//

const get = element => document.getElementById(element);

const open = get("menu-btn");
const close = get("exit-btn");
const nav = get("nav");

open.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
