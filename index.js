const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const hamburgerIcon = hamburger.querySelector("i");

function openMenu() {
  navLinks.classList.add("active");
  hamburgerIcon.classList.remove("ri-menu-4-line");
  hamburgerIcon.classList.add("ri-close-line");
}

function closeMenu() {
  navLinks.classList.remove("active");
  hamburgerIcon.classList.remove("ri-close-line");
  hamburgerIcon.classList.add("ri-menu-4-line");
}

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.contains("active") ? closeMenu() : openMenu();
});

// Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});

// Prevent menu from closing when clicking inside it
navLinks.addEventListener("click", (e) => {
  e.stopPropagation();
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start", // Align the top of the section with the top of the viewport
      });

      // Close the mobile menu if it's open
      navLinks.classList.remove("active");
      hamburgerIcon.classList.remove("ri-close-line");
      hamburgerIcon.classList.add("ri-menu-4-line");
    }
  });
});

// Particles.js initialization
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true,
    },
  },
  retina_detect: true,
});
