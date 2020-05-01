const open = document.querySelector("#menu-btn");
const nav = document.querySelector("#nav");
const close = document.querySelector("#exit-btn");

open.addEventListener("click", toggleNav);
close.addEventListener("click", toggleNav);

function toggleNav() {
  nav.classList.toggle("open-nav");
}

var tl = gsap.timeline({ defaults: { duration: 1 } });
tl.from(".main-copy", { y: 50, opacity: 0 })
  .to(
    "h1 span",
    { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%" },
    "-=.7"
  )
  .from("ul.featured-cabins li", { y: 50, opacity: 0, stagger: 0.3 }, "-=.7");
