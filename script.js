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

// Theme toggle functionality
// This code toggles the theme between light and dark mode

const toggle = document.querySelector(".input");
const body = document.body;
const bgImg = document.querySelector(".bg-img");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.checked = true;
  bgImg.src = "bg-dark.png"; // dark image
}

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    bgImg.src = "bg-dark.png"; // ✅ switch to dark image
  } else {
    localStorage.setItem("theme", "light");
    bgImg.src = "bg.png"; // ✅ back to light image
  }
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

// 3d

const model = document.getElementById("model");

model.addEventListener("load", () => {
  setTimeout(() => {
    model.pause(); // ⏹️ Pause after 2 seconds
    console.log("Animation paused at 2s ✅");
  }, 1800); // 2 seconds
});

// aos
AOS.init({
  duration: 1000, // animation duration in ms
  once: true, // whether animation should happen only once - while scrolling down
});
