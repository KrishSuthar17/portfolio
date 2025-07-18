// smooth scrolling
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
requestAnimationFrame(raf);

//
// when user refresh the page
window.history.scrollRestoration = "manual"; // Stop browser from restoring scroll
window.scrollTo(0, 0);

// Navigation active link
// This code adds an active class to the clicked navigation link
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

// Target all elements whose color should change in light mode
const themeColorElements = document.querySelectorAll(
  "h2 ,.bg-color, .color,.word"
);
const bg = document.querySelector(".bg");
// Function to apply black color in light mode only
function updateThemeColors() {
  const isDark = body.classList.contains("dark");

  themeColorElements.forEach((el) => {
    if (!isDark) {
      el.style.color = "";
    } else {
      el.style.color = "black"; // Reset to default (CSS/inline)
    }
  });
}

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.checked = true;
}

// Apply correct color based on current theme
updateThemeColors();

// Toggle theme
toggle.addEventListener("change", () => {
  body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );

  updateThemeColors();
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

// photo shine effect on page-2 about section
const border = document.querySelector(".border");

border.addEventListener("mouseenter", () => {
  border.classList.remove("shine");
  void border.offsetWidth;
  border.classList.add("shine");
});

// 3D model animation
// This code pauses the 3D model animation after 2 seconds
const model = document.getElementById("model");

model.addEventListener("load", () => {
  setTimeout(() => {
    model.pause();
    console.log("Animation paused at 2s");
  }, 1800);
});

//
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
    scrollTrigger: {
      trigger: ".about-cont",
      scroller: body,
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
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".details",
      scroller: body,
      scrub: 2,
      start: "top 90%",
      end: "bottom 100%",
    },
  });
});

// 🔹 Skills Title Animation
gsap.from("#second-side", {
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page-3",
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
    toggleActions: "play none none reset",
  },
});

// Timeline with step-by-step reveal
const tl = gsap.timeline({
  stagger: 1,
  scrollTrigger: {
    trigger: ".page-3",
    start: "top 20%", // Starts when .page-3 hits 85% of viewport
    end: "top -40%",
    scrub: 2,
    pin: true,
    // markers: true
  },
});

// 1. Fade & slide in entire .skills-section
tl.to(".skills-section", {
  opacity: 1,
  x: 0,
  duration: 1,
  stagger: 0.8,
  ease: "power2.out",
});

// 2. Animate all <h2> elements from right
tl.to(".skills-section header h2", {
  opacity: 1,
  x: 0,
  duration: 0.5,
  stagger: 0.3,
  ease: "power2.out",
});

// 3. Animate all language-container boxes from right
tl.to(".language-container", {
  opacity: 1,
  x: 0,
  duration: 0.5,
  stagger: 0.4,
  ease: "power2.out",
});
// 🔹 Whole .page-3 container animation (scale + fade + move up)

gsap.from(".header-page-4", {
  opacity: 0,
  duration: 1,
  y: 100,
  scale: 0.4,
  stagger: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page-4-block",
    scroller: "body",
    start: "top 80%",
    end: "bottom 75%",
    scrub: 2,
  },
});

// page-4 animation
gsap.from(".connect-me-Text, .page-4-block h3", {
  opacity: 0,
  duration: 1,
  y: 100,
  scale: 0,
  stagger: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page-4-block",
    scroller: "body",
    start: "top 75%",
    end: "bottom 75%",
    scrub: 2,
  },
});

// Animate all children inside .input__container
gsap.from(".input__container > *", {
  scrollTrigger: {
    trigger: ".input__container",
    start: "top 80%", // starts when 80% down the page
    toggleActions: "play 3d behavior 3d",
    scrub: 2,
    end: "top 10%",
    markers: true,
  },

  opacity: 0,
  x: 100,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});
