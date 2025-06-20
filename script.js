// 3s user can't scroll logic

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.remove("no-scroll");
    document.getElementById("main-content").style.display = "block"; // show rest
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

const themeChanger = document.getElementById("themeChanger");
const wordElements = document.querySelectorAll(".word");
const nameElement = document.querySelector(".name");

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeChanger.textContent = isDark ? "Light Mode🌞" : "Dark Mode 🌙";
  localStorage.setItem("theme", String(isDark));

  wordElements.forEach((el) => {
    el.style.color = isDark ? "white" : "black";
  });

  if (nameElement) {
    nameElement.style.color = isDark ? "white" : "black";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = savedTheme !== null ? savedTheme === "true" : prefersDark;

  applyTheme(useDark);
});

themeChanger.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  applyTheme(isDark);
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
