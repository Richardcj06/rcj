
let lastScrollTop = 0;
const header = document.getElementById("encabezado");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // Deslizando hacia abajo
    header.style.transform = "translateY(-100%)";
  } else {
    // Deslizando hacia arriba
    header.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll;
});
