const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

function setMenu(open) {
  menuBtn.setAttribute("aria-expanded", String(open));
  mobileMenu.style.display = open ? "block" : "none";
  mobileMenu.setAttribute("aria-hidden", String(!open));
}

let isOpen = false;
menuBtn?.addEventListener("click", () => {
  isOpen = !isOpen;
  setMenu(isOpen);
});

mobileMenu?.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.tagName === "A") {
    isOpen = false;
    setMenu(false);
  }
});

// Close menu if resizing to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 720) {
    isOpen = false;
    setMenu(false);
  }
});
