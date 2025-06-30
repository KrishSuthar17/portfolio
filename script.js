// when user refresh the page

window.history.scrollRestoration = "manual"; // Stop browser from restoring scroll
window.scrollTo(0, 0);
// 3s user can't scroll logic

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.remove("no-scroll");
    let mainContent = document.getElementsByClassName("main-content");
    mainContent.style.display = "block";
  }, 3000);
});

const navLinks = document.querySelectorAll("nav ul li a");
const card1 = document.getElementsByClassName("card1");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementsByClassName("themeToggle");
  const wordElements = document.querySelectorAll(".word");
  const nameElement = document.querySelector(".name");

  function applyTheme(isDark) {
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark);
    themeToggle.checked = isDark;

    wordElements.forEach((el) => {
      el.style.color = isDark ? "white" : "black";
    });

    if (nameElement) {
      nameElement.style.color = isDark ? "white" : "black";
    }
  }

  // Load saved theme or system preference
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = savedTheme !== null ? savedTheme === "true" : prefersDark;

  applyTheme(useDark);

  // Change theme on toggle
  themeToggle.addEventListener("change", () => {
    applyTheme(themeToggle.checked);
  });
});

//
//
// go up button

const topBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// photo shine effect
const border = document.querySelector(".border");

border.addEventListener("mouseenter", () => {
  border.classList.remove("shine");
  void border.offsetWidth;
  border.classList.add("shine");
});

// background ball animation

const ball = document.getElementById("ball");
const sections = document.querySelectorAll(".page");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If section is fully in view, move the ball
        ball.classList.add("move");

        // After short delay, reset it (like toggle effect)
        setTimeout(() => {
          ball.classList.remove("move");
        }, 1000); // adjust delay to match your animation
      }
    });
  },
  {
    threshold: 0.6, // Trigger when 60% of section is visible
  }
);

sections.forEach((section) => observer.observe(section));
