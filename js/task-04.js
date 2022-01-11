const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

valueEl.textContent = Number(0);

const addToValue = () => {
  console.log((valueEl.textContent += 1));
};

incrementEl.addEventListener("click", addToValue);
