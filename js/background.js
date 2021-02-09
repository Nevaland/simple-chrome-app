const body = document.querySelector("body"),
  locationContainer = document.querySelector(".js-location span");

const IMG_NUMBER = 6;

function paintImage(imgNumber) {
  body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(images/${
    imgNumber + 1
  }.jpg)`;
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
