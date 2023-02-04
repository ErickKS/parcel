// NAV

const btnMobile = document.getElementById("btnMobile");
const nav = document.getElementById("navigation");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  nav.classList.toggle("active");

  window.onclick = (event) => {
    if (!event.target.matches(".nav")) {
      if (window.screen.width <= 780) {
        nav.classList.remove("active");
      }
    }
  };
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// PREVENT LINKS

const preventLinks = document.querySelectorAll("[data-prevent]");

for (let i = 0; i < preventLinks.length; i++) {
  let links = preventLinks[i];

  links.addEventListener("click", (event) => event.preventDefault());
}
