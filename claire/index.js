const firmData = {
  accounting: {
    hero: {
      title: "Supercharge Your Accounting Firm's Productivity with Claire",
      subtitle: "Automate workflows, maximize billable hours, and unlock growth in your accounting practice"
    },
    image: "accounting.png", // Add image path
    painPoints: {
      title: "The Unseen Drain on Your Accounting Practice",
      cards: [
        { title: "Lost Billable Hours", value: "240", description: "hours of potential income lost, per accountant, every year." },
        { title: "Time Wasted on Low-Value Tasks", value: "65%", description: "of accountants' time is spent on tasks that don't drive value." },
        { title: "Duplicate Task Waste", value: "280", description: "duplicated tasks in tax preparation and auditing processes." }
      ]
    },
    benefits: {
      title: "Reimagine Your Accounting Firm: Empower, Scale, and Thrive",
      cards: [
        { title: "Boost Revenue with Precision", description: "Increase your firm's revenue by more than <span style=\"color: #4cd964;\">$1.3M</span> annually through accurate, AI-powered time tracking for tax and audit engagements." },
        { title: "Scale Smart, Not Hard", description: "Unlock the power of digital twins to drive business growth without increasing headcount. Scale your operations efficiently, growing revenue from <span style=\"color: #ff3232;\">$7M</span> to <span style=\"color: #4cd964;\">$10M+</span> without adding new team members." },
        { title: "Optimize Workflows, Free Up Time", description: "Reclaim over <span style=\"color: #4cd964;\">1,200 hours</span> annually per accountant by automating repetitive tasks in bookkeeping and tax preparation." }
      ]
    }
  },
  law: {
    hero: {
      title: "Supercharge Your Law Firm's Productivity with Claire",
      subtitle: "Automate workflows, maximize billable hours, and unlock growth in your legal practice"
    },
    image: "law.png", // Add image path
    painPoints: {
      title: "The Unseen Drain on Your Legal Practice",
      cards: [
        { title: "Lost Billable Hours", value: "210", description: "hours of potential income lost, per attorney, every year." },
        { title: "Time Wasted on Low-Value Tasks", value: "55%", description: "of lawyers' time is spent on tasks that don't drive value." },
        { title: "Duplicate Task Waste", value: "195", description: "duplicated tasks in case management and document review processes." }
      ]
    },
    benefits: {
      title: "Reimagine Your Law Firm: Empower, Scale, and Thrive",
      cards: [
        { title: "Boost Revenue with Precision", description: "Increase your firm's revenue by more than <span style=\"color: #4cd964;\">$1.5M</span> annually through accurate, AI-powered time tracking for client consultations and case work." },
        { title: "Scale Smart, Not Hard", description: "Unlock the power of digital twins to drive business growth without increasing headcount. Scale your operations efficiently, growing revenue from <span style=\"color: #ff3232;\">$8M</span> to <span style=\"color: #4cd964;\">$12M+</span> without adding new team members." },
        { title: "Optimize Workflows, Free Up Time", description: "Reclaim over <span style=\"color: #4cd964;\">1,000 hours</span> annually per attorney by automating repetitive tasks in legal research and document preparation." }
      ]
    }
  },
  engineering: {
    hero: {
      title: "Supercharge Your Engineering Firm's Productivity with Claire",
      subtitle: "Automate workflows, maximize billable hours, and unlock growth in your engineering practice"
    },
    image: "eng.png", // Add image path
    painPoints: {
      title: "The Unseen Drain on Your Engineering Practice",
      cards: [
        { title: "Lost Billable Hours", value: "180", description: "hours of potential income lost, per engineer, every year." },
        { title: "Time Wasted on Low-Value Tasks", value: "50%", description: "of engineers' time is spent on tasks that don't drive value." },
        { title: "Duplicate Task Waste", value: "220", description: "duplicated tasks in project management and design processes." }
      ]
    },
    benefits: {
      title: "Reimagine Your Engineering Firm: Empower, Scale, and Thrive",
      cards: [
        { title: "Boost Revenue with Precision", description: "Increase your firm's revenue by more than <span style=\"color: #4cd964;\">$1.2M</span> annually through accurate, AI-powered time tracking for project work and client meetings." },
        { title: "Scale Smart, Not Hard", description: "Unlock the power of digital twins to drive business growth without increasing headcount. Scale your operations efficiently, growing revenue from <span style=\"color: #ff3232;\">$5M</span> to <span style=\"color: #4cd964;\">$8M+</span> without adding new team members." },
        { title: "Optimize Workflows, Free Up Time", description: "Reclaim over <span style=\"color: #4cd964;\">900 hours</span> annually per engineer by automating repetitive tasks in CAD work and documentation." }
      ]
    }
  }
};

function updateContent(firmType) {
  const data = firmData[firmType];

  // Update hero section
  document.querySelector('.hero h1').innerHTML = data.hero.title;
  document.querySelector('.hero .subtitle').innerHTML = data.hero.subtitle;

  // Update claire image
  document.querySelector('.claire-image img').src = data.image;

  // Update pain points section
  document.querySelector('#pain-points h2').innerHTML = data.painPoints.title;
  const painPointCards = document.querySelectorAll('#pain-points .card');
  data.painPoints.cards.forEach((card, index) => {
    painPointCards[index].querySelector('.card-title').innerHTML = card.title;
    painPointCards[index].querySelector('.card-value').innerHTML = card.value;
    painPointCards[index].querySelector('.card-description').innerHTML = card.description;
  });

  // Update benefits section
  document.querySelector('#benefits h2').innerHTML = data.benefits.title;
  const benefitCards = document.querySelectorAll('#benefits .card');
  data.benefits.cards.forEach((card, index) => {
    benefitCards[index].querySelector('.card-title').innerHTML = card.title;
    benefitCards[index].querySelector('.card-description').innerHTML = card.description;
  });

  // Save the user's choice to localStorage
  localStorage.setItem('selectedFirmType', firmType);
}

document.addEventListener('DOMContentLoaded', () => {
  const onboarding = document.getElementById('onboarding');
  const mainContent = document.getElementById('main-content');
  const firmButtons = document.querySelectorAll('.firm-button');

  // Check if there's a saved firm type in localStorage
  const savedFirmType = localStorage.getItem('selectedFirmType');

  if (savedFirmType) {
    // If there's a saved choice, update content and hide onboarding
    updateContent(savedFirmType);
    onboarding.style.display = 'none';
    mainContent.classList.remove('hidden');
    mainContent.style.display = 'block';
    mainContent.style.opacity = '1';
  } else {
    // If no saved choice, show onboarding as before
    firmButtons.forEach(button => {
      button.addEventListener('click', () => {
        const firmType = button.getAttribute('data-firm');
        updateContent(firmType);

        onboarding.style.opacity = '0';
        setTimeout(() => {
          onboarding.style.display = 'none';
          mainContent.classList.remove('hidden');
          mainContent.style.opacity = '0';
          mainContent.style.display = 'block';
          setTimeout(() => {
            mainContent.style.opacity = '1';
          }, 50);
        }, 500);
      });
    });
  }
});

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

function resetFirmChoice() {
  localStorage.removeItem('selectedFirmType');
  location.reload(); // Reload the page to show the onboarding screen
}