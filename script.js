const menuBtn = document.getElementById("menu-btn");
const headerNav = document.getElementById("header-nav");

let hasScroll = true;
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("is-open");
  headerNav.classList.toggle("is-open");
  hasScroll = !hasScroll;
  document.body.style.overflow = hasScroll ? "visible" : "hidden";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    menuBtn.classList.remove("is-open");
    headerNav.classList.remove("is-open");
    document.body.style.overflow = "visible";
  }
});
