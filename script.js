// smooth scrooling
// Initialize Lenis

const lenis = new Lenis();

lenis.stop(); // 🔒 disables scrolling

setTimeout(() => {
  lenis.start(); // ✅ re-enable after 3s
}, 3000);
// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
// raf(); we can use this to start the animation frame loop
requestAnimationFrame(raf);

// when user refresh the page

window.history.scrollRestoration = "manual"; // Stop browser from restoring scroll
window.scrollTo(0, 0);

// 3s user can't scroll logic
// script.js
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");
    console.log("✅ Scroll unlocked");
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

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
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
    threshold: 0.6,
  }
);

sections.forEach((section) => observer.observe(section));

// 3d

const model = document.getElementById("model");

model.addEventListener("load", () => {
  setTimeout(() => {
    model.pause();
    console.log("Animation paused at 2s");
  }, 1800);
});

// Gsap animations

document.addEventListener("DOMContentLoaded", function () {

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
// this is page-2 gsap animation
gsap.from("#About h2, #About .Text", {
  opacity: 0,
  duration: 1,
  y: 100,
  scale: 0.4,
  stagger: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#About h2",
    scroller: body,
    // markers: true,
    start: "top 95%",
    end: "bottom 75%",
    scrub: 2,
  },
});

gsap.from(".about-section, .about-section .name, .about-section p", {
  opacity: 0,
  duration: 2,
  stagger: 0.5,

  x: -100,
  // y: 100,
  scrollTrigger: {
    trigger: ".about-cont",
    scroller: body,
    // markers: true,
    scrub: 2,
    start: "top 90%",
    end: "bottom 80%",
  },
});

gsap.from(".page-2", {
  opacity: 0,
  duration: 2,
  stagger: 0.2,
  // y: 100,
  x: 100,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-cont",
    scroller: body,
    // markers: true,
    scrub: 2,
    start: "top 90%",
    end: "bottom 80%",
  },
});

gsap.from(".details .button-group, .projects-marksheet a", {
  opacity: 0,
  duration: 2,
  stagger: 0.5,
  y: 200,
  // x: 100,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".details",
    scroller: body,
    // markers: true,
    scrub: 2,
    start: "top 90%",
    end: "bottom 100%",
  },
});


});
// page-3 gsap animation


// Animate #details and heading

// Animate skills section

    

// gsap.to(".about-cont", {
//   transform: "translateY(-150%)",
//   duration: 1,
//   y: 0,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".about-cont",
//     scroller: body,
//     markers: true,
//     start: "top 70%",
//     end: "bottom center",
//     scrub: 2,
//     toggleActions: "play none none reverse",
//   },
// });


