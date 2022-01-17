const textEl = document.querySelector("#text");

const inputEl = document.querySelector("#font-size-control");
inputEl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
});
