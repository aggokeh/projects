const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor-write");

const textArray = ["hard.", "fun.", "a journey.", "LIFE."];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

const type = function () {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
};

const erase = function () {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const navToggle = document.querySelector(".nav-toggle");

sun.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
  sun.classList.add("hidden-svg");
  moon.classList.remove("hidden-svg");
  navToggle.classList.add("light-border");
});

moon.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
  moon.classList.add("hidden-svg");
  sun.classList.remove("hidden-svg");
  navToggle.classList.remove("light-border");
});

const drawerBtn = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".navigation");
const drawerText = document.querySelectorAll(".nav-text");

drawerBtn.onclick = function () {
  this.classList.toggle("active");
  navigation.classList.toggle("active");
  drawerText.forEach((text) => {
    text.classList.toggle("hidden-text");
  });
};
