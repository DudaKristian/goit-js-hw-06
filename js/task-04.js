const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

let number = Number(counterValue.textContent);

const addToValue = () => {
  counterValue.textContent = number += 1;
};

const removeFromValue = () => {
  counterValue.textContent = number -= 1;
};

incrementEl.addEventListener("click", addToValue);
decrementEl.addEventListener("click", removeFromValue);
