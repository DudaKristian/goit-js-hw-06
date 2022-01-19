function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
btnEl.addEventListener("click", getRandomHexColor());

const bodyEl = document.querySelector("body");
bodyEl.style.backgroundColor = `${colorChange()}`;
