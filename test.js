function toggleVisibility(button, targetElement) {
  button.addEventListener("click", function () {
    if (targetElement.style.display === "block") {
      targetElement.style.display = "none";
    } else {
      targetElement.style.display = "block";
    }
  });
}

const menuBtn = document.querySelector("button");
const links = document.querySelector(".links");

toggleVisibility(menuBtn, links);

const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const slides = document.querySelectorAll(".slide");
const sliderNavs = document.querySelectorAll(".sliderNav");

function slideRight(button, elementArray) {
  button.addEventListener("click", () => {
    elementArray.forEach((element) => {
      const currentSlide = parseInt(element.id.slice(5));
      const nextSlide = (currentSlide + 1) % 4;
      element.id = `slide${nextSlide}`;
    });
    matchNavToSLide();
  });
}
function matchNavToSLide() {
  const index = findShownImageIndex();
  sliderNavs.forEach((element) => {
    element.classList.remove("selected");
  });
  sliderNavs[index].classList.add("selected");
}
function findShownImageIndex() {
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].id === "slide0") {
      return i;
    }
  }
}
function slideLeft(button, elementArray) {
  button.addEventListener("click", () => {
    elementArray.forEach((element) => {
      const currentSlide = parseInt(element.id.slice(5));
      const previousSlide = (currentSlide + 3) % 4;
      element.id = `slide${previousSlide}`;
    });
  });
  matchNavToSLide();
}

slideRight(rightBtn, slides);
slideLeft(leftBtn, slides);
setInterval(function () {
  rightBtn.click();
}, 5000);
