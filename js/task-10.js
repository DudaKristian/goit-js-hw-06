function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector("#controls button[data-create]");
const destroyBtnEl = document.querySelector("#controls button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

createBtnEl.addEventListener("click", () => {
  let basicWidth = 30;
  let basicHeight = 30;
  for (let i = 0; i < inputEl.value; i += 1) {
    const newEl = document.createElement("div");
    newEl.style.backgroundColor = `${getRandomHexColor()}`;
    newEl.style.width = `${(basicWidth += 10)}px`;
    newEl.style.height = `${(basicHeight += 10)}px`;
    divBoxes.append(newEl);
  }
  inputEl.value = "";
});

destroyBtnEl.addEventListener("click", () => {
  divBoxes.innerHTML = "";
});
