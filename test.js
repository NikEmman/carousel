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

slideRight(rightBtn, slides);
slideLeft(leftBtn, slides);
setInterval(function () {
  rightBtn.click();
}, 5000);
