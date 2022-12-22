// NAV

const btnMobile = document.getElementById("btnMobile");
const nav = document.getElementById("navigation");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  nav.classList.toggle("active");

  document.documentElement.onclick = function (event) {
    if (event.target !== dropBtn && event.target !== dropList) {
      if (window.screen.width <= 990) {
        dropBtn.classList.remove("active");
        dropList.classList.remove("active");
        nav.classList.remove("active");
      }
    }
  };
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// CLOSE NAV ON CLICK UL -> A

for (const navLink of document.querySelectorAll(".navLink")) {
  navLink.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// PREVENT LINKS

const preventLinks = document.querySelectorAll("[data-prevent]");

for (let i = 0; i < preventLinks.length; i++) {
  let links = preventLinks[i];

  links.addEventListener("click", (event) => event.preventDefault());
}
