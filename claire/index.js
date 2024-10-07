
function calculateROI() {
  const employees = document.getElementById("employees").value;
  const hourlyRate = document.getElementById("hourly-rate").value;
  
  const annualSavings = employees * hourlyRate * 350; //placeholder, later will change it
  document.getElementById(
    "savings-amount"
  ).textContent = `$${annualSavings.toLocaleString()}`;
  
}

document.getElementById("employees").addEventListener("input", calculateROI);
document.getElementById("hourly-rate").addEventListener("input", calculateROI);



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
      window.scrollTo({
        top: targetElement.offsetTop - 70, 
        behavior: "smooth",
      });

      // Close the mobile menu if it's open
      navLinks.classList.remove("active");
    }
  });
});



document.querySelector(".cta-form form").addEventListener("submit", function (e) {
  const emailInput = this.querySelector('input[name="email"]');
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValue || !emailPattern.test(emailValue)) {
    e.preventDefault(); // Prevent form submission
    alert("Please fill in a valid email address.");
  }
});
