const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

let number = Number(valueEl.textContent);

const addToValue = () => {
  valueEl.textContent = number += 1;
};

const removeFromValue = () => {
  valueEl.textContent = number -= 1;
};

incrementEl.addEventListener("click", addToValue);
decrementEl.addEventListener("click", removeFromValue);
