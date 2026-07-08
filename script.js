const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open") ?? false;
  navToggle.setAttribute("aria-expanded", String(isOpen));
  header?.classList.toggle("nav-active", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
});

nav?.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) {
    return;
  }

  nav.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  header?.classList.remove("nav-active");
  document.body.classList.remove("nav-open");
});

if (window.lucide) {
  window.lucide.createIcons();
}
