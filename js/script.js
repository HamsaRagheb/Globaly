/**
 *
 * @format
 */
/* Start Loader*/
window.addEventListener("load", function () {
  const loader = this.document.getElementById("loader");
  this.setTimeout(() => {
    loader.style.display = "none";
    document.body.style.overflowY = "auto";
  }, 2500);
});
/* End Loader*/
/** Start Header */
const searchInput = document.getElementById("navSearch");
const links = document.querySelectorAll(".nav-links a");
const errorMsg = document.getElementById("searchError");

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const value = this.value.toLowerCase().trim();
    let found = false;

    links.forEach((link) => {
      const text = link.textContent.toLowerCase();

      if (text.includes(value)) {
        found = true;
        window.location.href = link.href;
      }
    });

    if (!found) {
      errorMsg.textContent = "No page found with this name";
    } else {
      errorMsg.textContent = "";
    }
  }
});
/** Ebd Header */
/* Start Nav */
const bars = document.querySelector(".bars");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
    navMenu.classList.remove("open");
  });
});
bars.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
/* End Nav */
/* Start Landing */
const landing = document.querySelector("#landing");

const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

const images = [
  "images/Background_1.png",
  "images/Background_2.png",
  "images/Background_4.png",
  "images/Background_3.png",
];

let currentImage = 0;

function changeBackground() {
  landing.style.backgroundImage = `url(${images[currentImage]})`;
}

rightArrow.addEventListener("click", () => {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  changeBackground();
});

leftArrow.addEventListener("click", () => {
  currentImage--;

  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  changeBackground();
});

setInterval(() => {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  changeBackground();
}, 2000);
/* End Landing */
/* Start About */
const numbers = document.querySelectorAll("#about .number");
let started = false;

window.addEventListener("scroll", function () {
  const section = document.querySelector("#about");
  const secionTop = section.offsetTop;
  const scrollPosition = window.scrollY;

  if (scrollPosition > secionTop && !started) {
    numbers.forEach((num) => startCount(num));
    started = true;
  }
});
function startCount(num) {
  let goal = num.dataset.goal;
  let count = 0;

  let counter = setInterval(() => {
    count++;
    num.textContent = count;

    if (count == goal) {
      clearInterval(counter);
    }
  }, 30);
}

/* End About */
/* Start Testimonials */
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
  },
});
/* End Testimonials */
