const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", (event) => {
  event.preventDefault();
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
  if (event.currentTarget.value.length !== Number(inputEl.dataset.length)) {
    inputEl.classList.add("invalid");
  }
});
