document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const closeMenuButton = document.querySelector(".close-menu-button");
  const nav = document.querySelector("nav");
  const sections = document.querySelectorAll("section");
  const navHeight = nav.offsetHeight;

  function toggleMenu() {
    navLinks.classList.toggle("active");
    closeMenuButton.classList.toggle("active");
  }

  function closeMenu() {
    navLinks.classList.remove("active");
    closeMenuButton.classList.remove("active");
  }

  menuToggle.addEventListener("click", toggleMenu);
  closeMenuButton.addEventListener("click", closeMenu);

  // Smooth scrolling for navigation links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      const targetPosition = targetSection.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Close mobile menu if open
      closeMenu();
    });
  });

  // Highlight active section in navigation
  function highlightActiveSection() {
    let scrollPosition = window.pageYOffset;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navHeight;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute("id");
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        document
          .querySelector(`.nav-links a[href="#${sectionId}"]`)
          .classList.add("active");
      } else {
        document
          .querySelector(`.nav-links a[href="#${sectionId}"]`)
          .classList.remove("active");
      }
    });
  }

  // Navigation scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
    highlightActiveSection();
  });

  highlightActiveSection();
});