const nav = document.querySelector(".nav");
const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const slides = document.querySelectorAll(".slide");

function createSliderNav() {
  const sliderNav = document.createElement("button");
  sliderNav.classList.add("sliderNav");
  nav.appendChild(sliderNav);
}

// populate sliderNav depending on number of images
for (let i = 0; i < slides.length; i++) {
  createSliderNav();
}

const sliderNavs = document.querySelectorAll(".sliderNav");

function slideRight(button, elementArray) {
  button.addEventListener("click", () => {
    makeNextVisible(elementArray);
    matchNavToSlide();
  });
}
function makeNextVisible(elementArray) {
  let index = findShownImageIndex() ? findShownImageIndex() : 0;
  elementArray[index].classList.remove("visible");
  nextIndex = (index + 1) % elementArray.length;
  elementArray[nextIndex].classList.add("visible");
}
function makePreviousVisible(elementArray) {
  let index = findShownImageIndex() ? findShownImageIndex() : 0;
  elementArray[index].classList.remove("visible");
  nextIndex = (index + (elementArray.length - 1)) % elementArray.length;
  elementArray[nextIndex].classList.add("visible");
}

function matchNavToSlide() {
  const index = findShownImageIndex();
  sliderNavs.forEach((element) => {
    element.classList.remove("selected");
  });
  sliderNavs[index].classList.add("selected");
}

function findShownImageIndex() {
  for (let i = 0; i < slides.length; i++) {
    if (Array.from(slides[i].classList).includes("visible")) {
      return i;
    }
  }
}
function slideLeft(button, elementArray) {
  button.addEventListener("click", () => {
    makePreviousVisible(elementArray);
    matchNavToSlide();
  });
}

sliderNavs.forEach((element) => {
  element.addEventListener("click", (e) => {
    let index = Array.from(sliderNavs).indexOf(e.target);
    slides.forEach((slide) => {
      slide.classList.remove("visible");
    });
    sliderNavs.forEach((sliderNav) => {
      sliderNav.classList.remove("selected");
    });
    sliderNavs[index].classList.add("selected");
    slides[index].classList.add("visible");
  });
});

slideRight(rightBtn, slides);
slideLeft(leftBtn, slides);
sliderNavs[0].click();
setInterval(function () {
  rightBtn.click();
}, 5000);
